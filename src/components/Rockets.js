import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRockets, bookRocket, cancelRocket } from '../redux/Rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const { rocketsList, isLoading } = useSelector((store) => store.rockets);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section>
      {rocketsList.map((rocket) => (
        <div key={rocket.id} className={`card ${rocket.id}`}>
          <div className="image-container">
            <img src={rocket.flickr_images[0]} alt="Rocket" />
          </div>
          <div className="content">
            <h3 className="title">{rocket.name}</h3>
            <p className="description">{rocket.description}</p>
            {rocket.reserved ? (
              <button type="submit" className={`cancel-btn canc-btn-${rocket.id}`} onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>
            ) : (
              <button type="submit" className={`reservation-button btn-${rocket.id}`} onClick={() => dispatch(bookRocket(rocket.id))}>Reserve Now</button>
            )}

          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
