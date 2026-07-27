export const services = [
  {
    id: 'place',
    path: '/place',
    title: '플레이스 마케팅',
    shortDesc: '네이버 플레이스 상위노출로 매장 방문자를 늘리세요',
    description: '네이버 플레이스에서 상위 노출로 오프라인 매장 방문자를 극대화하세요. 지역 검색 최적화, 리뷰 관리, 예약 연동까지 종합적인 로컬 마케팅 솔루션을 제공합니다.',
    heroMessage: '지역 검색에서 보이지 않으면, 고객은 경쟁 업체로 갑니다',
    icon: 'map-pin',
    color: 'from-primary-400 to-primary-600',
    painPoints: [
      '지역 검색해도 우리 매장이 안 보인다?',
      '리뷰가 적어 신규 고객이 망설인다?',
      '경쟁 업체보다 순위가 낮다?',
      '네이버 예약 연동이 어렵다?'
    ],
    solution: {
      title: '플레이스 순위 상승 전략',
      desc: '정보 완성도, 리뷰 확보, 저장수 증가 등 순위 결정 요소를 종합적으로 관리합니다'
    },
    features: [
      { title: '플레이스 정보 최적화', desc: '영업시간, 메뉴, 가격 등 정보 완성도 100% 달성', icon: 'clipboard-list', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&q=80' },
      { title: '상위 노출 전략', desc: '지역 검색 1페이지 노출을 위한 종합 전략', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=250&fit=crop&q=80' },
      { title: '리뷰 관리 시스템', desc: '긍정 리뷰 확보 + 부정 리뷰 전문 대응', icon: 'star', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&q=80' },
      { title: '사진/영상 콘텐츠', desc: '매력적인 비주얼로 클릭률 및 방문 전환율 향상', icon: 'eye', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=250&fit=crop&q=80' },
      { title: '영수증 리뷰 캠페인', desc: '실제 방문 고객의 진정성 있는 리뷰 확보', icon: 'check-circle', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=250&fit=crop&q=80' },
      { title: '네이버 예약 연동', desc: '온라인 예약 시스템 활성화로 예약 전환율 상승', icon: 'phone', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop&q=80' },
      { title: '플레이스 광고', desc: '지역 타겟팅 광고로 주변 잠재 고객 공략', icon: 'map-pin', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '순위 결정 요소 분석', desc: '정보 완성도, 리뷰 수/품질, 저장수, 방문자수 등 핵심 지표 관리' },
      { title: '업종별 맞춤 전략', desc: '병원, 음식점, 카페, 뷰티샵 등 업종 특성에 맞는 전략 수립' }
    ],
    process: [
      { step: 1, title: '플레이스 분석', desc: '현재 순위 및 정보 완성도 진단' },
      { step: 2, title: '경쟁사 분석', desc: '지역 내 경쟁 업체 현황 파악' },
      { step: 3, title: '최적화 전략', desc: '순위 상승을 위한 종합 전략 수립' },
      { step: 4, title: '콘텐츠 제작', desc: '사진, 영상, 상세 정보 업데이트' },
      { step: 5, title: '리뷰 관리', desc: '리뷰 확보 캠페인 및 대응 관리' },
      { step: 6, title: '리포트', desc: '순위 변동 및 방문자 분석 리포트' }
    ],
    performance: [
      {
        industry: '피부과',
        company: 'S의원',
        period: '2개월',
        metrics: {
          ranking: { before: '지역 15위', after: '지역 2위', growth: '13단계 상승' },
          reviews: { before: '45개', after: '180개', growth: '300%' },
          inquiries: { before: '월 30건', after: '월 95건', growth: '217%' }
        }
      },
      {
        industry: '음식점',
        company: 'M식당',
        period: '3개월',
        metrics: {
          ranking: { before: '지역 20위', after: '지역 1위', growth: '1위 달성' },
          reviews: { before: '80개', after: '350개', growth: '338%' },
          visitors: { before: '일 50명', after: '일 120명', growth: '140%' }
        }
      }
    ],
    faq: [
      {
        q: '플레이스 순위는 어떻게 결정되나요?',
        a: '네이버는 정보 완성도, 리뷰 수와 품질, 저장수, 방문자 수, 체류 시간 등 다양한 요소를 종합적으로 평가하여 순위를 결정합니다.'
      },
      {
        q: '리뷰 이벤트를 해도 되나요?',
        a: '네이버 정책 내에서 진행 가능합니다. 영수증 리뷰 등 실제 방문 고객 대상 이벤트는 긍정적으로 평가됩니다.'
      },
      {
        q: '여러 지점이 있는 경우에도 관리 가능한가요?',
        a: '네, 다중 지점 통합 관리가 가능합니다. 지점별 특성에 맞는 개별 전략을 수립하여 운영합니다.'
      },
      {
        q: '효과는 언제부터 나타나나요?',
        a: '일반적으로 최적화 후 2-4주 내에 순위 변화가 나타나며, 안정적인 상위 노출은 1-2개월 후부터 기대할 수 있습니다.'
      }
    ]
  },
  {
    id: 'blog',
    path: '/blog',
    title: '블로그 마케팅',
    shortDesc: '블로그 콘텐츠로 검색 유입과 브랜드 인지도를 높이세요',
    description: '네이버 블로그, 티스토리 등 블로그 채널을 활용한 콘텐츠 마케팅으로 검색 유입을 극대화하세요. 키워드 분석 기반의 전략적 콘텐츠 제작으로 잠재 고객을 확보합니다.',
    heroMessage: '검색 결과 상위에 노출되는 블로그가 매출을 만듭니다',
    icon: 'clipboard-list',
    color: 'from-green-400 to-green-600',
    painPoints: [
      '블로그를 운영하는데 방문자가 없다?',
      '어떤 키워드로 글을 써야 할지 모르겠다?',
      '글을 써도 검색에 노출되지 않는다?',
      '블로그 콘텐츠 제작에 시간이 너무 많이 든다?'
    ],
    solution: {
      title: '키워드 기반 콘텐츠 전략',
      desc: '검색량과 경쟁강도를 분석하여 최적의 키워드를 선정하고, 상위 노출되는 고품질 콘텐츠를 제작합니다'
    },
    features: [
      { title: '키워드 분석', desc: '검색량, 경쟁강도, 트렌드 분석을 통한 최적 키워드 선정', icon: 'search', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80' },
      { title: '블로그 콘텐츠 제작', desc: 'SEO 최적화된 고품질 블로그 포스팅 작성', icon: 'clipboard-list', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop&q=80' },
      { title: '블로그 체험단', desc: '파워블로거/일반 블로거 체험단 모집 및 관리', icon: 'user', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80' },
      { title: '블로그 SEO 최적화', desc: '제목, 본문, 태그, 이미지 등 SEO 요소 최적화', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&q=80' },
      { title: '카페/커뮤니티 바이럴', desc: '맘카페, 지역카페 등 타겟 커뮤니티 바이럴 마케팅', icon: 'share', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=250&fit=crop&q=80' },
      { title: '콘텐츠 캘린더 관리', desc: '월별/주별 콘텐츠 발행 일정 체계적 관리', icon: 'bar-chart', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop&q=80' },
      { title: '성과 분석 리포트', desc: '유입 키워드, 조회수, 전환율 등 상세 분석', icon: 'pie-chart', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '데이터 기반 키워드 전략', desc: '감이 아닌 데이터 분석으로 확실한 노출 효과를 보장하는 키워드 선정' },
      { title: '전문 작가 콘텐츠', desc: '업종별 전문 작가가 SEO와 가독성을 모두 갖춘 콘텐츠 제작' }
    ],
    process: [
      { step: 1, title: '현황 분석', desc: '기존 블로그 현황 및 경쟁사 분석' },
      { step: 2, title: '키워드 선정', desc: '검색량/경쟁강도 기반 키워드 리스트 도출' },
      { step: 3, title: '콘텐츠 기획', desc: '월간 콘텐츠 캘린더 및 주제 기획' },
      { step: 4, title: '콘텐츠 제작', desc: 'SEO 최적화 블로그 포스팅 작성' },
      { step: 5, title: '발행 및 확산', desc: '최적 시간대 발행 및 SNS 연계 확산' },
      { step: 6, title: '리포트', desc: '유입/전환 분석 및 개선 리포트' }
    ],
    performance: [
      {
        industry: '병원',
        company: 'H의원',
        period: '3개월',
        metrics: {
          visitors: { before: '일 200명', after: '일 1,500명', growth: '650%' },
          keywords: { before: '상위노출 5개', after: '상위노출 32개', growth: '540%' },
          inquiries: { before: '월 20건', after: '월 85건', growth: '325%' }
        }
      },
      {
        industry: '인테리어',
        company: 'D사',
        period: '2개월',
        metrics: {
          visitors: { before: '일 100명', after: '일 800명', growth: '700%' },
          searchRank: { before: '3페이지', after: '1페이지 상위', growth: '상위 노출' },
          leads: { before: '월 10건', after: '월 45건', growth: '350%' }
        }
      }
    ],
    faq: [
      {
        q: '블로그 마케팅 효과는 언제부터 나타나나요?',
        a: '일반적으로 꾸준한 포스팅 후 4-8주 내에 검색 노출이 시작되며, 3개월 이후 안정적인 유입 효과를 기대할 수 있습니다.'
      },
      {
        q: '자사 블로그와 체험단 블로그 중 어떤 것이 효과적인가요?',
        a: '두 가지를 병행하는 것이 가장 효과적입니다. 자사 블로그는 브랜드 신뢰도를, 체험단 블로그는 검색 노출과 입소문 효과를 높여줍니다.'
      },
      {
        q: '콘텐츠 주제는 누가 정하나요?',
        a: '키워드 분석 데이터를 기반으로 저희 전문팀이 주제를 제안드리며, 고객사와 협의하여 최종 결정합니다.'
      },
      {
        q: '블로그 포스팅은 얼마나 자주 하나요?',
        a: '플랜에 따라 주 2-5회 포스팅을 진행하며, 업종과 목표에 따라 조절 가능합니다.'
      }
    ]
  },
  {
    id: 'youtube',
    path: '/youtube',
    title: '유튜브 마케팅',
    shortDesc: '영상 콘텐츠로 브랜드 인지도와 고객 신뢰를 구축하세요',
    description: '유튜브 채널 운영 및 영상 마케팅으로 브랜드 인지도를 극대화하세요. 기획부터 촬영, 편집, 최적화까지 원스톱 유튜브 마케팅 서비스를 제공합니다.',
    heroMessage: '영상 시대, 유튜브 없이는 마케팅이 완성되지 않습니다',
    icon: 'trending-up',
    color: 'from-red-400 to-red-600',
    painPoints: [
      '유튜브를 시작하고 싶은데 어디서부터 해야 할지 모르겠다?',
      '영상을 올려도 조회수가 나오지 않는다?',
      '영상 제작 비용이 너무 부담된다?',
      '채널 운영에 시간을 쏟기 어렵다?'
    ],
    solution: {
      title: '원스톱 유튜브 마케팅',
      desc: '채널 기획부터 콘텐츠 제작, 검색 최적화, 광고 운영까지 전 과정을 전문가가 관리합니다'
    },
    features: [
      { title: '채널 기획 및 브랜딩', desc: '채널 컨셉, 디자인, 브랜딩 전략 수립', icon: 'target', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop&q=80' },
      { title: '영상 기획/촬영/편집', desc: '전문 PD가 기획부터 편집까지 원스톱 제작', icon: 'eye', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop&q=80' },
      { title: '유튜브 SEO 최적화', desc: '제목, 설명, 태그, 썸네일 최적화로 검색 노출 극대화', icon: 'search', image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&q=80' },
      { title: '쇼츠 콘텐츠', desc: '짧은 영상으로 빠른 조회수 및 구독자 확보', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop&q=80' },
      { title: '유튜브 광고', desc: '인스트림/범퍼 광고로 타겟 고객 도달', icon: 'rocket', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' },
      { title: '인플루언서 협업', desc: '유튜브 크리에이터와의 협업 콘텐츠 기획', icon: 'user', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80' },
      { title: '성과 분석', desc: '조회수, 시청시간, 구독자 등 핵심 지표 분석', icon: 'bar-chart', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '전문 영상 제작팀', desc: '기획, 촬영, 편집 전문가로 구성된 팀이 고품질 영상 제작' },
      { title: '데이터 기반 운영', desc: '유튜브 알고리즘 분석에 기반한 최적 업로드 전략' }
    ],
    process: [
      { step: 1, title: '목표 설정', desc: '채널 목표 및 타겟 시청자 분석' },
      { step: 2, title: '채널 기획', desc: '컨셉, 브랜딩, 콘텐츠 방향 수립' },
      { step: 3, title: '콘텐츠 제작', desc: '기획/촬영/편집 전 과정 진행' },
      { step: 4, title: 'SEO 최적화', desc: '제목, 설명, 태그, 썸네일 최적화' },
      { step: 5, title: '채널 운영', desc: '정기 업로드 및 커뮤니티 관리' },
      { step: 6, title: '리포트', desc: '채널 성과 분석 및 개선 전략' }
    ],
    performance: [
      {
        industry: '뷰티',
        company: 'B사',
        period: '3개월',
        metrics: {
          subscribers: { before: '500명', after: '5,200명', growth: '940%' },
          views: { before: '월 3,000회', after: '월 85,000회', growth: '2,733%' },
          sales: { before: '월 300만', after: '월 2,800만', growth: '833%' }
        }
      },
      {
        industry: '교육',
        company: 'E사',
        period: '4개월',
        metrics: {
          subscribers: { before: '200명', after: '3,800명', growth: '1,800%' },
          views: { before: '월 1,500회', after: '월 45,000회', growth: '2,900%' },
          inquiries: { before: '월 5건', after: '월 50건', growth: '900%' }
        }
      }
    ],
    faq: [
      {
        q: '유튜브 채널이 없는 상태에서도 시작할 수 있나요?',
        a: '네, 채널 개설부터 브랜딩, 첫 콘텐츠 제작까지 모든 과정을 함께 진행합니다.'
      },
      {
        q: '영상 제작 비용은 어느 정도인가요?',
        a: '영상 유형과 길이에 따라 다르며, 상담 시 맞춤 견적을 안내해드립니다. 쇼츠부터 시작하면 비용을 절감할 수 있습니다.'
      },
      {
        q: '얼마나 자주 영상을 올려야 하나요?',
        a: '알고리즘 특성상 주 1-2회 이상 정기 업로드를 권장드립니다. 업로드 빈도는 플랜에 따라 조절 가능합니다.'
      },
      {
        q: '유튜브 쇼츠도 효과가 있나요?',
        a: '쇼츠는 구독자 확보와 채널 인지도 향상에 매우 효과적입니다. 일반 영상과 쇼츠를 병행하면 시너지를 낼 수 있습니다.'
      }
    ]
  },
  {
    id: 'homepage',
    path: '/homepage',
    title: '홈페이지 제작',
    shortDesc: '비즈니스의 첫인상을 만드는 전문 홈페이지 제작',
    description: '반응형 웹 디자인, SEO 최적화, 빠른 로딩 속도까지 갖춘 전문 홈페이지를 제작합니다. 기업 소개, 쇼핑몰, 랜딩페이지 등 목적에 맞는 맞춤형 웹사이트를 만들어드립니다.',
    heroMessage: '온라인 비즈니스의 시작은 신뢰를 주는 홈페이지입니다',
    icon: 'home',
    color: 'from-purple-400 to-purple-600',
    painPoints: [
      '홈페이지가 없어 온라인에서 신뢰도가 떨어진다?',
      '기존 홈페이지가 너무 오래되어 리뉴얼이 필요하다?',
      '모바일에서 제대로 보이지 않는다?',
      '홈페이지 제작 비용이 너무 부담된다?'
    ],
    solution: {
      title: '맞춤형 홈페이지 솔루션',
      desc: '목적과 예산에 맞는 최적의 웹사이트를 기획부터 디자인, 개발, 유지보수까지 원스톱으로 제공합니다'
    },
    features: [
      { title: '맞춤 디자인', desc: '브랜드 아이덴티티에 맞는 전문 웹 디자인', icon: 'sparkles', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&q=80' },
      { title: '반응형 웹', desc: 'PC, 태블릿, 모바일 모든 기기에서 완벽하게 작동', icon: 'phone', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop&q=80' },
      { title: 'SEO 최적화', desc: '검색엔진 최적화로 네이버/구글 상위 노출', icon: 'search', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&q=80' },
      { title: '빠른 로딩 속도', desc: '최적화된 코드와 이미지로 빠른 페이지 로딩', icon: 'rocket', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80' },
      { title: '관리자 시스템', desc: '직접 수정 가능한 편리한 관리자 페이지 제공', icon: 'building', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' },
      { title: '보안/SSL 인증', desc: 'SSL 인증서 적용 및 보안 설정', icon: 'check-circle', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&q=80' },
      { title: '유지보수', desc: '제작 후 지속적인 기술 지원 및 업데이트', icon: 'target', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '마케팅 관점의 제작', desc: '단순 디자인이 아닌 마케팅 전환율을 고려한 전략적 웹사이트 설계' },
      { title: '합리적 비용', desc: '불필요한 기능을 줄이고 핵심에 집중하여 합리적인 가격 제공' }
    ],
    process: [
      { step: 1, title: '요구사항 분석', desc: '사이트 목적, 기능 요구사항 파악' },
      { step: 2, title: '기획 및 설계', desc: '사이트맵, 와이어프레임 설계' },
      { step: 3, title: '디자인', desc: '브랜드에 맞는 UI/UX 디자인' },
      { step: 4, title: '개발', desc: '프론트엔드/백엔드 개발' },
      { step: 5, title: '테스트', desc: '크로스 브라우저/디바이스 테스트' },
      { step: 6, title: '런칭 및 유지보수', desc: '사이트 오픈 및 사후 관리' }
    ],
    performance: [
      {
        industry: '법률사무소',
        company: 'L로펌',
        period: '1개월',
        metrics: {
          design: { before: '10년 된 구형 사이트', after: '모던 반응형 사이트', growth: '전면 리뉴얼' },
          visitors: { before: '일 30명', after: '일 250명', growth: '733%' },
          inquiries: { before: '월 5건', after: '월 35건', growth: '600%' }
        }
      },
      {
        industry: '제조업',
        company: 'M사',
        period: '1개월',
        metrics: {
          mobileScore: { before: '30점', after: '95점', growth: '217%' },
          loadSpeed: { before: '8초', after: '1.5초', growth: '81% 개선' },
          inquiries: { before: '월 10건', after: '월 40건', growth: '300%' }
        }
      }
    ],
    faq: [
      {
        q: '홈페이지 제작 기간은 어느 정도인가요?',
        a: '일반적인 기업 소개 사이트는 3-4주, 쇼핑몰이나 복잡한 기능이 포함된 사이트는 6-8주 정도 소요됩니다.'
      },
      {
        q: '제작 후 직접 수정이 가능한가요?',
        a: '네, 관리자 페이지를 통해 텍스트, 이미지 등 기본적인 콘텐츠는 직접 수정하실 수 있습니다.'
      },
      {
        q: '호스팅과 도메인도 포함되나요?',
        a: '호스팅과 도메인 설정을 도와드리며, 비용은 별도입니다. 기존 도메인이 있으시면 연결해드립니다.'
      },
      {
        q: '유지보수 비용이 따로 있나요?',
        a: '제작 후 1개월간 무상 유지보수를 제공하며, 이후에는 합리적인 월 관리 비용으로 지속적인 지원을 받으실 수 있습니다.'
      }
    ]
  },
  {
    id: 'review',
    path: '/review',
    title: '리뷰 마케팅',
    shortDesc: '진정성 있는 리뷰로 신뢰도와 구매 전환율을 높이세요',
    description: '체험단 운영과 리뷰 마케팅으로 브랜드 신뢰도를 높이세요. 블로그, 인스타그램, 유튜브 등 다양한 채널의 진정성 있는 리뷰가 구매를 이끕니다.',
    heroMessage: '소비자의 93%가 구매 전 리뷰를 확인합니다',
    icon: 'star',
    color: 'from-yellow-400 to-orange-500',
    painPoints: [
      '상품은 좋은데 리뷰가 없다?',
      '체험단 운영 방법을 모르겠다?',
      '부정적인 리뷰 때문에 고민이다?',
      '리뷰 마케팅 효과를 측정하기 어렵다?'
    ],
    solution: {
      title: '전략적 리뷰 마케팅',
      desc: '체험단 모집부터 콘텐츠 관리까지, 리뷰의 양과 질을 모두 높이는 종합 솔루션'
    },
    features: [
      { title: '블로거 체험단', desc: '파워블로거/일반 블로거 체험단 모집 및 관리', icon: 'clipboard-list', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop&q=80' },
      { title: '인플루언서 협업', desc: '인스타그램/유튜브 인플루언서 캠페인', icon: 'user', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop&q=80' },
      { title: '영수증 리뷰', desc: '실구매 인증 리뷰 확보 캠페인', icon: 'check-circle', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=250&fit=crop&q=80' },
      { title: '네이버 카페 바이럴', desc: '맘카페/지역카페 타겟 바이럴 마케팅', icon: 'share', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80' },
      { title: '리뷰 콘텐츠 가이드', desc: '효과적인 리뷰 작성 템플릿 제공', icon: 'star', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&q=80' },
      { title: '부정 리뷰 대응', desc: '악성 리뷰 모니터링 및 전문 대응 전략', icon: 'eye', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop&q=80' },
      { title: '리뷰 성과 분석', desc: '리뷰 영향력 분석 및 ROI 측정', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '체험단 유형 다양화', desc: '블로그, 인스타, 유튜브, 카페 등 채널별 맞춤 체험단 운영' },
      { title: '진정성 있는 리뷰', desc: '가이드라인 제공으로 자연스럽고 신뢰도 높은 리뷰 확보' }
    ],
    process: [
      { step: 1, title: '브랜드 분석', desc: '제품/서비스 특성 및 타겟 분석' },
      { step: 2, title: '체험단 모집', desc: '채널별 적합한 체험단 모집' },
      { step: 3, title: '제품 발송', desc: '체험단에게 제품/서비스 제공' },
      { step: 4, title: '리뷰 가이드', desc: '효과적인 리뷰 작성 가이드 제공' },
      { step: 5, title: '콘텐츠 확산', desc: '리뷰 콘텐츠 2차 활용 및 확산' },
      { step: 6, title: '리포트', desc: '리뷰 현황 및 영향력 분석 리포트' }
    ],
    performance: [
      {
        industry: '화장품',
        company: 'C사',
        period: '2개월',
        metrics: {
          reviews: { before: '50개', after: '320개', growth: '540%' },
          searchRank: { before: '키워드 3페이지', after: '키워드 1페이지', growth: '상위 노출' },
          conversions: { before: '전환율 1.2%', after: '전환율 3.8%', growth: '217%' }
        }
      },
      {
        industry: '식품',
        company: 'F사',
        period: '3개월',
        metrics: {
          reviews: { before: '80개', after: '450개', growth: '463%' },
          brandSearch: { before: '월 500회', after: '월 2,800회', growth: '460%' },
          sales: { before: '월 600만', after: '월 7,800만', growth: '1300%' }
        }
      }
    ],
    faq: [
      {
        q: '체험단 리뷰는 광고 표시를 해야 하나요?',
        a: '네, 공정거래위원회 지침에 따라 경제적 대가를 받은 리뷰는 광고임을 명시해야 합니다. 저희는 가이드라인을 준수하며 진행합니다.'
      },
      {
        q: '부정적인 리뷰가 달리면 어떻게 하나요?',
        a: '부정 리뷰는 삭제 요청보다 진정성 있는 답변으로 대응하는 것이 효과적입니다. 답변 가이드를 제공해드립니다.'
      },
      {
        q: '체험단 규모는 어느 정도가 적당한가요?',
        a: '제품 특성과 목표에 따라 다르지만, 첫 캠페인은 20-30명 규모로 시작하여 반응을 보고 확대하는 것을 권장드립니다.'
      },
      {
        q: '인플루언서와 일반 블로거의 차이는 뭔가요?',
        a: '인플루언서는 도달 범위가 넓어 브랜드 인지도 향상에 효과적이고, 일반 블로거는 검색 노출에 유리합니다. 목표에 따라 믹스하여 운영합니다.'
      }
    ]
  },
  {
    id: 'vbizring',
    path: '/vbizring',
    title: '보이는컬러링 V비즈링',
    shortDesc: '전화 연결 시 브랜드 영상으로 강력한 광고 효과',
    description: '전화 연결 대기 중 브랜드 홍보 영상이 노출되는 보이는컬러링(V비즈링) 서비스입니다. 별도 앱 설치 없이 전화 거는 상대방에게 자동으로 브랜드 영상을 보여줍니다.',
    heroMessage: '전화 한 통이 브랜드 홍보의 기회가 됩니다',
    icon: 'phone',
    color: 'from-amber-400 to-amber-600',
    painPoints: [
      '새로운 광고 채널을 찾고 있다?',
      '기존 광고의 노출 효과가 떨어진다?',
      '고객에게 전문적인 이미지를 주고 싶다?',
      '비용 대비 효율적인 마케팅이 필요하다?'
    ],
    solution: {
      title: '전화 연결 시 자동 영상 노출',
      desc: '하루 수십~수백 통의 전화가 브랜드 홍보 기회로! 별도 앱 설치 없이 상대방 화면에 영상이 자동 재생됩니다'
    },
    features: [
      { title: '보이는컬러링 설정', desc: '통신사별 V비즈링 서비스 가입 및 설정 대행', icon: 'phone', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop&q=80' },
      { title: '홍보 영상 제작', desc: '브랜드에 맞는 15~30초 홍보 영상 기획/제작', icon: 'eye', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop&q=80' },
      { title: '브랜드 이미지 디자인', desc: '대기 화면용 브랜드 이미지 및 로고 디자인', icon: 'sparkles', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&q=80' },
      { title: '타겟 맞춤 콘텐츠', desc: '업종/시즌별 맞춤 홍보 영상 교체 운영', icon: 'target', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=250&fit=crop&q=80' },
      { title: '다회선 관리', desc: '여러 전화번호 일괄 설정 및 통합 관리', icon: 'building', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&q=80' },
      { title: '노출 통계 분석', desc: '영상 노출 횟수, 시청 시간 등 데이터 분석', icon: 'bar-chart', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' },
      { title: '유지보수 및 업데이트', desc: '영상 교체, 시즌 업데이트 등 지속 관리', icon: 'check-circle', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '무조건 노출', desc: '상대방이 전화를 거는 것만으로 영상이 자동 재생되어 100% 노출 보장' },
      { title: '비용 효율', desc: '월 소액의 이용료로 하루 수십~수백 건의 광고 효과' }
    ],
    process: [
      { step: 1, title: '서비스 상담', desc: '업종 및 활용 목적 상담' },
      { step: 2, title: '영상 기획', desc: '홍보 영상 컨셉 기획 및 시나리오' },
      { step: 3, title: '영상 제작', desc: '전문 영상 촬영 및 편집' },
      { step: 4, title: '서비스 설정', desc: '통신사 V비즈링 서비스 가입/설정' },
      { step: 5, title: '영상 등록', desc: '제작된 영상 등록 및 테스트' },
      { step: 6, title: '운영 관리', desc: '노출 현황 모니터링 및 영상 업데이트' }
    ],
    performance: [
      {
        industry: '부동산',
        company: 'R공인중개사',
        period: '1개월',
        metrics: {
          exposure: { before: '0건', after: '월 1,200건 노출', growth: '신규 채널' },
          branding: { before: '일반 통화음', after: '매물 소개 영상', growth: '전문 이미지 구축' },
          inquiries: { before: '월 15건', after: '월 28건', growth: '87%' }
        }
      },
      {
        industry: '음식점 프랜차이즈',
        company: 'G사',
        period: '2개월',
        metrics: {
          exposure: { before: '0건', after: '월 3,500건 노출', growth: '신규 채널' },
          recognition: { before: '지역 인지도 낮음', after: '브랜드 인지도 상승', growth: '매출 23% 증가' },
          lines: { before: '1회선', after: '15회선 확대', growth: '전 지점 적용' }
        }
      }
    ],
    faq: [
      {
        q: '상대방이 앱을 설치해야 하나요?',
        a: '아닙니다. 별도 앱 설치 없이 전화를 거는 상대방 화면에 자동으로 영상이 노출됩니다.'
      },
      {
        q: '어떤 통신사에서 사용 가능한가요?',
        a: 'SKT, KT, LG U+ 모든 통신사에서 이용 가능합니다. 통신사별 설정을 대행해드립니다.'
      },
      {
        q: '영상은 얼마나 자주 바꿀 수 있나요?',
        a: '원하시는 만큼 교체 가능합니다. 시즌별, 프로모션별 영상을 교체하여 활용하시는 것을 권장드립니다.'
      },
      {
        q: '비용은 어떻게 되나요?',
        a: '초기 영상 제작 비용과 월 이용료로 구성됩니다. 상담 시 업종과 필요에 맞는 맞춤 견적을 안내해드립니다.'
      }
    ]
  },
  {
    id: 'smartstore',
    path: '/smartstore',
    title: '스마트스토어 마케팅',
    shortDesc: '네이버 쇼핑 영역 상품 노출 및 판매 강화',
    description: '네이버 스마트스토어에서 상품 상위 노출과 매출 극대화를 위한 종합 마케팅 솔루션을 제공합니다. 키워드 최적화, 상품 페이지 개선, 광고 운영까지 원스톱으로 관리합니다.',
    heroMessage: '네이버 쇼핑에서 보이지 않으면, 매출은 경쟁사에게 갑니다',
    icon: 'shopping-bag',
    color: 'from-green-400 to-green-600',
    painPoints: [
      '상품을 등록해도 검색에 노출되지 않는다?',
      '경쟁 셀러보다 순위가 낮다?',
      '광고비는 나가는데 매출이 안 오른다?',
      '상품 페이지 전환율이 낮다?'
    ],
    solution: {
      title: '스마트스토어 매출 성장 전략',
      desc: '키워드 최적화, 상품 페이지 개선, 리뷰 확보, 광고 운영을 종합적으로 관리하여 매출을 극대화합니다'
    },
    features: [
      { title: '키워드 최적화', desc: '검색량·경쟁강도 분석 기반 최적 키워드 세팅', icon: 'search', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&q=80' },
      { title: '상품 페이지 최적화', desc: '상세페이지 기획·디자인으로 전환율 향상', icon: 'sparkles', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=250&fit=crop&q=80' },
      { title: '쇼핑 검색광고', desc: '네이버 쇼핑 광고 세팅 및 효율 최적화', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80' },
      { title: '리뷰 마케팅', desc: '구매 리뷰 확보 캠페인으로 신뢰도 강화', icon: 'star', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&q=80' },
      { title: '가격 경쟁력 분석', desc: '경쟁사 가격 모니터링 및 가격 전략 수립', icon: 'bar-chart', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' },
      { title: '프로모션 기획', desc: '시즌별·이벤트별 프로모션 전략 수립', icon: 'rocket', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=250&fit=crop&q=80' },
      { title: '매출 리포트', desc: '판매 데이터 분석 및 개선 방향 제시', icon: 'pie-chart', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '데이터 기반 키워드 전략', desc: '감이 아닌 검색 데이터 분석으로 상위 노출을 실현하는 키워드 최적화' },
      { title: '전환율 중심 최적화', desc: '단순 노출이 아닌 실제 구매 전환까지 고려한 상세페이지·가격·리뷰 종합 관리' }
    ],
    process: [
      { step: 1, title: '스토어 분석', desc: '현재 스토어 현황 및 경쟁사 분석' },
      { step: 2, title: '키워드 전략', desc: '검색량·경쟁강도 기반 키워드 선정' },
      { step: 3, title: '상품 최적화', desc: '상세페이지·제목·태그 최적화' },
      { step: 4, title: '광고 세팅', desc: '쇼핑검색광고 세팅 및 운영' },
      { step: 5, title: '리뷰 확보', desc: '구매 리뷰 캠페인 및 관리' },
      { step: 6, title: '리포트', desc: '매출·유입 분석 및 개선 리포트' }
    ],
    performance: [
      {
        industry: '식품',
        company: 'K사',
        period: '2개월',
        metrics: {
          sales: { before: '월 200만', after: '월 1,800만', growth: '800%' },
          ranking: { before: '키워드 5페이지', after: '키워드 1페이지', growth: '상위 노출' },
          reviews: { before: '30개', after: '250개', growth: '733%' }
        }
      },
      {
        industry: '생활용품',
        company: 'L사',
        period: '3개월',
        metrics: {
          sales: { before: '월 500만', after: '월 4,200만', growth: '740%' },
          visitors: { before: '일 80명', after: '일 650명', growth: '713%' },
          conversions: { before: '전환율 1.5%', after: '전환율 4.2%', growth: '180%' }
        }
      }
    ],
    faq: [
      {
        q: '스마트스토어가 없는 상태에서도 시작할 수 있나요?',
        a: '네, 스토어 개설부터 상품 등록, 초기 세팅까지 모든 과정을 함께 진행합니다.'
      },
      {
        q: '광고 없이 상위 노출이 가능한가요?',
        a: '키워드 최적화와 리뷰 확보 등 자연 검색 최적화로 상위 노출이 가능합니다. 다만 광고를 병행하면 더 빠른 효과를 기대할 수 있습니다.'
      },
      {
        q: '어떤 상품이 스마트스토어에 적합한가요?',
        a: '대부분의 소비재 상품이 적합합니다. 상담 시 상품 특성에 맞는 전략을 안내해드립니다.'
      },
      {
        q: '효과는 언제부터 나타나나요?',
        a: '키워드 최적화 후 1-2주 내 검색 순위 변화가 나타나며, 안정적인 매출 성장은 1-2개월 후부터 기대할 수 있습니다.'
      }
    ]
  },
  {
    id: 'instagram',
    path: '/instagram',
    title: '인스타그램 마케팅',
    shortDesc: '해시태그·탐색탭 기반 이미지·영상 노출',
    description: '인스타그램 해시태그 최적화, 릴스 제작, 인플루언서 협업 등을 통해 브랜드 인지도를 높이고 팔로워와 매출을 동시에 성장시킵니다.',
    heroMessage: 'MZ세대 고객을 만나는 가장 빠른 채널, 인스타그램',
    icon: 'heart',
    color: 'from-pink-400 to-purple-500',
    painPoints: [
      '팔로워는 있는데 매출로 이어지지 않는다?',
      '콘텐츠를 올려도 도달률이 떨어진다?',
      '해시태그 전략을 모르겠다?',
      '릴스·스토리 콘텐츠 제작이 어렵다?'
    ],
    solution: {
      title: '인스타그램 성장 전략',
      desc: '콘텐츠 기획부터 해시태그 최적화, 릴스 제작, 인플루언서 협업까지 종합적인 인스타그램 마케팅을 제공합니다'
    },
    features: [
      { title: '콘텐츠 기획·제작', desc: '피드, 릴스, 스토리 등 채널별 맞춤 콘텐츠 제작', icon: 'sparkles', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop&q=80' },
      { title: '해시태그 최적화', desc: '도달률을 극대화하는 해시태그 전략 수립', icon: 'search', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&q=80' },
      { title: '릴스 영상 제작', desc: '트렌디한 숏폼 영상으로 바이럴 효과 극대화', icon: 'trending-up', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop&q=80' },
      { title: '인플루언서 협업', desc: '타겟 맞춤 인플루언서 섭외 및 캠페인 진행', icon: 'user', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80' },
      { title: '인스타그램 광고', desc: '타겟팅 광고로 잠재 고객 도달 및 전환', icon: 'target', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&q=80' },
      { title: '팔로워 성장 전략', desc: '유기적 팔로워 증가를 위한 성장 전략', icon: 'bar-chart', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80' },
      { title: '성과 분석 리포트', desc: '도달, 참여율, 팔로워 증가 등 핵심 지표 분석', icon: 'pie-chart', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80' }
    ],
    difference: [
      { title: '알고리즘 맞춤 전략', desc: '인스타그램 알고리즘 변화에 대응하는 최신 콘텐츠 전략' },
      { title: '크리에이티브 콘텐츠', desc: '전문 디자이너·영상 PD가 제작하는 고퀄리티 비주얼 콘텐츠' }
    ],
    process: [
      { step: 1, title: '계정 분석', desc: '현재 계정 현황 및 경쟁사 분석' },
      { step: 2, title: '콘텐츠 전략', desc: '채널 컨셉 및 콘텐츠 방향 수립' },
      { step: 3, title: '콘텐츠 제작', desc: '피드·릴스·스토리 콘텐츠 제작' },
      { step: 4, title: '해시태그 최적화', desc: '도달률 극대화 해시태그 세팅' },
      { step: 5, title: '광고 운영', desc: '타겟팅 광고 세팅 및 최적화' },
      { step: 6, title: '리포트', desc: '성과 분석 및 개선 전략 리포트' }
    ],
    performance: [
      {
        industry: '뷰티',
        company: 'P사',
        period: '2개월',
        metrics: {
          followers: { before: '800명', after: '5,500명', growth: '588%' },
          reach: { before: '주 2,000', after: '주 35,000', growth: '1,650%' },
          sales: { before: '월 150만', after: '월 1,200만', growth: '700%' }
        }
      },
      {
        industry: '카페',
        company: 'T사',
        period: '3개월',
        metrics: {
          followers: { before: '300명', after: '4,200명', growth: '1,300%' },
          engagement: { before: '참여율 1.2%', after: '참여율 5.8%', growth: '383%' },
          visitors: { before: '일 30명', after: '일 85명', growth: '183%' }
        }
      }
    ],
    faq: [
      {
        q: '인스타그램 마케팅 효과는 언제부터 나타나나요?',
        a: '릴스 콘텐츠는 빠르면 1-2주 내에 효과가 나타나며, 안정적인 계정 성장은 2-3개월 후부터 기대할 수 있습니다.'
      },
      {
        q: '기존 계정을 활용할 수 있나요?',
        a: '네, 기존 계정 분석 후 개선 전략을 수립하여 진행합니다. 신규 계정 개설도 가능합니다.'
      },
      {
        q: '콘텐츠는 누가 제작하나요?',
        a: '전문 디자이너와 영상 PD가 브랜드에 맞는 콘텐츠를 제작합니다. 고객사 소재를 활용하여 제작하기도 합니다.'
      },
      {
        q: '인플루언서 협업 비용은 별도인가요?',
        a: '인플루언서 섭외 및 관리는 서비스에 포함되며, 인플루언서 개별 비용은 규모에 따라 별도 안내드립니다.'
      }
    ]
  }
]

export const processSteps = [
  {
    step: 1,
    title: '문의',
    description: '간단한 문의로 시작하세요',
    icon: 'phone'
  },
  {
    step: 2,
    title: '분석',
    description: '현재 상황을 정확히 분석합니다',
    icon: 'bar-chart'
  },
  {
    step: 3,
    title: '전략 수립',
    description: '맞춤형 마케팅 전략을 수립합니다',
    icon: 'clipboard-list'
  },
  {
    step: 4,
    title: '실행',
    description: '전문가가 직접 마케팅을 실행합니다',
    icon: 'rocket'
  },
  {
    step: 5,
    title: '모니터링',
    description: '실시간으로 성과를 모니터링합니다',
    icon: 'eye'
  },
  {
    step: 6,
    title: '리포트',
    description: '상세한 성과 리포트를 제공합니다',
    icon: 'trending-up'
  }
]

export const whyUsReasons = [
  {
    title: '전문성',
    description: '10년 이상의 온라인 마케팅 경험을 보유한 전문가 팀',
    icon: 'target'
  },
  {
    title: '데이터 기반',
    description: '감이 아닌 데이터에 기반한 과학적 마케팅 전략',
    icon: 'pie-chart'
  },
  {
    title: '합리적 비용',
    description: '불필요한 비용 없이 효율적인 마케팅 운영',
    icon: 'wallet'
  },
  {
    title: '전담 매니저',
    description: '1:1 전담 매니저가 끝까지 책임지고 관리',
    icon: 'user'
  }
]
