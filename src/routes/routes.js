import actividades from '../components/actividades.vue'
import agregar from '../components/agregar.vue'
import editar from '../components/editar.vue'
import {createRouter, createWebHashHistory} from 'vue-router'


const routes =[
    {path:'/', component:agregar},
    {path:'/actividades', component:actividades},
    {path:'/editar', component:editar},
]


export const router = createRouter({
    history:createWebHashHistory(),
    routes
})