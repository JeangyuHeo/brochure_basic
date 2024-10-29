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
  // 1부 솔로 곡들
  {
    id: 101,
    title: "Waving through a window",
    description: "허진규 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 102,
    title: "그 눈을 떠",
    description: "허진규 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 103,
    title: "내 운명 피하고 싶어",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 104,
    title: "사느냐 죽느냐",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 105,
    title: "온 세상 내 것이었을 때",
    description: "김지선 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 106,
    title: "Wizard and I",
    description: "김지선 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 107,
    title: "모두의 세상",
    description: "류호용 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 108,
    title: "너에게 선사하는 지옥",
    description: "류호용 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 109,
    title: "겟세마네",
    description: "신대건 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 110,
    title: "Santa Fe",
    description: "신대건 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 111,
    title: "데드맘",
    description: "이지현 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 112,
    title: "나는 나를 말하는 사람",
    description: "이지현 솔��",
    image: "/images/total.jpg",
  },
  {
    id: 113,
    title: "나는 나만의 것",
    description: "고재은 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 114,
    title: "A New Life",
    description: "홍수영 솔로",
    image: "/images/total.jpg",
  },
  // 1부 듀엣 곡들
  {
    id: 201,
    title: "언제나 그대 곁에",
    description: "허진규, 고재은 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 202,
    title: "First time in love",
    description: "허진규, 이지현 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 203,
    title: "The other sides",
    description: "최진훈, 류호용 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 204,
    title: "On the Edge of time",
    description: "김지선, 신대건 듀엣",
    image: "/images/total.jpg",
  },
  // 2부 솔로 곡들
  {
    id: 301,
    title: "I Dreamed a dream",
    description: "김명신 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 302,
    title: "Never Enough",
    description: "김명신 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 303,
    title: "Till I hear you Sing",
    description: "최석우 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 304,
    title: "난 괴물",
    description: "최석우 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 305,
    title: "춤을 춰요 에스메랄다",
    description: "허용훈 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 306,
    title: "지금 이 순간",
    description: "허용훈 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 307,
    title: "God don't make no Trash",
    description: "장애리 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 308,
    title: "Always Starting over",
    description: "장애리 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 309,
    title: "사랑이야",
    description: "최유리 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 310,
    title: "도쿄찬가",
    description: "최유리 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 311,
    title: "데스노트",
    description: "홍종완 솔로",
    image: "/images/total.jpg",
  },
  {
    id: 312,
    title: "On My Own",
    description: "장은진 솔로",
    image: "/images/total.jpg",
  },
  // 2부 듀엣/그룹 곡들
  {
    id: 401,
    title: "On the Edge of time",
    description: "김명신, 허용훈 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 402,
    title: "언제나 그대 곁에",
    description: "최석우, 장애리 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 403,
    title: "The other sides",
    description: "최석우, 허용훈 듀엣",
    image: "/images/total.jpg",
  },
  {
    id: 404,
    title: "그게 나의 전부란 걸",
    description: "최유리, 홍종완 듀엣",
    image: "/images/total.jpg",
  }
];

export function getSongById(id: number): Song | undefined {
  return songs.find(song => song.id === id);
}

export function getSongByTitleAndDescription(title: string, description: string): Song | undefined {
  return songs.find(song => song.title === title && song.description === description);
}
