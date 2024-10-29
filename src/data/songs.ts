export interface Song {
  id: number;
  title: string;
  description: string;
  image: string;
  musical: string;
  tags: string[];
  songDescription: string;
}

const songs: Song[] = [
  // 1부 출연진의 노래들
  {
    id: 1,
    title: "첫 번째 곡",
    description: "오프닝 넘버",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 2,
    title: "주인공의 아리아",
    description: "솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 3,
    title: "첫 등장",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 4,
    title: "내 마음의 소리",
    description: "2막 듀엣 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 5,
    title: "마지막 인사",
    description: "엔딩 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 6,
    title: "새로운 시작",
    description: "1막 앙상블 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 7,
    title: "사랑의 고백",
    description: "2막 솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 8,
    title: "우리의 약속",
    description: "3막 듀엣 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 9,
    title: "꿈을 향해",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 10,
    title: "우정의 노래",
    description: "2막 앙상블 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 11,
    title: "새로운 내일",
    description: "3막 솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  // 2부 출연진의 노래들
  {
    id: 12,
    title: "두 번째 막",
    description: "2부 오프닝 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 13,
    title: "무대의 열정",
    description: "중간 하이라이트 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 14,
    title: "설레는 마음",
    description: "1막 솔로 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 15,
    title: "갈등의 순간",
    description: "2막 듀엣 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 16,
    title: "화해의 노래",
    description: "3막 앙상블 곡",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  // 1부 솔로 곡들
  {
    id: 101,
    title: "Waving through a window",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 102,
    title: "그 눈을 떠",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 103,
    title: "내 운명 피하고 싶어",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
    musical: "모차르트!",
    tags: ["헬곡3대장", "나는고음불가", "공연을피하고싶어"],
    songDescription: "1막 마지막 부분에서 콜로레도 대주교로부터 벗어나 자유를 얻었다고 환호하던 볼프강이 자신의 피를 뽑아 작곡하는 아데마를 보고 여전히 운명의 굴레에 속박당해 있다는 사실을 깨닫고 부르는 넘버"
  },
  {
    id: 104,
    title: "사느냐 죽느냐",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
    musical: "햄릿",
    tags: ["햄릿", "모두가아는그대사", "햄릿이뮤배가된다면"],
    songDescription: "3막 1장 햄릿과 오필리어가 만나기 직전, 클로디어스와 폴로니어스가 숨어서 햄릿을 지켜보고 있는 동안 햄릿이 자신의 고뇌를 토로하며 부르는 넘버"
  },
  {
    id: 105,
    title: "온 세상 내 것이었을 때",
    description: "김지선 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 106,
    title: "Wizard and I",
    description: "김지선 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 107,
    title: "모두의 세상",
    description: "류호용 솔로",
    image: "/images/total.jpg",
    musical: "웃는 남자",
    tags: ["웃는남자", "엄마나성공했어", "괜찮아잘될거야"],
    songDescription: "입이 찢기고 버려진 그윈플렌이 '최고로 높은' 귀족이 되어, 세상을 보다 평등한 모두의 낙원으로 바꾸려는 의지를 보여주는 노래"
  },
  {
    id: 108,
    title: "너에게 선사하는 지옥",
    description: "류호용 솔로",
    image: "/images/total.jpg",
    musical: "몬테크리스토",
    tags: ["복수는나의것", "분노의질주", "마지막삑사리"],
    songDescription: "몬테크리스토 백작으로 각성한 단테스가 그의 삶을 나락으로 떨어뜨린 사람들에게 복수하겠다고 다짐하는 장면"
  },
  {
    id: 109,
    title: "겟세마네",
    description: "신대건 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 110,
    title: "Santa Fe",
    description: "신대건 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 111,
    title: "데드맘",
    description: "이지현 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 112,
    title: "나는 나를 말하는 사람",
    description: "이지현 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 113,
    title: "나는 나만의 것",
    description: "고재은 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 114,
    title: "A New Life",
    description: "홍수영 솔로",
    image: "/images/total.jpg",
    musical: "지킬 앤 하이드",
    tags: ["점점힘듦", "고음불가", "희망과갈망"],
    songDescription: "뮤지컬 <지킬 앤 하이드>에 등장하는 루시 캐릭터가 부르는 노래입니다. 이 노래는 루시가 지킬 박사에게 보내는 노래로, 그녀의 기대와 로맨틱한 감정을 잘 표현하고 있습니다. 루시는 지킬 박사가 자신을 친절하게 대하는 것을 보고, 새로운 삶의 기회를 얻었다고 생각합니다. 이 노래를 통해 루시의 순수한 마음과 희망이 잘 드러납니다. 하지만 이후 지킬 박사의 실험으로 인해 루시가 비극적인 최후를 맞이하게 된다는 점에서, 더욱 슬픈 감정을 불러일으키는 넘버"
  },
  // 1부 듀엣 곡들
  {
    id: 201,
    title: "언제나 그대 곁에",
    description: "허진규, 고재은 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 202,
    title: "First time in love",
    description: "허진규, 이지현 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 203,
    title: "The other sides",
    description: "최진훈, 류호용 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 204,
    title: "On the Edge of time",
    description: "김지선, 신대건 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  // 2부 솔로 곡들
  {
    id: 301,
    title: "I Dreamed a dream",
    description: "김명신 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 302,
    title: "Never Enough",
    description: "김명신 솔로",
    image: "/images/total.jpg",
    musical: "위대한 쇼맨",
    tags: ["너없으면안돼", "오페라가수", "온힘을다해"],
    songDescription: "위대한 쇼맨의 최고의 오페 가수인 제니린드가 미국으로 넘어와 처음으로 무대에 오르면서 바넘에게 느낀 애정을 담아 절실히 부르는 노래"
  },
  {
    id: 303,
    title: "Till I hear you Sing",
    description: "최석우 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 304,
    title: "난 괴물",
    description: "최석우 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 305,
    title: "춤을 춰요 에스메랄다",
    description: "허용훈 솔로",
    image: "/images/total.jpg",
    musical: "노트담드 파리",
    tags: ["곱추분장", "깊은 사랑과 슬픔 그리고 오열", "댄스없음"],
    songDescription: "성지기인 콰지모도가 짝사랑한 여인인 에스메랄다가 죽자, 그녀를 구하지 못한 자신을 원망하며 부르는 노래"
  },
  {
    id: 306,
    title: "지금 이 순간",
    description: "허용훈 솔로",
    image: "/images/total.jpg",
    musical: "지킬 앤 하이드",
    tags: ["국민뮤지컬송", "오디션금지곡", "조승우 반만이라도 가자"],
    songDescription: "정신병을 앓고 있는 아버지를 위해 정신병 연구를 하지만 거듭 실패하는 상황에서 소신을 가지고 연구를 하기로 결심하는 장면이며, 두려움, 떨림을 시작으로 확신, 환희로 끝나는 노래"
  },
  {
    id: 307,
    title: "God don't make no Trash",
    description: "장애리 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 308,
    title: "Always Starting over",
    description: "장애리 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 309,
    title: "사랑이야",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 310,
    title: "도쿄찬가",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 311,
    title: "데스노트",
    description: "홍종완 솔로",
    image: "/images/total.jpg",
    musical: "데스노트",
    tags: ["멋진오빠", "근데중2병", "나는야신"],
    songDescription: "주인공 라이토가 데스노트의 힘을 처음으로 체험하고, 세상을 바꿀 결심을 하게 되는 강렬한 곡입니다. 혼란과 두려움에서 확신으로 변화하는 그의 감정선이 음악과 함께 폭발적으로 표현됩니다. 마지막에는 그가 '신'이 되겠다는 강렬한 결단을 확고히 선언하는 순간으로, 라이토의 각성이 드라마틱하게 펼쳐지는 결정적인 장면입니다."
  },
  {
    id: 312,
    title: "On My Own",
    description: "장은진 솔로",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  // 2부 듀엣/그룹 곡들
  {
    id: 401,
    title: "On the Edge of time",
    description: "김명신, 허용훈 듀엣",
    image: "/images/total.jpg",
    musical: "닥터 지바고",
    tags: ["전쟁속사랑", "유리와라라", "극적인만남"],
    songDescription: "닥터지바고의 노래로 러시아혁명주의 세력에 붙잡혀 있다가 어렵게 탈출한 유리 지바고와 생사조차 알수 없었지만 그를 기다렸던 라라가 극적으로 만나 음을 확인하며 부르는 노래"
  },
  {
    id: 402,
    title: "언제나 그대 곁에",
    description: "최석우, 장애리 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 403,
    title: "The other sides",
    description: "최석우, 허용훈 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  },
  {
    id: 404,
    title: "그게 나의 전부란 걸",
    description: "최유리, 홍종완 듀엣",
    image: "/images/total.jpg",
    musical: "",
    tags: [],
    songDescription: ""
  }
];

export function getSongById(id: number): Song | undefined {
  return songs.find(song => song.id === id);
}

export function getSongByTitleAndDescription(title: string, description: string): Song | undefined {
  return songs.find(song => song.title === title && song.description === description);
}
