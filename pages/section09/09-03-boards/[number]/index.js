import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <div>{data && data.fetchBoard.writer}</div>
      <div>{data && data.fetchBoard.title}</div>
      <div>{data && data.fetchBoard.contents}</div>
      <button onClick={onClickMove}>게시글 수정하기</button>
    </div>
  );
}
