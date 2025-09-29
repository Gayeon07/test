

function MovieCard({posterUrl, title, genre, rating, id}) {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-genre">{genre}</p>
        <p className="movie-rating">★ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;