<template >
    <div class="housenumber-flex">
        <div class="input-field house-number">
            <label for="houseNumber" class="form_label">Huisnummer</label>
            <Field name="houseNumber" type="Number" :rules="validateHouseNumber"/>
            <ErrorMessage name="houseNumber" class="error_msg"/>
        </div>
        <div class="input-field number-addition">
            <HousenumberAdditionField />
        </div>
    </div>

</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import HousenumberAdditionField from './HousenumberAdditionField.vue';

export default {
  components: { Field, HousenumberAdditionField, ErrorMessage },
  methods: {

    validateHouseNumber(value):string|boolean {
      if (!value) {
        return 'Dit veld is vereist.';
      }

      const regex = /^[0-9]{1,4}$/;
      if (!regex.test(value)) {
        return 'Voer een geldige huisnummer in.';
      }

      return true;
    },
  },
};
</script>

<style scoped>
    .housenumber-flex{
        display: flex;
        justify-content: space-between;
    }
    .house-number{
        width: 33%;
    }

    .number-addition{
        width: 60%;
    }
</style>
