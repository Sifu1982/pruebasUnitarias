import { Jugador } from './clase';
describe('Pruebas de clase', () => {
  //   const jugador = new Jugador();
  let jugador = new Jugador();

  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
    // jugador.hp = 100;
  });

  it('Debe retornar 80 de hp si recibe 20 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de hp si recibe 50 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });

  it('Debe retornar 0 de hp si recibe 100 de daño o más', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);

    expect(resp).toBe(0);
  });

  it('Debe retornar 0 de hp si recibe 100 de daño o más', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);

    expect(resp).toBe(0);
  });
});
