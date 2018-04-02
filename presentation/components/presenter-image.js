import React from "react";
import { Image } from "spectacle";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = css`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
`;

const imageStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  margin: 0;
`;

const PresenterImage = ({ src }) => {
  return (
    <div className={styles}>
      <Image className={imageStyles} src={src} />
    </div>
  );
};

PresenterImage.propTypes = {
  src: PropTypes.string
};

export default PresenterImage;
