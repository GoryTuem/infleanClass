import React, { useState, useRef } from "react";
import * as s from "./Editor.Styles";
import { MdClose } from "react-icons/md";
import type { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoCloseCircleSharp } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import ScrollContainer from "react-indiana-drag-scroll";
import { FaHashtag } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

/* eslint-disable */
interface IWriteProps {
  isNew: boolean;
}

const tagArray = {
  outer: "아우터",
  top: "상의",
  bottom: "하의",
  shoes: "신발",
};

export default function Editor(props: IWriteProps) {
  const [showImages, setShowImages] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { onClickMoveToPage } = useMoveToPage();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // 버튼 클릭 시 호출하는 함수 (클릭 이벤트)
  const onClickImageUploadHandler = (): void => {
    imageInputRef.current?.click();
  };

  // 이미지 상대경로 저장
  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files;
    let imageUrlLists: string[] = [...showImages];
    if (imageLists != null) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  // 해시태그 구현
  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([]);

  const addHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const allowedCommand = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!allowedCommand.includes(e.code)) return;

    let newHashTag = e.currentTarget.value.trim();

    if (newHashTag == "") {
      return setInputHashTag("");
    }

    const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }
    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (newHashTag == "") return;

    if (hashTags.length >= 10) {
      alert("태그는 10개까지 등록 가능합니다.");
      setInputHashTag("");
      return;
    }
    if (hashTags.includes(newHashTag)) {
      alert("이미 추가된 태그입니다.");
      setInputHashTag("");
      return;
    }
    setHashTags((prevHashTags) => {
      return [...prevHashTags, newHashTag];
    });

    setInputHashTag("");
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.currentTarget.value)) {
      setInputHashTag("");
    }
  };

  const changeHashTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputHashTag(e.target.value);
  };

  const deleteTag = (e: MouseEvent<SVGAElement>) => {
    setHashTags((prevHashTags) => {
      return prevHashTags.filter((tag) => tag !== e.currentTarget.id);
    });
  };

  //카테고리
  let [active, setActive] = useState("");

  const toggleActive = (e: MouseEvent<HTMLLIElement>) => {
    setActive(e.currentTarget.id);
  };

  return (
    <>
      <s.EditorHeader>
        <MdClose
          style={{ fontSize: "20px" }}
          onClick={onClickMoveToPage("/")}
        ></MdClose>
        <s.Title>{props.isNew ? "등록하기" : "수정하기"}</s.Title>
        <s.Save>완료</s.Save>
      </s.EditorHeader>

      <s.EditorBody>
        <s.Title>이미지 등록</s.Title>
        <s.EditorImgWrapper>
          <ScrollContainer
            className="container"
            vertical={false}
            horizontal={true}
            style={{ display: "flex" }}
          >
            {showImages.map((image, id) => (
              <s.FileImages key={id}>
                <s.FImg src={image} alt={`${image}-${id}`} />
                <s.FImgDel onClick={() => handleDeleteImage(id)}>
                  <IoCloseCircleSharp style={{ fontSize: "25px" }} />
                </s.FImgDel>
              </s.FileImages>
            ))}
            <Tooltip
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              title="회원들이 전체적인 스타일을 확인할 수 있도록 전신사진을 꼭 포함해주세요!"
            >
              <s.FileInputWrapper
                onClick={() => {
                  onClickImageUploadHandler();
                }}
              >
                <s.FileInput
                  ref={imageInputRef}
                  type="file"
                  id="input-file"
                  multiple
                  onChange={handleAddImages}
                />
                <CiCirclePlus style={{ fontSize: "25px", width: "150px" }} />
              </s.FileInputWrapper>
            </Tooltip>
          </ScrollContainer>
        </s.EditorImgWrapper>
        <s.Line></s.Line>
        <s.Title>태그 등록</s.Title>
        <s.TagList>
          {hashTags.length > 0 &&
            hashTags.map((hashTag) => {
              return (
                <s.TagItem key={hashTag}>
                  <FaHashtag
                    style={{ verticalAlign: "bottom", marginRight: "2px" }}
                  />
                  {hashTag}
                  <IoIosClose
                    style={{
                      verticalAlign: "bottom",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                    onClick={deleteTag}
                    id={hashTag}
                  />
                </s.TagItem>
              );
            })}
        </s.TagList>
        <s.TagInput
          placeholder="착용한 아이템의 태그를 달아주세요."
          value={inputHashTag}
          onChange={changeHashTagInput}
          onKeyUp={addHashTag}
          onKeyDown={keyDownHandler}
        ></s.TagInput>
        <s.Line></s.Line>
        <s.Title>카테고리 선택</s.Title>
        <s.CateList>
          {Object.entries(tagArray).map(([key, value]) => (
            <s.CateItem
              key={key}
              id={key}
              className={active == key ? "active" : ""}
              onClick={toggleActive}
            >
              {value}
            </s.CateItem>
          ))}
        </s.CateList>
      </s.EditorBody>
    </>
  );
}
