const { API_KEY } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/w500/*',
      },
    ],
  },
  // 기본적으로 API key를 숨기지 않는 redirect가 설정돼있다.
  async redirects() {
    return [
      {
        // 1. source를 찾는다 (유저가 이동한 위치를 가리킨다.)
        // source: '/contact',
        // 2. 유저를 destination으로 보낸다. (우리가 만든 site 바깥으로도 설정가능)
        // destination: 'https://nomadcoders.co',
        // 이 redirection이 영구적(permanent)인지 아닌지에 따라
        // 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정된다.

        // pattern matching도 지원한다.
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  // rewrites는 유저를 redirect시키기는 하지만 url은 변하지 않는다.
  // -> redirect와 비슷하지만 유저가 url변화를 볼 수 없다.
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
