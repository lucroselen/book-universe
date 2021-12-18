import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.error) {
      return <strong className="h1 no-books">Something went wrong!</strong>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
