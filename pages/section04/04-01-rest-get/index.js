import axios from "axios";
import { useState } from "react";
export default function restGetPage() {
  const [title, setTitle] = useState("");

  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  }

  //   async function onClickSync() {
  //     const result = await axios.get("https://koreanjson.com/posts/1");
  //     console.log(result);
  //     setTitle(result.data.title);
  //   }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setTitle(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <div>{title}</div>
    </>
  );
}
