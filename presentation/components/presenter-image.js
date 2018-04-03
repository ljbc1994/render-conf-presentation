import React from "react";
import { Image } from "spectacle";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";

const styles = css`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
`;

const ImageBackground = styled("div")`
  background-image: url('${(props) => props.src}');
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
`;

const PresenterImage = ({ src }) => {
  return (
    <div className={styles}>
      <ImageBackground src={src} />
    </div>
  );
};

PresenterImage.propTypes = {
  src: PropTypes.string
};

export default PresenterImage;
