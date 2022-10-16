<template>
  <div class="flex flex-col gap-3">
    <Icon
      name="pay"
      :classes="[
        'w-[70px] h-[70px]',
        index % 2 > 0 ? 'text-red-600' : 'text-main-blue',
      ]"
    />
    <span class="font-bold text-sm">{{ item.CharCode }}</span>
    <span>{{ item.Name }}</span>
    <div class="flex gap-2">
      <Icon name="ellipse" classes="w-[10px] h-[10x] text-red-600" />
      <span>Номинал: {{ item.Nominal }}</span>
    </div>
    <div class="flex gap-2 items-center">
      <Icon name="ellipse" classes="w-[10px] h-[10px] text-red-600" />
      <span>Курс: {{ item.Value.toFixed(3) }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ValuteCardComponent',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
}
</script>