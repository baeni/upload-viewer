<template>
  <q-page>
    <!-- landing -->
    <section class="flex window-height">
      <q-img class="absolute-top full-width window-height" style="z-index: -99; opacity: .075;" src="~assets/background.jpg" />
      <div class="container row q-col-gutter-x-xl">
        <!--<q-img v-if="$q.screen.gt.xs" class="col-2" fit="contain" src="~assets/logo.png" />-->
        <div class="col-10 q-my-auto">
          <div class="text-subtitle1 text-lightest">
            <span class="text-h1 text-white text-hammersmith-one">{{ $t('errorPage.landing.heading') }}</span>
            {{ $t('errorPage.landing.subtitle') }}
          </div>
          <contact-list class="q-pt-lg" :contacts="contacts" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>