import { post } from '@/plugins/axios';

// 登录
export async function login(params) {
  return post('/login/enter', params);
}

// 登出
export async function logout(username) {
  return post(`/login/out/${username}`);
}

// // 登陆记录记录
// export async function loginHistory(params) {
//   return post('/risk-auth-manager/loginHistory/insertLoginHistory', params);
// }

// // 获取登录用户APP列表
// export async function getUserAppList(params) {
//   return post('/risk-auth-manager/dispatch/risk-config-center/memberAppInfo/selectLoginUserAppList', params);
// }


// // 用户权限菜单
// export async function getUserPageApi(params) {
//   return post('/risk-auth-manager/public/resource/page', params);
// }

// // 查询最早日期
// export async function selectEarliestDay(params) {
//   return post('/risk-auth-manager/dispatch/risk-analysis-center/workflowAnalysis/workFlow/earliestDay', params);
// }

// // 查询所有待审核任务
// export async function queryUndo(params) {
//   return post(`/risk-auth-manager/dispatch/risk-work-flow/work/flow/undo/query/num`,params)
// }

// // 发送验证码
// export async function sendSecurityCode(params) {
//   return post(`/risk-auth-manager/auth/userInfo/sendVerifyCode`,params)
// }


// // 修改登录密码
// export async function modifyOperatorPwd(params) {
//   return post(`/risk-auth-manager/auth/userInfo/modifyOperatorPwd`,params)
// }

// // 获取登录验证码
// export async function sendLoginCode(params) {
//   return post(`/risk-auth-manager/auth/userInfo/sendVerifyCodeByLogin`,params)
// }
