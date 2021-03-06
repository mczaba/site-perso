<template>
  <div class="header">
    <img src="../assets/photoperso.jpg" alt="" />
    <div>
      <h2>Martin Czabadaj</h2>
      <p>{{ $t("title") }}</p>
    </div>
    <div class="tagsContainer">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tags: [
        "VueJS",
        "NodeJS",
        "NuxtJS",
        "Javascript",
        "HTML",
        "CSS",
        "Express",
        "MySQL"
      ]
    };
  }
};
</script>

<i18n>
{
  "fr": {
    "title": "Développeur web full-stack"
  },
  "en": {
    "title": "Full-stack web developper"
  }
}
</i18n>

<style lang="scss" scoped>
.header {
  background-color: #bf7326;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  h2,
  p {
    margin: 0;
    text-align: center;
  }
  img {
    height: 250px;
    width: 250px;
    border-radius: 125px;
    border: 2px solid #f3eded;
  }
  .tagsContainer {
    display: flex;
    justify-content: center;
    width: 300px;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tag {
    font-size: 14px;
    border-radius: 3px;
    background-color: #f3eded;
    color: black;
    padding: 6px;
    cursor: default;
  }
}
</style>
