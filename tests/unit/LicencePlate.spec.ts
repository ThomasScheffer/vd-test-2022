import { shallowMount } from '@vue/test-utils';
import LicencePlate from '@/components/forms/LicencePlateField.vue';

test('Valid licenceplate profided ', () => {
    const wrapper = shallowMount(LicencePlate)
  
    wrapper.setData({ LicencePlate: 'B'.repeat(8) })
  
    expect(wrapper.find('.error_msg').exists()).toBe(true)
  
    wrapper.setData({ LicencePlate: 'LR-PS-77' })
  
    expect(wrapper.find('.error_msg').exists()).toBe(false)
})