declare global {
  type AxiosHeaders =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'

  type QueryParam = {
    totalScore?: number
    foreignLanguage?: string
    minZu?: string
    level?: string
    preferredSub?: string
    unpreferedSub1?: string
    unpreferedSub2?: string
    zhongWai?: string
    schoolAttr?: string[] | string
    intentionProv?: string[] | string
    intentionSubAndMaj?: string[] | string
  }

  type SchoolInfo = {
    id: number
    level: string
    type: string
    schoolName: string
    pro985: string
    pro211: string
    proshuangyiliu: string
    location: string
    majorName: string
    schoolRunLevel: string
    zhaoshengjihua: string
    attrShuang: string
    attrGuo: string
    attrSheng: string
    attrTe: string
    attrWan: string
    attr2Zhongwai: string
    attr2Shifan: string
    attr2Yuke: string
    location2022: number
    score2022: number
    location2021: number
    score2021: number
    location2020: number
    score2020: number
    location2019: number
    score2019: number
    location2018: number
    score2018: number
    avgLocation: number
    avgScore: string
    preferSubject: string
    unpreferSubject: string
    xuezhi: string
    xuefei: string
    params: string
    notes: string
  }

  type RespSchools = {
    success: boolean
    msg: string
    data: Array<SchoolInfo>
  }
}

export {}
