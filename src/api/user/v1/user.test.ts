import request from 'supertest';
import { createConnection } from 'typeorm';
import { v4 } from 'uuid';
import app from '@app/app';

let token: string;
const random = v4();

describe('User API v1', () => {
  beforeAll(async () => {
    await createConnection();
  });

  describe('POST /v1/signup', () => {
    test('should create user and return access_token', async () => {
      const res = await request(app)
        .post('/v1/signup')
        .set('Content-Type', 'application/json')
        .send({ name: 'test', email: `${random}@test.com`, password: 'test' });
      expect(res.status).toBe(201);

      token = res.body.access_token;
    });
  });

  describe('POST /v1/signin', () => {
    test('should find user and return access_token', async () => {
      const res = await request(app)
        .post('/v1/signin')
        .set('Content-Type', 'application/json')
        .send({ email: `${random}@test.com`, password: 'test' });
      expect(res.status).toBe(200);
    });
  });

  describe('GET /v1/token', () => {
    test('should find user and return new access_token', async () => {
      const res = await request(app)
        .get('/v1/token')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
    });
  });
});
