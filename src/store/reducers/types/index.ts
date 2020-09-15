export const SET_FEATURED = 'SET_FEATURED'

export interface MovieState {
  featuredMovie?: {
    id: number;
    backdrop_path: string;
    original_name: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date: string;
    genres: [{
      id: number;
      name: string;
    }],
    videos?:{
      results:[{
        key: string
      }]
    }
  } | null | undefined
}

export interface SetFeaturedAction {
  type: typeof SET_FEATURED,
  value: {}

}
