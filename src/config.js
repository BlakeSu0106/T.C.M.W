export const config = {
  auth: {
    authority: process.env.VUE_APP_AUTHSVR_AUTHORITY,
    client_id: process.env.VUE_APP_CLIENT_ID,
    redirect_uri: '/callback',
    post_logout_redirect_uri: '/',
    response_type: 'code',
    scope: ' ',
    silent_redirect_uri: '/SilentRenew',
    automaticSilentRenew: true,
  }
};

export default {
  install(Vue) {
    Vue.prototype.$conf = config;
  },
};
