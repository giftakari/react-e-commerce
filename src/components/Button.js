import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalized;
  font-size: 1.4rem;
  background: transparent;
  border: 0.5 solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5 rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
