import React from 'react'
import { loadEvents} from '../../lib/fetch-events'
import { loadVenues } from '../../lib/fetch-venues';
import { useRouter } from 'next/router'
import SearchPage from '../../components/PageComponents/SearchPage'
import Page from '../../components/Layout/Page'

function Search({events,venues}) {
  const { query } = useRouter();
  const queryLowerCase = query?.q?.toLowerCase();
  const cityQuery = query?.city?.toLowerCase();
  const minimumPriceQuery = parseInt(query?.min);
  const maximumPriceQuery = parseInt(query?.max);
  const eventList = [];
  const venueList = [];

  for (let i = 0; i < events.length; i++) {
    if(events[i].title.toLowerCase().includes(queryLowerCase)){
      eventList.push(events[i])
    }
  }

  for (let i = 0; i < venues?.length; i++) {
    if(venues[i].name.toLowerCase().includes(queryLowerCase)){
      venueList.push(venues[i])
    }
  }


  return (
    <Page style="fullWidth">
      {/* <SearchPage events={eventList} venues={venueList} query={queryLowerCase}/> */}
      <div>
        <h2>cityQuery:{cityQuery}</h2>
        <h2> minimumPriceQuery:{minimumPriceQuery}</h2>
        <h2>maxiumumPriceQuery :{maximumPriceQuery}</h2>
      </div>
  
    </Page>
  )
}

export default Search



// This function runs only on the server side
export async function getStaticProps() {
  const events = await loadEvents()
  const venues = await loadVenues();
  return { props: { events,venues } }
}