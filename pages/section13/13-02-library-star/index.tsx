import React, { useState } from "react";
import { Rate, Button, Modal, Space } from "antd";

export default function App(): JSX.Element {
  //   const [value, setValue] = useState(3);

  //   const onClickSuccess = () => {
  //     Modal.success({
  //       content: "게시글 등록에 성공했습니다.",
  //     });
  //   };
  //   const onClickError = () => {
  //     Modal.error({
  //       content: "비밀번호가 틀렸습니다.",
  //     });
  //   };

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOK = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <Rate onChange={setValue} value={value} />
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>실패 </button> */}

      {/* 커스텀 모달 */}
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        비밀번호 입력 : <input type="password" />
      </Modal>
    </>
  );
}
