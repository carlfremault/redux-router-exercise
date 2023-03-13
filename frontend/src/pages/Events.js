import React from 'react';
import { Link } from 'react-router-dom';

const EVENTS = [
  { id: 'e1', name: 'Event1' },
  { id: 'e2', name: 'Event2' },
  { id: 'e3', name: 'Event3' },
];

const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
