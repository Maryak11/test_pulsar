<template>
  <header class="bg-custom-bg">
    <ul
      class="
        flex
        2xl:px-20
        xl:px-16
        lg:px-10
        px-5
        py-4
        gap-8
        text-[#666666] text-xs
      "
    >
      <li v-for="item in routesList" :key="item.id">
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>
  
  <script>
import { routes } from '@/helpers/routes'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      routesList: routes,
    }
  },
}
</script>

<style>
.nuxt-link-active {
  color: #343434;
}
</style>
  