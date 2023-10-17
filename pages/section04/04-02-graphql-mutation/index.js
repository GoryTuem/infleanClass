import { gql, useMutation } from "@apollo/client";
const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "소희", title: "제목입니당", contents: "내용입니당") {
      _id
      number
      message
    }
  }
`;

//동기
export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await createBoard();
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>graphql-API(동기) 요청하기</button>
    </>
  );
}
