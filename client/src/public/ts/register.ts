
declare const AmazonCognitoIdentity: any;
var poolData = {
    UserPoolId: "",
    ClientId: "",
  };

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const usernameElement = document.getElementById("username") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const passwordElement = document.getElementById("password") as HTMLInputElement;

let username: string;
let password: string;
let email: string;

function validatePassword() {
  const password = passwordElement?.value ?? null;
  const passwordRegex = new RegExp(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );
  // const inlineError = document.getElementById('error-inline');
  if (!passwordRegex.test(password)) {
    // inlineError.innerText = "Invalid password, you need 1 uppercase, 1 lowercase, 1 special character, a number and a minimum of 8 characters."
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

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

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
      function (err: any,result:any) {
        if (err) {
          console.error(
            "Error registering user:",
            err.message || JSON.stringify(err)
          );
          return;
        } 
        let cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        var modal = document.getElementById("myModal") as HTMLInputElement;
        modal.style.display = "block";

          //navigate for confirmation or display popup
        
      }
    );
  } catch (e) {
    console.log(e);
  }
}

function authorizeUser(event: Event) {
  event.preventDefault();
  const authCodeElement = document.getElementById("confirmed-code") as HTMLInputElement;

  const authCode = authCodeElement.value;
  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(authCode, true, async (err: any, result: any) => {
    if (err) {
      console.log("Confirmation error:", err.message || JSON.stringify(err));
    } else {
        setTimeout(()=> {window.location.replace('http://localhost:8080/login')}, 1000);
    }
  });
}