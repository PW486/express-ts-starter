import app from 'app';
import request from 'supertest';
import { createConnection } from 'typeorm';
import { v4 } from 'uuid';

let token: string;
let postId: number;
const random = v4();

describe('Post API v1', () => {
  beforeAll(async () => {
    await createConnection();

    const res = await request(app)
      .post('/v1/signup')
      .set('Content-Type', 'application/json')
      .send({ name: 'test', email: `${random}@test.com`, password: 'test' });

    token = res.body.access_token;
  });

  describe('GET /v1/posts', () => {
    test('should return all posts', async () => {
      const res = await request(app)
        .get('/v1/posts')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
    });
  });

  describe('POST /v1/posts', () => {
    test('should create post and return post.id', async () => {
      const res = await request(app)
        .post('/v1/posts')
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .send({ title: 'title', text: 'text' });
      expect(res.status).toBe(201);

      postId = res.body.id;
    });
  });

  describe('GET /v1/posts/:id', () => {
    test('should return one post', async () => {
      const res = await request(app)
        .get(`/v1/posts/${postId}`)
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
    });
  });
});
