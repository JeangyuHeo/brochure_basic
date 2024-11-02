export interface Song {
  id: number;
  title: string;
  description: string;
  image: string;
  musical: string;
  tags: string[];
  songDescription: string;
}

export interface DirectorExperience {
  year: string;
  title: string;
  role: string;
}

export interface CastMember {
  id: number;
  name: string;
  role: string;
  image: string;
  songs: Song[];
  directorExperiences?: DirectorExperience[];
}