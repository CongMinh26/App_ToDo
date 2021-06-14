const state = {
    auth:{
        isAuthenticated: false
    }
}
const getters = {
    isAuthenticated : state => state.auth.isAuthenticated // lấy ra Authenticated(false)
}

const actions ={
   
}
const mutations = {
    TOGGLE_AUTH(state) {
        state.auth.isAuthenticated = !state.auth.isAuthenticated //đổi true thành false và <=>
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}