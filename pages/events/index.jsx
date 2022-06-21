import React from 'react'
import Page from '../../components/Layout/Page'
import EventsPage from '../../components/PageComponents/Events'
import { loadEvents} from '../../lib/fetch-events'
import { loadVenues } from '../../lib/fetch-venues'

function index({events,venues}) {
  return (
    <Page style="fullWidth">
        <EventsPage events={events} venues={venues}/>
    </Page>
  )
}

export default index


// export const getStaticProps = async () => {
//   const res = await fetch('https://dappien-events-api.herokuapp.com/events');
//   const resVenues = await fetch('https://dappien-events-api.herokuapp.com/venues')
//   const data = await res.json();
//   const dataVenues = await resVenues.json();
//   return {
//     props:{
//       events:data,
//       venues:dataVenues
//     }
//   }
// }


export async function getStaticProps() {
  const events = await loadEvents()
  const venues = await loadVenues()

  return { props: { events,venues } }
}