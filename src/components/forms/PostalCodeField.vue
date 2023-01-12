<template >
    <div class="input-field">
        <label for="postalCode" class="form_label">Postcode</label>
        <Field v-model="PostalCode" name="postalCode" type="text" :rules="validatePostalCode"/>
        <ErrorMessage name="postalCode" class="error_msg"/>
    </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

export default {
  components: { Field, ErrorMessage },
  data() {
    return {
      PostalCode: '',
    };
  },
  methods: {
    validatePostalCode(value):string|boolean {
      if (!value) {
        return 'Dit veld is vereist.';
      }

      const regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[A-Za-z]{2}$/;
      if (!regex.test(value)) {
        return 'Voer een geldige postcode in.';
      }

      return true;
    },
  },
};
</script>

<style scoped>

</style>
