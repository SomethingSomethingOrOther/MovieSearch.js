import styled from "styled-components";

const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;
const Button = styled.button`
  width: 90%;
  height: 2rem;
  border: none;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 1rem;
  width: 90%;
`;

export const Icon = ({ handleQuery }) => {
  const searchIcon = "https://www.svgrepo.com/show/513607/search.svg";
  return (
    <div>
      <Button onClick={handleQuery}>
        <Image src={searchIcon} alt="searchicon" />
      </Button>
    </div>
  );
};
export const Search = ({ setSearchQuery }) => {
  return (
    <div>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Find Movies..."
      />
    </div>
  );
};
