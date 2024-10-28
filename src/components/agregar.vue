<template>
  <header>
    <h1>Aqui puedes agregar una nueva actividad 😁</h1>
    <div class="optionEditar">
      <p>si deseas editar una actividad haz click en el boton</p>
      <q-btn to="/editar">Editar</q-btn>
    </div>
  </header>

  <main>
    <div class="q-pa-md">

      <q-form @submit="addActivity(descriptionActivity, date)"
       class="q-gutter-md">
        <q-input type="textarea" filled v-model="descriptionActivity" label="descripcion de la actividad " lazy-rules />

        <q-input filled type="date" v-model="date" label="Your age *" lazy-rules />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>  
  </main>



</template>


<style src="../styles//agregar.css" scoped></style>

<script setup>
import { ref } from 'vue'
import {useMainStore} from '../stores/store.js'
const mainStore = useMainStore()
const addActivity = mainStore.addActivity 

//formulario
const descriptionActivity = ref(null);
const date = ref(null);




</script>