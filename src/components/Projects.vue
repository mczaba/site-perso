<template>
  <div class="portfolio">
    <div class="cardsContainer">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :project="project"
      >
        <template slot="warning" v-if="project.warning">
          <p class="warning">
            {{ $t(`${project.title}.warning`) }}
          </p>
        </template>
        <template slot="intro">
          <p>
            {{ $t(`${project.title}.intro`) }}
          </p>
        </template>
        <p>
          {{ $t(`${project.title}.description`) }}
        </p>
      </project-card>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "snake",
          techs: "html, css, javascript, webpack",
          imgSrc: "snake.png",
          liveLink: "https://mczaba.github.io/Snake/",
          frontCode: "https://github.com/mczaba/Snake",
          backCode: null
        },
        {
          title: "weatherApp",
          techs: "VueJS",
          imgSrc: "weather.png",
          liveLink: "https://weather-app-mc.herokuapp.com/",
          frontCode: "https://github.com/mczaba/weatherApp",
          backCode: null
        },
        {
          title: "youtubeTogether",
          techs: "VueJS, express, websockets",
          imgSrc: "youtubeTogether.png",
          liveLink: "https://youtube-together.herokuapp.com/",
          frontCode: "https://github.com/mczaba/youtube-together",
          backCode: "https://github.com/mczaba/youtube-together-api"
        },
        {
          title: "Bulgneville",
          techs: "Nuxt, express, mySQL, Sequelize",
          imgSrc: "bulgneville.png",
          liveLink: "https://etude-cuny-morel.com"
        }
      ]
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<i18n>
{
  "fr": {
    "snake": {
      "intro": "Un jeu snake jouable dans le navigateur fait en javascript et avec webpack pour me familiariser avec webpack.",
      "description": "Vous pouvez jouer en cliquant sur les boutons ou avec les flèches du clavier. La touche entrée permet de commencer ou de mettre le jeu en pause Une image se révèle en fond au fur et à mesure de l'avancement."
    },
    "weatherApp": {
      "intro": "Une application météo faite avec vueJS et l'API OpenWeatherMap.",
      "description" : "Vous pouvez rechercher la ville que vous souhaitez et avoir la météo des 5 prochains jours par tranche de 3 heures. Permet de choisir entre un thème de couleur clair ou sombre."
    },
    "youtubeTogether": {
      "intro": "Une application que j'ai faite pendant le confinement pour regarder des vidéos youtube avec ses amis en synchronisé. Fait avec vueJS, express et socket.io.",
      "description": "Vous pouvez rejoindre un salon pour pouvoir regarder une vidéo youtube en synchronisé avec toutes les autres personnes du salon. Permet de mettre la vidéo en pause, de changer le timer, et d'utiliser le chat avec toutes les personnes du salon."
    },
    "Bulgneville": {
      "intro": "Le site web de l'étude notaire de bulgnéville.",
      "description": "Site web professionnel avec un CMS permettant de poster des articles ou annonces immobilières. L'utilisateur peut consulter les articles, annonces immobilières et informations sur l'étude, envoyer des messages à l'étude directement via le site, et utiliser un calculateur de frais de notaire ou d'échéance de prêt immobilier"
    }
      
  },
  "en": {
    "snake": {
      "intro": "A snake game playable in the browser I made with javascript and wepback to get more experience with webpack.",
      "description" : "You can play either by clicking the buttons (for mobile users) or using your keyboard. The enter key start or pause the game. The background reveals itself as the snake gets bigger."
    },
    "weatherApp": {
      "intro": "A weather app made with vueJS and the OpenWeatherMap API.",
      "description": "You can search for the city you want and get the weather every 3 hours for the next 5 days. Features a dark and light color scheme that you can freely switch"
    },
    "youtubeTogether": {
      "intro": "An app I made during the COVID quarantine so I could watch youtube videos in sync with my friends. Made with vueJS, express and socket.io",
      "description": "You can join a room to be able to watch a video in sync with everyone in the room. Features pausing, searching for a timer, and a chat."
    },
    "Bulgneville": {
      "intro": "Bulgneville's notary office website.",
      "description": "Professionnal website with a CMS that let you post articles and real estate announces. The user can view articles, real estate announces, and the office appointments and informations about the office, send messages to the office directly from the website, and use a calculator for notary costs and real estate loan"
    }
  }
}
</i18n>

<style scoped lang="scss">
.portfolio {
  background-color: #bf7326;
}
.cardsContainer {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .portfolio {
    margin-bottom: 60px;
  }
}
</style>
