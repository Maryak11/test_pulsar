<template>
  <div class="flex flex-col gap-[30px] w-full">
    <ValuteField
      v-model="valuteOne"
      label="Валюта 1"
      placeholder="Введите название или код"
      :list="valutesList"
      :maska="{ mask: 'Z*', tokens: { Z: { pattern: /[а-яА-Яa-zA-Z]/ } } }"
      @chosen="valueValuteOne = $event"
    />
    <ValuteField
      v-model="valuteTwo"
      label="Валюта 2"
      placeholder="Введите название или код"
      :list="valutesList"
      :maska="{ mask: 'Z*', tokens: { Z: { pattern: /[а-яА-Яa-zA-Z]/ } } }"
      @chosen="valueValuteTwo = $event"
    />
    <Input
      v-model="countValute"
      label="Количество"
      placeholder="Введите число"
      maska="#*"
    />
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
        classes="2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] text-red-600"
      />
      <span class="text-main-blue 2xl:text-xl text-lg font-bold">
        Итого:

        <span :class="[result ? 'text-main-blue' : 'text-red-600']">
          {{
            valueValuteOne && valueValuteTwo && countValute
              ? result.toFixed(4)
              : 'Заполните все поля'
          }}
        </span>
      </span>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'CalculatorComponent',
  data() {
    return {
      valuteOne: '',
      valuteTwo: '',
      countValute: '',
      valueValuteOne: '',
      valueValuteTwo: '',
      valutesList: [],
      visibleValuteList: false,
    }
  },
  computed: {
    result() {
      return this.countValute * (this.valueValuteOne / this.valueValuteTwo)
    },
  },
  async mounted() {
    const { data } = await this.$api.web().getValutesList()
    this.valutesList = data.Valute
  },
}
</script>
  

    