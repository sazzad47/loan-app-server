import React from "react";
import api from "./api";

class Interceptor extends React.Component {
  constructor(props) {
    super(props);
    this.request_interceptor = null;
  }
  componentDidMount() {
    this.request_interceptor = api.interceptors.request.use((config) => {
      if (config.url === "") {
        config.headers = {
          "Content-Type": "multipart/form-data",
        };
      } else {
        config.headers = {
          ...config.headers,
        };
      }
      return config;
    });
  }

  componentWillUnmount() {
    if (!this.request_interceptor) return;
    api.interceptors.request.eject(this.request_interceptor);
  }

  render() {
    return null;
  }
}

export default Interceptor;
