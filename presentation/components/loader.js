import styled from "react-emotion";
import { spin } from "../config/keyframes";

const Loader = styled("div")`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #3498db;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 1s ease infinite;
  z-index: 1;
`;

export default Loader;
