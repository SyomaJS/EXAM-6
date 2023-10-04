<template>
  <div class="w-full p-5">
    <ProductCarts> </ProductCarts>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCarts from "@/components/pages/product/Product.vue";
import http from "@/components/plugins/api.js";

const localProducts = ref([]);
</script>

<style lang="scss" scoped></style>
