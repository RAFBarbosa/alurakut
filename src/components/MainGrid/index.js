import styled from "styled-components";

const MainGrid = styled.main`
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  width: 100%;

  .profileArea {
    display: none; 
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1100px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;
