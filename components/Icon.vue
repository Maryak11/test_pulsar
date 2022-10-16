<template>
  <div
    :class="classes"
    :style="{
      mask: `url(${iconUrl}) no-repeat center / contain`,
      '-webkit-mask': `url(${iconUrl}) no-repeat center / contain`,
      backgroundColor: 'currentColor',
    }"
  />
</template>
  
  <script>
export default {
  name: 'IconComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
  },

  computed: {
    iconUrl() {
      return require(`~/assets/icons/${this.name}.svg`)
    },
  },
}
</script>