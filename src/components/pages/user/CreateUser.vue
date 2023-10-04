<template>
  <div>
    <!-- Wrap the form in an AppModal component -->
    <AppModal v-model="dialog">
      <h1 class="text-center text-3xl">User</h1>
      <!-- Use a form element to encapsulate the input fields -->
      <form @submit.prevent="addUser">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-900"
            >Name:</label
          >
          <input
            v-model="user.name"
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="surname" class="block text-sm font-medium text-gray-900"
            >Surname:</label
          >
          <input
            v-model="user.surname"
            type="text"
            id="surname"
            required
            name="surname"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="age" class="block text-sm font-medium text-gray-900"
            >Age:</label
          >
          <input
            v-model="user.age"
            type="number"
            required
            min="5"
            max="120"
            id="age"
            name="age"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="diplom" class="block text-sm font-medium text-gray-900"
            >Has diploma:</label
          >
          <!-- Use v-model for the select input as well -->
          <select v-model="user.is_diploma" id="diplom" required name="hasDiploma">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-900"
            >Address:</label
          >
          <input
            v-model="user.address"
            type="text"
            required
            id="address"
            name="address"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <MyButton @click="addUser" type="button" color="uzum">
            Submit
          </MyButton>
        </div>
      </form>
    </AppModal>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import MyButton from "@/components/ui/Button.vue";
import http from "@/components/plugins/api";

const dialog = ref(false);

const user = reactive({
  name: "",
  surname: "",
  age: 0,
  price: 0,
  is_diploma: false,
  address: "",
});

const openModal = (id) => {
  if (id) {
    http
      .get(`users/${id}`)
      .then((res) => {
        user.name = res.data.user.name;
        user.surname = res.data.user.surname;
        user.address = res.data.user.address;
        user.is_diploma = res.data.user.is_diploma;
        user.age = res.data.user.age;
        user._id = res.data.user._id;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dialog.value = true;
};

const editProduct = () => {
  http
    .patch(`/users/update/${user._id}`, user)
    .then((response) => {
      dialog.value = false;
      location.reload();
    })
    .catch((error) => {
      console.log("here");
      console.log(error);
    });
};

const addUser = () => {
  if (user._id) {
    editProduct();
    return;
  }

  console.log(user.is_diploma);
  if (Number(user.is_diploma)) {
    user.is_diploma = true;
  } else {
    user.is_diploma = false;
  }
  http
    .post("/users/add", user)
    .then((response) => {
      dialog.value = false;

      location.reload();
    })
    .catch((error) => {
      console.log("here");
      console.log(error);
    });
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
