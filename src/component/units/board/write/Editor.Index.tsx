import React, { useState, useRef, useEffect } from "react";
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
import { loginCheck } from "../../../commons/hooks/loginCheck";
import Axios from "../../../commons/axios";
import { useRouter } from "next/router";

/* eslint-disable */
interface IWriteProps {
  isNew: boolean;
}

function Editor(props: IWriteProps) {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const { onClickMoveToPage } = useMoveToPage();
  const user = localStorage.getItem("accessToken");
  const router = useRouter();
  const [showImages, setShowImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const [open, setOpen] = React.useState(false);
  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [categories, SetCategories] = useState([
    {
      id: 0,
      cate_name: "",
    },
  ]);

  //카테고리 정보 가져오기
  useEffect(() => {
    async function userData() {
      await Axios.get("/api/board/categoryList").then(function (response) {
        const res = response.data;
        if (res.success === true) {
          SetCategories(res.data);
        } else {
          alert(res.message);
        }
      });
    }
    if (user) {
      void userData();
    }
  }, []);

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
    let filesList: File[] = [...files];
    if (imageLists != null) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        filesList.push(imageLists[i]);
      }
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
      filesList = filesList.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    setFiles(filesList);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setFiles(files.filter((_, index) => index !== id));
  };

  // 해시태그 구현
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

  const onSave = async () => {
    const formData = new FormData();
    files.forEach((image) => formData.append("files", image));
    const value = {
      tagList: hashTags.join(","),
      categoryId: active,
    };

    formData.append(
      "boardRequestDto",
      new Blob([JSON.stringify(value)], {
        type: "application/json",
      }),
    );

    await Axios.post("/api/board/save", formData).then(function (response) {
      if (response.data.success === true) {
        router.push("/myPage");
      } else {
        alert(response.data.message);
      }
    });
  };
  return (
    <>
      <s.EditorHeader>
        <MdClose
          style={{ fontSize: "20px" }}
          onClick={onClickMoveToPage("/")}
        ></MdClose>
        <s.Title>{props.isNew ? "등록하기" : "수정하기"}</s.Title>
        <s.Save onClick={onSave}>완료</s.Save>
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
          {categories.map((item) => (
            <s.CateItem
              key={item.id}
              id={item.id.toString()}
              className={active == item.id.toString() ? "active" : ""}
              onClick={toggleActive}
            >
              {item.cate_name}
            </s.CateItem>
          ))}
        </s.CateList>
      </s.EditorBody>
    </>
  );
}
export default loginCheck(Editor);
