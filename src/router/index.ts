import { createRouter, createWebHistory } from 'vue-router';
import AddContact from '../views/Add.vue';
import ContactDetails from '../views/Details.vue';
import ContactList from '../views/List.vue';
import EditContact from '../views/Edit.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;