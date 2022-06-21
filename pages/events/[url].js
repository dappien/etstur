import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../components/Layout/Page';
import SingleEventPage from '../../components/PageComponents/SingleEventPage'

function SingleEvent({events,venues}) {
  const router = useRouter();
  const { url } = router.query;
 
  return (
    <Page style="fullWidth">
      <SingleEventPage  events={events} venues={venues}/>
    </Page>
  )
}

export default SingleEvent

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/events/first-venue',
      // Object variant:
      { params: { url: 'second-venue' } },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const res = await fetch(`https://dappien-events-api.herokuapp.com/events?url=${params.url}`);
  const resVenues = await fetch('https://dappien-events-api.herokuapp.com/venues');
  const dataVenues = await resVenues.json();
  const data = await res.json();
  return {
    props:{
      events:data,
      venues:dataVenues
    }
  }
}


