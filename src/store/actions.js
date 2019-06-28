import * as types from './types'

// action 存放的是方法
export default {
    getUser: ({
                  commit
              }, user) => {
        commit(types.GETUSER, user);
    }
}
