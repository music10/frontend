import 'react-native';
import { GestureResponderEvent, StyleProp } from 'react-native-web';

declare module 'react-native' {
  type InteractionState = {
    hovered?: boolean;
    pressed?: boolean;
    focused?: boolean;
  };

  type Layout = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  type LayoutEvent = { layout: LayoutEvent };
  type NativeLayoutEvent = { nativeEvent: LayoutEvent };
  type OnLayout = (e: LayoutEvent) => void;

  // TODO
  interface AccessibilityProps {
    accessibilityActiveDescendant?: string;
  }
  interface ClickProps {
    onClick?: (event: MouseEvent) => void;
    onClickCapture?: (event: MouseEvent) => void;
    onContextMenu?: (event: MouseEvent) => void;
  }
  interface FocusProps {
    onBlur?: (event: FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
  }
  interface KeyboardProps {
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyDownCapture?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyUpCapture?: (event: KeyboardEvent) => void;
  }

  // TODO
  interface ResponderProps {}

  export interface PressableProps extends ViewProps {
    children?: any | ((state: InteractionState) => any);
    delayLongPress?: number; // 500
    delayPressIn?: number; // 0
    delayPressOut?: number; // 0
    disabled?: boolean;
    onHoverIn?: (e: MouseEvent) => void;
    onHoverOut?: (e: MouseEvent) => void;
    onLongPress?: () => void;
    onPress?: (e: MouseEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    style?: StyleProp | ((state?: InteractionState) => StyleProp);
    testOnly_hovered?: boolean;
    testOnly_pressed?: boolean;
  }

  export interface SwitchProps {
    activeThumbColor?: string; // '#009688';
    activeTrackColor?: string; // '#A3D3CF';
    disabled?: boolean;
    onValueChange?: (boolean) => void;
    thumbColor?: string; // '#FAFAFA';
    trackColor?: Record<string, string>; // () => "#939393"
    value?: boolean; // false
  }

  export interface ViewProps
    extends AccessibilityProps,
      ClickProps,
      FocusProps,
      KeyboardProps,
      ResponderProps {
    dataSet?: Record<string, unknown>;
    dir?: 'ltr' | 'rtl';
    focusable?: boolean;
    href?: string;
    hrefAttrs?: Record<string, unknown>;
    nativeID?: string;
    onLayout?: OnLayout;
    pointerEvents?: 'all' | 'none' | 'box-only' | 'box-none';
    style?: StyleProp;
    testID?: string;
  }
}
