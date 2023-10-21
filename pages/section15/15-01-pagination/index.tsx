import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { Pagination, PaginationProps } from "antd";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETXH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
export default function staticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETXH_BOARDS_COUNT);

  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page: number): void => {
    setCurrentPage(page);
    void refetch({ page });
  };
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  const page = 10;
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
      <Pagination
        hideOnSinglePage={true}
        defaultCurrent={1}
        current={currentPage}
        defaultPageSize={page}
        total={dataBoardCount?.fetchBoardsCount}
        onChange={(page) => {
          changePage(page);
        }}
        itemRender={itemRender}
      />
    </>
  );
}
