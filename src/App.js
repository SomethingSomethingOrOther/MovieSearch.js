import "./styles.css";
import styled from "styled-components";
import SearchLayout from "../src/LayoutComponents.js/SearchLayout";
import { Search, Icon } from "./Components.js/Search";
import { useState, useEffect } from "react";
import { MovieListItem } from "../src/Components.js/MovieListItem";
import ListRenderer from "./Components.js/MovieListItem"
import Popup from "reactjs-popup";

const Image = styled.img`
  width: 1rem;
  height: 1rem;
  &:hover {
    transform: rotate(180deg);
    cursor: pointer;
  }
`;
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieData, setMovieData] = useState([]);

  const REACT_API_KEY = "8c58c142";

  
  
  const handleQuery = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${REACT_API_KEY}&s=${searchQuery}`
      );
      const jsonData = await response.json();
      if (jsonData.Search) {
        setMovieData(jsonData.Search);
      } else {
        setMovieData([]);
      }
      console.log(movieData);
    } catch (err) {
      console.error(err);
    }
  };
  ////////////////////////
  const QueryListItem = ({ queryResource }) => {
    const { Title, Year } = queryResource;
    const arrowDown = "https://www.svgrepo.com/show/454086/arrowdown.svg";

    return (
      <>
        <h2>{Title}</h2>
        <p>Release:{Year}</p>
       </>
    )
  }

  ///////

  return (
    <div className="App">
      <h1>Find your favorite movies</h1>
      <SearchLayout>
        <Search setSearchQuery={setSearchQuery} />
        <Icon handleQuery={handleQuery} />
      </SearchLayout>
      <div>
        <ListRenderer
          items={movieData}
          resourceName="queryResource"
          itemComponent={QueryListItem}
        />
      </div>
    </div>
  );
}
