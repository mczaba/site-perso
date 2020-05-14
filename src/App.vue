<template>
  <div id="app">
    <navbar />
    <transition
      :name="transition"
      v-on:before-enter="beforeEnter"
      v-on:after-leave="afterLeave"
    >
      <router-view id="view" />
    </transition>
  </div>
</template>

<script>
import navbar from "./components/navBar.vue";

export default {
  name: "App",
  data() {
    return {
      transition: "slideRight"
    };
  },
  components: {
    navbar
  },
  methods: {
    beforeEnter() {
      if (this.transition === "slideRight") {
        document.documentElement.style.overflow = "hidden";
        window.scrollTo(0, 0);
      }
    },
    afterLeave() {
      if (this.transition === "slideRight") {
        document.documentElement.style.overflow = "visible";
      }
    }
  },
  watch: {
    $route(to, from) {
      const origin = to.path.split("/")[to.path.split("/").length - 1];
      const arrival = from.path.split("/")[from.path.split("/").length - 1];
      if (origin === "about" && arrival === "projects") {
        this.transition = "slideRight";
      } else if (origin === "projects" && arrival === "about") {
        this.transition = "slideLeft";
      }
    }
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  background-color: var(--background-nav);
  color: var(--text-nav);
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
}
#app {
  --background-nav: #914508;
  --text-nav: #f3eded;
  --text-color: black;
  height: 100%;
  font-family: "Nunito", sans-serif;
}
#view {
  background-color: #f3eded;
  z-index: 0;
  margin-top: 40px;
  min-height: calc(100vh - 40px);
}

.slideLeft-enter-active {
  animation: slideInLeft 0.5s ease;
  position: absolute;
  left: 0;
  top: 40px;
  margin: 0 !important;
}
.slideLeft-leave-active {
  animation: slideOutLeft 0.5s ease;
  position: absolute;
  left: 0;
  top: 40px;
  margin: 0 !important;
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
}
@keyframes slideInLeft {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
}

.slideRight-enter-active {
  animation: slideInRight 0.5s ease;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  margin: 0 !important;
}
.slideRight-leave-active {
  animation: slideOutRight 0.5s ease;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  margin: 0 !important;
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100vw);
  }
}
@keyframes slideInRight {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}
</style>
