// Next.js는 항상 다른 컴포넌트로 가기전 먼저 app을 본다. => 청사진(blue print)을 그려놓을 수 있다.
// 어떻게 페이지가 있어야하는지 어떤 컴포넌트가 어떤 페이지에 있어야하는지를 설정할 수 있다.
// 컴포넌트 이름은 마음대로 지정해도 된다.(MyApp, CustomApp 등)
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>
        {`
        a {
          color: white
        }
      `}
      </style>
    </Layout>
  );
}

// layout pattern(custom app component에 사용)
// _app파일의 크기를 줄여줄 수 있다.(이미 global로 import해야 할 것들이 많다.)
// (ex. Google Analytics, 검색엔진 설정, 스크립트 분석)
// Layout에다가 스타일을 줄 수도 있다.
