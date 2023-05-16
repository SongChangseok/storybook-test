import styled from "styled-components";

const ColorTestDiv = styled.div`
  width: 30%;
`;

const BorderColorSpan = styled.span`
  background-color: ${({ theme }) => theme.borderColor};
  display: block;
  height: 20px;
`;
const FontColorSpan = styled.span`
  background-color: ${({ theme }) => theme.fontColor};
  display: block;
  height: 20px;
`;
const RgbColorSpan = styled.span`
  background-color: ${({ theme }) => theme.rgbColor};
  display: block;
  height: 20px;
`;

const ColorTest = ({ variant = "mint" }) => (
  <ColorTestDiv>
    <p>{variant}</p>
    <BorderColorSpan />
    <FontColorSpan />
    <RgbColorSpan />
  </ColorTestDiv>
);

export default ColorTest;
