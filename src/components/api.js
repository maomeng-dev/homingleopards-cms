// API docs https://github.com/maomeng-dev/homingleopards-api/wiki

const hostConfig = {
  development: 'https://mockapi.eolinker.com/B6Qfv1De71c9384926e1ab7740c529265ca648ec92702ed',
  production: 'https://api.dev.homingleopards.org' // use dev host for prod env temporary
}
const HOST = hostConfig[process.env.NODE_ENV] || ''

const API = {
  LOGIN: `${HOST}/api/backend/user/login`,
  LOGOUT: `${HOST}/api/backend/user/logout`,

  USER_INFO: `${HOST}/api/backend/user/info`,
  USER_LIST: `${HOST}/api/backend/user/list`,
  USER_SAVE: `${HOST}/api/backend/user/save`,
  USER_DELETE: `${HOST}/api/backend/user/delete`,
  USER_LOG: `${HOST}/api/backend/user/logs`,

  ARTICLE_LIST: `${HOST}/api/backend/article/local_list`,
  ARTICLE_WECHAT_LIST: `${HOST}/api/backend/article/wechat_list`,
  ARTICLE_IMPORT_WECHAT_ARTICLE: `${HOST}/api/backend/article/import_wechat_article`,
  ARTICLE_DELETE: `${HOST}/api/backend/article/delete_local_article`
}

export default API
