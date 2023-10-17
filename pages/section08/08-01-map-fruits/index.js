const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "블루베리" },
  { number: 5, title: "귤" },
  { number: 6, title: "천혜향" },
];

export default function MapFruitsPage() {
  //기본 예제
  const aaa = [
    <div>1. 레드향</div>,
    <div>2. 샤인머스켓</div>,
    <div>3. 산청딸기</div>,
    <div>4. 블루베리</div>,
  ];

  //백엔드 예제
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} : {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ==================================
      <div>{bbb}</div>
      ==================================
      <div>
        {FRUITS.map((el) => (
          <div>
            {el.number} : {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
