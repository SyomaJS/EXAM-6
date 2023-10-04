<template>
  <div>
    <button @click="openCreateModal">Create Product</button>
    <create_product ref="createProduct">
      <h1>Products</h1>
    </create_product>
  </div>
</template>

<script setup>
import create_product from "@/components/pages/product/CreateProductModal.vue";
import { ref } from "vue";
const createProduct = ref(false);

const openCreateModal = () => {
  createProduct.value.openModal();
};
</script>
,

<style lang="scss" scoped></style>
