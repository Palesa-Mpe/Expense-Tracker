
console.log("daad");
const poolData = {
    UserPoolId: 'eu-west-1_BZAu5yKxc',
    ClientId: 'l9lu2cspu2ago5vmv9b05l3ub',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
console.log("daad",userPool)
//     function loginUser(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const inlineError = document.getElementById('error-inline');

//     const authenticationData = {
//         Username: username,
//         Password: password,
//     };


    
//     const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
//     const userData = {
//         Username: username,
//         Pool: userPool,
//     };

//     showLoadingAnimation();
//     const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

//     cognitoUser.authenticateUser(authenticationDetails, {
//         onSuccess: function (session) {
//         hideLoadingAnimation()
//         localStorage.setItem('jwt',session.getAccessToken().getJwtToken());
//         navToHome();
//         // nav just now 
//         },
//         onFailure: function (err) {
//         hideLoadingAnimation()
//         inlineError.innerText=err.message;
//         console.error('Error logging in:', err.message || JSON.stringify(err));
//         },
//     });
// }

// function authorizeUser(event){
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const authCode = document.getElementById('auth-code').value;

//     const userData = {
//         Username: username,
//         Pool: userPool,
//     };
      
//     const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
//     showLoadingAnimation();
//     cognitoUser.confirmRegistration(authCode, true, (err, result) => {
//         if (err) {
//           hideLoadingAnimation();
//           console.log('Confirmation error:', err.message || JSON.stringify(err));
//         } else {
//             hideLoadingAnimation();
//             navToHome();
//         }
//     });

// }
