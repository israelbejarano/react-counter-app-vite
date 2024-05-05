import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        // hacen lo mismo que lo de arriba pero de otra forma
        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));
    });
});