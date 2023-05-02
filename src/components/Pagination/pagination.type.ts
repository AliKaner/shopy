export interface IPagination {
  count: number;
  onChange: (e: React.ChangeEvent<unknown>, page: number) => void;
}
