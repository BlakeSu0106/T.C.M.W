import {
    UserManager,
    Log,
    WebStorageStateStore
} from "oidc-client";
import {
    config
} from "../config.js"

const setting = {
    authority: config.auth.authority,
    client_id: config.auth.client_id,
    redirect_uri: window.location.origin + config.auth.redirect_uri,
    response_type: config.auth.response_type,
    scope: config.auth.scope,
    post_logout_redirect_uri: window.location.origin + config.auth.post_logout_redirect_uri,
    silent_redirect_uri: window.location.origin + config.auth.silent_redirect_uri,
    automaticSilentRenew: true
};

const mgr = new UserManager(setting);

export const getAuthUserAsync = async () => {
    let user = await mgr.getUser();
    return user;
}

export const logout = () => {
    mgr.signoutRedirect();
}

Log.logger = console;
Log.level = Log.ERROR;

mgr.events.addUserLoaded(function (user) {
});

mgr.events.addAccessTokenExpiring(function () {
});

mgr.events.addAccessTokenExpired(function () {
    //alert('Session expired. Going out!');
    mgr.signoutRedirect().then(function (resp) {
        // console.log('signed out', resp);
    }).catch(function (err) {
        console.log(err)
    })
});

mgr.events.addSilentRenewError(function () {
    //console.error('Silent Renew Error：', arguments);
});

mgr.events.addUserSignedOut(function () {
    //alert('Going out!');
    // console.log('UserSignedOut：', arguments);
    mgr.signoutRedirect().then(function (resp) {
        // console.log('signed out', resp);
    }).catch(function (err) {
        //console.log(err)
    })
});

export default mgr;