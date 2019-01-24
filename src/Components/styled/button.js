import styled from 'styled-components'


export const StyledButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`