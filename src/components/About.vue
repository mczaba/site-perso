<template>
  <div>
    <header-comp />
    <div class="description">
      <p>
        {{ $t("paragraphs.first") }}
      </p>
      <p>
        {{ $t("paragraphs.second") }}
      </p>
      <p>
        {{ $t("paragraphs.third") }}
      </p>
    </div>
  </div>
</template>

<script>
import headerComp from "./Header";
export default {
  name: "About",
  components: {
    headerComp
  }
};
</script>

<i18n>
{
  "fr": {
    "paragraphs": {
      "first": "Anciennement professeur de mathématiques j'ai toujours eu un goût prononcé pour la programmation et la résolution de problèmes. J'ai donc décidé de quitter l'éducation pour poursuivre une carrière à plein temps dans le développement web.",
      "second": "Je suis développeur full-stack autodidacte and j'aime créer des applications et sites web de toute sorte. J'apprécie les particulièrement les technologies VueJS et Express.",
      "third": "N'hésitez pas à me contacter si vous avez un projet à me proposer ou que mes projets (j'en ajoute régulièrement) vous intéressent. Je suis principalement disponible pour des missions en freelance, mais je peux considérer un poste à plein temps en télétravail."
    }
  },
  "en": {
    "paragraphs": {
      "first": "I'm a former maths teacher who always had a taste for solving problems and computer programming. This is why I decided to quit education to pursue a full time career in web developpement.",
      "second": "I'm a self-taught full stack developper and I like to create websites and apps of all kinds. I like using VueJS and Express.",
      "third": "Don't hesitate to contact me if you have a project you would like me to work on, or if my projects (adding more regularly) interests you. I'm available on a freelance basis, but I would consider a full time remote job."
    }
  }
}
</i18n>

<style scoped lang="scss">
.home {
  background-color: white;
}

.description {
  text-align: center;
  padding: 10px 35%;
}
</style>
