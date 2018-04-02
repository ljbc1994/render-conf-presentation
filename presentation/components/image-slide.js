import styled from "react-emotion";

const ImageSlide = styled("div")`
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  &:before {
    top: 0;
    left: 0;
    content: "";
    background-image: url(${require("../../assets/render-bg.png")});
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.6;
    background-position: center center;
    background-size: cover;
    filter: blur(7.5px);
  }
`;

export default ImageSlide;
