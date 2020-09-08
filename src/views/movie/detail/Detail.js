import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Loading from "../../../components/loading/Loading";

const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchMovie() {
      setLoading(true);

      try {
        const response = await fetch(`/films/${id}`);
        const jsonData = await response.json();

        setMovie(jsonData);
      } catch (error) {
        console.log("fetch movie error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (movie === null) return null;
  return (
    <section>
      <PageTitle title="Detail" />
      <div>
        <h1>
          {movie.title} - {new Date(movie.release_date).getFullYear()}
        </h1>
        <div>{movie.opening_crawl}</div>
        <div className={styles.director}>Director: {movie.director}</div>
        <div>Producer: {movie.producer}</div>
      </div>
    </section>
  );
};

export default Movie;
