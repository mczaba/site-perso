<template>
  <nav>
    <div id="contact">
      <a href="https://github.com/mczaba"><i class="fab fa-github"></i></a>
      <a href="mailto:martin.czabadaj@gmail.com"
        ><i class="fas fa-envelope"></i
      ></a>
    </div>
    <div class="navigation">
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
</template>

<script>
import langagePicker from "./LangagePicker";
export default {
  name: "navbar",
  components: {
    langagePicker
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
nav {
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
</style>
