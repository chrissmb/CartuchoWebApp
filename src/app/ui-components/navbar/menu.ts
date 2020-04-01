export interface Menu {
  label: string;
  link?: string;
  disabled?: boolean;
  dropdown?: Menu[];
  right?: boolean;
}