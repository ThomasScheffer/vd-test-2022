<template >
    <div class="input-field">
        <label for="licencePlate" class="form_label">Kenteken</label>
        <div class="licenceplate">
            <div class="background-icon">
                <img src="../../assets/200px-EU-section-with-NL.png" alt="licenceplate NL"
                class="licenceplate-icon">
            </div>
            <div class="licenceplate-field">
                <Field name="licencePlate" type="text" id="licence"  v-model="licencePlate"
                maxlength="8" :rules="validateLicence" value=""/>
            </div>
        </div>
    </div>
    <ErrorMessage name="licencePlate" class="error_msg"/>
    <p :class="succes_msg" class="succes_msg">
      <span class="brand">{{ brand }}</span> uit {{ year }}
    </p>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'plate',
  components: { Field, ErrorMessage },
  data() {
    return {
      car: [],
      brand: '',
      year: '',
      succes_msg: 'hidden',
      licencePlate: '',
    };
  },
  methods: {
    async validateLicence(value:any) {
      if (!value) {
        this.succes_msg = 'hidden';
        return 'Dit veld is vereist.';
      }

      const regex = /^(([a-zA-Z]{3}[0-9]{3})|(\w{2}-\w{2}-\w{2})|([0-9]{2}-[a-zA-Z]{3}-[0-9]{1})|([0-9]{1}-[a-zA-Z]{3}-[0-9]{2})|([a-zA-Z]{1}-[0-9]{3}-[a-zA-Z]{2}))$/;
      if (!regex.test(value)) {
        this.succes_msg = 'hidden';
        return 'Voer een geldig kenteken in.';
      }

      value = value.replaceAll('-', '').toUpperCase();

      const res = await fetch(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${value}`);
      const finalRes = await res.json();
      if (finalRes.length ){
        this.brand = String(finalRes[0].merk).toLowerCase();
        this.year = String(finalRes[0].datum_tenaamstelling_dt).substring(0, 4);
        this.succes_msg = 'show';

        return true;
      } else {
        this.succes_msg = 'hidden';
        return 'Kenteken onbekent.'
      }
    },

  },
});
</script>

<style scoped>
    .licenceplate{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .background-icon{
        background-color: rgb(0,51,153);
        height: 40px;
        width: 50px;
        padding: 0;
        display: inline-block;
    }

    .hidden{
        display: none;
    }

    .show{
        display: inline-block;
    }

    .brand{
        text-transform: capitalize;
    }

    .licenceplate-icon{
        max-height: 100%;
        margin: 0 auto;
        display: block;
    }

    .licenceplate-field{
        width: calc(100% - 40px);
        display: inline-block;
        border: none;
        height: 40px;
        background-color: #f8c52c;
        padding: 0 1em;
    }

    .licenceplate-field input{
        display: inline-block;
        border: transparent;
        height: 40px;
        background-color: transparent;
        font-weight: bold;
        text-transform: uppercase;
        color: #000;
        font-size: 20px;
    }

    .licenceplate-field input:focus{
        outline: none;
    }

</style>
