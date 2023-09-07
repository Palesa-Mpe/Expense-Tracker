import jwt from 'jsonwebtoken';

interface DecodedToken {
    userId: string;
    // Add more fields as needed based on your JWT payload
  }

export class TokenHelper {
    static decodeToken(token: string): DecodedToken | null {
        try {
          const decoded = jwt.verify(token, 'your-secret-key');
          return decoded as DecodedToken;
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      }
}





