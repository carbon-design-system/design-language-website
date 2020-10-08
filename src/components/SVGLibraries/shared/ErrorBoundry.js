import React from 'react';
import { errorContainer } from './ErrorBoundry.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={errorContainer}>
          Something went wrong, check this icon’s metadata
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
