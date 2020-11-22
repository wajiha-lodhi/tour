import React, { Component, props, state } from 'react';
import SingleTour from '../SingleTour/SingleTour';
import './TourList.css';
import {tourData} from './tourData';

class TourList extends Component {
  state={
    tours: tourData,
  }
  removeTour = id => {
    const {tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    })
  } 
  render() {
    const {tours} = this.state;
    console.log(this.state.tours);
    return (
      <div className="tourlist">
        {tours.map(tour=>{
          return(
          <SingleTour key={tour.id} tour={tour} removeTour={this.removeTour} />
          )
        })}
      </div>
    )
  }
}
export default TourList;