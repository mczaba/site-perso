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
        <a :href="resumeLink" target="_blank">{{ $t("skills") }}</a>
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
      <a :href="resumeLink" target="_blank"
        ><i class="far fa-address-card"></i
        ><span>
          {{ $t("skills") }}
        </span>
      </a>
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
    },
    resumeLink() {
      if (this.$root.$i18n.locale === "fr") {
        return `${process.env.VUE_APP_PUBLICPATH}CV-FR.pdf`;
      }
      return `${process.env.VUE_APP_PUBLICPATH}CV-EN.pdf`;
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
  .link-bottom,
  a {
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
  a {
    height: 100%;
    font-size: 30px;
    line-height: 40px;
    margin-right: 10px;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
}
.navigation {
  .link,
  a {
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
}
.active {
  height: calc(100% - 3px) !important;
  border-bottom: 3px solid white;
}
.active-bottom {
  background-color: #bf7326;
}
</style>
