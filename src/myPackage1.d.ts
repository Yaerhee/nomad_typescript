interface  Config {
    url: string
}

declare module "myPackage" { // 모듈을 선언해 주면 JS -> module -> TS import 가능
    function init(config: Config): boolean
    function exit(code: number): number
} // TS style 로 function 정의가 끝나니, index.ts import error 가 사라짐!