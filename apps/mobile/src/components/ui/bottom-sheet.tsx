import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { BottomSheet } from 'heroui-native';
import type { BottomSheetRootProps as HeroBottomSheetProps } from 'heroui-native';
import { View } from 'react-native';

export type AppBottomSheetModalRef = {
  present: () => void;
  dismiss: () => void;
};

type AppBottomSheetModalProps = Omit<
  HeroBottomSheetProps,
  'isOpen' | 'onOpenChange' | 'children'
> & {
  title?: string;
  description?: string;
  children: React.ReactNode;
  /** Content to render at the bottom (e.g. action buttons) */
  footer?: React.ReactNode;
};

export const AppBottomSheetModal = forwardRef<
  AppBottomSheetModalRef,
  AppBottomSheetModalProps
>(function AppBottomSheetModal(
  { title, description, children, footer, ...rest },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    present: () => setIsOpen(true),
    dismiss: () => setIsOpen(false),
  }));

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <BottomSheet isOpen={isOpen} onOpenChange={handleOpenChange} {...rest}>
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          {(title || description) && (
            <View className="mb-6 gap-1.5">
              {title && (
                <BottomSheet.Title className="text-lg font-semibold">
                  {title}
                </BottomSheet.Title>
              )}
              {description && (
                <BottomSheet.Description>{description}</BottomSheet.Description>
              )}
            </View>
          )}

          {children}

          {footer && <View className="mt-6">{footer}</View>}
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet>
  );
});
