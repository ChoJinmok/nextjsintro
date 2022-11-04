import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

import profilePic from '../public/IMG_0735.jpg';

// Link는 오로지 href만 제공 스타일이라던지 클래스를 줄 수도 없다

// Next.js에서 스타일 추해는 방법

// 1. CSS모듈 패턴
// import styles from './NavBar.module.css';
// styles 객체에서 프로포트 사용하듯 사용 -> 실제로 브라우저에서는 다른 클래스이름이 들어가진다.(충돌 방지)
// 외부에서 css파일을 import 하려면 무조건 module파일이어야한다.(_app에서는 가능)

// 2. styled jsx(Next.js의 고유의 방법)
// style태그에 jsx props를 넣어준다.
// className이 랜덤하게 들어가진다.(따로 className으로 설정해주지 않아도 자동으로 해줌)
// 장점은 컴포넌트 별로 완전히 독립된 스타일을 설정해줄 수 있다.(똑같은 className을 지정해주더라도)
// props도 전달가능

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="img">
        <Image alt="profile" src={profilePic} layout="fill" objectFit="cover" priority />
      </div>
      <ul>
        <li>
          <Link href="/">
            <a
              href="replace"
              className={router.pathname === '/' ? 'active' : ''}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              href="replace"
              className={router.pathname === '/about' ? 'active' : ''}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }

          a {
            text-decoration: none;
          }

          .active {
            color: yellow;
          }

          .img {
            position: relative;
            width: 50px;
            height: 50px;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
