import { obtenerRobots } from './arrays';

xdescribe('Pruebas de arrays', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  xit('Debe de existir Megaman y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});
