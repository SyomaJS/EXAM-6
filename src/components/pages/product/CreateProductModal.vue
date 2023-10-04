<template>
  <div>
    <AppModal v-model="dialog">
      <h1 class="text-center text-3xl">Product</h1>
      <form @submit.prevent="addProduct">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-900"
            >Name:</label
          >
          <input
            v-model="product.name"
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Brand:</label
          >
          <input
            v-model="product.brand"
            type="text"
            id="brand"
            name="brand"
            required
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Group:</label
          >
          <input
            v-model="product.group"
            type="text"
            id="group"
            required
            name="group"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Price:</label
          >
          <input
            v-model="product.price"
            type="number"
            id="price"
            required
            name="price"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Arrival price:</label
          >
          <input
            v-model="product.arrival_price"
            type="number"
            required
            id="arrival_price"
            name="arrival_price"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Selling price:</label
          >
          <input
            v-model="product.selling_price"
            required
            type="number"
            id="selling_price"
            name="selling_price"
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <label for="brand" class="block text-sm font-medium text-gray-900"
            >Description:</label
          >
          <input
            v-model="product.description"
            type="text"
            id="description"
            required
            name="description"  
            class="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div class="mb-4">
          <MyButton type="submit" color="uzum"> Submit </MyButton>
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

const product = reactive({
  name: "",
  brand: "",
  group: "",
  price: 0,
  arrival_price: 0,
  selling_price: 0,
  description: "",
});

const openModal = (id) => {
  if (id) {
    http
      .get(`products/${id}`)
      .then((res) => {
        product.price = res.data.product.price;
        product.arrival_price = res.data.product.arrival_price;
        product.group = res.data.product.group;
        product.name = res.data.product.name;
        product.brand = res.data.product.brand;
        product.description = res.data.product.description;
        product._id = res.data.product._id;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dialog.value = true;
};

const editProduct = () => {
  console.log(product._id);
  http
    .patch(`/products/update/${product._id}`, product)
    .then((response) => {
      dialog.value = false;
      location.reload();
    })
    .catch((error) => {
      console.log("here");
      console.log(error);
    });
};

const addProduct = () => {
  if (product._id) {
    editProduct();
    return;
  }
  http
    .post("/products/add", product)
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
