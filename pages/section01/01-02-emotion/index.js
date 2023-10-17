import {Wrapper,Title, Label,ID,Pwd} from '../../styles/emotion'

export default function EmotionPage(){

    //자바스크립트 영역

    //html 영역
    return(
        <Wrapper>
            <Title>로그인</Title>
            <Label>아이디</Label>
            <ID type="text"></ID>
            <Label>비밀번호</Label>
            <Pwd type="text"></Pwd>
        </Wrapper>
    )

}