import { Request } from 'express';

export const extractTokenFromHeader = (request: Request): string => {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : '';
};
