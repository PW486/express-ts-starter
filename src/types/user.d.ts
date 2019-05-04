declare namespace Express {
  export interface Request {
    user?: {
      id: number,
      permissions: string[],
      iat: number,
      exp: number
    }
  }
}
