export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title:  'nuxt-apk',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */

  server: {
    port: 3000, // default: 3000
    host: '127.0.0.4', // default: localhost,
    // timing: false
  },

  generate:{
    routes:['/']
  },

  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],


  /*
 ** Nuxt.js dev-modules
 */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'dropzone-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // ['nuxt-twa-module', {
    //   /* module options */
    //   defaultUrl: 'https://ashidsoft.ir/',
    //   hostName: 'ashidsoft.ir',
    //   sha256Fingerprints: ['2A:D9:EB:CB:BB:28:E0:7C:F9:59:67:AB:A6:AD:98:F4:BF:DB:03:0B:CC:D5:40:29:2B:C6:52:0A:EB:6B:A1:9B'],
    //   applicationId: 'com.ashidgroup.nany',
    //   launcherName: 'baby',
    //   versionCode: 1,
    //   versionName: '1.0',
    //   // statusBarColor: /* color */,
    //
    //   /* optional */
    //   /* overwrite default location for icon */
    //   iconPath: '/static/icon.png',
    //   /* Overwrite folder where to put .wellknown */
    //   distFolder: '.nuxt/dist/client',
    // }],
  ],


  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
