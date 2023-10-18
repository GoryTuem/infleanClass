export default function TypescriptPage() {
  // 타입추론 => 처음 값을 통해서 string임을 인지.
  let aaa = "안녕하세요";

  // 숫자 또는 문자 가능한 타입
  let ccc: number | string = 1000;

  // 불린타입
  let ddd: Boolean = true;
  // ddd = "false" => 안됨

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4];
  let ggg: string[] = ["소희", "강호", "정인"];
  let hhh: (string | number)[] = ["솔이", 10];

  // 객체 타입
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string; //=> 있어도 되고 없어도 가능
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "신일초",
  };
  profile.name = "훈이";

  // 함수타입
  function add(num: number, num2: number, unit: string): string {
    //=> 마지막 리턴타입
    return num + num2 + unit;
  }
  const result = add(1000, 2000, "원");

  // 함수타입
  const add2 = (num: number, num2: number, unit: string): string => {
    //=> 마지막 리턴타입
    return num + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원");

  // any 타입
  let qqq: any = "철수";
  qqq = 3;

  return <></>;
}
