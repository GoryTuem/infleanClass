import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    #타입 적는 곳
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;
