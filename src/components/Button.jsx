import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.rgbColor};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
`;

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
