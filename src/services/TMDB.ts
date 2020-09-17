
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
          `/discover/tv?with_network=213&append_to_response=media_type&language=fr&api_key=${process.env.REACT_APP_API_KEY}`,
        )
      },
      {
        slug: 'trending',
        title: 'Recommandations',
        items: await basicFetch(
          `/trending/all/week?&language=fr&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
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
        slug: 'science_fiction',
        title: 'Science Fiction',
        items: await basicFetch(
          `/discover/movie?with_genres= 878&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
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
        slug: 'western',
        title: 'Western',
        items: await basicFetch(
          `/discover/movie?with_genres= 37&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'drama',
        title: 'Drame',
        items: await basicFetch(
          `/discover/movie?with_genres= 18&language=fr&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'animation',
        title: 'Animation',
        items: await basicFetch(
          `/discover/movie?with_genres= 16&language=fr&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'fantasy',
        title: 'Fantastique',
        items: await basicFetch(
          `/discover/movie?with_genres= 14&language=fr&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'comedy',
        title: 'Comedie',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=fr&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'adventure',
        title: 'Aventure',
        items: await basicFetch(
          `/discover/movie?with_genres=12&language=fr&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(
          `/discover/movie?with_genres=80&language=fr&include_adult=false&append_to_response=media_type&api_key=${process.env.REACT_APP_API_KEY}`
        )
      }
    ]
  },

  getMovieInfo: async(movieId: number, type: string) =>  {
    let info = {}
    if (movieId) {

      switch(type) {

        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=fr&api_key=${process.env.REACT_APP_REACT_APP_API_KEY}&append_to_response=videos`)
          return info;

        case 'tv':
          return info = await basicFetch(`/tv/${movieId}?language=fr&api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`);

        default:
          info = {}
          break;
      }
    }

  }

};


