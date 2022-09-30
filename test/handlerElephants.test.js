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
  it('deve retornar a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('deve retornar a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('deve retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('deve retornar undefined quando não recebe parâmetros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('deve retornar "parâmetro inválido" se não receber uma string como parâmetro', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('deve retornar "nul" se receber como parâmetro uma string que não contempla uma funcionalidade', () => {
    expect(handlerElephants('peso')).toBeNull();
  });
});
