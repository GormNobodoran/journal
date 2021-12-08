import {shallowMount} from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Tests on Home view', () => {
   test('Must render component properly', () => {
      const wrapper = shallowMount(Home);

      expect(wrapper.html()).toMatchSnapshot();
   });

   test('Must redirect to no-entry', () => {
      const mockRouter = {
         push: jest.fn()
      };

      const wrapper = shallowMount(Home, {
         global: {
            mocks: {
               $router: mockRouter
            }
         }
      });

      wrapper.find('button').trigger('click');

      expect(mockRouter.push).toHaveBeenCalled();
      expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'});
   });
});