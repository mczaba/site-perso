<template>
  <div class="card">
    <img :src="imageURL()" alt="" />
    <div class="text">
      <h2>{{ project.title }}</h2>
      <p><b>Techs : </b>{{ project.techs }}</p>
      <slot name="intro"></slot>
      <slot></slot>
      <slot name="warning" v-if="project.warning"></slot>
    </div>
    <div class="links">
      <a :href="project.liveLink" target="_blank">{{ $t("liveLink") }}</a>
      <a :href="project.frontCode" v-if="project.frontCode" target="_blank">{{
        $t("front")
      }}</a>
      <a :href="project.backCode" v-if="project.backCode" target="_blank">{{
        $t("back")
      }}</a>
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
  margin-bottom: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-radius: 5px;
  overflow: hidden;
  a {
    cursor: pointer;
    background-color: #bf7326;
    color: white;
    border-right: 1px solid white;
    padding: 10px 0;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    width: calc(33% - 1px);
    line-height: 40px;
    &:visited {
      color: white;
    }
    &:hover {
      background-color: var(--background-nav);
    }
    &:last-child {
      border-right: none;
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
    height: 60px;
    justify-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
    a {
      flex-grow: 1;
    }
  }
}

.warning {
  color: red;
}

@media screen and (max-width: 350px) {
  .links {
    a {
      font-size: 13px;
    }
  }
}
</style>
