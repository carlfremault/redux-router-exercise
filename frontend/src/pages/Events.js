import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
    //   status: 500,
    // });
    // when error thrown ? React renders 'closest error element' => here: root route ('bubbles up')
    throw json({ message: 'Could not fetch events' }, { status: 500 });
    // also: throw json() ? no need to 'JSON.parse()'
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  // data returned from promise is stored in defer object under events key
  return defer({
    events: loadEvents(),
  });
}
