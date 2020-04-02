export interface NavbarItem {
  label: string;
  link?: string;
  disabled?: boolean;
  dropdown?: NavbarItem[];
  right?: boolean;
}
