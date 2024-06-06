card component화

craco 경로들 절대경로


폴더구조

import yolov8 from "../../../../img/study/yolo/yolov8.JPG"; 요렇게 깊게 가져오시면 힘듭니다.. 절대경로 세팅해주세요 그러면 @img/study/ ... 이렇게 가져올 수 있습니다

img는 src/assets/imgs로 넣어주세요, 다른 폰트나 아이콘 같은 asset이 생기면 또 폴더 하위에 파서 넣어주시면 됩니다

라우터 작성된 페이지 이동할땐 a태그가 아니라 Link 태그로 이동해주세요

직접적인 dom 조작보단 React를 잘 활용해서 ui를 업데이트 해주십셔 props로 상태를 넘겨주셔야합니다.. (src/nav/ ...)
usestate

const [openStudy, setOpenSudy] = useState(false)

<Study open={openStudy} /> <Link to





src/pages에 main 디렉토리 만드시고 각각의 js 파일은 index.js로 사용하십셔

card 컴포넌트들은 src/component로 분리하시던가 아니면 pages/[페이지명]/UI 아래에 넣어두시던가 정리를 하셔야할 것 같습니

nav도 component 파고 layout 만들어서 안에 넣으십셔