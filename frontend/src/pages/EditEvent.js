import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEvent = () => {
  const { event } = useRouteLoaderData('event-detail');

  return <EventForm event={event} />;
};

export default EditEvent;
