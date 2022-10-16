<template>
  <div class="flex flex-col w-full">
    <label v-if="label" class="text-base font-semibold mb-4">{{ label }}</label>
    <div
      class="
        cursor-text
        flex
        rounded-lg
        relative
        border
        gap-2
        justify-between
        border-input-border
        focus-within:border-black
        text-sm
        w-full
        transition-all
      "
      :class="[
        disabled ? 'bg-gray-200' : 'bg-white',
        label ? 'sm:max-w-215' : '',
        error ? 'border-red-600 focus-within:border-red-600' : '',
      ]"
    >
      <input
        v-maska="maska"
        :value="value"
        :type="type"
        :disabled="disabled"
        class="outline-none w-full rounded-lg p-4 font-light"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      />
    </div>
  </div>
</template>
    
    <script>
export default {
  name: 'MainInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String,
      required: false,
      default: 'sm',
      validator: (size) => ['', 'xs', 'sm', 'md', 'lg'].includes(size),
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    long: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
    label: {
      type: String,
      default: '',
    },
    maska: {
      type: [String, Object],
      required: false,
      default: '',
    },
  },
}

// const emit = defineEmits(['update:modelValue', 'input'])

// const handleInput = (e) => {
//   emit('update:modelValue', e.target.value)
//   emit('input', e.target.value)
// }
</script>
    
