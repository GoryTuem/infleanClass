import React, { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const OnToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplate = (data: Address): void => {
    OnToggleModal();
  };

  return (
    <>
      <button onClick={OnToggleModal}>모달창 열기</button>

      {isOpen && (
        <Modal open={true} onOk={OnToggleModal} onCancel={OnToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplate} />
        </Modal>
      )}
    </>
  );
}
