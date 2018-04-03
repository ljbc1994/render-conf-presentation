import React from "react";
import styled, { css } from "react-emotion";
import PropTypes from "prop-types";
import Loader from "./loader";

const IFrameContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iframeStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0 auto;
  transform: translateX(-50%) translateY(-50%);
  border: 0;
  overflow: hidden;
`;

class IFrame extends React.Component {
  static propTypes = {
    height: PropTypes.string,
    src: PropTypes.string
  };

  static defaultProps = {
    height: "920px"
  };

  state = {
    isLoading: true
  };

  componentWillUnmount() {
    if (this.iframe) {
      this.iframe.removeEventListener("load", this.onIFrameLoad);
    }
  }

  getIFrameRef(ref) {
    this.iframe = ref;

    if (this.iframe) {
      this.iframe.addEventListener("load", this.onIFrameLoad);
    }
  }

  onIFrameLoad = () => {
    this.setState({
      isLoading: false
    });
  };

  iframe = {};

  render() {
    return (
      <IFrameContainer>
        {this.state.isLoading && <Loader />}
        <iframe
          ref={(ref) => this.getIFrameRef(ref)}
          className={iframeStyle}
          {...this.props}
        />
      </IFrameContainer>
    );
  }
}

export default IFrame;
