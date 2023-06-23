import styled from "styled-components";
import Popup from "reactjs-popup";

export const MovieListItem = ({ resource }) => {
  const { Title, Year, Rated, Plot } = resource;
  return (
    <>
      <h2>{Title}</h2>
      <h4>{Year}</h4>
      <p>{Rated}</p>
      <p>{Plot}</p>
    </>
  );
};

const ListRenderer = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};
export default ListRenderer;
