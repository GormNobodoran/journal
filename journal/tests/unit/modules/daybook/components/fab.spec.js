import {shallowMount} from '@vue/test-utils';
import Fab from '@/modules/daybook/components/Fab.vue';

describe('Tests on Fab component', () => {
   test('Must show default icon', () => {
      const wrapper = shallowMount(Fab);
      const em = wrapper.find('em');

      expect(em.classes('fa-plus')).toBeTruthy();
   });

   test('Must show icon by argument: fa-circle', () => {
      const className = 'fa-circle';
      const wrapper = shallowMount(Fab, {
         props: {
            icon: className
         }
      });
      const em = wrapper.find('em');
      expect(em.classes(className)).toBeTruthy();

   });

   test('Must emit on:click event on click', async() => {
      const wrapper = shallowMount(Fab);
      await wrapper.find('button').trigger('click');

      expect(wrapper.emitted('on:click')).toHaveLength(1);

   });
});