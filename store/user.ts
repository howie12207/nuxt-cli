import { ActionTree, MutationTree } from 'vuex';

const PATH = 'v1/user';

export const state = () => ({
    user: {}
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    SET_USER(state, data) {
        state.user = data;
    }
};

export const actions: ActionTree<RootState, RootState> = {
    async FETCH_USER_DATA(store) {
        const access = (this as any).$cookies.get('access');
        if (!access) return;

        const res = await this.$req(`${PATH}/user/management`, 'get', {}, true);
        if (res?.code === 1001) {
            store.commit('SET_USER', res.data);
        }
    }
};
