<template>
  <q-footer class="flex">
    <q-toolbar class="container">
      <q-space />
      <div class="text-bold text-light">Made by <a class="text-white" href="https://baeni.de" target="_blank" style="text-decoration: none">baeni</a> for Minecake &copy; {{ new Date().getFullYear() }}</div>
      <q-space />
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 75px;
  background: transparentize($light, .9);
  backdrop-filter: blur(25px);
}
</style>
