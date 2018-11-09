import React from "react";
import axios from "axios";
import Loader from "../Loader";

class ApiData extends React.Component {
  baseUrl = "http://localhost:3000";
  state = {
    data: null,
    isLoading: true
  };

  componentDidMount() {
    const { url } = this.props;
    console.log(this.props.children);
    axios.get(`${this.baseUrl}/${url}`).then(res => {
      const data = res.data;
      this.setState({ data, isLoading: false });
    });
  }

  render() {
    const { data, isLoading } = this.state;
    return isLoading ? <Loader /> : this.props.children(data, isLoading);
  }
}

export default ApiData;
