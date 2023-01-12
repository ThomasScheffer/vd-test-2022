<template>
  <simple-card class="vd-form">
    <template #title>Autoverzekering vergelijken</template>

    <template #content>
      <Form @submit="onSubmit">

        <licence-plate />

        <postal-code />

        <house-number />

        <claim-free />

        <kilometrage />

        <button class="btn">
            Vergelijken
        </button>
      </form>
    </template>
  </simple-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Form, Field, ErrorMessage } from 'vee-validate';
import SimpleCard from './simpleCard.vue';
import LicencePlate from './LicencePlateField.vue';
import PostalCode from './PostalCodeField.vue';
import HouseNumber from './HouseNumberField.vue';
import ClaimFree from './ClaimFreeField.vue';
import Kilometrage from './KilometrageField.vue';

@Options({
  components: {
    SimpleCard,
    LicencePlate,
    PostalCode,
    HouseNumber,
    ClaimFree,
    Kilometrage,
    Form,
    Field,
    ErrorMessage,
  },
})
export default class CarForm extends Vue {
  onSubmit(Values): void {
    const values = Values;
    console.log('Button is clicked');
    values.licencePlate = values.licencePlate.replaceAll('-', '').toUpperCase();
    values.postalCode = values.postalCode.replaceAll(' ', '').toUpperCase();

    const url = new URLSearchParams(Values).toString();
    window.history.replaceState(null, '', `?${url}`);
  }
}
</script>

<style scoped>
    .vd-form {
        width: 330px;
    }

    @media only screen and (max-width: 768px) {
        .vd-form {
            width: 100%;
        }
    }

    .btn {
        background: #0cbe3b;
        text-align: center;
        padding: 10px 10px;
        font-weight: 600;
        color: white;
        border-radius: 2px;
        border: none;
        width: 100%;
        cursor: pointer;
        transition: .1s ease;
    }

    .btn:hover {
        background: #0ed642;
    }

</style>
