import axios from 'axios'
// import FileSaver from 'file-saver';
import util from '@/libs/util'
import { Notification } from 'element-ui'


// 创建axios实例
const service = axios.create({
  // baseURL: paths.baseURL,
  timeout: 240000, // 请求超时时间
  responseType: 'json',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 错误打印
function errorLog(error) {
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }

  Notification.error({
    title: `错误 ${error.response.status}: ${error.response.config.url}`,
    message: error.message,
  });
}

service.interceptors.request.use(
  config => {
    const token = util.cookies.get('token');
    const localUserId = util.cookies.get('localUserId');
    const appCode = util.cookies.get('currentAppCode') || '';
    
    config.headers['token'] = token;
    config.headers['operator'] = localUserId;
    // 获取应用管理信息，将appCode, appName存放到请求头里面
    config.headers['appCode'] = appCode;
    return config
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break;
        case 401: error.message = '未授权，请登录'; break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错`; break;
        case 408: error.message = '请求超时'; break;
        case 410: error.message = '请求的资源被永久删除，且不会再得到的。'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '网关错误'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default: break;
      }
    }
    errorLog(error);
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // 统一处理messageCode 并提示
    if (response.config.responseType === 'json') {
      util.message.failCallback(response.data)
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 错误处理
function errorCallback(error) {
  console.warn(error)
}

// POST提交
export function post(url, data = {}) {
  // const params = {};
  // Object.assign(params, userinfo(), data);
  const options = {
    url,
    method: 'POST',
    data
  };
  return service(options)
    .then(response => response.data)
    .catch(error => errorCallback(error));
}

// 上传文件
export function uploadFile(url, data = {}) {
  const options = {
    url,
    method: 'POST',
    data
  };
  return service(options)
    .then(response => response.data)
    .catch(error => errorCallback(error));
}

// // 下载文件
// export function downloadFile(url, fileName, data = {}) {
//   const options = {
//     url,
//     method: 'POST',
//     data,
//     responseType: 'blob'
//   };
//   return service(url, options)
//     .then(response => response.data)
//     .then(blob => FileSaver.saveAs(blob, fileName))
//     .catch(error => errorCallback(error));
// }
