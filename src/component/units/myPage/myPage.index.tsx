import * as s from "./myPage.style";
import { PiBookOpenTextThin, PiBellRingingThin } from "react-icons/pi";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Axios from "../../commons/axios";
import { loginCheck } from "../../commons/hooks/loginCheck";
import { useUserStore } from "../../commons/store";

function MyPageComponent(): JSX.Element {
  const { user } = useUserStore();

  console.log(user?.mem_email);
  const router = useRouter();

  const accessToken = process.browser
    ? localStorage.getItem("accessToken")
    : "";

  const logout = () => {
    Axios.post("/api/auth/logout")
      .then(function () {
        localStorage.removeItem("accessToken");
        void router.push("/");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  useEffect(() => {
    if (accessToken) {
      Axios.post("/api/user/mypage")
        .then(function (response) {})
        .catch(function (error) {
          alert(error);
        });
    }
  }, []);
  return (
    <>
      {accessToken && (
        <div>
          <s.MyPageUserWrapper>
            <s.UserTitle>
              <s.ProfileIcon />
              <span>소희</span>님<s.Icon />
            </s.UserTitle>
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
                <s.BoxItem>
                  <span>작성한 글</span>
                  <span>
                    <b>5</b>
                  </span>
                </s.BoxItem>
                <s.Hr />
                <s.BoxItem>
                  <span>좋아요한 스타일</span>
                  <span>
                    <b>10</b>
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
                </s.Li>
              </s.Ul>
              <p onClick={logout}>로그아웃</p>
            </s.MyPageBody>
          </s.MyPageBodyWrapper>
        </div>
      )}
    </>
  );
}

export default loginCheck(MyPageComponent);
