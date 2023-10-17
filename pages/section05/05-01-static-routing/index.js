import { useRouter } from "next/router";

export default function staticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/05-01-static-routed");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
