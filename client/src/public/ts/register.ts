declare const AmazonCognitoIdentity: any;
var poolData = {
  UserPoolId: "eu-west-1_aaMmCDu1Y",
  ClientId: "7smvdh43tavs8lb4esej2vk29j",
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const usernameElement = document.getElementById("username") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const passwordElement = document.getElementById("password") as HTMLInputElement;
 const inlineErr = document.getElementById(
    "inline-error"
  ) as HTMLParagraphElement;

const registerForm = document.getElementById(
  "register-form"
) as HTMLFormElement;
const confirmForm = document.getElementById(
  "confirmRegister"
) as HTMLFormElement;

let username: string;
let password: string;
let email: string;

function validatePassword() {

  const password = passwordElement?.value ?? null;
  const passwordRegex = new RegExp(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );
  inlineErr.textContent = "";
  if (!passwordRegex.test(password)) {
    inlineErr.textContent =
      "Invalid password, you need 1 uppercase, 1 lowercase, 1 special character, a number and a minimum of 8 characters.";
  }
  return passwordRegex.test(password);
}

function registerUser(event: Event) {
  event.preventDefault();
  username = usernameElement?.value ?? null;
  email = emailElement?.value ?? null;
  password = passwordElement?.value ?? null;

  try {
    if (!validatePassword()) {
      return;
    }
    const attributeList = [
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "preferred_username",
        Value: username,
      }),
    ];
    userPool.signUp(
      username,
      password,
      attributeList,
      [],
      function (err: any, result: any) {
        if (err) {
          inlineErr.textContent = err.message || JSON.stringify(err)
          return;
        }
        let cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
        var modal = document.getElementById(
          "confirmRegister"
        ) as HTMLFormElement;
        modal.style.display = "flex";
      }
    );
  } catch (e) {
    console.log(e);
  }
}

function authorizeUser(event: Event) {
  event.preventDefault();
  console.log("confirming ig");
  const authCodeElement = document.getElementById(
    "auth-code"
  ) as HTMLInputElement;

  const authCode = authCodeElement?.value;
  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(
    authCode,
    true,
    async (err: any, result: any) => {
      if (err) {
        console.log("Confirmation error:", err.message || JSON.stringify(err));
      } else {
        const api = 'http://localhost:4040';
        let request = {email: emailElement.innerText, userid: '' /* get sub */, username: usernameElement.innerText}
        fetch(`${api}/user`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request)
        })
        .then((reponse) => {
          setTimeout(() => {
            window.location.replace("http://localhost:8080/login");
          }, 1000);
        })
      }
    }
  );
}
registerForm.addEventListener("submit", registerUser);
confirmForm.addEventListener("submit", authorizeUser);
