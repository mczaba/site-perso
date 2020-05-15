<template>
  <div>
    <nav id="navbar">
      <div id="contact">
        <a href="https://github.com/mczaba"><i class="fab fa-github"></i></a>
        <a href="mailto:martin.czabadaj@gmail.com"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>
      <div class="navigation" v-if="!mobileView">
        <router-link to="/about" class="link" active-class="active">{{
          $t("about")
        }}</router-link>
        <router-link to="/projects" class="link" active-class="active">{{
          $t("portfolio")
        }}</router-link>
        <router-link to="/skills" class="link" active-class="active">{{
          $t("skills")
        }}</router-link>
      </div>
      <langage-picker />
    </nav>
    <nav v-if="mobileView" id="mobileNav">
      <router-link to="/about" class="link-bottom" active-class="active-bottom"
        ><i class="fas fa-align-justify"></i
        ><span>
          {{ $t("about") }}
        </span></router-link
      >
      <router-link
        to="/projects"
        class="link-bottom"
        active-class="active-bottom"
        ><i class="fas fa-desktop"></i
        ><span>
          {{ $t("portfolio") }}
        </span></router-link
      >
      <router-link to="/skills" class="link-bottom" active-class="active-bottom"
        ><i class="far fa-address-card"></i
        ><span>
          {{ $t("skills") }}
        </span></router-link
      >
    </nav>
  </div>
</template>

<script>
import langagePicker from "./LangagePicker";
export default {
  name: "navbar",
  data() {
    return { windowWidth: window.innerWidth };
  },
  computed: {
    mobileView() {
      return this.windowWidth < 600;
    }
  },
  components: {
    langagePicker
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
};
</script>

<i18n>
{
  "fr": {
    "about": "A propos",
    "portfolio": "Projets",
    "skills": "CV"
  },
  "en": {
    "about": "About",
    "portfolio": "Projects",
    "skills": "Resume"
  }
}
</i18n>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  height: 40px;
  background-color: var(--background-nav);
  z-index: 1;
  padding: 0 10px;
  color: var(--text-nav);
}

#mobileNav {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 60px;
  gap: 0;
  background-color: var(--background-nav);
  z-index: 1;
  color: var(--text-nav);
  .link-bottom {
    border-right: 1px solid var(--text-nav);
    width: calc(33% - 0.5px);
    margin: 0;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:visited {
      color: white;
    }
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
    &:last-child {
      border-right: none;
    }
  }
}
#contact {
  width: 76px;
  display: flex;
  gap: 10px;
  a {
    height: 100%;
    font-size: 30px;
    line-height: 40px;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
}
.link {
  font-weight: bold;
  text-decoration: none;
  height: 100%;
  line-height: 40px;
  padding: 0 10px;
  margin: 0 15px;
  display: inline-block;
  color: white;
  &:visited {
    color: white;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    height: calc(100% - 3px);
    border-bottom: 3px solid white;
  }
}
.active {
  height: calc(100% - 3px);
  border-bottom: 3px solid white;
}
.active-bottom {
  background-color: #bf7326;
}
</style>