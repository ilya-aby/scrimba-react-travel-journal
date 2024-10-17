/* eslint-disable react/prop-types */

import locationIcon from '../assets/location-icon.png'
export default function Card(props) {

  return (
    <div className="card">
      <div className="card-image-container" style={{ backgroundImage: `url(${props.imageUrl})` }}>
      </div>
      <div className="card-info">
        <div className="card-info-top">
          <img className="location-icon" src={locationIcon} />
          <span className="location">{props.location}</span>
          <a className="google-maps-url" href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-date">{props.startDate} - {props.endDate}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  ) 
}