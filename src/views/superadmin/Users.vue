<template>
  <div class="w-full p-5">
    <UserCarts> </UserCarts>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserCarts from "@/components/pages/user/Users.vue";
import http from "@/components/plugins/api.js";

const localProducts = ref([]);
</script>

<style lang="scss" scoped></style>
