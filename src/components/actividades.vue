<template>
    <header>
        <h1>Aqui estan tus actividades</h1>
        <div class="option">
            <p>tambien puedes agregar una nueva aqui</p>
            <q-btn to="/">agregar</q-btn>
        </div>
    </header>

    <main>
        <q-table id="actividades" title="Actividades" :rows="activities" :columns="columns" row-key="description">
            <template v-slot:body-cell-description="props">
                <q-td :props="props" class="q-pa-sm">
                    {{ props.row.description }}
                </q-td>
            </template>
            <template v-slot:body-cell-date="props"> 
                <q-td :props="props" class="q-pa-sm">
                    {{ props.row.date }}
                </q-td>
            </template>
            <template v-slot:body-cell-state="props">
                <q-td id="state" 
                :props="props" class="q-pa-sm" 
                v-if="props.row.state === 'pendiente' ? colorCell = 'red': colorCell = 'green'"
                :style="{backgroundColor:colorCell}">
                    <p>{{ props.row.state }}</p>
                    <q-btn  icon="check" id="btnComplete" @click="changeState(props.row)"></q-btn>
                </q-td>
            </template>
            <template v-slot:body-cell-edit="props">
                <q-td id="optionBtn" :props="props" class="q-pa-sm">
                    <q-btn to="/editar" style="width: 40px   !important" @click="mainStore.selectActivity(props.row)">✍🏻</q-btn>
                    <q-btn @click="mainStore.deleteActivity(props.row)" style="width: 40px !important">🗑</q-btn>
                </q-td>
            </template>
        </q-table>
    </main>
</template>

<style src="../styles/actividades.css" scoped></style>
<script setup>
import { useMainStore } from '../stores/store.js'
import { ref } from 'vue'
const mainStore = useMainStore()
const changeState = mainStore.changeState
const colorCell = ref("null")


//formulario}
const activities = ref(mainStore.activities)
let columns = ref([
    {
        name: "description",
        align: "center",
        label: "Actividad",
        field: "description",
        sortable: true,
    },
    {
        name: "date",
        align: "center",
        label: "Fecha",
        field: "date",
        sortable: true,
    },
    {
        name: "state",
        align: "center",
        label: "estado",
        field: "state",
        sortable: true,
    },
    {
        name: "edit",
        align: "center",
        label: "Editar",
        field: "edit",
        sortable: true,
    }
]);

function btnComplete() {
    colorCell.value = "green"
    textComplete.value = "completada"
}
</script>