const globalLang = require('./assets/lang/index');

const BASE_PATH = '/apiPath';

export default {
    head: {
        title: 'GP01 | Artistic architecture',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'GP01 | Artistic architecture'
            }
        ]
    },

    css: ['@/assets/css/reset.css', '@/assets/css/global.scss', '@/assets/css/elementUI.css'],

    purgeCSS: {
        mode: 'postcss',
        whitelistPatterns: [/el-.+$/],
        whitelistPatternsChildren: [/el-.+$/]
    },

    plugins: [{ src: '@/plugins/api' }, { src: '@/plugins/elementUI.ts', ssr: false }],

    components: true,

    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/pwa',
        '@nuxtjs/eslint-module'
    ],

    pwa: {
        manifest: {
            name: 'My Awesome App',
            useWebmanifestExtension: false
        }
    },

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'cookie-universal-nuxt',
        [
            'nuxt-i18n',
            {
                vueI18nLoader: true,
                detectBrowserLanguage: false
            }
        ]
    ],

    i18n: {
        locales: ['th', 'en', 'cn'],
        defaultLocale: 'th',
        vueI18n: {
            fallbackLocale: 'th',
            messages: globalLang,
            silentTranslationWarn: true
        }
    },

    axios: {
        headers: {
            common: {
                Accept: 'application/json, text/plain, */*'
            }
        }
    },

    router: {
        middleware: ['metaCheck']
    },

    typescript: {
        typeCheck: {
            eslint: {
                files: './**/*.{ts,js,vue}'
            }
        }
    },

    publicRuntimeConfig: {
        APP_VERSION: process.env.APP_VERSION,
        BASE_PATH
    },

    privateRuntimeConfig: {}, // Secret variable.

    loading: {
        color: '#33BBFF',
        height: '5px'
    }
};
