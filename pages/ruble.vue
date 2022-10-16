<template>
  <main class="custom-container flex flex-col gap-[30px]">
    <section
      class="
        grid
        grid-cols-[repeat(auto-fill,_minmax(330px,_340px))]
        gap-[30px]
      "
    >
      <div
        v-for="(item, index) in list"
        :key="item.ID"
        class="bg-custom-bg py-10 px-[30px] rounded-2xl shadow-lg"
      >
        <ValuteCard :item="item" :index="index" />
      </div>
    </section>
    <section>
      <div
        class="
          flex
          xl:gap-[38px]
          gap-5
          items-center
          bg-blue-container
          2xl:p-[30px]
          p-6
          rounded-2xl
        "
      >
        <Icon
          name="question"
          classes="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] text-main-blue"
        />
        <span
          class="
            text-main-blue
            2xl:text-[20px]
            xl:text-[18px]
            text-[14px]
            font-bold
          "
        >
          Телефон: 8 (800) 888-90-28, email: info@example.ru.
        </span>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      valutesList: [],
    }
  },

  computed: {
    list() {
      return Object.values(this.valutesList).slice(0, 3)
    },
  },
  async mounted() {
    const { data } = await this.$api.web().getValutesList()
    this.valutesList = data.Valute
  },
}
</script>