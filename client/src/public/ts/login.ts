// import {ResourceConfig} from '../../config';
const usernameTag = document.getElementById("username") as HTMLInputElement;
const passwordTag = document.getElementById("password") as HTMLInputElement;
const loginForm = document.getElementById("login-form") as HTMLFormElement;
const inlineError = document.getElementById("inline-error") as HTMLParagraphElement;

var poolData = {
  UserPoolId: "",
  ClientId: "",
};

const client = new AmazonCognitoIdentity.CognitoUserPool(poolData);
function loginUser(e: Event) {
  e.preventDefault();
  let username = usernameTag.value;
  let password = passwordTag.value;


  const userData = {
    Username: username,
    Pool: client,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  const authenticationData = {
    Username: username,
    Password: password,
  };
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: async function (session: any) {
      console.log(session.getAccessToken().getJwtToken());

    },
    onFailure: function (err: any) {
      console.error("Error logging in:", err.message || JSON.stringify(err));
      inlineError && (inlineError.textContent = err.message || JSON.stringify(err));
    },

  });
}


loginForm.addEventListener("submit", loginUser);