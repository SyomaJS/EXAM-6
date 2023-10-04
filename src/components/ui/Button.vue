<template>
  <button
    v-if="color === 'uzum'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-purple-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]  focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]'
    "
  >
    <slot></slot>
  </button>
  <button
    v-else-if="color === 'success'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-green-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]  focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]'
    "
  >
    <slot></slot>
  </button>
  <button
    v-else-if="color === 'danger'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-red-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]  focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]'
    "
  >
    <slot></slot>
  </button>
  <button
    v-else-if="color === 'warning'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-yellow-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]  focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]'
    "
  >
    <slot></slot>
  </button>
  <button
    v-else-if="color === 'info'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-blue-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]  focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]'
    "
  >
    <slot></slot>
  </button>
  <button
    v-else-if="color === 'primary'"
    :type="props.type"
    :class="
      btn_class +
      'inline-block rounded bg-blue-700  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]'
    "
  >
    <slot></slot>
  </button>

  <!-- New buttons -->

  <button
    v-else-if="color === 'uzum-border'"
    :type="props.type"
    :class="
      btn_class +
      ' border-[#4D44B5] border-2 text-[#4D44B5]  hover:shadow-[0_6px_25px_-4px_#4D44B5] active:bg-[#4D44B5] active:text-white active:border-[#3126b3]'
    "
  >
    <slot></slot>
  </button>

  <button
    v-else-if="color === 'fitnes-button'"
    :type="props.type"
    :class="
      btn_class +
      ' centeer text-white text-center hover:shadow-[0_6px_25px_-4px_#4D44B5] bg-[#4D44B5] active:bg-[#4D44B5]  active:border-[#3126b3]'
    "
  >
    <slot></slot>
  </button>

  <button
    v-else-if="color === 'send-mail'"
    :type="props.type"
    :class="
      btn_class +
      ' text-white hover:shadow-[0_6px_25px_-4px_#4D44B5] bg-[#4D44B5] active:bg-[#4D44B5]  active:border-[#3126b3]'
    "
  >
    <slot>Send</slot>
  </button>

  <button
    v-else-if="color === 'pagination_btn_active'"
    :type="props.type"
    :class="'text-white rounded-full w-8 h-8 hover:shadow-[0_6px_25px_-4px_#4D44B5] bg-[#4D44B5] active:bg-[#4D44B5] active:border-[#3126b3]'"
  >
    <slot>1</slot>
  </button>

  <button
    v-else-if="color === 'pagination_btn'"
    :type="props.type"
    :class="'text-[#A098AE] border-2 border-[#A098AE]  rounded-full w-8 h-8 hover:shadow-[0_6px_10px_-4px_#A098AE] active:text-white bg-[#ffff] active:bg-[#4D44B5] active:border-[#A098AE]'"
  >
    <slot>1</slot>
  </button>

  <button
    v-else-if="color === 'buy'"
    :type="props.type"
    :class="
      btn_class +
      ' text-white h-full  hover:shadow-[0_6px_25px_-4px_#4CBC9A] bg-[#4CBC9A] active:bg-[#3becb7]  active:border-[#145340]'
    "
  >
    <slot></slot>
  </button>

  <button
    v-else-if="color === 'next'"
    :type="props.type"
    :class="' px-6 py-2 rounded-xl text-[#344054]  text-xs hover:shadow-[0_6px_25px_-4px_##344054] bg-transparent  border-2 border-[#D0D5DD] hover:border-[#4D44B5]'"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: "",
  color: "",
});

const btn_class = ref(
  "px-6 py-3 text-xs rounded-t-full rounded-b-full font-medium w-full flex text-center justify-center  items-center"
);
</script>

<style lang="scss" scoped></style>
