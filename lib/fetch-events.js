export async function loadEvents() {
  // Call an external API endpoint to get posts

  const resEvent = await fetch('https://dappien-events-api.herokuapp.com/events');
  const dataEvent = await resEvent.json();

  return dataEvent
}