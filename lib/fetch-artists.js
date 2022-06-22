export async function loadArtists() {
    // Call an external API endpoint to get posts
  
    const resArtist = await fetch('https://dappien-events-api.herokuapp.com/artists');
    const dataArtist = await resArtist.json();
  
    return dataArtist
  }