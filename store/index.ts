import { ActionTree, MutationTree } from 'vuex';

export const state = () => ({
    isDesktop: true,

    pageLoading: false,

    login: false,

    language: {
        current: {
            title: '',
            language: ''
        },
        list: [
            {
                title: 'ภาษาไทย',
                language: 'th'
            },

            {
                title: 'English',
                language: 'en'
            },
            {
                title: '中文',
                language: 'cn'
            }
        ]
    },

    meta: {}
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    SET_IS_DESKTOP(state, userAgent: string) {
        state.isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            userAgent
        );
    },

    SET_LANGUAGE(state, lang) {
        for (const i in state.language.list) {
            if (state.language.list[i].language === lang) {
                state.language.current = state.language.list[i];
            }
        }
    },

    SET_PAGE_LOADING(state, status) {
        state.pageLoading = status;
    },

    SET_META(state, meta) {
        state.meta = meta;
    }
};

export const actions: ActionTree<RootState, RootState> = {
    nuxtServerInit(store: any, { app, req }: any) {
        // const userData = store.dispatch(FETCH_USER_DATA);
        store.commit('SET_IS_DESKTOP', req.headers['user-agent']);
        store.commit('SET_LANGUAGE', app.i18n.locale);

        // try {
        //     await userData;
        // } catch (e) {
        //     /* eslint-disable-next-line */
        //     console.log(e);
        // }
    }
};
