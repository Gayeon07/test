
import MovieCard from './MovieCard';

function MovieList() {
  const movies = [
    {
      id: 1,
      title: '어쩔수가없다',
      genre: '스릴러, 코미디',
      rating: 8,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/09/17/FRNqKt4pbztmQXaLMu2ZIGP43ebJ9F8i_420.jpg',
    },
    {
      id: 2,
      title: '체인소 맨 : 레제편',
      genre: '애니메이션, 액션, 어드벤처',
      rating: 9.3,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/09/25/rBGmxIIt5wLgjk1nEQr84Crh2Fvxhn4o_420.jpg',
    },
    {
      id: 3,
      title: '보스',
      genre: '액션, 코미디',
      rating: 8,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/09/24/pA2JOhoGAwagQk8O7qmng8TfLEJqGH6k_420.jpg',
    },
    {
      id: 4,
      title: '얼굴',
      genre: '미스터리',
      rating: 8.6,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/08/25/L2b3wEjOW7D6qM6973wIcnoLbavtELGz_420.jpg',
    },
    {
      id: 5,
      title: 'F1 더 무비',
      genre: '액션, 드라마',
      rating: 9.5,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/06/12/hWiZN7PP9G18jB18bS2BfyOTRDPpJH0m_420.jpg',
    },
    {
      id: 6,
      title: '살인자 리포트',
      genre: '드라마, 스릴러',
      rating: 8.5,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/09/24/UVyVqW4zruAxak2FPWNHUTuZO3S4KrbY_420.jpg',
    },
    {
      id: 7,
      title: '귀멸의 칼날 : 무한성편',
      genre: '애니메이션',
      rating: 9.4,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/08/28/GP7LkwFxSvP5uWfeV3MZLcoYGOSnXfbu_420.jpg',
    },
    {
      id: 8,
      title: '컨저링 : 마지막 의식',
      genre: '공포(호러)',
      rating: 8.4,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/09/11/LZhmp66IiddHBF71sFaymiT1SbsQCxYx_420.jpg',
    },
    {
      id: 9,
      title: '좀비딸',
      genre: '드라마, 코미디',
      rating: 8.8,
      posterUrl: 'https://img.megabox.co.kr/SharedImg/2025/08/05/GCFwvyXNbZTEogfoCW4TQNLiBNc5l6Hy_420.jpg',
    },
  ];

  return (
    <div className="movie-list">
      {movies.map(movie=>(
        <MovieCard
        key={movie.id}
        posterUrl={movie.posterUrl}
        title={movie.title}
        genre={movie.genre}
        rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;