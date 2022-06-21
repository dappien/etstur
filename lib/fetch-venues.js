export async function loadVenues() {
    // Call an external API endpoint to get posts
    const resVenue = await fetch('https://dappien-events-api.herokuapp.com/venues');
    const dataVenue = await resVenue.json()
  
    return dataVenue
  }


