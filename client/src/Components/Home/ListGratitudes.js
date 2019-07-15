import React, { Component } from "react";
import moment from "moment";

class ListGratitudes extends Component {
  render() {
    const { gratitudes } = this.props;
    const listGratitudes = gratitudes
      .map(gratitude => (
        <div className='gratitudes' key={gratitude._id}>
          <h4 className='gratitudes__date'>
            {moment(gratitude.date).format("MMMM Do YYYY")}
          </h4>
          <div>{gratitude.gratitude}</div>
        </div>
      ))
      .reverse();

    return (
      <div>
        <h3>Your List Of Gratitudes</h3>
        {listGratitudes}
      </div>
    );
  }
}

export default ListGratitudes;
