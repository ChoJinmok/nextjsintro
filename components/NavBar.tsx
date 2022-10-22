import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
// Link는 오로지 href만 제공 스타일이라던지 클래스를 줄 수도 없다

const NavBar: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a
              href="replace"
              style={{ color: router.pathname === '/' ? 'red' : 'blue' }}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              href="replace"
              style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}
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
