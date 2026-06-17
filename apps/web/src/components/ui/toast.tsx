"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  CheckCircle2Icon,
  InfoIcon,
  RotateCcwIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";

import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastVariant = "default" | "success" | "error" | "warning" | "info" | "undo" | "custom";

type ToastRenderControls = {
  close: () => void;
};

type ToastInput = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void | Promise<void>;
  dismissible?: boolean;
  duration?: number | null;
  pauseOnHover?: boolean;
  className?: string;
  render?: (controls: ToastRenderControls) => React.ReactNode;
};

type ToastRecord = Required<Pick<ToastInput, "dismissible" | "pauseOnHover">> &
  ToastInput & {
    id: string;
    status: "open" | "closing";
    createdAt: number;
    duration: number | null;
  };

type ToastConfig = {
  position: ToastPosition;
  maxVisible: number;
  defaultDuration: number;
  classNames: {
    viewport: string;
    stack: string;
    toast: string;
    title: string;
    description: string;
    action: string;
    close: string;
    progressTrack: string;
    progressFill: string;
  };
  variants: Record<
    ToastVariant,
    {
      container: string;
      icon: React.ReactNode;
      action: string;
      close: string;
      progressTrack: string;
      progressFill: string;
    }
  >;
};

type ToastConfigInput = Partial<ToastConfig> & {
  classNames?: Partial<ToastConfig["classNames"]>;
  variants?: Partial<{
    [K in ToastVariant]: Partial<ToastConfig["variants"][K]>;
  }>;
};

const EXIT_DELAY = 180;

const defaultConfig: ToastConfig = {
  position: "bottom-right",
  maxVisible: 4,
  defaultDuration: 4500,
  classNames: {
    viewport: "pointer-events-none fixed inset-0 z-50 p-4 sm:p-6",
    stack: "flex w-full max-w-sm flex-col gap-3",
    toast:
      "pointer-events-auto overflow-hidden rounded-xl border shadow-lg backdrop-blur transition-all duration-200 will-change-transform",
    title: "text-sm font-medium leading-5",
    description: "text-xs text-current/75 leading-5",
    action:
      "rounded-md border border-current/15 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-current/10",
    close:
      "rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30",
    progressTrack: "h-0.5 bg-current/10",
    progressFill: "h-full bg-current/35 transition-[width] duration-100",
  },
  variants: {
    default: {
      container: "border-border bg-background text-foreground",
      icon: <InfoIcon className="size-4" />,
      action: "",
      close: "",
      progressTrack: "bg-foreground/10",
      progressFill: "bg-foreground/30",
    },
    success: {
      container: "border-emerald-500/20 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200",
      icon: <CheckCircle2Icon className="size-4" />,
      action: "border-emerald-500/20 hover:bg-emerald-500/10",
      close: "",
      progressTrack: "bg-emerald-500/10",
      progressFill: "bg-emerald-500/35",
    },
    error: {
      container: "border-destructive/20 bg-destructive/10 text-destructive",
      icon: <TriangleAlertIcon className="size-4" />,
      action: "border-destructive/20 hover:bg-destructive/10",
      close: "",
      progressTrack: "bg-destructive/10",
      progressFill: "bg-destructive/35",
    },
    warning: {
      container: "border-amber-500/20 bg-amber-500/10 text-amber-950 dark:text-amber-200",
      icon: <TriangleAlertIcon className="size-4" />,
      action: "border-amber-500/20 hover:bg-amber-500/10",
      close: "",
      progressTrack: "bg-amber-500/10",
      progressFill: "bg-amber-500/35",
    },
    info: {
      container: "border-primary/20 bg-primary/10 text-primary",
      icon: <InfoIcon className="size-4" />,
      action: "border-primary/20 hover:bg-primary/10",
      close: "",
      progressTrack: "bg-primary/10",
      progressFill: "bg-primary/35",
    },
    undo: {
      container: "border-foreground/10 bg-foreground text-background",
      icon: <RotateCcwIcon className="size-4" />,
      action: "border-background/20 bg-background/10 hover:bg-background/20",
      close: "hover:bg-background/10",
      progressTrack: "bg-background/10",
      progressFill: "bg-background/35",
    },
    custom: {
      container: "border-border bg-background text-foreground",
      icon: <InfoIcon className="size-4" />,
      action: "",
      close: "",
      progressTrack: "bg-foreground/10",
      progressFill: "bg-foreground/30",
    },
  },
};

let configState = defaultConfig;
let toastState: ToastRecord[] = [];

const toastListeners = new Set<() => void>();
const configListeners = new Set<() => void>();
const removalTimers = new Map<string, number>();

function notifyToasts() {
  toastListeners.forEach((listener) => listener());
}

function notifyConfig() {
  configListeners.forEach((listener) => listener());
}

function mergeConfig(next: ToastConfigInput): ToastConfig {
  return {
    ...configState,
    ...next,
    classNames: {
      ...configState.classNames,
      ...next.classNames,
    },
    variants: {
      ...configState.variants,
      ...Object.fromEntries(
        Object.entries(next.variants ?? {}).map(([key, value]) => [
          key,
          {
            ...configState.variants[key as ToastVariant],
            ...value,
          },
        ]),
      ),
    },
  };
}

function setToastConfig(next: ToastConfigInput) {
  configState = mergeConfig(next);
  notifyConfig();
}

function subscribeToasts(listener: () => void) {
  toastListeners.add(listener);
  return () => toastListeners.delete(listener);
}

function subscribeConfig(listener: () => void) {
  configListeners.add(listener);
  return () => configListeners.delete(listener);
}

function getToastSnapshot() {
  return toastState;
}

function getConfigSnapshot() {
  return configState;
}

function createId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function removeToast(id: string) {
  toastState = toastState.filter((toast) => toast.id !== id);
  const timer = removalTimers.get(id);
  if (timer) {
    window.clearTimeout(timer);
    removalTimers.delete(id);
  }
  notifyToasts();
}

function markToastClosing(id: string) {
  toastState = toastState.map((toast) =>
    toast.id === id ? { ...toast, status: "closing" as const } : toast,
  );
  notifyToasts();
  const existingTimer = removalTimers.get(id);
  if (existingTimer) {
    window.clearTimeout(existingTimer);
  }
  const timer = window.setTimeout(() => removeToast(id), EXIT_DELAY);
  removalTimers.set(id, timer);
}

function dismissToast(id?: string) {
  if (id) {
    markToastClosing(id);
    return;
  }

  toastState.forEach((toast) => {
    if (toast.status === "open") {
      markToastClosing(toast.id);
    }
  });
}

function updateToast(id: string, patch: Partial<ToastInput>) {
  toastState = toastState.map((toast) =>
    toast.id === id
      ? {
          ...toast,
          ...patch,
          duration: patch.duration ?? toast.duration,
          dismissible: patch.dismissible ?? toast.dismissible,
          pauseOnHover: patch.pauseOnHover ?? toast.pauseOnHover,
        }
      : toast,
  );
  notifyToasts();
}

function pushToast(input: ToastInput) {
  const config = configState;
  const id = createId();
  const duration = input.duration ?? config.defaultDuration;

  const toast: ToastRecord = {
    id,
    createdAt: Date.now(),
    status: "open",
    dismissible: input.dismissible ?? true,
    pauseOnHover: input.pauseOnHover ?? true,
    duration,
    variant: input.variant ?? "default",
    title: input.title,
    description: input.description,
    icon: input.icon,
    actionLabel: input.actionLabel,
    onAction: input.onAction,
    className: input.className,
    render: input.render,
  };

  toastState = [toast, ...toastState].slice(0, config.maxVisible);
  notifyToasts();
  return id;
}

const toast = {
  show: pushToast,
  success(input: ToastInput) {
    return pushToast({ ...input, variant: "success" });
  },
  error(input: ToastInput) {
    return pushToast({ ...input, variant: "error" });
  },
  warning(input: ToastInput) {
    return pushToast({ ...input, variant: "warning" });
  },
  info(input: ToastInput) {
    return pushToast({ ...input, variant: "info" });
  },
  undo(input: ToastInput) {
    return pushToast({
      ...input,
      variant: "undo",
      actionLabel: input.actionLabel ?? "Undo",
      duration: input.duration ?? 8000,
    });
  },
  custom(render: (controls: ToastRenderControls) => React.ReactNode, input?: ToastInput) {
    return pushToast({ ...input, variant: "custom", render });
  },
  dismiss: dismissToast,
  update: updateToast,
  configure: setToastConfig,
};

function useToastConfig() {
  return useSyncExternalStore(subscribeConfig, getConfigSnapshot, getConfigSnapshot);
}

function useToasts() {
  return useSyncExternalStore(subscribeToasts, getToastSnapshot, getToastSnapshot);
}

function ToastProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: ToastConfigInput;
}) {
  const previousConfig = useRef(configState);

  useEffect(() => {
    if (config) {
      previousConfig.current = configState;
      setToastConfig(config);
    }

    return () => {
      if (config) {
        setToastConfig(previousConfig.current);
      }
    };
  }, [config]);

  return (
    <>
      {children}
      <ToastViewport />
    </>
  );
}

function ToastViewport() {
  const toasts = useToasts();
  const config = useToastConfig();

  const viewportClassName = useMemo(() => {
    const positionClasses: Record<ToastPosition, string> = {
      "top-left": "items-start justify-start",
      "top-center": "items-center justify-start",
      "top-right": "items-end justify-start",
      "bottom-left": "items-start justify-end",
      "bottom-center": "items-center justify-end",
      "bottom-right": "items-end justify-end",
    };

    return cn(
      config.classNames.viewport,
      "flex",
      positionClasses[config.position],
    );
  }, [config]);

  if (!toasts.length) {
    return null;
  }

  return (
    <div className={viewportClassName}>
      <div className={cn(config.classNames.stack, "max-h-[calc(100svh-3rem)] overflow-hidden")}> 
        {toasts.map((toastItem) => (
          <ToastItem key={toastItem.id} toast={toastItem} />
        ))}
      </div>
    </div>
  );
}

function ToastItem({ toast }: { toast: ToastRecord }) {
  const config = useToastConfig();
  const variant = config.variants[toast.variant ?? "default"];
  const duration = toast.duration;
  const [remaining, setRemaining] = useState(duration ?? 0);
  const [paused, setPaused] = useState(false);
  const remainingRef = useRef(remaining);

  useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);

  useEffect(() => {
    if (duration == null || toast.status !== "open" || paused) {
      return;
    }

    const startedAt = performance.now();
    const startingRemaining = remainingRef.current > duration ? duration : remainingRef.current;
    setRemaining(startingRemaining);
    remainingRef.current = startingRemaining;

    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const next = Math.max(0, startingRemaining - elapsed);
      remainingRef.current = next;
      setRemaining(next);

      if (next <= 0) {
        window.clearInterval(interval);
        dismissToast(toast.id);
      }
    }, 50);

    return () => {
      window.clearInterval(interval);
    };
  }, [duration, paused, toast.id, toast.status]);

  const progress = duration ? Math.max(0, (remaining / duration) * 100) : 0;
  const status = toast.status === "closing" ? "closing" : "open";

  const closeToast = () => dismissToast(toast.id);

  const handleAction = async () => {
    try {
      await toast.onAction?.();
    } finally {
      dismissToast(toast.id);
    }
  };

  const content = toast.render ? (
    toast.render({ close: closeToast })
  ) : (
    <>
      <div className="flex items-start gap-3 px-3.5 py-3">
        <span
          className={cn(
            "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-current/10",
            toast.variant === "undo" && "bg-background/15",
          )}
        >
          {toast.icon ?? variant.icon}
        </span>

        <div className="min-w-0 flex-1 space-y-0.5">
          {toast.title ? (
            <Text variant="small" className={cn(config.classNames.title, "text-current")}>{toast.title}</Text>
          ) : null}
          {toast.description ? (
            <Text variant="muted" className={cn(config.classNames.description, "text-current/75")}>
              {toast.description}
            </Text>
          ) : null}
        </div>

        <div className="flex items-center gap-1.5">
          {toast.actionLabel && toast.onAction ? (
            <button
              type="button"
              onClick={handleAction}
              className={cn(config.classNames.action, variant.action)}
            >
              {toast.actionLabel}
            </button>
          ) : null}

          {toast.dismissible ? (
            <button
              type="button"
              aria-label="Dismiss toast"
              onClick={closeToast}
              className={cn(config.classNames.close, variant.close)}
            >
              <XIcon className="size-3.5" />
            </button>
          ) : null}
        </div>
      </div>

      {duration != null ? (
        <div className={cn(config.classNames.progressTrack, variant.progressTrack)}>
          <div
            className={cn(config.classNames.progressFill, variant.progressFill)}
            style={{ width: `${progress}%` }}
          />
        </div>
      ) : null}
    </>
  );

  return (
    <div
      role={toast.variant === "error" ? "alert" : "status"}
      aria-live={toast.variant === "error" ? "assertive" : "polite"}
      data-state={status}
      className={cn(
        config.classNames.toast,
        variant.container,
        toast.status === "closing" ? "translate-y-2 opacity-0 scale-[0.98]" : "translate-y-0 opacity-100",
        toast.className,
      )}
      onMouseEnter={() => toast.pauseOnHover && setPaused(true)}
      onMouseLeave={() => toast.pauseOnHover && setPaused(false)}
    >
      {content}
    </div>
  );
}

export { ToastProvider, toast };
export type { ToastConfigInput, ToastInput, ToastPosition, ToastVariant };
