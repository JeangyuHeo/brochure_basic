export interface Song {
  id: number;
  title: string;
  description: string;
  image: string;
  musical: string;
  tags: string[];
  songDescription: string;
}

export interface CastMember {
  id: number;
  name: string;
  image: string;
  role: string;

  songs: Song[];
}