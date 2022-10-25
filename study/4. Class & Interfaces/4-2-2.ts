// Interfaces
type Team = 'red' | 'blue' | 'yellow'
type Health = 1 | 5 | 10 | 100

interface Player { // 어...? type 정의랑 같은데? (맞음)
    nickName: string,
    team: Team
    health: Health
}

// 인터페이스는 => 오브젝트의 모양을 정의하기 위해서 사용한다 는 목적만 있음
// 오브젝트의 모양을 결정할 때는 => type 을 써도 되고, 인터페이스를 써도 됨 (타입은 조금 더 다양하게 활용할 수 있음)

// 아래와 같은 역할은... 인터페이스에게 없습니다 ㅜㅜ
// interface Hello = string // <- 불가능!!!


// OOP 개념과 비슷한 맥락으로, 정말 클래스 같아 보이고 활용도 비슷한 방향으로 할 수 있음!
interface User {
    readonly name: string
}

interface Players extends User { // 이렇게 상속받아서 아래와 같이 활용 가능!
}

const yaerhee: Players = {
    name: 'yaerhee',
    lastName: 'lee'
}

// 인터페이스는 데이터를 쌓는 것도 가능!
interface User {
    lastName: string
}

const yaerheeTwo: User = {
    name: 'yaerhee',
    lastName: 'Lee' // 오호 이렇게 lastName 불러오기도 가능하군
}



// 어... 만약 타입으로 정의했다면 어떻게 됐을까?
type Users = {
    readonly name: string
}

type Playerss = Users & { // & 연산자로 위의 타입을 같이 한다고 정의함

}

const nico: Playerss = {
    name: 'nico'
}

// 인터페이스 처럼 추가 정의를 하고 싶으면...? 안됨!
// interface User {} ... 두 번 쌓는 것은 안됨