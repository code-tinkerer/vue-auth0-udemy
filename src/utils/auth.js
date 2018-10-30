import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
    domain: "edflix.auth0.com",
    clientID: "lOtGfqAOjr2uGJRtlechuA1mn2hQZ9xz",
    redirectUri: "http://localhost:8080/callback",
    audience: "https://api.edflix.com",
    responseType: "token id_token",
    scope: "openid"
});

const login = () => {
    webAuth.authorize();
};

var tokens = {};

const handleAuth = (callback) => {
    webAuth.parseHash((error, authResult) => {
        debugger;
        if (authResult && authResult.accessToken && authResult.idToken)
        {
            tokens.accessToken = authResult.accessToken;
            tokens.idToken = authResult.idToken;
            tokens.expiration = (new Date()).getTime() + authResult.expiresIn * 1000;

            callback();
        }
        else
        {
            console.log(error);
        }
    });
};

const signup = () => {
    webAuth.signup();
};

const isLoggedIn = () => {
    debugger;
    console.log("[isLoggedIn]: tokens is");
    console.log(tokens)
    return tokens.accessToken && (new Date()).getTime() < tokens.expiration;
};

const logout = () => {
    debugger;
    console.log("[logout]: logging out");
    tokens = {};
};

export {
    login,
    signup,
    handleAuth,
    isLoggedIn,
    logout
};
