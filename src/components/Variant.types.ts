export type Variant =
  | 'default'
  | 'hover'
  | 'active'
  | 'focused'
  | 'inactive'
  | 'success';

export interface VariantProps {
  variant?: Variant;
}
