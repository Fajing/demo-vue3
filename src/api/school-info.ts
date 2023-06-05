import request from '@/config/axios'

// 查询接口
export const querySchools = async (param: QueryParam) => {
  return await request.post<RespSchools>({ url: '/query', param })
}
