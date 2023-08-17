import { styled } from "styled-components";

export const SpellList = styled.ul`
  margin-top: 5vh;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 2vh 0;
`;

export const Item = styled.li`
  width: 30%;
`;

export const ItemName = styled.span`
  cursor: pointer;
  border-bottom: 1px solid;
  transition: 350ms;
  &:hover {
    padding: 0 8px;
  }
`;
