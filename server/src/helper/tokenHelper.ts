import { CognitoJwtVerifier } from "aws-jwt-verify";

interface DecodedToken {
  sub: string;
  username: string;
}

const verifier = CognitoJwtVerifier.create({
  userPoolId: "eu-west-1_aaMmCDu1Y",
  tokenUse: "access",
  clientId: "7smvdh43tavs8lb4esej2vk29j",
});

export class TokenHelper {
    static async decodeToken(token: string): Promise<DecodedToken | undefined | null> {
      try {
        const decoded = await verifier.verify(token)
          
        return decoded;
      } catch (error) {
        console.error('Error decoding Cognito token:', error);
        return null;
      }
    }
}