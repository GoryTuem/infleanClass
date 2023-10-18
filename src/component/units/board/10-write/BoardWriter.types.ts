import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: any;
}
export interface IBoardWriterProps {
  isEdit: boolean;
  data?: any;
}
export interface IMyvariables {
  number: Number;
  writer?: string;
  title?: string;
  contents?: string;
}
