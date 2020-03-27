const request = require('supertest');

const server = require('../api/server.js');

describe('auth-router.js', function() {
  describe('POST /register', function() {
    it('should return 201 OK (async)', function() {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'test_user5',
          password: 'test_password'
        })
        .then(response => {
          expect(response.status).toBe(201);
        });
    });
    it('should fail if no username or already existing user', function() {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'test_user'
        })
        .then(response => {
          expect(response.status).toBe(500);
        });
    });
    it.todo('should return JSON');
    it.todo('response should have username and password');
  });

  describe('POST /login', function() {
    it('should return 201 OK', function() {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'test_user1',
          password: 'test_password'
        })
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    it('should send error if user doesnt exist', function() {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'test',
          password: 'test_password'
        })
        .then(response => {
          expect(response.status).toBe(401);
        });
    });
    it.todo('response should have welcome message and token');
  });
});
