// Interface 는 ...
// * 클래스가 원하는 메소드, prop 을 가지도록 강제할 수 있음
// * JS 로 컴파일되지 않음 (파일 내부에서 보이지 않으므로 가벼움)
// * TS 에서 추상 클래스를 쓰더라도, JS 는 추상 클래스를 알아듣지 못함
// => 추상 클래스를 의도해서 쓰고 싶다면, class Player implements User 와 같이 인터페이스를 구현하는 것이 좋음

// 1. 타입을 쓰고 싶다? => type keyword !
type PlayerA = { // 여기서는 object shape
    name: string
}

const playerA: PlayerA = {
    name: 'yaerhee'
}

///// vs. interface
interface PlayerB {
    name: string
}

const playerB: PlayerB = {
    name: 'yaerhee',
    lastName: 'lee', // <- 나중에 추가한 인터페이스 때문에 같이 넣어둔 부분임, 원래 없었음
}

// 모양은 같고, 두 목표는 동일함 (오브젝트의 모양 일러두기)
// but, 상속에 있어서는?

// 타입 상속
type PlayerAA = PlayerA & {
    lastName: string
}

// 아래와 같이 정의하면 될 것 (위의 const 무시한다는 가정 하에)
// const playerA: PlayerAA = {
//     name: 'yaerhee',
//     lastName: 'lee'
// }

// 인터페이스 prop 추가
interface PlayerB {
    lastName: string
}

//
const playerBB: PlayerB = {
    name: 'yaerhee',
    lastName: 'lee'
}
