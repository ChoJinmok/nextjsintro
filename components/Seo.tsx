// Next.js에서 Head같은 작은 패키지들을 제공한다.
// 자주 사용하는 기능들이 패키지로 구현돼있다.
// 원래는 앱의 head부분을 관리하기 위해서 react helmet과 같은 패키지 사용했다.
// Head 컴포넌트 안에 들어가는 요소들이 html의 head안에 보이게 된다.
import Head from 'next/head';

interface SeoProps {
    title: string
}

export default function Seo({ title }: SeoProps) {
  const pageTile = `${title} | Next Movies`;

  return (
    <Head>
      <title>{pageTile}</title>
    </Head>
  );
}
