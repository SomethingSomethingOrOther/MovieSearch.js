import styled from "styled-components";

const SearchLayout = ({ children }) => {
  const [searchbar, iconbutton] = children;

  return (
    <div>
      <div>{searchbar}</div>
      <div>{iconbutton}</div>
    </div>
  );
};

export default SearchLayout;
