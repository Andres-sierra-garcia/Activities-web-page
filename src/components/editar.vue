<template>
 <header>
    <h1>Aqui puedes editar una actividad 😁</h1>
 </header>
 <main>
    <div class="q-pa-md">

<q-form @submit="mainStore.editActivity(descriptionActivity, date)" class="q-gutter-md">
  <q-input type="textarea" filled v-model="descriptionActivity" label="descripcion de la actividad" lazy-rules />

  <q-input filled type="date" v-model="date" label="Your age *" lazy-rules />

  <div class="q-gutter-md">
  <p>aqui abajo puedes cambiar el estado de la actividad si lo deseas</p>
    <q-radio v-model="selectedActivity.state" val="pendiente" label="pendiente" />
    <q-radio v-model="selectedActivity.state" val="completada" label="completada" />
  </div>

  <div>
    <q-btn label="Submit" type="submit" color="primary"/>
  </div>
</q-form>

</div>  
 </main>

</template>

<style src="../styles/editar.css" scoped></style>

<script setup>
import { ref } from 'vue'
import {useMainStore} from '../stores/store.js'
const mainStore = useMainStore()
const selectedActivity= mainStore.selectedActivity
const descriptionActivity = ref(selectedActivity.description )
const date = ref(selectedActivity.date)

</script>