import React from 'react'
import Page from'../../components/Layout/Page'
import VenuesPage from '../../components/PageComponents/Venues'
import { loadEvents} from '../../lib/fetch-events'
import { loadVenues } from '../../lib/fetch-venues'
function index({venues}) {
  return (
    <Page style="fullWidth">
      <VenuesPage venues={venues}/>
    </Page>
  )
}

export default index

// export const getStaticProps = async () => {
//     const res = await fetch('https://dappien-events-api.herokuapp.com/events');
//     const resVenues = await fetch('https://dappien-events-api.herokuapp.com/venues')
//     const data = await res.json();
//     const dataVenues = await resVenues.json();
//     return {
//       props:{
//         venues:dataVenues
//       }
//     }
//   }

  export async function getStaticProps() {
    const events = await loadEvents()
    const venues = await loadVenues()
  
    return { props: { events,venues } }
  }