<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/musicas">Musicas</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
