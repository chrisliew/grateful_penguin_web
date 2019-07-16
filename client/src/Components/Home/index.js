import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";
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
    this.props.fetchGratitudes();
  }

  handleOnChange = event => {
    this.setState({ addGratitude: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const gratitude = { gratitude: this.state.addGratitude };
    this.props.addGratitude(gratitude);
    this.setState({ addGratitude: "" });
  };

  render() {
    const gratitudes = this.props.gratitudes;
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
              value={this.state.addGratitude}
              placeholder='Enter stuff here'
            />
          </form>
        </div>
        <ListGratitudes gratitudes={gratitudes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gratitudes: state.gratitudes
});

export default connect(
  mapStateToProps,
  actions
)(Home);
