import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar una url de imagen', async() => {
        const apiKey = '';
        const url = await getImagen(apiKey);
        console.log(url);
        expect(typeof url).toBe('string');
    });
    test('getImagen debe retornar error', async() => {
        const apiKey = '';
        const resp = await getImagen(apiKey);
        console.log(resp);
        expect(resp).toBe('No se encontro la imagen');
    });
});