import { Middleware } from '@nuxt/types';

interface MetaType {
    name: string;
}

const metaCheck: Middleware = ({ store, route }) => {
    route.meta?.forEach(function (meta: MetaType) {
        if (meta) {
            store.commit('SET_META', meta);
        }
    });
};

export default metaCheck;
