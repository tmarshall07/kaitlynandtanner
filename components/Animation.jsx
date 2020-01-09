import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: props.isVisible,
    };

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const { animateOnMount } = this.props;
    if (animateOnMount) {
      this.animateIn();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      isVisible,
    } = this.props;

    if (prevProps.isVisible && !isVisible) {
      this.animateOut();
    } else if (!prevProps.isVisible && isVisible) {
      this.animateIn();
    }
  }

  animateOut = () => {
    const { animOut } = this.props;

    const animation = anime({
      targets: this.containerRef.current?.children[0],
      ...animOut,
    });

    animation.finished.then(() => {
      this.setState({ shouldRender: false });
    });
  }

  animateIn = () => {
    const { animIn } = this.props;

    anime({
      targets: this.containerRef.current.children[0],
      ...animIn,
    });

    this.setState({ shouldRender: true });
  }

  render() {
    const { children, isVisible } = this.props;
    const { shouldRender } = this.state;

    return (isVisible || shouldRender) && (
      <Container ref={this.containerRef}>
        {children}
      </Container>
    );
  }
}

const Container = styled.div``;

Animation.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

Animation.defaultProps = {
};
