<template>
  <div>
    <car-form />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CarForm from './components/forms/carForm.vue';

@Options({
  components: {
    CarForm,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
}

.form_label{
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
  color: #5c5c5c;
}

.input-field{
  margin-bottom: .8em;
}

.input-field input, .input-field select{
  display: block;
  width: 98%;
  border-radius: 2px;
  height: 40px;
  color: #495057;
  border: 1px solid #bfbfbf;
}

.input-field select{
  width: 100%;
}

.error_msg{
  color: red;
  font-size: .8em;
}

.succes_msg{
  padding: 0 0 0.5em;
  font-size: .8em;
}
</style>
