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
  // 1부 솔로 곡들
  {
    id: 101,
    title: "Waving through a window",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "디어 에반 핸슨",
    tags: ["연기아님", "디어에반허슨", "완곡가능?"],
    songDescription: "사회불안장애를 가진 주인공 에반 핸슨이 자신의 고립된 상황을 표현하는 노래. 마치 유리창 너머로 다른 사람들의 삶을 바라보는 것처럼, 세상과 단절된 채 살아가는 자신의 모습을 표현. 에반은 SNS로 가득한 현대 사회에서 소통하고 싶지만 그러지 못하는 자신의 모습을 '창문 너머로 손을 흔들기만 하는 사람'으로 표현하며, 누군가에게 보여지고 싶은 간절한 마음을 호소"
  },
  {
    id: 102,
    title: "그 눈을 떠",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "웃는남자",
    tags: ["이래선눈못떠", "우는남자", "이래보여도귀족"],
    songDescription: "영국의 최고 권력자들이자 집권계급만 참석할 수 있는 상원 의원회에 참석한 그윈플렌은 자신들의 이익을 위한 법만 만드는 의원들에게 또 다른 세상을 돌아봐 달라고 간청한다."
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
    musical: "몬테크리스토",
    tags: ["아련", "추억", "잊지못할첫사랑"],
    songDescription: "약혼자 ‘에드몬드‘(몬테크리스토)가 죽은 줄 알고 ’몬데고‘와 결혼한 메르세데스. 과거 진실로 사랑했던 ’에드몬드‘와의 추억을 회상하고 그리워하며 부르는 넘버"
  },
  {
    id: 106,
    title: "Wizard and I",
    description: "김지선 솔로",
    image: "/images/total.jpg",
    musical: "위키드",
    tags: ["설렘", "최애마법사님", "해낼거야"],
    songDescription: "엘파바가 드디어 자신의 재능을 알아봐 주고 이해해줄 마법사와 만날 수 있는 가능성이 생기자 그 설렘을 담아 부르는 넘버"
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
    musical: "지저스크라이스트슈퍼스타",
    tags: ["고통받는예수", "고통받는성대", "박은태"],
    songDescription: "예수가 잡혀가기 전날 밤, 겟세마네 동산에서 홀로 하나님을 향해 부르짖는 예수의 노래. 그동안의 고통과 죽음의 이유에 대한 의문으로 가득찬 예수를 표현"
  },
  {
    id: 110,
    title: "Santa Fe",
    description: "신대건 솔로",
    image: "/images/total.jpg",
    musical: "뉴시스",
    tags: ["디즈니", "분노", "희망"],
    songDescription: "주인공이자 신문배달원인 소년 잭이 친구에게 뉴욕을 떠나 산타페로 향할거라는 자신의 꿈을 말하는 노래"
  },
  {
    id: 111,
    title: "데드맘",
    description: "이지현 솔로",
    image: "/images/total.jpg",
    musical: "비틀쥬스",
    tags: ["그리움", "원피스작음", "리디아는15살나는35살"],
    songDescription: "Dead Mom은 리디아가 죽은 엄마에게 말하는 노래입니다. 아빠가 엄마를 잊고 새 출발을 하려 하자, 리디아는 혼란과 슬픔 속에서 “왜 나를 남겨두고 떠났냐”며 울부짖습니다. 부모의 빈자리에 혼란스러워하는 10대 소녀의 복잡한 감정을 담은 노래입니다."
  },
  {
    id: 112,
    title: "나는 나를 말하는 사람",
    description: "이지현 솔로",
    image: "/images/total.jpg",
    musical: "레드북",
    tags: ["나를찾는여정", "내안의목소리"],
    songDescription: "나는 나를 말하는 사람은 자신을 찾고자 하는 여정을 담은 노래입니다. 가사는 주체적인 나의 목소리를 찾고, 외부의 시선에 휘둘리지 않으려는 결심을 표현합니다. 자신을 진정으로 이해하고 받아들이기 위한 고뇌와 희망이 담겨 있습니다."
  },
  {
    id: 113,
    title: "나는 나만의 것",
    description: "고재은 솔로",
    image: "/images/total.jpg",
    musical: "엘리자벳",
    tags: ["나는야곤듀", "자유를원해", "이뿌지?"],
    songDescription: "황제와 결혼하여 들어간 황실에서 시어머니의 간섭과 황제와의 갈등, 엄격한 규율 등으로 인해 답답함을 느끼고 자유를 갈망하는 넘버"
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
    musical: "몬테크리스토",
    tags: ["남자는감옥", "여자는밖", "서로쳐다보는거아님"],
    songDescription: "억울한 누명을 쓰고 체포된 단테스와 그의 약혼녀 메르세데스가 서로에 대한 영원한 사랑을 맹세하는 두 사람의 애절한 감정이 드러나는 노래"
  },
  {
    id: 202,
    title: "First time in love",
    description: "허진규, 이지현 듀엣",
    image: "/images/total.jpg",
    musical: "어쩌면 해피엔딩",
    tags: ["사랑에빠진로봇", "설렘가득", "순수상큼발랄"],
    songDescription: "사랑이란 감정을 알지 못하는 로봇 올리버와 클레어가 함께 시간을 보내며 사랑의 감정을 이해하고 빠져가는 모습을 그린 노래"
  },
  {
    id: 203,
    title: "The other side",
    description: "최진훈, 류호용 듀엣",
    image: "/images/total.jpg",
    musical: "위대한 쇼맨",
    tags: ["밀당의귀재", "브로맨스", "턴의끝판왕"],
    songDescription: "서커스 사업가인 바넘이 상류층 사회의 관습에 얽매여 있는 필립에게 자유와 모험이 있는 자신의 쇼에 합류하도록 설득하는 넘버입니다. 처음에는 거절하지만 바넘의 설득에 조금씩 마음이 열리는 필립의 모습을 보면서 함께 즐기시길 바랍니다."
  },
  {
    id: 204,
    title: "On the Edge of time",
    description: "김지선, 신대건 듀엣",
    image: "/images/total.jpg",
    musical: "닥터지바고",
    tags: ["전쟁속사랑", "유리와라라", "극적인만남"],
    songDescription: "닥터지바고의 노래로 러시아혁명주의 세력에 붙잡혀 있다가 어렵게 탈출한 유리 지바고와 생사조차 알수 없었지만 그를 기다렸던 라라가 극적으로 만나 마음을 확인하며 부르는 노래"
  },
  // 2부 솔로 곡들
  {
    id: 301,
    title: "I Dreamed a dream",
    description: "김명신 솔로",
    image: "/images/total.jpg",
    musical: "레미제라블",
    tags: ["팡틴의절망", "슬픔눈물회한"],
    songDescription: "레미제라블에서 코제트의 엄마 팡틴이 공장에서 쫓겨난후 자신의 젊은날의 꿈과 사랑을 돌아보며 현재의 절망과 체념운 이야기하는 노래"
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
    musical: "Love Never Dies",
    tags: ["오페라의유령2", "크리스틴은어디에", "집착과사랑의경계"],
    songDescription: "팬텀이 과거에 헤어진 크리스틴을 그리워하며 부르는 넘버입니다. 오랜 세월이 흘렀지만 크리스틴을 향한 사랑은 식지 않았고 그녀의 노래소리가 없는 삶은 아무런 의미가 없다는 그의 고백은 곡의 절정에서 폭발적으로 표현되며, 크리스틴을 향한 팬텀의 집착에 가까운 사랑과 상처를 잘 나타냅니다."
  },
  {
    id: 304,
    title: "난 괴물",
    description: "최석우 솔로",
    image: "/images/total.jpg",
    musical: "프랑켄슈타인",
    tags: ["3옥파샵", "창조와파멸", "누워서시작", "이름갖고싶어"],
    songDescription: "프랑켄슈타인 박사가 만든 괴물이 처음으로 자신이 인간이 아닌 괴물임을 자각하며 부르는 넘버입니다. 노래하는 장면은 자신을 창조한 프랑켄슈타인과 자신을 외면하는 세상에 대한 괴물의 분노와 고뇌가 드러나면서 관객에게 괴물의 강렬한 감정이 전달되는 중요한 장면입니다."
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
    musical: "베어 더 뮤지컬",
    tags: ["피터 괴롭히지마라", "뒤에 나있다", "입틀막 위로송"],
    songDescription: "피터는 비밀리에 남자친구와 교제하고 있습니다. 커밍아웃을 하고 싶지만 남자친구는 거부를 하고, 엄마는 이 사실을 짐작하지만 외면합니다. 이 넘버는 지도교사 샨텔 수녀가 이 사실을 눈치채고 피터가 잘못된 것이 아니라고 위로해 줍니다."
  },
  {
    id: 308,
    title: "Always Starting over",
    description: "장애리 솔로",
    image: "/images/total.jpg",
    musical: "If Then",
    tags: ["그래! 결심했어!", "폐활량 절실", "Else 어쩌면 다시 만날지도?"],
    songDescription: "뮤지컬 If Then은 일과 사랑 둘 중 하나를 선택한 주인공의 인생이 각각 어떻게 펼쳐지는지 동시에 보여주는 작품입니다. 이 넘버는 그중 사랑을 선택한 인생에서 결국 남편의 죽음을 맞이하여 깊은 슬픔에 빠진 리즈의 심정을 노래합니다.결국 사랑은 끝났지만 자신의 선택을 후회하지 않고, 앞으로의 생을 당당하게 살기로 결심한 그녀의 노래를 들어주세요."
  },
  {
    id: 309,
    title: "사랑이야",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "황태자 루돌프",
    tags: ["낭만", "달콤한사랑", "First time in love"],
    songDescription: "'사랑이야' 넘버는 눈이 내리는 왕궁과 성당 앞에서 황태자 루돌프와 마리 베체라의 사랑이 무르익는 장면입니다. 낭만적인 분위기 속에서 두 사람의 사랑이 깊어지는 노래입니다."
  },
  {
    id: 310,
    title: "도쿄찬가",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "사의찬미",
    tags: ["연기왕", "도꾜", "대사어떻게외워..?"],
    songDescription: "'도쿄찬가A'는 뮤지컬 사의찬미에서 사내와 우진이 이야기를 시작하며 부르는 넘버입니다. 극의 시작을 설명하는 노래로, 이 스토리가 그냥 사내의 이야기인지 아니면 우진이 현재 처한 현실인지 헷갈리게 만드는 넘버입니다.이번 공연에서는 사내가 아닌 심덕이 사내의 대사를 대신합니다."
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
    musical: "레미제라블",
    tags: ["짝사랑", "나홀로", "가제트는알아도코제트는몰라!"],
    songDescription: "에포닌은 혁명군에 가담하여 활동하는 청년 마리우스 퐁메르시를 짝사랑하는데, 에포닌이 On my own을 부르기 이전에, 마리우스와 코제트가 우연히 만나, 서로 사랑에 빠지게 된다. 그리고 어느날 마리우스는 코제트에게 전해달라며 에포닌에게 편지를 준다. 마리우스를 사랑하지만, 코제트를 사랑하는 마리우스를 보면서 가슴 아파하며 부르는 넘버이다."
  },
  // 2부 듀엣/그룹 곡들
  {
    id: 401,
    title: "On the Edge of time",
    description: "김명신, 허용훈 듀엣",
    image: "/images/total.jpg",
    musical: "닥터 지바고",
    tags: ["전쟁속사랑", "유리와라라", "극적인만남"],
    songDescription: "닥터지바고의 노래로 러시아혁명주의 세력에 붙잡혀 있다가 어렵게 탈출한 유리 지바고와 생사조차 알수 없었지만 그를 기다렸던 라라가 극적으로 만나 마음을 확인하며 부르는 노래"
  },
  {
    id: 402,
    title: "언제나 그대 곁에",
    description: "최석우, 장애리 듀엣",
    image: "/images/total.jpg",
    musical: "몬테크리스토",
    tags: ["비대면듀엣", "둘만 서로가 안보임"],
    songDescription: "억울한 누명을 쓰고 감옥에 갇힌 단테스와 그의 약혼녀 메르세데스가 서로를 그리워하며 부르는 넘버입니다. 서로 다른공간에 있지만, 언제나 서로의 곁을 지켜줄것이라는 간절한 마음을 표현한 곡입니다."
  },
  {
    id: 403,
    title: "The other side",
    description: "최석우, 허용훈 듀엣",
    image: "/images/total.jpg",
    musical: "위대한 쇼맨",
    tags: ["밀당의귀재", "브로맨스", "턴의끝판왕"],
    songDescription: "서커스 사업가인 바넘이 상류층 사회의 관습에 얽매여 있는 필립에게 자유와 모험이 있는 자신의 쇼에 합류하도록 설득하는 넘버입니다. 처음에는 거절하지만 바넘의 설득에 조금씩 마음이 열리는 필립의 모습을 보면서 함께 즐기시길 바랍니다."
  },
  {
    id: 404,
    title: "그게 나의 전부란 걸",
    description: "최유리, 홍종완 듀엣",
    image: "/images/total.jpg",
    musical: "번지점프를 하다",
    tags: ["설레는키차이", "사랑해", "꺄악뽀뽀해"],
    songDescription: "이 넘버는 인우와 태희가 서로의 마음을 확인하고 난 후 인우가 군 입대 통보가 왔다고 이야기하자 데이트 하던 도중에 태희가 화가나서 인우를 버리고 가버립니다. 인우가 헤어진 자리에서 태희가 돌아오기를 기다리자 태희가 돌아오고 나서 부르는 노래입니다."
  },
  {
    id: 501,
    title: "You will be found",
    description: "전체 단체곡",
    image: "/images/total.jpg",
    musical: "디어 에반 핸슨",
    tags: ["희망", "위로", "공동체", "감동"],
    songDescription: "디어 에반 핸슨의 대표곡으로, 혼자가 아니라는 메시지를 전하는 감동적인 넘버입니다. 에반의 거짓말로 시작된 코너 머피 프로젝트가 많은 사람들에게 희망과 위로가 되어가는 과정을 그립니다. '당신은 결코 혼자가 아니며, 반드시 누군가가 당신을 찾아낼 것'이라는 강력한 메시지를 전달하는 뮤지컬의 하이라이트 곡입니다."
  }
];

export function getSongById(id: number): Song | undefined {
  return songs.find(song => song.id === id);
}

export function getSongByTitleAndDescription(title: string, description: string): Song | undefined {
  return songs.find(song => song.title === title && song.description === description);
}
