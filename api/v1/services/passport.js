import passport from "passport";
import pkg from "passport-google-oauth20"
const GoogleStrategy =  pkg.Strategy
// import config  from "../../../config";

passport.use(
    new GoogleStrategy(
      {
        clientID: "81718002269-jtl3h094osnvree5oqsl0n5amaosk3sb.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:5001/api/v1/auth/google/callback", // Corrected here
      },
      function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
    )
  );
  export default passport