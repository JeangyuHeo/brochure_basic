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
    songDescription: "약혼자 '에드몬드'(몬테크리스토)가 죽은 줄 알고 '몬데고'와 결혼한 메르세데스. 과거 진실로 사랑했던 '에드몬드'와의 추억을 회상하고 그리워하며 부르는 넘버"
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
    songDescription: "Dead Mom은 리디아가 죽은 엄마에게 말하는 노래입니다. 아빠가 엄마를 잊고 새 출발을 하려 하자, 리디아는 혼란과 슬픔 속에서 \"왜 나를 남겨두고 떠났냐\"며 울부짖습니다. 부모의 빈자리에 혼란스러워하는 10대 소녀의 복잡한 감정을 담은 노래입니다."
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
  },
  // --- 공연 순서(2025) 추가 곡 ---
  {
    id: 1001,
    title: "What is this feeling",
    description: "김명신, 장애리 듀엣",
    image: "/images/total.jpg",
    musical: "위키드",
    tags: ['싫은데왜궁금해', '안맞아안맞아~', '핑크그린',"극혐인데좋아져?"],
    songDescription: "이 노래는 새침한 갈린다, 솔직한 엘파바, 서로에 대한 혼란스런 감정에 처음에는 서로를 극혐하지만, 서서히 다가가게 되는 뒷 이야기를 생각하며 보시길 바랍니다."
  },
  {
    id: 1002,
    title: "Dancing through life",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "위키드",
    tags: ['오늘만은왕자', '목각인형댄스', '치명적인섹시함'],
    songDescription: "이 노래는 정해진 규칙에서 살기보다 느껴지는대로 세상을 즐기자는 피에르의 말처럼 그 순간을 함께 즐겁게 주시길 바랍니다."
  },
  {
    id: 1003,
    title: "Proud of your boy",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
    musical: "알라딘",
    tags: ['반백살에', '불러본다', '사모곡'],
    songDescription: "이 노래는 주인공 알라딘이 자신의 과거 잘못을 돌아보며 어머니에게 사과하고, 앞으로는 더 나은 사람이 되어 어머니가 자랑스러워할 아들이 되겠다고 다짐하는 내용입니다. 알라딘은 자신이 \"형편없는 아들\"이었다고 솔직하게 고백하면서도, 언젠가 반드시 어머니에게 자랑스러운 아들이 되겠다고 약속합니다. 이 노래는 부모의 기대에 미치지 못했다고 느끼는 모든 이들에게 깊은 공감과 위로를 주는 곡"
  },
  {
    id: 1004,
    title: "사랑은 마치",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "레드북",
    tags: ['사랑이란', '변덕스러운사랑', '자라나라사랑사랑'],
    songDescription: "이 노래는 사랑에 대한 주인공 안나의 생각과, 여기서 뿌려진 씨앗이 나중에 어떻게 커지는지 지켜보는 맛이 있으니 예쁘게 잘 봐주세요"
  },
  {
    id: 1005,
    title: "My Strongest Suit",
    description: "장애리 솔로",
    image: "/images/total.jpg",
    musical: "아이다",
    tags: ['둠칫둠칫', '삐걱삐걱', '사치스런언니의플렉스'],
    songDescription: "이 노래는 아직은 철부지 같은 공주가 강한 자기애를 보여주는 신나는 분위기의 곡이지만, 한편으로는 화려함 속에 불안함을 가리고자하는 그녀의 이면을 엿볼수 있는 곡입니다"
  },
  {
    id: 1006,
    title: "A step too far",
    description: "조재혁, 김지선, 박지현 듀엣",
    image: "/images/total.jpg",
    musical: "아이다",
    tags: ['운명적인사랑', '엇갈린운명명', '사랑의괴로움'],
    songDescription: "이 노래는 암네리스는 라다메스가 자신에게 애정을 보여주지 않자 그가 자신을 사랑하지 않는 것인지 걱정하고, 라다메스는 약혼녀인 암네리스를 두고 아이다를 향한 자신의 사랑 때문에 혼란스러워하며, 아이다는 라다메스에 대한 사랑이 누비아인들을 배신하는 것이 될까 두려워 합니다. 이처럼 서로의 복잡한 심정은 후반부를 향해 가면서 격정적인 하모니로 폭발하는 것이 포인트입니다."
  },
  {
    id: 1007,
    title: "Memphis in Live",
    description: "최석우 솔로",
    image: "/images/total.jpg",
    musical: "멤피스",
    tags: ['멤피스지박령', '거봐다괜찮아진다', 'R&B도전기'],
    songDescription: "이 노래는 주인공 휴이가 멤피스를 떠나서 멀리 있는 것 처럼 느껴졌으나 결국 멤피스의 문화와 음악이 휴이 안에서 살아 숨쉬고 있음을 깨달으면서 고조되는 휴이의 감정을 느끼는 것이 감상 포인트입니다."
  },
  {
    id: 1008,
    title: "Firework",
    description: "김지선 솔로",
    image: "/images/total.jpg",
    musical: "물랑루즈",
    tags: ['대문자I지만', '당당하게', '자신있게', '널응원해'],
    songDescription: "이 노래는 물랑루즈가 문닫을 위기라는 사실을 알게되고, 동료들이 길거리로 내몰리는 현실을 피하기 위해, 후원자인 공작을 만나러 들어가기 전 자기 자신에게 다짐하는 장면으로 스스로에게 용기를 불어넣으며, 불꽃놀이처럼 당당해지라는 다짐이 감상 포인트입니다."
  },
  {
    id: 1009,
    title: "Come What May",
    description: "최진훈, 장유리 듀엣",
    image: "/images/total.jpg",
    musical: "물랑루즈",
    tags: ['숨죽이고듣는듀엣', '순한맛버전', '아몰랑루즈해', '여보사랑해'],
    songDescription: "이 곡은 가난한 작가인 크리스티안이 ‘물랑루즈’의 스타인 사틴을 위해 작곡한 노래로, 사틴을 탐하는 공작의 감시를 피해 서로의 사랑을 확인하는 순간을 담은 곡입니다."
  },
  {
    id: 1010,
    title: "Knowing me Knowing you",
    description: "조재혁 솔로",
    image: "/images/total.jpg",
    musical: "맘마미아",
    tags: ['ABBA명곡', '사랑의흔적', 'ABBAForever'],
    songDescription: "이 노래는 샘의 인간적인 면모가 드러나는 핵심 넘버 중 하나로, 관객들에게 ABBA 특유의 세련된 멜로디로 깊은 공감을 이끌어내는 노래입니다."
  },
  {
    id: 1011,
    title: "Shine",
    description: "최현지 솔로",
    image: "/images/total.jpg",
    musical: "스핏파이어그릴",
    tags: ['어두운과거는안녕~', '새로운시작', '새벽빛', '나를비춰줘'],
    songDescription: "이 노래는 어두운 과거를 지닌 퍼시가 시골 마을에 도착해 새로운 삶을 시작하며 부르는 노래로, '지금껏 꺼져 있던 내 안의 빛이 다시 켜질 수 있을까?'라는 질문을 던지며 희망을 찾아가는 순간을 담고 있습니다. 잔잔하지만 내면의 강한 의지를 보여주는 곡입니다."
  },
  {
    id: 1012,
    title: "Me and the sky",
    description: "김명신 솔로",
    image: "/images/total.jpg",
    musical: "Come From Away",
    tags: ['911', '최초여성캡틴', '숨쉴시간주세요'],
    songDescription: "이 노래는 수많은 어려움과 편견을 이겨낸 캡틴의 감동적이고 슬프지만 희망적인 이야기입니다."
  },
  {
    id: 1013,
    title: "그림자는 길어지고",
    description: "최석우, 허진규 듀엣",
    image: "/images/total.jpg",
    musical: "앨리자벳",
    tags: ['죽음의유혹', '치명적두남자', '고음내다죽을듯'],
    songDescription: "이 노래는 오스트리아 황태자 루돌프의 고통과 절망을 죽음이라는 캐릭터를 통해 풀어내는 중요한 노래이므로 루돌프의 내적 갈등과 죽음의 유혹이 점차 고조되며 절정에 달하는 감정을 느끼는 것이 감상 포인트입니다."
  },
  {
    id: 1014,
    title: "Breathe",
    description: "최현지 솔로",
    image: "/images/total.jpg",
    musical: "In the Heights",
    tags: ['스탠포드자퇴생', '기대가부담이될때', '숨한번쉬고_다시시작해'],
    songDescription: "이 노래는 자신이 실패자라는 생각에 시달리며 학교를 중퇴하고, 아무에게도 알리지 않은 채 고향으로 돌아온 니나가, 가족과 이웃들이 자신을 반기고 자랑스러워하는 모습을 보며 내면에서 폭발하는 불안, 죄책감, 정체성 혼란을 고스란히 담은 곡입니다. 니나가 자신을 다시 찾기 위한 첫 걸음으로, breathe라는 곡 제목처럼 '숨을 고르고 다시 시작하려는 순간' 을 담은 곡입니다."
  },
  {
    id: 1015,
    title: "거인을 데려와",
    description: "최진훈 솔로",
    image: "/images/total.jpg",
    musical: "시라노",
    tags: ['위대한', '고음들과', '맞서리라'],
    songDescription: "이 노래는 뮤지컬 지킬앤하이드의 작곡가로 유명한 프랭크 와일드혼(Frank Wildhorn)이 작곡한 곡으로 주인공 시라노의 강인한 신념과 정의, 그리고 영웅적인 기개를 잘 드러내는 곡입니다."
  },
  {
    id: 1016,
    title: "Alone",
    description: "허진규 솔로",
    image: "/images/total.jpg",
    musical: "시라노",
    tags: ['아기사자포효', '모잘쓸까말까', '이래봬도전쟁광'],
    songDescription: "이 노래는 배우에게서는 아기 사자와 같은 목소리로 우렁차게 부르려는 모습을 시라노에게서는 세상을 잃고 억장이 무너진 모습을 포인트로 즐겨주시기 바랍니다! 많은 박수 부탁드립니다!"
  },
  {
    id: 1017,
    title: "영원한 생명",
    description: "박지현 솔로",
    image: "/images/total.jpg",
    musical: "레베카",
    tags: ['우린언제나함께', '불멸의난초', '어서돌아와', '레베카불사조설'],
    songDescription: "이 노래는 덴버스부인이 이미 고인이 된 드 윈터부인의 죽음을 인정하지 않고 그녀를 그리워하며 다시 돌아올 것을 염원하는 곡입니다."
  },
  {
    id: 1018,
    title: "Take me as I am",
    description: "조재혁, 최유리 듀엣",
    image: "/images/total.jpg",
    musical: "Jekyll & Hyde",
    tags: ['있는그대로', '지킬', '엠마'],
    songDescription: "이 노래는 지킬과 엠마가 서로의 사랑을 확인하고 약속하는 장면입니다. 지킬과 엠마의 하모니가 포인트입니다."
  },
  {
    id: 1019,
    title: "If I had wings ",
    description: "장애리 솔로",
    image: "/images/total.jpg",
    musical: "드라큘라",
    tags: ['날개송', '나쁜남자주의', '숨좀쉬자=3=3'],
    songDescription: "이 노래는 자유를 원하지만 한편으로는 드라큘라에게 벗어날 수 없음을 느끼며 슬픔과 혼란스러움을 표현했다."
  },
  {
    id: 1020,
    title: "Defying Gravity",
    description: "장유리 솔로",
    image: "/images/total.jpg",
    musical: "위키드",
    tags: ['초록마녀날아오름', '착한사람눈에만보임', '나는야율파바'],
    songDescription: "이 노래는 ‘위키드’의 주인공 엘파바가 오즈의 마법사가 선한 존재가 아님을 깨닫고, 사회의 억압과 편견에 맞서 독립적인 길을 선택하는 장면을 담아낸 곡입니다."
  },
  {
    id: 1021,
    title: "그 어디에",
    description: "최석우 솔로",
    image: "/images/total.jpg",
    musical: "팬텀",
    tags: ['대체어딨는거야', '넌내거야', '가면전문배우'],
    songDescription: "이 노래는 노래의 시작에서 팬텀의 고백은 다소 혼란스럽고 크리스틴을 향한 갈망이 복잡하게 얽혀 있으나 결국 자신이 크리스틴의 유일한 구원자이며, 그녀가 팬텀에게서 벗어날 수 없다는 확신을 갖게되면서 감정이 고조되고 강하게 변화되는 목소리를 느끼는 것이 감상 포인트입니다."
  },
  {
    id: 1022,
    title: "행복을 병 속에 담는 법",
    description: "최유리 솔로",
    image: "/images/total.jpg",
    musical: "레베카",
    tags: ['이별', '추억', '파도소리'],
    songDescription: "이 노래는 ich의 기대와 실망, 그리고 그 속에서 피어오르는 굳은 의지가 포인트입니다."
  },
  {
    id: 1023,
    title: "내가 춤추고 싶을 때",
    description: "최현지, 허진규 듀엣",
    image: "/images/total.jpg",
    musical: "앨리자벳",
    tags: ['내인생내맘대로살거야', '저리가토드', '밀당인듯밀당아닌', '웃상토드'],
    songDescription: "이 노래는 단순한 남녀의 유혹과 거절 노래가 아닌, 자유의지를 끝까지 지키려는 엘리자벳과, 그녀를 무너뜨리려는 토드(죽음) 사이의 치열한 권력 싸움을 그려낸 곡입니다."
  },
  {
    id: 1024,
    title: "마지막 순간",
    description: "김지선 솔로",
    image: "/images/total.jpg",
    musical: "마타하리",
    tags: ['죽음을앞둔심정', '삑사리가아닙니다', '격앙된감정의표현입니다'],
    songDescription: "이 노래는 마타하리가 총살형을 받기 직전, 자신의 삶을 되돌아보며 부르는 곡으로, 죽음을 앞두고 자신의 선택과 사랑, 배신, 그리고 삶의 의미를 성찰하는 장면으로 마타하리의 감정이 최고조에 달하는 순간으로, 그녀의 절망과 후회, 그리고 희망이 교차하는 복합적인 감정의 넘버입니다."
  },
  {
    id: 1025,
    title: "Confrontation(지킬 앤 하이드)",
    description: "조재혁 솔로",
    image: "/images/total.jpg",
    musical: "지킬 앤 하이드",
    tags: ['내면의대결', '이중성', '소름주의'],
    songDescription: "이 노래는 배우의 압도적인 연기력과 가창력이 요구되는 명장면입니다! 한 사람의 목소리로 완전히 다른 두 인물을 표현하는 극적인 대비가 백미입니다. 음악은 급격하게 전환되며 내면의 폭발과 갈등을 강렬하게 드러냅니다. 무대 연출에서는 조명, 거울, 그림자 등을 활용해 지킬과 하이드의 이중성을 시각화한 것이 감상 포인트입니다."
  },
  {
    id: 1026,
    title: "내 안의 괴물",
    description: "김명신 솔로",
    image: "/images/total.jpg",
    musical: "웃는남자",
    tags: ['그웬플린넌내꺼', '귀부인인데', '있는힘껏'],
    songDescription: "이 노래는 그웬플린에 대한 숨길수 없는 극단적인 감정을 드러내는 노래입니다."
  },
  {
    id: 1027,
    title: "Confrontation(레미제라블)",
    description: "최석우, 최진훈 듀엣",
    image: "/images/total.jpg",
    musical: "레미제라블",
    tags: ['독박육아장발장', '추노꾼자베르', '슈퍼초울트라액션활극'],
    songDescription: "이 노래는 법을 위반한 자는 반드시 처벌 받아야 한다는 자베르와 사람은 용서 받을 수 있다는 장발장의 철학과 가치관이 극명하게 대립하면서 나타나는 두 인물의 감정 충돌을 지켜보는 것이 감상 포인트입니다."
  },
  {
    id: 1028,
    title: "Raise you up",
    description: "전체 단체곡",
    image: "/images/total.jpg",
    musical: "킹키부츠",
    tags: ['땐스땐스', '다비켜라!!', '모두행복해요'],
    songDescription: "모두에게 힘과 용기를 주는 단체곡."
  },
  {
    id: 1101,
    title: "Memory",
    description: "박지현 솔로",
    image: "/images/total.jpg",
    musical: "캣츠",
    tags: ['한때는라떼는', '왕따지만괜찮아', '내일도태양은뜬다', '그리자벨라응원해'],
    songDescription: "이 노래는 한 때는 \"화려한 고양이\"라고 불렸었지만 어느새 노쇠하고 초라해지면서 고양이 무리 중 그 누구도 어울려 주지 않는 신세가 된 그리자벨라가 예전의 좋았던 시절이 그립지만 앞으로도 희망을 잃지 않으려는 것이 감상 포인트입니다."
  }
];

export function getSongById(id: number): Song | undefined {
  return songs.find(song => song.id === id);
}

export function getSongByTitleAndDescription(title: string, description: string): Song | undefined {
  return songs.find(song => song.title === title && song.description === description);
}
