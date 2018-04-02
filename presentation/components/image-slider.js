import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import ImageSlide from "./image-slide";

const slideStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

class ImageSlider extends React.Component {
  static propTypes = {
    duration: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    duration: 3500
  }

  state = {
    images: [],
    currentIndex: 0
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      images: newProps.images
    });

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.showImage();
    }, newProps.duration);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showImage() {
    const { currentIndex, images } = this.state;
    this.setState({
      currentIndex: currentIndex < images.length - 1 ? currentIndex + 1 : 0
    });
  }

  render() {
    const imageUrl = this.state.images[this.state.currentIndex];

    return (
      <div className={slideStyle}>
        <ImageSlide src={ imageUrl }/>
      </div>
    );
  }
}

export default ImageSlider;
