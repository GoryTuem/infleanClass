export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. partial 타입 => 모두 필수 아님
type aaa = Partial<IProfile>;

// 2. Required 타입 => 모두 필수
type bbb = Required<IProfile>;

// 3. Pick 타입 => 필요한 것만 뽑아서
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 => 선택만 빼고
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이";
let child1: eee = "철수"; // eee에 포함된 것만 가능
let child2: string = "사과";

type fff = Record<eee, IProfile>;

//6. 객체 key들로 Union 타입 만들기
type ggg = keyof IProfile; // name, age, school, hobby
let myProfile: ggg = "hobby";

// 7. type vs interface 차이 => 선언 병합 인터페이스만 가능
export interface IProfile {
  candy: string;
}
