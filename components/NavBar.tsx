import { FC } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/router';
// Link는 오로지 href만 제공 스타일이라던지 클래스를 줄 수도 없다

// Next.js에서 스타일 추해는 방법
// 1. CSS모듈 패턴
import styles from './NavBar.module.css';
// styles 객체에서 프로포트 사용하듯 사용 -> 실제로 브라우저에서는 다른 클래스이름이 들어가진다.(충돌 방지)

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a
              href="replace"
              className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              href="replace"
              className={[styles.link, router.pathname === '/about' ? styles.active : ''].join(' ')}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
