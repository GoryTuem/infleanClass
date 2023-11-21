import { useState } from "react";
import MainList from "../src/component/units/main/list";
import MainTagBar from "../src/component/units/main/tagBar";

export default function Home() {
  const [Tag, setTag] = useState("outer");
  const changeTag = (params: string) => {
    setTag(params);
  };
  return (
    <div>
      <MainTagBar tag={Tag} setTag={changeTag}></MainTagBar>
      <MainList></MainList>
    </div>
  );
}
