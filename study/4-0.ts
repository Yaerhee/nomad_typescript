// class
class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}

// 위의 코드는 아래의 JS 와 같음.
// "use strict";
// class Player {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// } => 기존 JS 에서는 class 및 구조 선언이 동시에 필요했는데,
// TS 에서는 구조 선언과 동시에 공개 범위 property 를 지정할 수 있음! (JS 에서는 private 가 안됨)

const yaerhee = new Player('yaerhee', 'lee', 'mido')
// todo: class 에 선언된 private prop 은 class 내부에서만 접근이 가능하다!
yaerhee.firstName // <- error. not accessible
yaerhee.nickName // ok

// abstract class
abstract class User { // abstract 로 정의할 경우 -> extends 로 상속 가능
    // todo: 단, abstract 클래스로는 인스턴스 생성이 불가능 (상속만 가능)
    constructor(
        protected firstName: string,
        protected lastName: string,
        // public nickName: string
        protected nickName: string
    ) {}
    abstract getNickName() : void // abstract Method & call signature (내용은 없는 추상 메소드)
    getFullName() { // Method (private 선언 시 외부 사용 불가능)
        return `${this.firstName} ${this.lastName}`
    }
}

class SuperPlayer extends User {
    getNickName() {
        // but console.log(nickName) 은 불가능 - private 라서...
        console.log(this.nickName) // 그런데 protect 로 변경하니 가져올 수 있음!
    }
}

const superYaerhee = new SuperPlayer('yaerhee', 'lee', 'mido')
superYaerhee.nickName // 요것도 이것만 ok
superYaerhee.firstName // 접근 불가

// abstract class 내부의 메소드를 사용해보자
superYaerhee.getFullName()