import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance",
      h2: "text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance",
      h3: "text-2xl lg:text-3xl font-medium tracking-tight text-balance",
      h4: "text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-balance",
      h5: "text-lg font-medium tracking-tight text-balance",
      h6: "text-base font-medium tracking-tight uppercase text-balance",
      heroTitle:
        "text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium tracking-tight leading-tight text-accent",
      lead: "text-sm md:text-lg text-foreground/80 leading-pretty",
      large: "text-lg text-foreground",
      p: "text-base text-foreground/70 ",
      subtitle:
        "text-sm md:text-base text-muted-foreground",
      small: "text-sm leading-none",
      xs: "text-xs font-medium uppercase tracking-wider",
      muted: "text-sm text-muted-foreground",
      blockquote: "mt-6 border-l-4 pl-6 italic text-muted-foreground",
      code: "relative rounded-md bg-muted px-2 py-1.5 font-mono text-sm font-semibold",
      accent: "font-semibold text-foreground",
      highlight: "bg-yellow-100/50 dark:bg-yellow-900/20 px-1 py-0.5 rounded",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type TextVariants = VariantProps<typeof textVariants>;

export interface TextProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  variant?: TextVariants["variant"];
}

// Polymorphic component definition - React 19 compatible (no forwardRef)
function Text<T extends React.ElementType = "p">({
  as,
  className,
  variant,
  ref,
  ...props
}: TextProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>> & {
    ref?: React.Ref<HTMLElement>;
  }) {
  // Determine the component to render: explicit 'as' prop > inferred from variant > default 'p'
  const variantValue = variant || "p";

  // Use switch to render the appropriate element without creating components during render
  switch (as || variantValue) {
    case "h1":
    case "heroTitle":
      return (
        <h1
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "h2":
      return (
        <h2
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "h3":
      return (
        <h3
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "h4":
      return (
        <h4
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "h5":
      return (
        <h5
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "h6":
      return (
        <h6
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "blockquote":
      return (
        <blockquote
          ref={ref as React.Ref<HTMLQuoteElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "code":
      return (
        <code
          ref={ref as React.Ref<HTMLElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "div":
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "span":
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    case "small":
      return (
        <small
          ref={ref as React.Ref<HTMLElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
    default:
      return (
        <p
          ref={ref as React.Ref<HTMLParagraphElement>}
          className={cn(textVariants({ variant, className }))}
          {...props}
        />
      );
  }
}

export { Text, textVariants };
