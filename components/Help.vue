<template>
  <div
    class="
      bg-blue-container
      flex
      md:flex-row
      flex-col
      justify-between
      md:items-center md:rounded-2xl
      p-5
    "
  >
    <div
      class="
        flex flex-col
        justify-center
        md:items-start
        items-center
        2xl:gap-4
        md:w-[60%]
      "
    >
      <p
        class="
          text-help-blue
          2xl:text-4xl
          xl:text-[39px]
          md:text-[18px]
          text-[16px]
        "
      >
        Нужна помощь?
      </p>
      <p
        class="
          text-help-blue
          2xl:text-4xl
          xl:text-[29px]
          md:text-[18px]
          text-[16px]
        "
      >
        Мы поможем! Просто свяжитесь с нами.
      </p>
      <p
        class="
          2xl:text-base
          md:text-[13px]
          text-[10px]
          md:text-start
          text-center
        "
      >
        Наши специалисты с радостью ответят на все ваши вопросы и дадут
        профессиональную консультацию по товарам.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center md:w-[40%]">
      <p class="text-help-blue 2xl:text-[50px] xl:text-[38px] text-[24px]">
        8 (800) 888-90-28
      </p>
      <p class="2xl:text-2xl xl:text-[18px] text-[14px]">или</p>
      <p class="text-help-blue 2xl:text-[34px] xl:text-[24px] text-[20px]">
        info@example.ru
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelpComponent',
}
</script>