export interface Song {
  title: string;
  description: string;
}

export interface CastMember {
  id: number;
  name: string;
  image: string;
  role: string;

  songs: Song[];
}