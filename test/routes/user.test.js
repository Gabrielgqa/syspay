const request = require('supertest');

const app = require('../../src/app.js');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve inserir usuário', () => {
  const email = `${Date.now()}@email.com`;
  return request(app).post('/users')
    .send({ name: 'Usuário Comum', email, password: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Usuário Comum');
    });
});
