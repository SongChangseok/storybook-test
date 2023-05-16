import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.rgbColor};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
`;

const StyledOption = styled.option`
  background-color: ${({ rgbColor }) => rgbColor};
  color: ${({ fontColor }) => fontColor};
`;

const Select = ({ theme, onChange }) => {
  return (
    <StyledSelect onChange={onChange}>
      {Object.keys(theme).map((key) => {
        const { rgbColor, fontColor } = theme[key];
        return (
          <StyledOption key={key} rgbColor={rgbColor} fontColor={fontColor}>
            {key}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
