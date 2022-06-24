<template>
  <q-header>
    <q-toolbar class="container">
      <q-btn
        class="text-h2 text-hammersmith-one"
        :label="$t('title')"
        flat
        stretch
        href="https://minecake.eu"
      />

      <q-space />

      <q-btn
        class="text-bold"
        :label="$t('homepage')"
        no-caps
        flat
        href="https://minecake.eu"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Navbar',
  methods: {
    async toId(path, hash) {
      await this.$router.push(path);
      document.getElementById(hash).scrollIntoView();
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: [
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' },
        { label: 'Svenska', value: 'se' }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: transparentize($dark, .65);
  backdrop-filter: blur(15px);
  overflow: hidden;
}
</style>
