<template>
    <div class="input-field">
        <label for="birthdate" class="form_label">Geboortedatum</label>
        <input v-model="birthdate" name="birthdate" type="date" @change="updateDate" :min="min"
          :max="max" :rules="validateBirthdate"/>
    </div>
</template>

<script lang="ts">
import moment from 'moment';
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['birthdate-changed'],
  data() {
    return {
      birthdate: '',
      min: moment().subtract(100, 'years').format('YYYY-MM-DD'),
      max: moment().format('YYYY-MM-DD'),
    };
  },
  methods: {
    updateDate() {
      this.$emit('birthdate-changed', {
        value: this.birthdate,
      });
    },

    validateBirthdate(value) {
      if (!value) {
        return 'Voer een geldige geboortedatum in.';
      }

      return true;
    },
  },
});
</script>

<style scoped>
</style>
