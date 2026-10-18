<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppNavBar from './components/AppNavBar.vue';

</script>

<template>
    <div class="app-wrapper">
 <AppNavBar/>
        <main class="main-content">
 <RouterView/>
 </main>

 <AppFooter />
 </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; 
  background-color: #e8ebd9; 
}
</style>