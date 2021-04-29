
import DetailView from "../views/DetailView";
import IndexView from "../views/IndexView";


const routes = [
    // Details
  {
    path: "/items/:id",
    name: "details",
    key: 'details',
    title: 'Detalles del producto',
    component: DetailView,
    layout: "/public",
  },
  {
    path: "/items",
    name: "items",
    key: 'items',
    title: 'Busca tus productos favoritos',
    component: IndexView,
    layout: "/public",
  },
  // Index
  {
    path: "/",
    name: "index",
    key: 'index',
    title: 'Busca tus productos favoritos',
    component: IndexView,
    layout: "/public",
  }
];
export default routes;
