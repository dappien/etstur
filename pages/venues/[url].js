import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../components/Layout/Page';
import SingleVenuePage from '../../components/PageComponents/SingleVenuePage'

function SingleVenue({venues,events}) {
  const router = useRouter();
  const { url } = router.query;
 
  return (
    <Page style="fullWidth">
      <SingleVenuePage venues={venues} events={events}/>
    </Page>
  )
}

export default SingleVenue

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dappien-events-api.herokuapp.com/venues')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { url: post.venueCode }, // post.slug could be /blog/nature/hike1
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
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

