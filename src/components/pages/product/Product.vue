<template>
  <div class="gap-x-10">
    <product_modal ref="productsModal"></product_modal>
    <div class="w-80 max-w-8xl">
      <MyButton @click="addProdFunc" color="uzum" type="button"
        >Add product</MyButton
      >
    </div>
    <div class="w-full flex flex-wrap gap-10">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="w-80 bg-white shadow-lg p-5 rounded-lg overflow-hidden my-4"
      >
        <div class="my_class" @click="oneProduct(product._id)">
          <div class="flex w-full items-center px-6 py-3 bg-gray-900">
            <h1 class="mx-3 text-white font-semibold text-lg">
              {{ product.name }}
            </h1>
          </div>
          <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800">
              Brand:
              {{ product.brand }}
            </h1>
            <p class="py-2 text-lg text-gray-700">{{ product.group }}</p>
            <div class="flex items-center mt-4 text-gray-700">
              <h1 class="px-2 text-sm">Price: {{ product.price }}</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <h1 class="px-2 text-sm">
                Arrival Price: {{ product.arrival_price }}
              </h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <h1 class="px-2 text-sm">
                Selling Price: {{ product.selling_price }}
              </h1>
            </div>
          </div>
        </div>
        <div class="flex items-center mt-4 text-gray-700 justify-between gap-4">
          <MyButton @click="editProduct(product._id)" color="info" type="button"
            >Edit</MyButton
          >
          <MyButton @click="deleteThis(product?._id)" color="danger"
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
import product_modal from "@/components/pages/product/CreateProductModal.vue";
import http from "@/components/plugins/api";
import { useRouter } from "vue-router";

const router = useRouter();

const productsModal = ref();

function addProdFunc() {
  productsModal.value.openModal(null);
}

const products = ref([]);

const getAllUsers = () => {
  http
    .get("/products")
    .then((res) => {
      console.log(res.data);
      products.value = res.data.products;
      console.log("Ok");
    })
    .catch((err) => {
      console.log(err);
    });
};

getAllUsers();

function oneProduct(id) {
  router.push(`product/${id}`);
}

const deleteThis = (id) => {
  http
    .delete(`products/${id}`)
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

const editProduct = (id) => {
  productsModal.value.openModal(id);
};

const updateProduct = (product) => {
  http
    .put(`/products/${product._id}`, product)
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

.my_class:hover {
  cursor: pointer;
}
</style>
