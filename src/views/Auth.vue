<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <roles_modal :roles="myRoles" ref="rolesModal" />

    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202103091142"
          alt="logo"
        />
        Welcome
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit="submit">
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your username</label
              >
              <input
                type="text"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                v-model="form.username"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                v-model="form.password"
              />
            </div>

            <MyButton color="uzum" type="submit">Sign in</MyButton>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import http from "@/components/plugins/api";
import toastify from "@/components/plugins/Notification";
import roles_modal from "@/components/pages/SelectRoleModal.vue";
import MyButton from "@/components/ui/Button.vue";

const rolesModal = ref();
const myRoles = ref([]);

const form = ref({
  password: "",
  username: "",
});

const submit = (e) => {
  e.preventDefault();
  http
    .post("admins/login", {
      username: form.value.username,
      password: form.value.password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("roles", res.data.roles);
      myRoles.value = res.data.roles;
      rolesModal.value.openModal(res.data.roles);
    })
    .catch((e) => {
      console.log(e);
      toastify(e?.response.data?.message, "danger");
    });
};
</script>

<style lang="scss" scoped>
.my_button {
  background: rgba(47, 0, 255, 0.891);
}
</style>
