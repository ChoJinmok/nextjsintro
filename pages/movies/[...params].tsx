// 대괄호를 사용해서 동적 라우팅을 한다 -> react-router-dom에서 movies/:id 역할을 한다.

// Catch All url
// url에 많은 정보를 담을 수 있고 그것들을 모두 잡아낼 수 있는 url
// url에 영화 제목을 넣으면 SEO에 좋다
// 또 유저가 url주소를 통해 들어오더라도 영화제목을 볼 수 있다
// (클릭을 통해 넘어오지 않더라도 데이터를 url을 통해 받을 수 있다.)
// => 파일명 대괄호 안에 '...'을 넣어준다.
// router의 query가 배열로 들어오게 된다.
// ex. /movies/Terrifier 2/124/125/533
// => query = { params: [Terrifier 2, 124, 125, 533] }

// import { useRouter } from 'next/router';

import { GetServerSideProps } from 'next';
import Seo from '../../components/Seo';

export default function Detail({ routerParams }: { routerParams: string[] }) {
  // query의 key값은 파일명의 대괄호 안에 넣어준 이름과 같다
  // const router = useRouter();

  // Incognito mode(프라이빗 모드) 브라우저에서 접근하면 에러가 발생한다.
  // <- 페이지가 백엔드에서 pre-render되기 때문이다(서버에는 router.query.params가 존재하지 않기 때문)
  // params가 서버에서는 아직 배열이 아니기 때문이다.
  // 그래서 아래에 빈 배열인 경우도 넣어줘야한다.
  // 결국엔 CSR에서만 동작한다는 소리(소스코드에 title이 없다.)
  // getServerSideProps로 해결할 수도 있다.
  // const [title, id] = (router.query.params as string[]) || [];
  const [title] = routerParams;

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// Next.js가 sever-side context를 제공한다.
// => context에 params가 있다.
// 로딩 단계를 화면에서 보여주지 않고 SEO에 최적화 하고 싶다면 getServerSideProps사용하면 된다.
export const getServerSideProps:GetServerSideProps = async ({ params }) => {
  const { params: routerParams } = params as { params: string[] };

  return {
    props: {
      routerParams,
    },
  };
};
