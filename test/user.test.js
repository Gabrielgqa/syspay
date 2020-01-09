const request = require('supertest');

const app = require('../src/app.js');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'Admin');
    });
});

test('Deve inserir usuário', () => {
  return request(app).post('/users')
    .send({ name: 'Usuário Comum', email: 'user@comum.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Usuário Comum');
    });
});
