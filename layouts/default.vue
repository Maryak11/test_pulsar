<template>
  <div>
    <Header />
    <main class="xl:py-[30px] py-[20px]">
      <h1
        class="
          custom-container
          text-main-blue
          2xl:text-4xl
          xl:text-[26px]
          text-[20px]
          xl:mb-10
          mb-4
        "
      >
        {{ header }}
      </h1>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import { routes } from '@/helpers/routes'

export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  computed: {
    header() {
      return routes.find((el) => el.path === this.$route.path).header
    },
  },
 
}
</script>