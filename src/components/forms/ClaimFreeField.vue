<template >
    <BirthDate @birthdate-changed="changed"/>

    <div class="input-field">
        <label for="claimFreeYears" class="form_label">Schadevrije jaren</label>
        <Field as="select" name="ClaimfreeYears" v-model="selected">
            <option v-for="option in options" v-bind:key="option"
            :value="option">{{ option }}</option>
        </Field>
    </div>
</template>

<script lang="ts">
import moment from 'moment';
import { Field } from 'vee-validate';
import { defineComponent } from 'vue';
import BirthDate from './BirthDateField.vue';

export default defineComponent({
  components: {
    BirthDate,
    Field,
  },
  data() {
    return {
      selected: '0',
      options: [0],
      maximum: 0,
      birthdate: '',
    };
  },
  props: {

  },
  methods: {
    changed(val) {
      const arrayRange = (start, stop, step) => Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step,
      );

      const birth = moment(val.value, 'YYYYY/MM/DD').format('YYYY');
      this.maximum = (Number(moment().format('YYYY')) - Number(birth)) - 18;
      this.options = arrayRange(-5, this.maximum, 1);
    },

  },
});
</script>

<style scoped>
</style>
