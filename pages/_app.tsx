// Next.js는 항상 다른 컴포넌트로 가기전 먼저 app을 본다. => 청사진(blue print)을 그려놓을 수 있다.
// 어떻게 페이지가 있어야하는지 어떤 컴포넌트가 어떤 페이지에 있어야하는지를 설정할 수 있다.
// 컴포넌트 이름은 마음대로 지정해도 된다.(MyApp, CustomApp 등)

import type { AppProps } from 'next/app';

import NavBar from '../components/NavBar';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>
        {`
        a {
          color: white
        }
      `}
      </style>
    </>
  );
}
