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
  const res = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`)
  const json = res.json()

  return json
}

export default {
  getHomeList: async (): Promise<FilmData[]> => {
    return [
      {
        slug: 'originals',
        title: 'Originaux de NetFlix',
        items: await basicFetch(
          `/discover/tv/?with_network=213&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
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
          `/movie/top_rated/?&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'sci-fi_fantasy',
        title: 'Science-Fiction & Fantastique',
        items: await basicFetch(
          `/discover/movie?with_genres=10765&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'animation',
        title: 'Animation',
        items: await basicFetch(
          `/discover/movie?with_genres=30&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
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
          return info = await basicFetch(`/movie/${movieId}?language=fr&api_key=${process.env.REACT_APP_REACT_APP_API_KEY}`);

        case 'tv':
          return info = await basicFetch(`/tv/${movieId}?language=fr&api_key=${process.env.REACT_APP_API_KEY}`);

        default:
          info = {}
          break;
      }
    }

  }
};

