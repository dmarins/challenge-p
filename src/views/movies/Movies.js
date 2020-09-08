import React from "react";
import styles from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("/films");
        const jsonData = await response.json();

        setMovies(jsonData);
      } catch (error) {
        console.log("fetch movies error: ", error);
      }
    }

    fetchMovies();
  }, []);

  if (movies === null) return null;
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nome do Filme</th>
          </tr>
        </thead>
        <tbody>
          {movies.results.map((movie) => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Movies;
