import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { gratitudes: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/gratitudes/").then(res => {
      this.setState({ gratitudes: res.data });
    });
  }

  render() {
    const dateToday = moment().format("MMMM Do YYYY");
    console.log("gratitudes", this.state.gratitudes);
    return (
      <div className='home'>
        <img
          className='home__animated_penguin'
          src='/images/penguin.png'
          alt='penguin animation'
        />
        <h3>Your List Of Gratitudes</h3>
        <div className='home__gratitudes'>
          <h4 className='home__gratitudes__date'>{dateToday}</h4>
          <div>
            Sed lacus magna, rhoncus sed lorem ac, eleifend pretium nisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
        <div className='home__gratitudes'>
          <h4 className='home__gratitudes__date'>{dateToday}</h4>
          <div>
            Sed lacus magna, rhoncus sed lorem ac, eleifend pretium nisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
        <div className='home__gratitudes'>
          <h4 className='home__gratitudes__date'>{dateToday}</h4>
          <div>
            Sed lacus magna, rhoncus sed lorem ac, eleifend pretium nisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
