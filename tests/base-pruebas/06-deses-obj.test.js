import {usContext} from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto', () => {
        const nombreClave = 'John';
        const anios = '35';

        const input = {
            clave: nombreClave,
            nombre: '',
            edad: anios
        }

        const demoUsContext = usContext(input)
        
        const testUsContext = {
            nombreClave: nombreClave,
            anios: anios,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        expect(demoUsContext).toEqual(testUsContext);
    });
});