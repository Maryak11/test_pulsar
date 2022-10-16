<template>
  <div>
    <section
      class="flex md:flex-row flex-col justify-between custom-container gap-10"
    >
      <Calculator />

      <div
        class="
          flex flex-col
          bg-blue-container
          border border-[#DFE1F0]
          rounded-2xl
          gap-[30px]
          w-full
          xl:p-[30px]
          p-[15px]
        "
      >
        <h2 class="text-[15px] text-main-blue font-medium uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor:
        </h2>
        <div class="flex md:flex-row flex-col justify-between md:gap-2 gap-4">
          <ul
            class="
              flex flex-col
              justify-between
              md:gap-[25px]
              gap-[10px]
              md:w-60%
              w-full
            "
          >
            <li
              v-for="item in list"
              :key="item.id"
              class="
                flex
                gap-2
                font-normal
                text-[##404456]
                2xl:text-lg
                xl:text-sm
                text-[13px]
                items-center
              "
            >
              <Icon name="ellipse" classes="w-[8px] h-[8px] text-red-600" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
          <div class="flex justify-center items-center md:w-1/2 w-full">
            <div
              class="
                grid
                2xl:grid-cols-[146px_146px]
                xl:grid-cols-[116px_116px]
                lg:grid-cols-[90px_90px]
                md:grid-cols-[86px]
                grid-cols-[repeat(4,_69px)]
                gap-2
              "
            >
              <img
                src="@/assets/img/first.jpg"
                class="
                  block
                  w-full
                  align-top
                  place-self-center
                  lg:rounded-none
                  rounded-tr-2xl rounded-bl-2xl
                "
                alt=""
              /><img
                src="@/assets/img/second.jpg"
                class="
                  block
                  w-full
                  align-top
                  place-self-center
                  xl:rounded-tr-[60px]
                  rounded-tr-2xl rounded-bl-2xl
                "
                alt=""
              /><img
                src="@/assets/img/third.jpg"
                class="
                  block
                  w-full
                  align-top
                  place-self-center
                  xl:rounded-bl-[60px]
                  rounded-tr-2xl rounded-bl-2xl
                "
                alt=""
              /><img
                src="@/assets/img/fourth.jpg"
                class="
                  block
                  w-full
                  align-top
                  place-self-center
                  lg:rounded-none
                  rounded-tr-2xl rounded-bl-2xl
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="md:custom-container mt-8">
      <Help />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',

  data() {
    return {
      list: [
        {
          id: 1,
          label: 'Incididunt ut labore et dolore magna aliqua',
        },
        {
          id: 2,
          label: 'Incididunt ut labore et',
        },
        {
          id: 3,
          label: 'Incididunt ut labore et dolore',
        },
        {
          id: 4,
          label: 'Labore et dolore',
        },
        {
          id: 5,
          label: 'Incididunt ut',
        },
        {
          id: 6,
          label: 'Incididunt ut labore et dolore',
        },
        {
          id: 7,
          label: 'Incididunt ut labore',
        },
      ],
    }
  },
}
</script>
<style>
</style>