
// 다시 type vs. interface
type PlayerA = {
    firstName: string
}

interface PlayerB {
    firstName: string
}

class User implements PlayerA { // PlayerB 로도 implements 문제 없음 :)
    constructor(
        public firstName: string
    ) {}
}

// 위의 두 타입, 인터페이스는 추상 클래스를 대체할 수 있음
// 오브젝트 모양 -> 은 인터페이스로 생성 권장, 나머지 부분에서는 타입을 권장
// 그런데 ?!
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// 정의 방식 자체는 조금 다르지만 (연산자 모양이라던지..), 둘이 이루고자 하는 목적 자체는 같음
// but, 인터페이스에서는 정의했던 인터페이스에 props 를 자유롭게 추가할 수 있다는 것에 유의할 것