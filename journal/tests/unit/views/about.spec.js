import {shallowMount} from '@vue/test-utils';
import About from '@/views/About.vue';

describe('Tests on About View',() => {
    test('Must render component properly', () => {
        const wrapper = shallowMount(About);

        expect(wrapper.html()).toMatchSnapshot();
    });
})
