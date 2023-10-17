import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
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
