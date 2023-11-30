import styled from "@emotion/styled";

export const EditorHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Save = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ff6e81;
  cursor: pointer;
`;

export const EditorBody = styled.div`
  padding: 0 10px;
  margin-bottom: 50px;
`;

export const FileInputWrapper = styled.div`
  width: 150px;
  height: 200px;
  background-color: #f5f5f5;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;
export const FImg = styled.img`
  width: 150px;
  height: 200px;
  object-fit: fill; // 비율 조정
`;
export const FileInput = styled.input`
  display: none;
`;

export const FImgDel = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const EditorImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  margin-top: 15px;
`;

export const FileImages = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  margin-right: 10px;
`;

export const Line = styled.hr`
  margin: 40px 0;
  border: 1px solid #f5f5f5;
`;

export const TagInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
`;

export const TagList = styled.div`
  margin-top: 15px;
`;

export const TagItem = styled.span`
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding: 6px 10px;
  margin: 3px;
  background: #ff6e81;
  color: #ffffff;
  display: inline-block;
`;

export const CateList = styled.ul`
  display: flex;
  padding: 0;
  margin-top: 20px;
`;

export const CateItem = styled.li`
  list-style: none;
  border: 1px solid #3b3b3b;
  border-radius: 5px;
  padding: 7px 12px;
  margin: 0 3px;
  &.active {
    background-color: #3b3b3b;
    color: #ffffff;
  }
`;
