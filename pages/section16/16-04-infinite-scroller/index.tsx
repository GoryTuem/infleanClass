import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
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
export default function staticRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  //스크롤 내렸을 때 들어올 함수
  const onLoadMore = (): void => {
    //data가 없으면 리턴.
    if (!data) return;
    //data 업데이트 하는 부분
    void fetchMore({
      //현재페이지(전체 글 갯수 / 10) + 1
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        //다음 페이지 글이 없으면 이전 data 리턴
        if (!fetchMoreResult.fetchBoards) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        //기존 data와 다음 페이지 게시글 합쳐서 리턴
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoards.map((el, index) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
