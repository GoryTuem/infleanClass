import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      writer
      title
      contents
    }
  }
`;
export default function staticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDiv = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id + "님이 작성한 글입니다.");
  };

  const qqq1 = (event: MouseEvent<HTMLDivElement>) => {
    //버블링 중단
    event.stopPropagation();
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={onClickDiv}>
          <span onClick={qqq1}>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
    </>
  );
}
