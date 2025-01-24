import { useState } from "react";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjVhMzdiMGQ1OTk2OThjYWZlNjFkOTRmMzJhM2Q0YiIsIm5iZiI6MTczNzYzMjg3Mi4xNTIsInN1YiI6IjY3OTIyYzY4ZWZhODUzMzdjM2ZhNzg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vg2ED0KaR7sqVtK-J4krRb7fJm9B-4oIR1tI3HxTfw",
      },
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_TMDB_BASE_URL}/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${encodeURIComponent(
          searchInput
        )}&include_adult=true&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setSearchResults(data.results);
      console.log(searchResults);
    } catch (err) {
      console.log("error: " + err);
    }
  };

  const resultList = searchResults.map((movie) => (
    <li key={movie.id}>
      <div>{movie.original_title}</div>
    </li>
  ));

  return (
    <>
      <h1>Search Page</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          console.log(searchInput);
        }}
      />
      <button onClick={handleSearch}>search</button>

      <ul>{resultList}</ul>
    </>
  );
}
