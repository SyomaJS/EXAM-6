export default {
  path: "/superadmin",
  name: "superadmin",
  component: import("@/views/superadmin/Superadmin.vue"),
  children: [
    {
      path: "/users",
      name: "users",
      component: import("@/views/superadmin/Users.vue"),
    },

    {
      path: "/user/:id",
      name: "user_id",
      component: import("@/views/superadmin/User.vue"),
    },
  ],
};
