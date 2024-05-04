import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe devolver Hola Israel', () => {
        const name = 'Israel';
        const mms = getSaludo(name);
        expect(mms).toBe(`Hola ${name}`)

    });
});