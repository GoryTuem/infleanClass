import type { MouseEvent } from "react";
import { useState } from "react";

export default function CommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setIsEdit(true);
  };
  return (
    <div>
      {!isEdit ? (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <div>
          <input type="text" />
        </div>
      )}
    </div>
  );
}
