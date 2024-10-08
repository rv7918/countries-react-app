export interface ISearchProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValueOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  onClickSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
