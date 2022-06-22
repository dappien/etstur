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
  // Call an external API endpoint to get posts
  const res = await fetch('https://dappien-events-api.herokuapp.com/events')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { url: post.url }, // post.slug could be /blog/nature/hike1
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
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


