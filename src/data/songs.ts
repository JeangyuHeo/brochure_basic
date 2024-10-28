export interface Song {
  id: number;
  title: string;
  description: string;
  image: string;
}

const songs: Song[] = [
  // 1부 출연진의 노래들
  {
    id: 1,
    title: "첫 번째 곡",
    description: "오프닝 넘버",
    image: "/images/total.jpg",
  },
  {
    id: 2,
    title: "주인공의 아리아",
    description: "솔로 곡",
    image: "/images/total.jpg",
  },
  {
    id: 3,
    title: "첫 등장",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
  },
  {
    id: 4,
    title: "내 마음의 소리",
    description: "2막 듀엣 곡",
    image: "/images/total.jpg",
  },
  {
    id: 5,
    title: "마지막 인사",
    description: "엔딩 곡",
    image: "/images/total.jpg",
  },
  {
    id: 6,
    title: "새로운 시작",
    description: "1막 앙상블 곡",
    image: "/images/total.jpg",
  },
  {
    id: 7,
    title: "사랑의 고백",
    description: "2막 솔로 곡",
    image: "/images/total.jpg",
  },
  {
    id: 8,
    title: "우리의 약속",
    description: "3막 듀엣 곡",
    image: "/images/total.jpg",
  },
  {
    id: 9,
    title: "꿈을 향해",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
  },
  {
    id: 10,
    title: "우정의 노래",
    description: "2막 앙상블 곡",
    image: "/images/total.jpg",
  },
  {
    id: 11,
    title: "새로운 내일",
    description: "3막 솔로 곡",
    image: "/images/total.jpg",
  },
  // 2부 출연진의 노래들
  {
    id: 12,
    title: "두 번째 막",
    description: "2부 오프닝 곡",
    image: "/images/total.jpg",
  },
  {
    id: 13,
    title: "무대의 열정",
    description: "중간 하이라이트 곡",
    image: "/images/total.jpg",
  },
  {
    id: 14,
    title: "설레는 마음",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
  },
  {
    id: 15,
    title: "갈등의 순간",
    description: "2막 듀엣 곡",
    image: "/images/total.jpg",
  },
  {
    id: 16,
    title: "화해의 노래",
    description: "3막 앙상블 곡",
    image: "/images/total.jpg",
  },
  // castMembers.ts의 모든 노래를 여기에 추가
  // ... 나머지 모든 노래들도 같은 형식으로 추가
];

export function getSongById(id: number): Song | undefined {
  return songs.find(song => song.id === id);
}

export function getSongByTitleAndDescription(title: string, description: string): Song | undefined {
  return songs.find(song => song.title === title && song.description === description);
}
