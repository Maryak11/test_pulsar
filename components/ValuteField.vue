<template>
  <div class="relative">
    <Input
      v-model="valute"
      :maska="maska"
      :label="label"
      :placeholder="placeholder"
      @focus="visibleValuteList = true"
      @blur="visibleValuteList = false"
    />
    <div
      v-if="visibleValuteList"
      ref="list"
      class="
        absolute
        mt-1
        bg-white
        border border-input-border
        shadow-xl
        rounded-xl
        z-20
        p-2
      "
    >
      <div
        v-if="filteredValutesListForFirst.length"
        class="flex flex-wrap gap-1"
      >
        <div
          v-for="item in filteredValutesListForFirst"
          :key="item.ID"
          class="
            text-xs
            p-2
            rounded-xl
            bg-custom-bg
            hover:bg-gray-700 hover:text-white
            cursor-pointer
          "
          @mousedown="setValute(item)"
        >
          {{ item['CharCode'] }}
        </div>
      </div>
      <div v-else class="text-xs p-2">Нет такой валюты</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ValuteFieldComponent',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    list: {
      type: [Object, Array],
      default: () => {},
    },
    maska: {
      type: [String, Object],
      required: false,
      default: '',
    },
  },
  data() {
    return {
      valuteTwo: '',
      countValute: '',
      valueValuteOne: '',
      valueValuteTwo: '',
      valutesList: [],
      visibleValuteList: false,
    }
  },

  computed: {
    valute: {
      get() {
        return this.value
      },
      set(newValue) {
        return this.$emit('input', newValue)
      },
    },
    validateValute() {
      if (this.value) {
        const validateValute = Array.from(
          this.value.matchAll(/([a-z]+)?(?:\(?([а-я ]+)\)?)?/gim)
        )
        if (validateValute[0][0]) {
          return validateValute[0][1] || validateValute[0][2]
        } else return this.value
      } else return this.value
    },
    filteredValutesListForFirst() {
      const filteredValutes = Object.values(this.valutesList).filter(
        (el) =>
          el.CharCode.includes(this.validateValute.toUpperCase()) ||
          el.Name.toLowerCase().includes(this.validateValute.toLowerCase())
      )
      return filteredValutes
    },
  },

  async mounted() {
    const { data } = await this.$api.web().getValutesList()
    this.valutesList = data.Valute
  },

  methods: {
    focusInput() {
      this.visibleValuteList = !this.visibleValuteList
    },
    setValute(valute) {
      this.valute = `${valute.CharCode}(${valute.Name})`
      this.$emit('chosen', valute.Value)
    },
  },
}
</script>