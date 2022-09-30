const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('deve retornar o objeto hours se não receber parâmetros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('deve retornar que o zoo está fechado quando receber dia ou hora inválidos', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('deve retornar que o zoo está aberto quando receber dia e hora válidos', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
});
