import { Component } from "react";
export default class ClassCounterPage extends Component {
  //모든 state 정의
  state = {
    count: 0,
  };

  //함수 function 없이 사용
  onClickCountUp(): void {
    //bind를 안 할 경우 해당 this는 button이 주체가 되어 오류가 남.
    this.setState({
      count: this.state.count + 1,
    });
  }

  //render > return html 반환!
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        {/* this를 bind 해주어서 함수안에서도 this를 사용할 수 있도록 해줌 */}
        <button onClick={this.onClickCountUp.bind(this)}>카운트 올리기</button>
      </>
    );
  }
}
