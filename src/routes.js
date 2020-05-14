import About from "./components/About";
import Projects from "./components/Projects";

export const routes = [
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "*", redirect: "/about" }
];
