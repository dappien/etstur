import Page from '../components/Layout/Page'
import Homepage from '../components/PageComponents/Homepage/index'

export default function Home({events,venues}) {


let nowMS = Date.now();
const upcomingEvents = [];
const finishedEvents = [];
const continuingEvents = [];
const thirtyDayinMS = 2592000000;

for (let i = 0; i < events.length; i++) {
  const eventDateMS= new Date(events[i].startingDate).getTime();
  const eventDateEndMS = new Date(events[i].finishingDate).getTime();
  if ((eventDateMS > nowMS) && (eventDateMS - thirtyDayinMS) < nowMS) {
    upcomingEvents.push(events[i])
  }
  if(eventDateEndMS < nowMS){
    finishedEvents.push(events[i]);
  }
  if((eventDateMS < nowMS) && (nowMS < eventDateEndMS) ) {
    continuingEvents.push(events[i]);
  }
}


  return (
   <Page>
      <Homepage events={events} upcomingEvents={upcomingEvents} finishedEvents={finishedEvents} continuingEvents={continuingEvents}/>
   </Page>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://dappien-events-api.herokuapp.com/events');
  const resVenues = await fetch('https://dappien-events-api.herokuapp.com/venues')
  const data = await res.json();
  const dataVenues = await resVenues.json();
  return {
    props:{
      events:data,
      venues:dataVenues
    }
  }
}

//If less than 30 days are left until the event starts, it will be added to the upcoming event section.

