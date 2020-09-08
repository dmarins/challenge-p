import React from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Loading from "../../../components/loading/Loading";

const LukeSkywalkerMovies = (props) => {
  let allMovies = props.allMovies;
  let movieCollection = [];

  if (movieCollection.length > 0) {
  }

  let teste = allMovies.map((movie) => ({
    id: Number(movie.url.substr(movie.url.length - 2, 1)),
    movie: movie.title
  }));

  console.log(teste);

  const [lukeSkywalkerMovies, setLukeSkywalkerMovies] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchLukeSkywalkerMovies() {
      setLoading(true);

      try {
        const response = await fetch("/films");
        const jsonData = await response.json();

        setLukeSkywalkerMovies(jsonData);
      } catch (error) {
        console.log("fetch movies error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLukeSkywalkerMovies();
  }, []);

  if (loading) return <Loading />;
  if (lukeSkywalkerMovies === null) return null;
  return (
    <section className={`${styles.movies} animeTop`}>
      <PageTitle title="Search" />
      {lukeSkywalkerMovies.results.map((movie) => {
        let movieId = Number(movie.url.substr(movie.url.length - 2, 1));

        return (
          <Link key={movie.title} to={`movie/${movieId}`}>
            <div className={styles.longCard}>
              <h1>{movie.title}</h1>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default LukeSkywalkerMovies;
