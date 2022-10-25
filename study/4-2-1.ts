// type definition examples
type Nickname = string
type HealthBar = number
type Friends = Array<string>

type Player = { // 타입 선언 1
    nickName: Nickname,
    healthBar: HealthBar
}

const yaerhee: Player = {
    nickName: 'yaerhee',
    healthBar: 100,
}

type Food = string // 타입 선언 2
const kimchi: Food = 'delicious'


// 필요한 내용만 입력하도록 정의하기
type Team = 'red' | 'blue' | 'yellow'
type Health = 1 | 5 | 10 | 100

type Players = {
    nickName: string,
    team: Team,
    health: Health
}

const user: Players = {
    nickName: 'test',
    // team: 'green', // NOT POSSIBLE!
    team: 'yellow',
    health: 10
}

// => 정리!
// Type 은 ...
// 1. Object 모양 정의
// 2. 타입 Alias 정의
// 3. 특정 값만 올 수 있도록 제한 가능