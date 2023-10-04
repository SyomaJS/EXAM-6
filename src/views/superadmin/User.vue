<template>
  <div class="w-96 p-5">
    <div class="flex items-center px-6 py-3 bg-gray-900">
      <h1 class="mx-3 text-white font-semibold text-lg">
        {{ localProducts.name }}
      </h1>
    </div>

    <div class="py-4 px-6 bg-gray-100">
      <h1 class="text-2xl font-semibold text-gray-800">
        Surname:
        {{ localProducts.surname }}
      </h1>

      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">Age: {{ localProducts.age }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">Has diplom: {{ localProducts.is_diploma }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <h1 class="px-2 text-sm">Address: {{ localProducts.address }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import http from "@/components/plugins/api.js";
import { useRoute } from "vue-router";
const route = useRoute();

const id = route.params.id;
console.log(id);

const localProducts = ref([]);

function getOneProd() {
  http
    .get(`/users/${id}`)
    .then((res) => {
      console.log(res.data);
      localProducts.value = res.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
}

getOneProd();
</script>

<style lang="scss" scoped></style>
