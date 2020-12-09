import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
	return (
		<>
			{props.movies.filter(movie => movie.Title).map((movie, index) => (
                <div className="movie-container">
			
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt='movie' className="align-self-center"></img>
                        <div 
                            // adding function from props and adding onClick property
                            onClick={() => props.handleFavoritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content-center'>
                            <FavoriteComponent/>
                        </div>
                    </div>

                    <div className="title align-self-center">
                        <p>{movie.Title}</p>
                    </div>

                </div>
			))}
		</>
	);
};

export default MovieList;
