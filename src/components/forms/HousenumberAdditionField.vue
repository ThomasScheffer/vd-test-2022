<template >
    <label for="addition" class="form_label">Toevoeging</label>
    <Field name="addition" type="text" :rules="validateHouseNumberAddition"/>
    <ErrorMessage name="addition" class="error_msg"/>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

export default {

  components: { Field, ErrorMessage },
  methods: {
    validateHouseNumberAddition(value):string|boolean {
      const regex = /^[A-Z0-9]$/;
      if (value && !regex.test(value)) {
        return 'Dit veld moet een geldige toevoeging zijn.';
      }

      return true;
    },
  },
};
</script>

<style scoped>
</style>
