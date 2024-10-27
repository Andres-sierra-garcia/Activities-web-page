<template>
<header>
  <h1>Administrador  de  actividades</h1>
    <q-toolbar>
      <q-btn to="/">Agregar</q-btn>
      <q-btn to="/actividades">actividades</q-btn>
      <q-btn to="/editar">Editar</q-btn>
    </q-toolbar>
</header>  
  <div class="container">  
    <router-view></router-view>
  </div>
</template>
