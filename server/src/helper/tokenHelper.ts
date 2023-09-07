import { CognitoJwtVerifier } from "aws-jwt-verify";

interface DecodedToken {
  userId: string;
}

const verifier = CognitoJwtVerifier.create({
  userPoolId: "eu-west-1_aaMmCDu1Y",
  tokenUse: "id",
  clientId: "7smvdh43tavs8lb4esej2vk29j",
});

export class TokenHelper {
    static async decodeToken(token: string): Promise<any | null> {
      try {
        verifier.verify(token)
        .then((decoded) => {
          console.log(decoded);
          
          return decoded;
        });
      } catch (error) {
        console.error('Error decoding Cognito token:', error);
        return null;
      }
    }
}