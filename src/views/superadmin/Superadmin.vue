<template>
  <div class="min-h-screen flex">
    <div class="w-1/4 min-h-screen">
      <SideBar :items="sidebar_items" class="min-h-screen h-full"></SideBar>
    </div>
    <div class="w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "@/components/layouts/Sidebar.vue";
import ProductCarts from "@/components/pages/product/Product.vue";
import http from "@/components/plugins/api.js";

const sidebar_items = ref([{ title: "Users", path: "/users" }]);

const localUsers = ref([]);

const getAllUsers = () => {
  http
    .get("/")
    .then((res) => {
      localUsers.value = res.data;
      console.log(localUsers.value);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

getAllUsers();
</script>

<style lang="scss" scoped></style>
