import React from 'react';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: {},
    info: {}
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
    console.error('catch something: ', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return `Something went wrong`;
    }
    return children;
  }
}
