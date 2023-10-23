class Monster {
  power = 50;
  attack() {
    console.log("공격!");
  }
}

//상속
class SuperMonster extends Monster {
  run() {
    console.log("도망가기!");
  }
  // 오버라이딩
  attack() {
    console.log("더 쎈 공격!");
  }
}

const myMonster = new SuperMonster();
myMonster.attack();
