// import {init, exit} from "myPackage" // JS 코드 모양을 TS 에 설명해 주는 파일

import {init, exit} from "./myPackage"
// 이렇게 직접 파일을 불러온다면 어떻게 될까? (.d.ts. 파일이 없다는 가정 하에)
// -> allowJS 로 인해 JS 불러오기를 허용하게 되고, 함수를 자동으로 return 하면서 타입을 추론함!

// JSDoc & ts-check 적용 후 코멘트 확인
// init({
//     url: 'test'
// })

exit(1)
// declaration 파일 생성 후, 함수를 import 하여 함수를 사용해 봄!