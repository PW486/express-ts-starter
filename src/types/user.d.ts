declare namespace Express {
  interface Request {
    user?: {
      id: number;
      permissions: string[];
      iat: number;
      exp: number;
    };
  }
}
