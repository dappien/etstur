import React from 'react'
import Page from'../../components/Layout/Page'
import VenuesPage from '../../components/PageComponents/Venues'
function index({venues}) {
  return (
    <Page>
      <VenuesPage venues={venues}/>
    </Page>
  )
}

export default index

export const getStaticProps = async () => {
    const resVenues = await fetch('https://dappien-events-api.herokuapp.com/venues')
    const dataVenues = await resVenues.json();
    return {
      props:{
        venues:dataVenues
      }
    }
  }