import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });
    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        const owner = 'DC';
        const testHeroes = getHeroesByOwner(owner);

        expect(testHeroes).toHaveLength(3);
        expect(testHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const testHeroes = getHeroesByOwner(owner);

        expect(testHeroes).toHaveLength(2);
        expect(testHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

});