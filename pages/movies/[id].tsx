// 대괄호를 사용해서 동적 라우팅을 한다 -> react-router-dom에서 movies/:id 역할을 한다.

import Image from 'next/image';

import { useRouter } from 'next/router';

export default function Detail() {
  // query의 key값은 파일명의 대괄호 안에 넣어준 이름과 같다
  const { query } = useRouter();

  return (
    <>
      <div className="movie">
        {query.title ? (
          <>
            <div className="moviePoster">
              <Image
                alt="moviePoster"
                src={`https://image.tmdb.org/t/p/w500${query.posterPath}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h4>{query.title}</h4>
          </>
        ) : <h4>Loading...</h4>}
      </div>
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
