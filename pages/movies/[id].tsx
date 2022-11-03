// 대괄호를 사용해서 동적 라우팅을 한다 -> react-router-dom에서 movies/:id 역할을 한다.

import { useRouter } from 'next/router';

export default function Detail() {
  // query의 key값은 파일명의 대괄호 안에 넣어준 이름과 같다
  const { query: { id } } = useRouter();

  return 'detail';
}
