<template>
  <div class="w-96 p-5">
    <div class="flex items-center px-6 py-3 bg-gray-900">
      <h1 class="mx-3 text-white font-semibold text-lg">
        {{ localProducts.name }}
      </h1>
    </div>
    <div class="py-4 px-6 bg-slate-100">
      <h1 class="text-2xl font-semibold text-gray-800">
        Brand:
        {{ localProducts.brand }}
      </h1>
      <p class="py-2 text-lg text-gray-700">{{ localProducts.group }}</p>
      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">Price: {{ localProducts.price }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">
          Arrival Price: {{ localProducts.arrival_price }}
        </h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">
          Selling Price: {{ localProducts.selling_price }}
        </h1>
      </div>
      <div
        class="flex items-center mt-4 text-gray-700 justify-between gap-4"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCarts from "@/components/pages/product/Product.vue";
import http from "@/components/plugins/api.js";
import { useRoute } from "vue-router";
const route = useRoute();

const id = route.params.id;
console.log(id);

const localProducts = ref([]);

function getOneProd() {
  http
    .get(`/products/${id}`)
    .then((res) => {
      console.log(res.data);
      localProducts.value = res.data.product;
    })
    .catch((err) => {
      console.log(err);
    });
}

getOneProd();
</script>

<style lang="scss" scoped></style>
