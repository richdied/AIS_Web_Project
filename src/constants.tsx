// import { Book } from "./components/book.type.d";

export type Star = 0 | 1 | 2 | 3 | 4 | 5;
export class ReadersReview {
  constructor(
    public id: string,
    public title: string,
    public main: string,
    public writer: string,
    public stars: Star,
    public createdDate: string,
    public updatedDate: string
  ) {}
}

const readersReview1 = new ReadersReview(
  "1",
  "취준생들이 한번쯤 읽어봤으면 하는 책",
  ` 
	 [리뷰를 시작하기전] 
	  몇 년 전부터였던가? IT 업계에 대 유행이
          시작되었다. 이른바 코딩 테스트. 필자가 알기론 처음 시작은
          실리콘밸리였던 것으로알고 있다. 다만 정확히 어느 기업에서 코딩
          테스트를 시작하였는지까지는 모른다. 확실한 것은 MS, Facebook 그리고
          대망의 Google에 이르기까지 미국의 내로라하는 기업들조차 기본기로
          알고리즘 능력을 지원자들에게 상당 수준 요구하고있다는 정도이다.`,
  "jrcforce",
  4,
  "2020-09-27",
  "2020-10-02"
);
const readersReview2 = new ReadersReview(
  "2",
  "취준생들이 한번쯤 읽어봤으면 하는 책",
  `우리나라의 시험 대비 문화와 코테가 만나면 이런 책이 나오지 않을까 생각했었다.
코테는 결국 대부분의 시험과 유사하다.
문제를 많이 풀어보며 유형을 파악하고 이를 새로운 문제에 활용할 수 있어야 유리하다.
(물론 문제마다 여러가지 풀이가 있을 수 있기에 단순 암기와는 다르다.)
때문에 각종 수험서가 넘처나는 우리나라에서 코테 수험서가 안 나온다면 이상한 일일 것이다.
이 책은 정말 제목대로 취업을 위한 코테 수험서이다.
보통 자료구조나 알고리즘 서적 혹은 프로그래밍 대회 책들은 단순한 알고리즘 부터 차근차근 설명한다.
이 책과 유사한 책이 비슷한 시기에 출간되었다.`,
  "testNo",
  5,
  "2020-09-29",
  "2020-09-29"
);
const readersReview3 = new ReadersReview(
  "3",
  "두 권 사고 한 권은 소장용",
  ` 알고리즘 능력을 지원자들에게 상당 수준 요구하고있다는 정도이다.`,
  "jrcforce",
  4,
  "2020-09-21",
  "2020-10-11"
);

export const mockReadersReview = [
  readersReview1,
  readersReview2,
  readersReview3,
];

export class Book {
  id: string;
  category: string;
  title: string;
  coverImg: string;
  writer_name: string;
  publishedBy: string;
  price: number;
  publishedDate: string;
  shippingFee: number;
  writtenLang: string;
  estimatedArrivalDate?: string;
  writer_bio?: string;
  item_desc?: string;
  item_idx?: string;

  constructor(args: {
    id: string;
    category: string;
    title: string;
    coverImg: string;
    writer_name: string;
    publishedBy: string;
    price: number;
    publishedDate: string;
    shippingFee: number;
    writtenLang: string;
    estimatedArrivalDate?: string;
    writer_bio?: string;
    item_desc?: string;
    item_idx?: string;
  }) {
    this.id = args.id;
    this.category = args.category;
    this.title = args.title;
    this.coverImg = args.coverImg;
    this.writer_name = args.writer_name;
    this.publishedBy = args.publishedBy;
    this.price = args.price;
    this.publishedDate = args.publishedDate;
    this.shippingFee = args.shippingFee;
    this.estimatedArrivalDate = args.estimatedArrivalDate;
    this.writer_bio = args.writer_bio;
    this.item_desc = args.item_desc;
    this.item_idx = args.item_idx;
    this.writtenLang = args.writtenLang;
  }
}

const arr = [];

for (let i = 1; i < 16; i++) {
  const book = new Book({
    id: `${i}`,
    category: "IT",
    title: "You don't know JS",
    writer_name: "Kim",
    coverImg: "https://www.hanbit.co.kr/data/books/B7030127165_m.jpg",
    publishedBy: "99",
    price: 1000,
    publishedDate: "99",
    shippingFee: 1000,
    estimatedArrivalDate: "99",
    writer_bio: `
오가와 유타로

SIer의 기술본부 개발기술부 소속. 딥러닝을 비롯한 머신러닝 관련 기술의 연구 개발 및 기술 지원을 담당한다. 아카시 공업고등전문학교, 도쿄대학 공학부를 거쳐 도쿄대학 대학원, 짐보/고타니 실험실에서 뇌 기능 측정 및 계산 신경과학을 연구했으며 2016년에 박사 학위를 취득했다. 도쿄대학 특임 연구원을 거쳐 2017년 4월부터 현재 직무에 종사 중이다. 저서로 『PyTorch를 활용한 강화학습/심층강화학습 실전 입문』, 『つくりながら學ぶ! Pythonによる因果分析』 등이 있다.
    `,
    item_desc: `딥러닝을 진정으로 가치 있게 활용하는 방법!

딥러닝은 입출력 데이터와 손실함수만 잘 정의한다면 다양한 분야의 과제를 해결할 수 있다. 딥러닝 응용 방법으로 전이학습과 파인튜닝을 활용한 화상(이미지) 분류, 물체 감지, 시맨틱 분할, 자세 추정, GAN을 활용한 화상 생성 및 이상 탐지, 텍스트 데이터 감정 분석, 동영상 데이터 클래스 분류를 다뤘다. 직무 특성에 따른 도메인 지식과 딥러닝 구현 능력을 갖춘 인재로 성장하여 활약하는 데 이 책이 도움이 될 것이다.

 

 

★ 각 장의 개요 

 

_1장. 화상 분류와 전이학습(VGG)

학습된 VGG 모델을 활용해 소량의 데이터로 딥러닝 모델을 구축할 수 있는 전이학습과 파인튜닝을 알아봅니다. 또한 이 책에서는 AWS의 클라우드 GPU 머신을 사용하여 딥러닝을 설명합니다.

 

_2장. 물체 인식(SSD)

물체 감지는 딥러닝 응용 방법 중에서도 특히 복잡한 기술입니다. SSD 모델을 활용해 물체 감지의 흐름을 설명합니다.

 

_3장. 시맨틱 분할(PSPNet)

픽셀 수준에서 물체를 분류하는 시맨틱 분할을 학습하면서 딥러닝 모델 PSPNet을 설명합니다. 어떻게 픽셀 수준에서 물체를 분류할 수 있는지와 함께 네트워크 구조, 순전파함수, 손실함수도 알아봅니다. 

 

_4장. 자세 추정(OpenPose)

자세 추정은 화상에 포함된 여러 인물을 탐지하여 인체 각 부위의 위치를 식별하고 부위를 연결하는 선(링크)을 구하는 기술입니다. OpenPose가 어떻게 사람의 각 부위를 탐지하고 부위를 서로 연결하는지 구현하며 그 구조를 확인합니다. 모델의 네트워크 구조 확인 방법으로 텐서보드X 사용법을 설명합니다.

 

_5장. GAN을 활용한 화상 생성(DCGAN, Self-Attention GAN)

Self-Attention은 자연어 처리(NLP)에 활용되는 Transformer와 BERT의 열쇠가 되지만 이해하기 어렵기 때문에 우선은 화상에서 Self-Attention을 구현하고 이해하는 것을 목표로 합니다.

 

_6장. GAN을 활용한 이상 감지(AnoGAN, Efficient GAN)

이상 화상 검출은 의료 현장에서 질환 및 건강 상태를 판별하거나 제조업에서 이상이 있는 부품을 검출할 경우 등에 사용합니다. 이상 화상이 정상 화상보다 매우 적을 때는 AnoGAN을, 이상 탐지에 걸리는 시간을 해결하기 위해서는 EfficientGAN을 응용할 수 있습니다. 

 

_7장. 자연어 처리를 활용한 감정 분석(Transformer)

텍스트 데이터를 취급하는 자연어 처리를 살펴보고 딥러닝 모델 Transformer를 활용해 텍스트 데이터 내용을 긍정과 부정으로 감정합니다. word2vec과 fasttext를 활용해 단어를 벡터 표현으로 수치화하고 단어에 Attention을 걸어 추론 결과를 시각화해봅니다. 

 

_8장. 자연어 처리를 활용한 감정 분석(BERT)

감정 분석 모델을 구축, 학습하고 추론해 문맥에 따라 단어 벡터가 어떻게 변화하는지 알아보고 Self-Attention으로 시각화해봅니다. 

 

_9장. 동영상 분류(3DCNN, ECO)

화상 분류와 동영상 분류의 차이에 주목하면서 어떻게 동영상을 딥러닝에서 다루고 구현하는지 설명합니다.`,
    item_idx: `
     CHAPTER 1 화상 분류와 전이학습(VGG)

1.1 학습된 VGG 모델을 사용하는 방법

1.2 파이토치를 활용한 딥러닝 구현 흐름

1.3 전이학습 구현

1.4 아마존 AWS의 클라우드 GPU 머신을 사용하는 방법

1.5 파인튜닝 구현

 

CHAPTER 2 물체 감지(SSD)

2.1 물체 감지란

2.2 데이터셋 구현

2.3 데이터 로더 구현

2.4 네트워크 모델 구현

2.5 순전파 함수 구현

2.6 손실함수 구현

2.7 학습 및 검증 실시

2.8 추론 실시

 

CHAPTER3 시맨틱 분할(PSPNet)

3.1 시맨틱 분할이란

3.2 데이터셋과 데이터 로더 구현

3.3 PSPNet 네트워크 구성 및 구현

3.4 Feature 모듈 설명 및 구현(ResNet)

3.5 Pyramid Pooling 모듈 설명 및 구현

3.6 Decoder, AuxLoss 모듈 설명 및 구현

3.7 파인튜닝을 활용한 학습 및 검증 실시

3.8 시맨틱 분할 추론 
    `,
    writtenLang: "JP",
  });

  arr.push(book);
}

export const mockBooks = arr;
