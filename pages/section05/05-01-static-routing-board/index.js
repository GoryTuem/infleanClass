import { useRouter } from "next/router";

export default function staticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-01-static-routed-board/100");
  };

  const onClickMove2 = () => {
    router.push("/05-01-static-routed-board/2");
  };

  const onClickMove3 = () => {
    router.push("/05-01-static-routed-board/3");
  };

  return (
    <>
      <button onClick={onClickMove1}>100번 게시글</button>
      <button onClick={onClickMove2}>2번 게시글</button>
      <button onClick={onClickMove3}>3번 게시글</button>
    </>
  );
}
