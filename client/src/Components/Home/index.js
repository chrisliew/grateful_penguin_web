import React, { Component } from "react";
import axios from "axios";
import AnimatedPenguin from "./AnimatedPenguin";
import ListGratitudes from "./ListGratitudes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratitudes: [],
      addGratitude: ""
    };
  }

  componentDidMount() {
    console.log("wtf bro?");
    axios.get("http://localhost:5000/api/gratitudes/").then(res => {
      this.setState({ gratitudes: res.data });
    });
  }

  handleOnChange = event => {
    this.setState({ addGratitude: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/gratitudes/", {
        gratitude: this.state.addGratitude
      })
      .then(res => {
        this.setState(prevState => {
          return {
            gratitudes: [...prevState.gratitudes, res.data]
          };
        });
      });
  };

  render() {
    const { gratitudes } = this.state;
    return (
      <div className='home'>
        <AnimatedPenguin />
        <div className='add_gratitude'>
          <h3 className='add_gratitude__header'>Add Gratitude Here</h3>
          <form onSubmit={this.handleOnSubmit}>
            <input
              className='add_gratitude__textarea'
              onChange={this.handleOnChange}
              type='text'
              placeholder='Enter stuff here'
            />
            {/* <input type='submit' /> */}
          </form>
        </div>
        <ListGratitudes gratitudes={gratitudes} />
      </div>
    );
  }
}

export default Home;
