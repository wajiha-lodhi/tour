import React, { Component } from 'react';
import './SingleTour.css';

class SingleTour extends Component {
  state ={
    showInfo: false
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    const {id, img, city, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return (
      <div className="singletour-card">
        <img src={img} />
        <h3>{name}</h3>
        <h3>{city}</h3>
        <span onClick={this.handleInfo}>toggle</span>
        <br />
        <span onClick={()=>{removeTour(id)}}>Delete X</span>
        {this.state.showInfo && <p>{info}</p>}
      </div>
    )
  }
}
export default SingleTour;