import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import PageTitle from "../../../components/pageTitle/PageTitle";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`/films/${id}`);
        const jsonData = await response.json();

        setMovie(jsonData);
      } catch (error) {
        console.log("fetch movie error: ", error);
      }
    }

    fetchMovie();
  }, [id]);

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
