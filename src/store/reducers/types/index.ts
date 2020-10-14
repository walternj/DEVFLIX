import {SET_FEATURED} from '../../actions/index'
import {SET_MYLIST} from '../../actions/index'

export interface MovieState {
  featuredMovie?: {
    id: number;
    backdrop_path: string;
    name?: string;
    original_name?: string;
    title?: string;
    original_title?: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date?: string;
    release_date?: string;
    media_type?: string;
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

export interface MyListState {
  myList?:[{
    id: number;
    backdrop_path: string;
    poster_path: string;
    name?: string;
    original_name?: string;
    title?: string;
    original_title?: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date?: string;
    release_date?: string;
    media_type?: string;
    genres: [{
      id: number;
      name: string;
    }],
    videos?:{
      results:[{
        key: string
      }]
    }
  }] | null | undefined
}

export interface MyList {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name?: string;
  original_name?: string;
  title?: string;
  original_title?: string;
  vote_average: number;
  number_of_seasons: number;
  overview: string;
  first_air_date?: string;
  release_date?: string;
  media_type?: string;
  genres: [{
    id: number;
    name: string;
  }],
  videos?:{
    results:[{
      key: string
    }]
  }
}

interface MyListAction extends Array<any> {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name?: string;
  original_name?: string;
  title?: string;
  original_title?: string;
  vote_average: number;
  number_of_seasons: number;
  overview: string;
  first_air_date?: string;
  release_date?: string;
  media_type?: string;
  genres: [{
    id: number;
    name: string;
  }],
  videos?:{
    results:[{
      key: string
    }]
  }

}

export interface SetFeaturedAction {
  type: typeof SET_FEATURED,
  value: {}
}

export interface SetMyListAction {
  type: typeof SET_MYLIST,
  value: MyListAction
}

