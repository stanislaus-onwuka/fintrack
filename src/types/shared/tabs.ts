export interface Tab {
  name: string;
  value: string;
}

export interface TabsProps {
  tabOptions: Tab[];
  defaultTab?: string;
  queryName?: string;
}