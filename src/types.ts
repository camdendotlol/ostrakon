export interface ChartItem {
  title: string,
  creator?: string,
  coverImg: HTMLImageElement,
  coverURL: string
}

export interface ChartSize {
  x: number,
  y: number
}

export enum BackgroundTypes {
  Color = 'color',
  Image = 'image'
}

export interface Chart {
  title: string,
  items: Array<ChartItem | null>,
  size: ChartSize,
  background: {
    type: BackgroundTypes,
    value: string,
    img: HTMLImageElement | null
  },
  showNumbers: boolean,
  showTitles: boolean,
  gap: number,
  font?: string,
  textColor?: string,
  shadows?: boolean
}

export interface IgdbItem {
  name: string,
  cover: string
}

// Charts stored in localStorage
export interface StoredChart {
  timestamp: number,
  name: string | null,
  data: Chart,
  currentlyActive: boolean
}

// There's way more stuff from the APIs but this is all that's relevant here.
export interface BookResult {
  title: string,
  author_name: string,
  cover_edition_key?: string
}

export interface MusicResult {
  name: string,
  artist: string,
  image: {
    '#text': string,
    size: string
  }[]
}

export interface GameResult {
  name: string,
  cover: string
}

export interface MovieResult {
  title: string,
  poster_path: string
}

export interface TVResult {
  name: string,
  poster_path: string
}

export interface CustomResult {
  title: string,
  creator?: string,
  imageURL: string,
  type: 'custom'
}

export enum SearchTypes {
  Music = 'music',
  Books = 'books',
  Games = 'games',
  Movies = 'movies',
  TV = 'tv',
  Custom = 'custom'
}

export type Period = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month'

export type LastfmDataType = 'artists' | 'albums'

export interface LastfmChartResponseItem {
  artist: {
    url: string,
    name: string,
    mbid: string
  },
  image: {
    size: 'small' | 'medium' | 'large' | 'extralarge',
    '#text': string
  }[],
  mbid: string,
  url: string,
  playcount: string,
  '@attr': {
    rank: string
  },
  name: string
}

export type Result = BookResult | MusicResult | GameResult | MovieResult | TVResult | CustomResult
