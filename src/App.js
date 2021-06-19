import React from "react";
import "./App.css";
import Row from "./components/row";
import requests from "./components/requests";
import Navbar from "./components/navbar";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Action" fetchUrl={requests.fetchActionMovies} />
			<Row title="TV" fetchUrl={requests.fetchTV} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		</div>
	);
}

export default App;
