import { ChangeEvent } from "react";

export type TOptionID = "brand" | "model";

export interface IOptionForm {
  title: string;
  options: string[];
  checked: string[];
  isLoading: boolean;
  id: TOptionID;
  onCheckedChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
