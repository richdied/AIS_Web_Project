export type Juso = {
  roadAddr: string;
  jibunAddr: string;
  buldMnnm: string;
  zipNo: string;
  bdNm: string;
  engAddr: string;
  totalCount: string;
  bdMgtSn: string;
  detBdNmList: string;
  siNm: string;
  roadAddrPart1: string;
};

export type Common = {
  currentPage: string;
  totalPage: string;
  totalCount: string;
  countPerPage: string;
  errorCode: string;
};

export interface ResultQuery {
  juso: Juso[];
  common: Common;
}
