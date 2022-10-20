import { boot } from 'quasar/wrappers'
import userManager from '../auth/authService.js';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (router) => {
  router.router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      userManager
        .getUser()
        .then(function (user) {
          if (!user) throw 'user not found';
        })
        .catch(function (error) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath,
            },
          });
        });
    } else {
      next();
    }
  });
})
