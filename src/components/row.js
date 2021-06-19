import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Row.css";

function Row({ title, fetchUrl }) {
	const [movies, setmovies] = useState("");
	const base_URL = "https://api.themoviedb.org/3";
	const img_URL = "https://image.tmdb.org/t/p/original";
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(base_URL.concat(fetchUrl));
			console.log("movie");
			console.log(request);
			setmovies(request.data.results);
			return request;
		}
		fetchData();
	}, []);
	if (movies) {
		return (
			<div className="row">
				<h1>{title}</h1>
				<div className="row_Posters">
					{movies.map((movie) => (
						<img
							className="row_poster"
							src={`${img_URL}${movie.poster_path}`}
							alt={movie.name}
						/>
					))}
				</div>
			</div>
		);
	}
	return (
		<Loader
			type="Puff"
			color="#000000"
			height={250}
			width={250}
			timeout={1000} //3 secs
		/>
	);
}

export default Row;
