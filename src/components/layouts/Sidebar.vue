<template>
  <div class="sidebar h-max">
    <router-link
      class="sidebar-link text-white hover:bg-purple-600 hover:text-black"
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
    >
      {{ item.title }}
    </router-link>

    <my_button @click="logOut" class="mt-auto" color="danger" type="button"
      >Logout</my_button
    >
  </div>
</template>

<script setup>
import my_button from "@/components/ui/Button.vue";
import { useRouter } from "vue-router";
import toastify from "@/components/plugins/Notification";
const router = useRouter();

const props = defineProps({
  items: {
    type: Array,
  },
});

function logOut() {
  localStorage.clear();
  router.push({ name: "auth" });
  toastify("Successfully logged out", "success");
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  background-color: #000016;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .sidebar-link {
    text-decoration: none;
    font-size: 20px;
    border: 1.5px solid white;
    padding: 10px;
    text-align: center;
    border-radius: 15px;
  }
}
</style>
