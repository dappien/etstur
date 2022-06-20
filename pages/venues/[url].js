import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../components/Layout/Page';
import SingleVenuePage from '../../components/PageComponents/SingleVenuePage'

function SingleVenue({venues,events}) {
  const router = useRouter();
  const { url } = router.query;
  console.log(venues?.[0].city)
 
  return (
    <Page>
      <SingleVenuePage venues={venues} events={events}/>
    </Page>
  )
}

export default SingleVenue

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/venues/first-venue',
      // Object variant:
      { params: { url: 'second-venue' } },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const res = await fetch('https://dappien-events-api.herokuapp.com/events');
  const resVenues = await fetch(`https://dappien-events-api.herokuapp.com/venues?venueCode=${params.url}`)
  const dataVenues = await resVenues.json();
  const data = await res.json();
  return {
    props:{
      venues:dataVenues,
      events:data
    }
  }
}

