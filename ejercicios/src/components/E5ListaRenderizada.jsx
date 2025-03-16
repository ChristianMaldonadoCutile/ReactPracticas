import React from 'react'


const movies = ["Pelicula 1", "Pelicula 2", "Pelicula 3"];
function E5ListaRenderizada() {

    const HTMLMovies = movies.map((movie, index) => {
        return <p key={movie}>{index + 1} - {movie}</p>
    })
    return (
        <div>
            <h1>Lista de peliculas</h1>
            {HTMLMovies}
        </div>
    );
}

export default E5ListaRenderizada