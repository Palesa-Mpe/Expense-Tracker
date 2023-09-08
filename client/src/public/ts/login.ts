const usernameTag = document.getElementById("username") as HTMLInputElement;
const passwordTag = document.getElementById("password") as HTMLInputElement;
const loginForm = document.getElementById("login-form") as HTMLFormElement;
const inlineError = document.getElementById("inline-error") as HTMLParagraphElement;
localStorage.clear();

var poolData = {
  UserPoolId: "eu-west-1_aaMmCDu1Y",
  ClientId: "7smvdh43tavs8lb4esej2vk29j",
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
      const api = 'https://amddvgp6ux.eu-west-1.awsapprunner.com';
      inlineError.textContent="";
      // console.log(session.getAccessToken().getJwtToken());

      fetch(`${api}/users/verify`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": session.getAccessToken().getJwtToken()
        }
      })
      .then(response => response.json())
      .then((userInfo: any) => {
        console.log(userInfo);
        
        if (userInfo.success) {
          localStorage.setItem("userid", userInfo.userid);
          window.location.pathname = "/dashboard";
        }
      });
    },
    onFailure: function (err: any) {
       inlineError.textContent = err.message || JSON.stringify(err);
    },

  });
}

loginForm.addEventListener("submit", loginUser);