import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events' };
    throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
      status: 500,
    });
    // when error thrown ? React renders 'closest error element' => here: root route ('bubbles up')
  } else {
    return response;
  }
}
