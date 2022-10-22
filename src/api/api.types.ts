export interface ChooseAnswerDto {
  correct: string;
}

export enum Type {
  'playlist' = 'playlist',
  'artist' = 'artist',
}

export interface PlaylistDto {
  id: string;
  name: string;
  cover: string;
  type: Type;
  tracks?: TrackDto[];
  url?: string;
}

export interface ResultDto {
  playlist: PlaylistDto;
  guessed: number;
  text: string;
}

export interface ShortTrackDto {
  id: string;
  name: string;
  artist: string;
}

export interface TrackDto {
  id: string;
  name: string;
  artist: string;
  album: string;
  mp3?: string;
}

export interface TracksForUserDto {
  tracks: ShortTrackDto[];
  mp3: string;
}
