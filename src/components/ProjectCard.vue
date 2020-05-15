<template>
  <div class="card">
    <img :src="imageURL()" alt="" />
    <div class="text">
      <h2>{{ project.title }}</h2>
      <slot name="intro"></slot>
      <slot></slot>
      <slot name="warning" v-if="project.warning"></slot>
      <a :href="project.liveLink">{{ $t("liveLink") }}</a>
      <div class="links">
        <a :href="project.frontCode">{{ $t("front") }}</a>
        <a :href="project.backCode" v-if="project.backCode">{{ $t("back") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: ["project"],
  methods: {
    imageURL() {
      return require(`../assets/projects/${this.project.imgSrc}`);
    }
  }
};
</script>

<i18n>
{
  "fr": {
    "liveLink": "Voir ce projet",
    "front": "Voir le code client",
    "back": "Voir le code serveur"
      
  },
  "en": {
    "liveLink": "View this project",
    "front": "View front end code",
    "back": "View back end code"
  }
}
</i18n>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  a {
    cursor: pointer;
    background-color: #bf7326;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    &:visited {
      color: white;
    }
  }
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  img {
    width: 100%;
  }
  .text {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;
    p,
    h2 {
      margin: 0;
    }
  }
  .links {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}

.warning {
  color: red;
}
</style>
