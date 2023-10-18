import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function staticRoutedgPage() {
  const router = useRouter();
  // try {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: Number(router.query.boardId),
      },
    }
  );
  // } catch (error) {
  //   alert(error.message);
  // } finally {
  //   // 성공, 실패 여부와 상관없이 무조건 마지막에 실행되는 부분
  //   // 필요없다면 생략 가능
  // }

  return (
    <>
      <div>{data?.fetchBoard?.title}</div>
      <div>{data?.fetchBoard?.writer}</div>
      <div>{data?.fetchBoard?.contents}</div>
    </>
  );
}
