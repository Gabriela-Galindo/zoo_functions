const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('deve retornar a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('deve retornar array com nomes dos elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('deve retornar média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
});
