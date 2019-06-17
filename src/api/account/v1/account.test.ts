import app from 'app';
import request from 'supertest';
import { createConnection } from 'typeorm';
import { v4 } from 'uuid';

let token: string;
const random = v4();

describe('Account API v1', () => {
  beforeAll(async () => {
    await createConnection();
  });

  describe('POST /api/v1/signup', () => {
    test('should create account and return access_token', async () => {
      const res = await request(app)
        .post('/api/v1/signup')
        .set('Content-Type', 'application/json')
        .send({ name: 'test', email: `${random}@test.com`, password: 'test' });
      expect(res.status).toBe(201);

      token = res.body.access_token;
    });
  });

  describe('POST /api/v1/signin', () => {
    test('should find account and return access_token', async () => {
      const res = await request(app)
        .post('/api/v1/signin')
        .set('Content-Type', 'application/json')
        .send({ email: `${random}@test.com`, password: 'test' });
      expect(res.status).toBe(200);
    });
  });

  describe('GET /api/v1/token', () => {
    test('should find account and return new access_token', async () => {
      const res = await request(app)
        .get('/api/v1/token')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
    });
  });
});
