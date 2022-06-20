export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=KpTkaBu8YIoR1AM0ZX4xQ4n8aoCx2jLd`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}