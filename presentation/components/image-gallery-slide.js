import React from "react";
import PropTypes from "prop-types";
import { Slide } from "spectacle";

class ImageSlider extends React.Component {
  static propTypes = {
    children: PropTypes.children,
    duration: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    duration: 3500
  };

  state = {
    images: [],
    currentIndex: 0
  };

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

    return <Slide bgImage={imageUrl} bgDarken={0.5}>{this.props.children}</Slide>;
  }
}

export default ImageSlider;
