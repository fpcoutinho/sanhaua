import type {
  BorderStyle,
  ButtonAppearance,
  FieldAppearance,
  Size,
  SkeletonFormat,
  ToastAppearance,
  WidthBehavior
} from '../system/types/tokens'

export declare class UaButton extends HTMLElement {
  type: 'button' | 'submit' | 'reset'
  size: Size
  appearance: ButtonAppearance
  widthBehavior: WidthBehavior
  borderStyle: BorderStyle
  disabled: boolean
}

export declare class UaInputText extends HTMLElement {
  appearance: FieldAppearance
  borderStyle: BorderStyle
  size: Size
  widthBehavior: WidthBehavior
  label: string
  required: boolean
  disabled: boolean
  value: string
}

export declare class UaSkeleton extends HTMLElement {
  format: SkeletonFormat
  width: string
  height: string
}

export declare class UaToast extends HTMLElement {
  appearance: ToastAppearance
  title: string
  message: string
}
