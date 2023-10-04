import { createRouter, createWebHistory } from "vue-router";
import Auth from "./auth";
import Admin from "./admin";
import superadmin from "./super";
import NotFound from "@/views/NotFound.vue"; // Import your 404 component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    Auth,
    Admin,
    superadmin, // Your other routes
    {
      path: "/:catchAll(.*)", // This will match any route that hasn't been matched by other routes
      component: NotFound, // Render the NotFound component for 404 errors
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const name = to.name === "auth";
  if (!token && !name) {
    return next({ name: "auth" });
  } else {
    if (token && name) {
      return next({ name: "admin" });
    } else {
      // Allow navigation to proceed
      next();
    }
  }
});

export default router;
