import React from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Loading from "../../../components/loading/Loading";

const Movies = () => {
  const [movies, setMovies] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      try {
        const response = await fetch("/films");
        const jsonData = await response.json();

        setMovies(jsonData);
      } catch (error) {
        console.log("fetch movies error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) return <Loading />;
  if (movies === null) return null;
  return (
    <section className={`${styles.movies} animeTop`}>
      <PageTitle title="Search" />
      {movies.results.map((movie) => (
        <Link
          key={movie.title}
          to={`movie/${movie.url.substr(movie.url.length - 2, 1)}`}
        >
          <div className={styles.longCard}>
            <h1>{movie.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Movies;
