import request from '@/config/axios'

// 查询接口
export const querySchools = async (data: QueryParam) => {
  return await request.post<RespSchools>({ url: '/localSenlan/localQuery/testKernel', data })
}
