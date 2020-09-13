
/*
  - Originals netflix
  - treanding
  - top rated
  - action
  - comedy
  - horror
  - romance
  - documentary
*/

export interface FilmData {
  slug?: string,
  title: string,
  items: {
    results:[{
    id: number,
    name: string,
    backdrop_path: string,
    poster_path: string,
    overview: string,
    original_title: string
  }]}
}
  const basicFetch = async (endpoint: string) => {
    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`)
      const json = await req.json()
      return json

    } catch (error) {
      console.log(error)
    }
  }

export default {
  getHomeList: async (): Promise<FilmData[]> => {
    return [
      {
        slug: 'originals',
        title: 'Originaux de NetFlix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=fr&api_key=${process.env.REACT_APP_API_KEY}`,
        )
      },
      {
        slug: 'trending',
        title: 'Recommandations',
        items: await basicFetch(
          `/trending/all/week?&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'toprated',
        title: 'Les mieux notés',
        items: await basicFetch(
          `/movie/top_rated?&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'comedy',
        title: 'Comedie',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'horror',
        title: 'Horreur',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'documentary',
        title: 'Documentaire',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      }
    ]
  },

  getMovieInfo: async(movieId: number, type: string) =>  {
    let info = {}
    if (movieId) {

      switch(type) {

        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=fr&api_key=${process.env.REACT_APP_REACT_APP_API_KEY}`)
          return info;

        case 'tv':
          return info = await basicFetch(`/tv/${movieId}?language=fr&api_key=${process.env.REACT_APP_API_KEY}`);

        default:
          info = {}
          break;
      }
    }

  }
};


