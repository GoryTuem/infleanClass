import * as s from "./myPage.style";
import { PiBookOpenTextThin, PiBellRingingThin } from "react-icons/pi";
import { RiKakaoTalkFill, RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Axios from "../../commons/axios";
import { loginCheck } from "../../commons/hooks/loginCheck";
import { useUserStore } from "../../commons/store";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

function MyPageComponent(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { removeUser } = useUserStore();
  const router = useRouter();
  const user = localStorage.getItem("accessToken");
  const [myData, setMyData] = useState({
    mem_email: "",
    mem_name: "",
    mem_nickname: "",
    writeCount: 0,
    likeCount: 0,
  });

  const logout = () => {
    Axios.post("/api/auth/logout")
      .then(function () {
        localStorage.removeItem("accessToken");
        removeUser();
        void router.push("/");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  useEffect(() => {
    async function userData() {
      await Axios.get("/api/user/mypage").then(function (response) {
        const res = response.data;
        if (res.success === true) {
          setMyData(res.data);
        } else {
          alert(res.message);
        }
      });
    }
    if (user) {
      void userData();
    }
  }, []);

  return (
    <>
      {user && (
        <div>
          <s.MyPageUserWrapper>
            <div>
              <s.ProfileIcon />
              <s.UserTitle>
                <p>{myData.mem_email}</p>
                <span>
                  {myData.mem_name}님<s.Icon />
                </span>
              </s.UserTitle>
            </div>
          </s.MyPageUserWrapper>
          <s.EventBanner>
            {" "}
            우먼스냅 앱에서 더 편리하게
            <s.BannerSpan>앱으로 이동</s.BannerSpan>
          </s.EventBanner>
          <s.MyPageBodyWrapper>
            <s.MyPageBody>
              <s.Title>나의 활동</s.Title>
              <s.Box>
                <s.BoxItem onClick={onClickMoveToPage("/myPage/board")}>
                  <span>작성한 글</span>
                  <span>
                    <b>{myData.writeCount}</b>
                  </span>
                </s.BoxItem>
                <s.Hr />
                <s.BoxItem onClick={onClickMoveToPage("/myPage/like")}>
                  <span>좋아요한 스타일</span>
                  <span>
                    <b>{myData.likeCount}</b>
                  </span>
                </s.BoxItem>
              </s.Box>

              <s.Title>고객 서비스</s.Title>
              <s.Ul>
                <s.Li>
                  <s.Button>
                    <PiBookOpenTextThin style={s.ButtonIcon} />
                    <s.ButtonText>도움말 센터</s.ButtonText>
                    <s.ButtonArrowIcon />
                  </s.Button>
                  <s.Button>
                    <PiBellRingingThin style={s.ButtonIcon} />
                    <s.ButtonText>공지사항</s.ButtonText>
                    <s.ButtonArrowIcon />
                  </s.Button>
                  <s.Button>
                    <RiKakaoTalkFill style={s.ButtonIcon} />
                    <s.ButtonText>1:1 카카오톡 상담 </s.ButtonText>
                    <s.ButtonArrowIcon />
                  </s.Button>
                  <s.Button onClick={logout}>
                    <RiLogoutBoxRLine style={s.ButtonIcon} />
                    <s.ButtonText>로그아웃</s.ButtonText>
                    <s.ButtonArrowIcon />
                  </s.Button>
                </s.Li>
              </s.Ul>
            </s.MyPageBody>
          </s.MyPageBodyWrapper>
        </div>
      )}
    </>
  );
}

export default loginCheck(MyPageComponent);
