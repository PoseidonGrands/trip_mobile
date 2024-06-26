/**
 * 存放项目全部接口地址
 */

const apiHost = 'http://localhost:5173/api'

/**
 * 用户账户的接口
 */
const AccountsApis = {
    loginUrl: '/'
}

/**
 * 系统模块接口
 */
const SystemApis = apiHost + '/system/slide_list'

export{
    AccountsApis,
    SystemApis
}