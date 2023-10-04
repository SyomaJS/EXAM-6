export default {
  path: "/admin",
  name: "admin",
  component: import("@/views/admin/Admin.vue"),
  children: [
    {
      path: "/products",
      name: "products",
      component: import("@/views/admin/Products.vue"),
    },

    {
      path: "/product/:id",
      name: "user",
      component: import("@/views/admin/Product.vue"),
    },
  ],
};
