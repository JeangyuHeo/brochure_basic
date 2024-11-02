import { CastMember } from '../types/types';
import { getSongByTitleAndDescription } from './songs';

// 각 배우의 노래 목록을 songs.ts의 Song 객체로 변환하는 helper 함수
function getSongData(title: string, description: string) {
  const songData = getSongByTitleAndDescription(title, description);
  if (!songData) {
    throw new Error(`Song not found: ${title} - ${description}`);
  }
  return songData;
}

// 연출자 정보를 위한 타입 추가
interface DirectorExperience {
  year: string;
  title: string;
  role: string;
}

// 연출자 경력 데이터
const directorExperiences: DirectorExperience[] = [
  {
    year: "2022",
    title: "SDS Musical 발표회",
    role: "노래 지도 및 무대 연출"
  },
  {
    year: "2023",
    title: "SDS Gala Concert",
    role: "노래 지도 및 무대 연출"
  },
  {
    year: "2024",
    title: "SDS Gala Concert",
    role: "노래 지도 및 무대 연출"
  }
];

export const castMembersPart1: CastMember[] = [
  {
    id: 1,
    name: "장설아",
    role: "연출",
    image: "/images/jsa.jpg",
    songs: [],
    directorExperiences
  },
  {
    id: 2,
    name: "고재은",
    role: "배우",
    image: "/images/gje.jpg",
    songs: [
      getSongData("나는 나만의 것", "고재은 솔로"),
      getSongData("언제나 그대 곁에", "허진규, 고재은 듀엣")
    ]
  },
  {
    id: 3,
    name: "김지선",
    role: "배우",
    image: "/images/kjs.jpg",
    songs: [
      getSongData("온 세상 내 것이었을 때", "김지선 솔로"),
      getSongData("Wizard and I", "김지선 솔로"),
      getSongData("On the Edge of time", "김지선, 신대건 듀엣")
    ]
  },
  {
    id: 4,
    name: "류호용",
    role: "배우",
    image: "/images/rhy.jpg",
    songs: [
      getSongData("모두의 세상", "류호용 솔로"),
      getSongData("너에게 선사하는 지옥", "류호용 솔로"),
      getSongData("The other side", "최진훈, 류호용 듀엣")
    ]
  },
  {
    id: 5,
    name: "신대건",
    role: "배우",
    image: "/images/sdg.jpg",
    songs: [
      getSongData("겟세마네", "신대건 솔로"),
      getSongData("Santa Fe", "신대건 솔로"),
      getSongData("On the Edge of time", "김지선, 신대건 듀엣")
    ]
  },
  {
    id: 6,
    name: "이지현",
    role: "배우",
    image: "/images/ljh.jpg",
    songs: [
      getSongData("데드맘", "이지현 솔로"),
      getSongData("나는 나를 말하는 사람", "이지현 솔로"),
      getSongData("First time in love", "허진규, 이지현 듀엣")
    ]
  },
  {
    id: 7,
    name: "최진훈",
    role: "배우",
    image: "/images/cjh.jpg",
    songs: [
      getSongData("내 운명 피하고 싶어", "최진훈 솔로"),
      getSongData("사느냐 죽느냐", "최진훈 솔로"),
      getSongData("The other side", "최진훈, 류호용 듀엣")
    ]
  },
  {
    id: 8,
    name: "허진규",
    role: "배우",
    image: "/images/hjg.jpg",
    songs: [
      getSongData("Waving through a window", "허진규 솔로"),
      getSongData("그 눈을 떠", "허진규 솔로"),
      getSongData("언제나 그대 곁에", "허진규, 고재은 듀엣"),
      getSongData("First time in love", "허진규, 이지현 듀엣")
    ]
  },
  {
    id: 9,
    name: "홍수영",
    role: "배우",
    image: "/images/hsy.jpg",
    songs: [
      getSongData("A New Life", "홍수영 솔로")
    ]
  }
];

export const castMembersPart2: CastMember[] = [
  {
    id: 101,
    name: "장설아",
    role: "연출",
    image: "/images/jsa.jpg",
    songs: [],
    directorExperiences
  },
  {
    id: 102,
    name: "김명신",
    role: "배우",
    image: "/images/kms.jpg",
    songs: [
      getSongData("I Dreamed a dream", "김명신 솔로"),
      getSongData("Never Enough", "김명신 솔로"),
      getSongData("On the Edge of time", "김명신, 허용훈 듀엣")
    ]
  },
  {
    id: 103,
    name: "최석우",
    role: "배우",
    image: "/images/csw.jpg",
    songs: [
      getSongData("Till I hear you Sing", "최석우 솔로"),
      getSongData("난 괴물", "최석우 솔로"),
      getSongData("언제나 그대 곁에", "최석우, 장애리 듀엣"),
      getSongData("The other side", "최석우, 허용훈 듀엣")
    ]
  },
  {
    id: 104,
    name: "허용훈",
    role: "배우",
    image: "/images/hyh.jpg",
    songs: [
      getSongData("춤을 춰요 에스메랄다", "허용훈 솔로"),
      getSongData("지금 이 순간", "허용훈 솔로"),
      getSongData("On the Edge of time", "김명신, 허용훈 듀엣"),
      getSongData("The other side", "최석우, 허용훈 듀엣")
    ]
  },
  {
    id: 105,
    name: "장애리",
    role: "배우",
    image: "/images/jer.jpg",
    songs: [
      getSongData("God don't make no Trash", "장애리 솔로"),
      getSongData("Always Starting over", "장애리 솔로"),
      getSongData("언제나 그대 곁에", "최석우, 장애리 듀엣")
    ]
  },
  {
    id: 106,
    name: "최유리",
    role: "배우",
    image: "/images/cyr.jpg",
    songs: [
      getSongData("사랑이야", "최유리 솔로"),
      getSongData("도쿄찬가", "최유리 솔로"),
      getSongData("그게 나의 전부란 걸", "최유리, 홍종완 듀엣")
    ]
  },
  {
    id: 107,
    name: "홍종완",
    role: "배우",
    image: "/images/hjw.jpg",
    songs: [
      getSongData("데스노트", "홍종완 솔로"),
      getSongData("그게 나의 전부란 걸", "최유리, 홍종완 듀엣")
    ]
  },
  {
    id: 108,
    name: "장은진",
    role: "배우",
    image: "/images/jej.jpg",
    songs: [
      getSongData("On My Own", "장은진 솔로")
    ]
  }
];
