import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../../Pages/MemoriesPage.vue";
import AddMemoriesPage from "../../Pages/AddMemoriesPage.vue";
import MemoriesDetailPage from "../../Pages/MemoriesDetailPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    name: "MemoriesPage",
    component: MemoriesPage,
  },
  {
    path: "/memories/add",  
    name: "AddMemoriesPage",
    component: AddMemoriesPage,
  },
  {
    path: "/memories/:id",  
    name: "MemoriesDetailPage",
    component: MemoriesDetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;