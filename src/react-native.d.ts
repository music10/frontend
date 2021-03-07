import 'react-native';
import { GestureResponderEvent, StyleProp } from 'react-native-web';

declare module 'react-native' {
  type InteractionState = {
    hovered?: boolean;
    pressed?: boolean;
    focused?: boolean;
  };

  export interface PressableProps {
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
}
