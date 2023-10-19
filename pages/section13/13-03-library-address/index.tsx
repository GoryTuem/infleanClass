import React, { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function App(): JSX.Element {
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

  const handleComplate = (data: Address): void => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      {/* 모달 숨기기 방식 (모달 안에 내용은 유지됨.) */}
      <Modal open={isOpen} onOk={handleOK} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplate} />
      </Modal>

      {/* 모달 종료 후 다시 그리는 방식 */}
      {isOpen && (
        <Modal open={true} onOk={handleOK} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplate} />
        </Modal>
      )}
    </>
  );
}
