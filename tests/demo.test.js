describe('Pruebas en DemoComponent', () => {

    test('Esta prueba no debe fallar', () => {
        // 1. Inicialización
        const mms1 = 'Hola Mundo';
        // 2. Estimulo
        const mms2 = mms1.trim();
        // 3. Observar el comportamiento... esperado
        expect(mms1).toBe(mms2);
    });
});
