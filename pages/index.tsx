// Next.js는 pages의 파일이름으로 페이지를 라우팅해준다.(파일명이 URL이 된다.)
// 컴포넌트의 이름은 원하는 대로 지어도 되고 꼭 export default로 내보내줘야한다.
// 404 페이지도 Next.js에서 자동으로 만들어준다.(커스터마이징 가능)

import { FC } from 'react';

// import NavBar from '../components/NavBar';

// 예외사항
// index 파일은 home의 역할을 한다. -> 주소에 /만 붙고 /index하면 404가 뜬다.
// react를 import할 필요가 없다.

const Home: FC = () => (
  <>
    {/* <NavBar /> */}
    <h1>hello</h1>
    {/* 패아지에 전역 스타일 주는 방법 */}
    {/* <style jsx global>
      {`
        a {
          color: white
        }
      `}
    </style> */}
  </>
);

export default Home;

// Next.js의 장점은 앱이 있는 페이지를 미리 렌더링 하는 것(static, 정적으로 생성)
// network 탭에서 속도 3G로 해서 CSR과 SSR 비교 가능
// 만약에 JS파일을 받아오지 못하는 경우 CSR은 흰화면 밖에 못보여주지만 SSR은 만들어져있는 HTML을 보여줄 수 있다.

// 또다른 장점은 hydration
// Next.js는 초기 상태를 활용해서 미리 렌더링해준다.(pre-generate)
// React.js를 프론트엔드 안에서 실행하는 걸 hydration이라고 한다.
// Next.js는 React.js를 백엔드에서 동작시켜서(렌더링) 페이지를(HTML)을 미리 만들어서 소스코드에 넣어준다.
// -> 유저는 React.js(자바스크립트)가 로딩되지 않아도 콘텐츠를 볼 수 있게된다.
// 그리고 나서 React.js(자바스크립트)가 로딩됐을 때 HTML과 연결되서 일반적인 React.js앱이 된다.

// 전역 스타일을 주려면(global) 페이지를 고려해야한다.(페이지마다 렌더링되기 때문)
// global로 스타일을 줘도 그 페이지에만 스타일이 적용된다.(Next.js의 특징)
// 위의 경우에 NavBar나 sylte을 일일이 페이지마다 지정해주면 불편
// 한군데에만 지정해놓으면 되는 방법이 있다!~(모든 페이지의 설정을 할 수 있는 지점이 존재) => App Component, App Page

// App Component, App Page
// 일종의 어떤 컴포넌트의 청사진 역할을 한다.
