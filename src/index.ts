// import {init, exit} from "myPackage" // JS 코드 모양을 TS 에 설명해 주는 파일

// import {init, exit} from "./myPackage"
// 이렇게 직접 파일을 불러온다면 어떻게 될까? (.d.ts. 파일이 없다는 가정 하에)
// -> allowJS 로 인해 JS 불러오기를 허용하게 되고, 함수를 자동으로 return 하면서 타입을 추론함!

// JSDoc & ts-check 적용 후 코멘트 확인
// init({
//     url: 'test'
// })

// exit(1)
// declaration 파일 생성 후, 함수를 import 하여 함수를 사용해 봄!

// console.log('hi') // 22-10-30 npm i nodemon 실행 후, 내용 변화 감지하여 자동 리로딩!

import crypto from 'crypto'; // <- 다이렉트로 JS 모듈을 불러올 수 있게 설정함 (tsconfig.json)
// crypto import 할때 '타입 정의 찾을 수 없음' ? -> .. d.ts 또 만들어? -> 다른 방법으로!

// BlockChain start!
interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape { // no hash? <- calculated prevHash, height, data (계산해서 만들어야 함)
    public hash: string;

    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) { // hash 를 생성자로 정의하는 것이 아니므로 따로 아래와 같이 초기화 (정의는 위에서)
        this.hash = Block.calculateHash(prevHash, height, data) // <- 생성자에서 불러온 것이 아니므로 하단의 함수는 클래스를 직접 가리킴
        // static method -> new 생성으로 청사진만 불러오는 것이 아니라, 유틸 함수처럼 동작
    }

    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}` // & crypto (+ crypto.d.ts)
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}

class Blockchain {
    private blocks: Block[];

    constructor() {
        this.blocks = [];
    }

    private getPrevHash() {
        if (this.blocks.length === 0) return ""; // if Block[] is empty
        return this.blocks[this.blocks.length - 1].hash; // else -> get this.blocks[index].hash
    }

    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data); // -> calculateHash (바로 해시 생성)
        this.blocks.push(newBlock)
    }
    public getBlocks() {
        // return this.blocks; // 보안 문제 ?!
        // -> 새로운 배열을 return 해봅시다...
        return [...this.blocks]
    }
}

const blockchain = new Blockchain()
blockchain.addBlock("firstBlock") // no prevHash (이전 해시값이 없으니)
blockchain.addBlock("secondBlock") // 이전 hash -> 다음 hash 이동
blockchain.addBlock("thirdBlock")
blockchain.addBlock("fourthBlock")

// 그런데... 보안 문제가 ?!
blockchain.getBlocks().push(new Block("메롱", 11111, "님 해킹당함 ㅋㅋ")) // !? blocks 에 데이터 추가가 가능하네...?
// 위의 getBlocks() 부분에서 전개구문으로 변경해주었기 때문에, 임의 추가된 배열을 출력하지 않음!

console.log(blockchain.getBlocks())