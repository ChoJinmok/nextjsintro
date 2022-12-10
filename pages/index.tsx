// Next.js는 pages의 파일이름으로 페이지를 라우팅해준다.(파일명이 URL이 된다.)
// 컴포넌트의 이름은 원하는 대로 지어도 되고 꼭 export default로 내보내줘야한다.
// 404 페이지도 Next.js에서 자동으로 만들어준다.(커스터마이징 가능)
import { KeyboardEvent } from 'react';

import { GetServerSideProps } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Seo from '../components/Seo';

// import NavBar from '../components/NavBar';

// 예외사항
// index 파일은 home의 역할을 한다. -> 주소에 /만 붙고 /index하면 404가 뜬다.
// react를 import할 필요가 없다.

// redirect, rewrite: request에 mask를 씌우는 것과 비슷 -> next.config에서 설정
// const API_KEY = '';

interface Movie {
  id: number,
  title: string,
  poster_path: string
}

interface HomeProps {
  movies: Movie[]
}

export default function Home({ movies }: HomeProps) {
// const [movies, setMovies] = useState<[] | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(
  //       '/api/movies',
  //     )).json();

  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();

  interface HandleClickParams {
    id: number,
    title: string,
  }

  function handleClick({ id, title }: HandleClickParams) {
    // next의 router는 URL에 정보를 숨겨 보낼 수도 있다
    // 원래는 상세페이지로 넘어가면 title과 image를 새롭게 서버에서 받아야하지만
    // React가 이미 가지고 있는 state에 있는 data이기 때문에 URL로 state를 넘겨주면 된다.(유저에게는 보여주지 않고)
    return () => {
      // router.push(`/movies/${id}`);
      // url을 아래와 같이 객체로 전달 가능
      // router.push({
      //   pathname: `/movies/${id}`,
      //   query: {
      //     title: 'potatos',
      //   },
      // movies/124142?title=potatos 주소로 이동

      // push의 두번째 매개변수인 'as'를 이용해서 유저에게 보여주지 않아도 되는 url정보를 숨겨줄 수 있다.
      // as는 url를 마스킹해준다.
      // router.push({
      //   pathname: `/movies/${id}`,
      //   query: {
      //     title,
      //     posterPath,
      //   },
      // }, `/movies/${id}`);
      // 상세페이지의 router에서 전달한 query를 받아볼 수 있다.
      // 하지만 유저가 url을 직접 입력해서 접근하면 정보를 받을 수 없다.
      router.push(`/movies/${title}/${id}`);
    };
  }

  function handleKeyDown({ id, title }: HandleClickParams) {
    return (event: KeyboardEvent<HTMLDivElement>) => {
      const key = event.key || event.keyCode;

      if (key === 'Enter' || key === 13) {
        // router.push({
        //   pathname: `/movies/${id}`,
        //   query: {
        //     title,
        //     posterPath,
        //   },
        // }, `/movies/${id}`);
        router.push(`/movies/${title}/${id}`);
      }
    };
  }

  return (
    <>
      <Seo title="Home" />
      {/* <NavBar /> */}
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map(({ id, title, poster_path: posterPath }) => (
        // <Link href={`/movies/${movie.id}`} key={movie.id}>
        // a태그는 div와 같은 컨테이너 보다 텍스트를 감싸주는 것이 좋다?
        <div className="movie" key={id}>
          <div
            className="moviePoster"
            role="link"
            onClick={handleClick({ id, title })}
            onKeyDown={handleKeyDown({ id, title })}
            tabIndex={0}
          >
            <Image
              alt="moviePoster"
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h4>
            {/* Link에서도 as 사용가능 */}
            {/* <Link href={`/movies/${id}`}>{title}</Link> */}
            {/* <Link
              href={{
                pathname: `/movies/${id}`,
                query: {
                  title,
                  posterPath,
                },
              }}
              as={`/movies/${id}`}
            >
              {title}
            </Link> */}
            <Link href={`/movies/${title}/${id}`}>{title}</Link>
          </h4>
        </div>
      ))}
      {/* 패아지에 전역 스타일 주는 방법 */}
      <style jsx global>
        {`
        .movie {
          cursor: pointer;
        }

        .moviePoster {
          position: relative;
          width: 200px;
          height: 200px;
        }
      `}
      </style>
    </>
  );
}

// Next.js의 장점은 앱이 있는 페이지를 미리 렌더링 하는 것(static, 정적으로 생성)
// network 탭에서 속도 3G로 해서 CSR과 SSR 비교 가능
// 만약에 JS파일을 받아오지 못하는 경우 CSR은 흰화면 밖에 못보여주지만 SSR은 만들어져있는 HTML을 보여줄 수 있다.

// 또다른 장점은 hydration (결국 hydration은 react가 하는 것)
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

// get suercer side props: 페이지가 오직 server side render만 할지 선택할 수 있게한다.
// Next.js는 app의 initail state(초기 상태)로 html을 만들어서 pre-rendering한다. (로딩을 만들어 놓으면 로딩이 초기 상태)
// loading을 보여주기 싫을 수도 있다. -> fetch같이 server에서 일어나는 data관련된 작업을 모두 한 다음에(API 작압이 완료되고) 페이지를 render

// 함수 이름을 바꾸면 안된다.
// 이 함수의 코드는 server에서 돌아가게 된다. (API key도 숨길 수 있게 된다.)
// 이 곳의 코드는 client에서는 알 수가 없다.

// interface GetServerSidePropsReturnObject<T> {
//   props: {
//     results: T[],
//   },
// }

export const getServerSideProps: GetServerSideProps = async () => {
  // 서버는 localhost 주소를 모른다. -> 절대 경로로 바꿔주야한다.
  // const { results: movies } = await (await fetch('/api/movies')).json();
  const { results: movies } = await (await fetch(`${process.env.VERCEL_URL ?? 'http://localhost:3000'}/api/movies`)).json();

  // 위의 컴포넌트에 props로 전달된다.
  // => 페이지의 소스코드를 보면 __NEXT_DATA__에 props가 전달된 걸 볼 수 있다. -> 이 후 React.js가 hydration되면서 다시 장악
  return {
    props: {
      movies,
    },
  };
};

// Next.js가 Home 컴포넌트를 받아서 _app의 Component자리에 넣고 getServerSideProps의 return값을 pageProps에 전달한다.
// 하지만 이렇게 할 경우 API가 들어오기 전까지 화면에 아무것도 보이지 않게된다.
// 선택을 해야한다.
// 1. 항상 server side rendering을 하고 싶은가? (데이터가 유효할 때 화면이 보여지게 되는게 좋은가?) => SEO에 유리
// 2. loading화면을 보여준 다음에 데이터를 받는게 좋은가?
