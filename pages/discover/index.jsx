import React from 'react'
import { loadEvents} from '../../lib/fetch-events'
import { loadVenues } from '../../lib/fetch-venues';
import { useRouter } from 'next/router'
import SearchPage from '../../components/PageComponents/SearchPage'
import Page from '../../components/Layout/Page'
import EventCard from '../../components/Cards/EventCard';
import DiscoverPage from '../../components/PageComponents/Discover'

function Search({events,venues}) {
  const { query } = useRouter();
  let nowMS = Date.now();
  const queryLowerCase = query?.q?.toLowerCase();
  const cityQuery = query?.city?.toLocaleLowerCase();
  const minimumPriceQuery = parseInt(query?.min);
  const maximumPriceQuery = parseInt(query?.max);
  const startingDateQuery = parseInt(query?.sd);
  const finishingDateQuery = parseInt(query?.fd);
  const categoryQuery = query?.category?.toLocaleLowerCase();
  const eventLists = [];
  const venueList = [];


  for (let i = 0; i < events.length; i++) {
      if ((events[i].city == cityQuery) && (events[i].category.toLocaleLowerCase() == categoryQuery) && (minimumPriceQuery < Math.min(parseInt(events[i].ticketPrices))) && (maximumPriceQuery > Math.min(parseInt(events[i].ticketPrices))) && (nowMS > startingDateQuery) && (nowMS < finishingDateQuery) ) {
        eventLists.push(events[i])
      }
  }
  
  return (
    <Page style="fullWidth">
      <DiscoverPage eventLists={eventLists}/>
  
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