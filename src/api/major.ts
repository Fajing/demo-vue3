import request from '@/config/axios'

// 查询所有专业
export const getAllMajors = async () => {
  return await request.get<MajorsResp>({ url: '/localSenlan/localQuery/allMajors/retrieve' })
}

// 查询专业详细
export const getMajorInfor = async (data: { majorName: string }) => {
  return await request.post<MajorInfoResp>({
    url: '/localSenlan/localQuery/majorInfo/retrieve/',
    data
  })
}
