<template>
  <div class="gap-x-10">
    <users_modal ref="usersModal"></users_modal>
    <div class="w-80 max-w-8xl">
      <MyButton @click="addProdFunc" color="uzum" type="button"
        >Add user</MyButton
      >
    </div>
    <div class="w-full flex flex-wrap gap-10">
      <div
        v-for="(user, index) in users"
        :key="index"
        class="w-80 bg-white shadow-lg p-2 rounded-lg overflow-hidden my-4"
      >
        <div class="flex items-center px-6 py-3 bg-gray-900">
          <h1 class="mx-3 text-white font-semibold text-lg">{{ user.name }}</h1>
        </div>

        <button class="py-4 px-6" @click="oneUser(user._id)">
          <h1 class="text-2xl font-semibold text-gray-800">
            Surname:
            {{ user.surname }}
          </h1>

          <div class="flex items-center mt-4 text-gray-700">
            <h1 class="px-2 text-sm">Age: {{ user.age }}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <h1 class="px-2 text-sm">Has diplom: {{ user.is_diploma }}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <h1 class="px-2 text-sm">Address: {{ user.address }}</h1>
          </div>
        </button>

        <div class="flex items-center mt-4 text-gray-700 justify-between gap-4">
          <MyButton @click="editUser(user._id)" color="info" type="button"
            >Edit</MyButton
          >
          <MyButton @click="deleteThis(user?._id)" color="danger"
            >Delete</MyButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyButton from "@/components/ui/Button.vue";
import toastify from "@/components/plugins/Notification";
import users_modal from "@/components/pages/user/CreateUser.vue";
import http from "@/components/plugins/api";
import { useRouter } from "vue-router";
const router = useRouter();

const usersModal = ref();

function addProdFunc() {
  usersModal.value.openModal(null);
}

const users = ref([]);

const getAllUsers = () => {
  http
    .get("/users")
    .then((res) => {
      console.log(res.data);
      users.value = res.data.users;
      console.log("Ok");
    })
    .catch((err) => {
      console.log(err);
    });
};

getAllUsers();

function oneUser(id) {
  router.push(`user/${id}`);
}

const deleteThis = (id) => {
  http
    .delete(`users/${id}`)
    .then((res) => {
      console.log("here");
      toastify(res.data.message, "success");
      location.reload();
    })
    .catch((err) => {
      console.log("Error: " + err);
      toastify(res.data.message, "danger");
    });
};

const editUser = (id) => {
  usersModal.value.openModal(id);
};

const updateUser = (user) => {
  http
    .put(`/users/${user._id}`, user)
    .then((response) => {
      dialog.value = false;
      location.reload();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
</script>

<style lang="scss" scoped>
.my_div {
  width: 100%;
}
</style>
