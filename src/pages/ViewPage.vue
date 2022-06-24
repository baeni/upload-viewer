<template>
  <q-page>
    <!-- landing -->
    <section class="flex window-height">
      <q-img class="absolute-top full-width window-height" style="z-index: -99; opacity: .075;" src="~assets/background.jpg" />
      <div class="container">
        <q-img class="rounded-borders" spinner-color="white" fit="contain" height="100vh" :src="imageUrl" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { useMeta } from 'quasar'
import { config } from '../config'

const metaData = (fileName) => ({
  // sets document title
  title: 'Index Page',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Page 1' },
    keywords: { name: 'keywords', content: 'Quasar website' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle:  {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template (ogTitle) {
        return `${ogTitle} - My Website`
      }
    },
    ogImage: {
      name: 'og:image',
      content: config.URL+fileName
    }
  },

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{ "@context": "http://schema.org" }`
    }
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
})

export default {
  name: 'IndexPage',
  props: {
    fileName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    useMeta(metaData(props.fileName));
    return {
      imageUrl: config.URL+props.fileName
    }
  }
}
</script>