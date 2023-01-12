<template >
    <div class="input-field">
        <label for="kilometrage" class="form_label">Nummerbord</label>
        <Field as="select" name="Kilometrage" v-model="selected">
            <option v-for="option in options" v-bind:key="option"
            :value="option.value">{{ option.text }}</option>
        </Field>
    </div>
</template>

<script lang="ts">
import { Field } from 'vee-validate';

export default {
  components: { Field },
  data() {
    return {
      selected: '7501-10000',
      options: [
        { text: '0 t/m 7500 KM', value: '0-7500' },
        { text: '7501 t/m 10000 KM', value: '7501-10000' },
        { text: '10001 t/m 12000 KM', value: '10001-12000' },
        { text: '12001 t/m 15000 KM', value: '12001-15000' },
        { text: '15000 t/m 20000 KM', value: '15001-20000' },
        { text: '20001 t/m 25000 KM', value: '20001-25000' },
        { text: '25001 t/m 30000 KM', value: '25001-30000' },
        { text: '30001 t/m 90000 KM', value: '30001-90000' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
