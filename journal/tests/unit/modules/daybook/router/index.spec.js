import daybookRouter from '@/modules/daybook/router';

describe('Tests on router module', () => {
    test('Router must have this config', async() => {
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ],
        });

        const promiseRoutes = [];
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component()));

        const routes = (await Promise.all(promiseRoutes)).map(route => route.default.name);

        expect(routes).toContain('EntryView.vue');
        expect(routes).toContain('NoEntrySelected.vue');
    });

    test('Must return route id', () => {
       const route = {
           params: {
               id: 'ABC-123'
           }
       };

        const entryRoute = daybookRouter.children.find(child => child.name === 'entry');
        expect(entryRoute.props(route)).toEqual(route.params)
    });
});