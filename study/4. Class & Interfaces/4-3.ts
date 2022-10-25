// Interface (2)
abstract class User {
    // 추상 클래스는 인스턴스 생성이 불가능
    // 무엇을 구현해야 할지 알려줄 수 있는 역할 (클래스를 직접 만드는 게 아니라, 틀을 잡아주는 역할을 하는 것)
    // 인터페이스 - 는 JS 로 컴파일 할때 사라짐!
    // cf) JS 에는 추상 클래스가 없음 (그냥 클래스로 변해버림! ㅠㅠ)
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name:string): string
    abstract fullName(): string
}

// new User() // 불가능!!!

class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 추상 클래스를 -> 인터페이스로 바꾸기? cf) 인터페이스는 생성자가 없고, 오브젝트 & 클래스 모양을 묘사하게 해줌
interface Users {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}

class NewPlayer implements Users { // extends (JS). implements (Interface) <- TS 전용
    // Users 를 참조해서 props, functions 를 implement 하도록 함!
    constructor( // todo: implementing interfaces -> constructor 를 클래스 단에서 써줘야함!!
        public firstName: string, // todo: implementing interfaces -> private 지정 불가능
        public lastName: string
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

interface Human {
    health: number
}

class OtherPlayer implements Users, Human {
    constructor(
        public firstName: string,
        public health: number,
        public lastName: string
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 클래스를 타입으로 쓰는 것처럼, 인터페이스도 타입으로 쓸 수 있음!
// function makeUser(user: OtherPlayer) {
function makeUser(user: Users): Users { // return interface 로도 가능함! (new User 라고 정의할 필요 없이)
    // return 'hello'
    // 단, return Users 를 하려면, 인터페이스에 내용이 채워져있는 오브젝트를 반환해야 함 (인터페이스의 내용물을 넣어주면 됩니다)
    return {
        firstName: 'yaerhee',
        lastName: 'lee',
        fullName: () => 'yaerhee lee',
        sayHi: (name: string) => 'string'
    }
}

makeUser({
    firstName: 'yaerhee',
    lastName: 'lee',
    fullName: () => 'yaerhee lee',
    sayHi: (name: string) => 'string'
})