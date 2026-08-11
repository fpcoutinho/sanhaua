import type { DefineComponent } from 'vue'
import type {
  BorderStyle,
  ButtonAppearance,
  FieldAppearance,
  Size,
  SkeletonFormat,
  ToastAppearance,
  WidthBehavior
} from '../system/types/tokens'

interface UaButtonProps {
  type?: 'button' | 'submit' | 'reset'
  size?: Size
  appearance?: ButtonAppearance
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  leftIcon?: string
  rightIcon?: string
  disabled?: boolean
  autoFocus?: boolean
  value?: string
  name?: string
  form?: string
}

interface UaInputFieldProps {
  appearance?: FieldAppearance
  borderStyle?: BorderStyle
  size?: Size
  widthBehavior?: WidthBehavior
  id?: string
  label?: string
  icon?: string
  prefix?: string
  suffix?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  minlength?: number
  autocomplete?: string
  autofocus?: boolean
  name?: string
  inputmode?: string
  pattern?: string
}

interface UaInputRadioProps {
  size?: Size
  disabled?: boolean
  name?: string
  value?: string
}

interface UaSkeletonProps {
  format?: SkeletonFormat
  width?: string
  height?: string
}

interface UaToastProps {
  appearance?: ToastAppearance
  title?: string
  message?: string
}

export const UaButton: DefineComponent<UaButtonProps, object, object, object, object, object, { click: (event: MouseEvent) => void }>
export const UaInputDate: DefineComponent<UaInputFieldProps>
export const UaInputEmail: DefineComponent<UaInputFieldProps>
export const UaInputPassword: DefineComponent<UaInputFieldProps>
export const UaInputRadio: DefineComponent<UaInputRadioProps>
export const UaInputTel: DefineComponent<UaInputFieldProps>
export const UaInputText: DefineComponent<UaInputFieldProps>
export const UaSkeleton: DefineComponent<UaSkeletonProps>
export const UaToast: DefineComponent<UaToastProps, object, object, object, object, object, { dismiss: () => void }>

export const uaButton: typeof UaButton
export const uaInputDate: typeof UaInputDate
export const uaInputEmail: typeof UaInputEmail
export const uaInputPassword: typeof UaInputPassword
export const uaInputRadio: typeof UaInputRadio
export const uaInputTel: typeof UaInputTel
export const uaInputText: typeof UaInputText
export const uaSkeleton: typeof UaSkeleton
export const uaToast: typeof UaToast
