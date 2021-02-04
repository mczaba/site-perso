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
      "second": "Je suis developpeur full-stack autodidacte et j'aime créer des applications et sites web de toutes sortes. J'apprécie particulièrement les technologies VueJS et Express.",
      "third": "N'hésitez pas à me contacter si vous avez un projet à me proposer ou que mes projets (j'en ajoute régulièrement) vous intéressent."
    }
  },
  "en": {
    "paragraphs": {
      "first": "I'm a former maths teacher who always had a taste for solving problems and computer programming. This is why I decided to quit education to pursue a full time career in web developpement.",
      "second": "I'm a self-taught full stack developper and I like to create websites and apps of all kinds. I like using VueJS and Express.",
      "third": "Don't hesitate to contact me if you have a project you would like me to work on, or if my projects (adding more regularly) interests you."
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    width: 550px;
    margin: 10px 0;
  }
}

@media screen and (max-width: 600px) {
  .description {
    padding: 10px 0 70px 0;
    p {
      width: 90%;
    }
  }
}
</style>
