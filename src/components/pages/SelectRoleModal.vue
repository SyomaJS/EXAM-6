<template>
  <AppModal v-model="dialog">
    <div class="p-4">
      <h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white">
        Select Your Role
      </h1>

      <div class="mt-4">
        <label
          for="roles"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose a role:
        </label>

        <select
          name="role"
          id="role"
          class="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="selectedRole"
        >
          <option
            v-for="(role, index) in props.roles"
            :key="index"
            :value="role"
          >
            {{ role }}
          </option>
        </select>
      </div>

      <div class="mt-4">
        <MyButton @click="confirmSelection" color="uzum" type="button"
          >Confirm</MyButton
        >
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { ref, defineProps } from "vue";
import AppModal from "@/components/ui/app-modal.vue";
import MyButton from "@/components/ui/Button.vue";
import http from "@/components/plugins/api";
import { useRouter } from "vue-router";
import toastify from "@/components/plugins/Notification";

const router = useRouter();

const dialog = ref(false);

const props = defineProps({
  roles: Array,
});

const selectedRole = ref(null);

function confirmSelection() {
  http
    .post("/admins/set-role", {
      role: selectedRole.value,
    })
    .then((res) => {
      router.push({ name: selectedRole.value });
      toastify("Welcome BOSS", "success");
    })
    .catch((err) => {
      console.log(err);
    });
}

const myRoles = ref();
const openModal = (roles) => {
  dialog.value = true;
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
