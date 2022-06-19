import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ошибка не отлавливается внутри самого себя
    // Также её не может отловить внешний предохранитель
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error handled</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
