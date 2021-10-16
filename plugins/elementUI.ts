import Vue from 'vue';
import { Select, Message } from 'element-ui';
import language from 'element-ui/lib/locale';

export default async ({ app }: any) => {
    /* Dynamic locale */
    let lang = app.i18n.locale;
    if (lang === 'cn') lang = 'zh-CN';
    const locale = await import(`element-ui/lib/locale/lang/${lang}`);
    language.use(locale.default);

    /* Register components */
    Vue.component(Select.name, Select);

    /* Register methods */
    Vue.prototype.$message = Message;
};
