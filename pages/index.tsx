// Next.js는 pages의 파일이름으로 페이지를 라우팅해준다.(파일명이 URL이 된다.)
// 컴포넌트의 이름은 원하는 대로 지어도 되고 꼭 export default로 내보내줘야한다.
// 404 페이지도 Next.js에서 자동으로 만들어준다.(커스터마이징 가능)

import { FC } from 'react';

// 예외사항
// index 파일은 home의 역할을 한다. -> 주소에 /만 붙고 /index하면 404가 뜬다.
// react를 import할 필요가 없다.

const Home: FC = () => (
  <h1>hello</h1>
);

export default Home;
