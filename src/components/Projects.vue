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
          imgSrc: "snake.png",
          liveLink: "https://mczaba.github.io/Snake/",
          frontCode: "https://github.com/mczaba/Snake",
          backCode: null
        },
        {
          title: "weatherApp",
          imgSrc: "weather.png",
          liveLink: "https://weather-app-mc.herokuapp.com/",
          frontCode: "https://github.com/mczaba/weatherApp",
          backCode: null
        },
        {
          title: "traderSim",
          imgSrc: "trader.png",
          liveLink: "https://tradersim.herokuapp.com",
          frontCode: "https://github.com/mczaba/Trader-sim",
          backCode: "https://github.com/mczaba/Trader-sim-api",
          warning: true
        },
        {
          title: "youtubeTogether",
          imgSrc: "youtubeTogether.png",
          liveLink: "https://youtube-together.herokuapp.com/",
          frontCode: "https://github.com/mczaba/youtube-together",
          backCode: "https://github.com/mczaba/youtube-together-api"
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
    "traderSim": {
      "intro": "Une application de simulation de bourse en temps réel faite avec vueJS(vue-router + vuex) et express en utilisant l'API WorldTradingData.",
      "warning": "ATTENTION : le service d'API n'étant plus fonctionnel depuis quelques temps, traderSim ne peut pas fonctionner correctement car les données numériques correspondantes aux actions ne peuvent plus être récupérées.",
      "description": "Vous pouvez chercher pour n'importe quelle action de la bourse américaine et européenne, voir les données en temps réel, ajouter des actions à vos favorites, acheter et vendre des actions, et renommer les actions que vous possédez ou avez mis en favori. Un serveur permet de vous authentifier et de sauvegarder vos données dans une base mongoDB."
    },
    "youtubeTogether": {
      "intro": "Une application que j'ai fait pendant le confinement pour regarder des vidéos youtube avec ses amis en synchronisé. Fait avec vueJS, express et socket.io.",
      "description": "Vous pouvez rejoindre un salon pour pouvoir regarder une vidéo youtube en synchronisé avec toutes les autres personnes du salon. Permet de mettre la vidéo en pause, de changer le timer, et d'utiliser le chat avec toutes les personnes du salon."
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
    "traderSim": {
      "intro": "A real time stock market simulation app made with vueJS(vue-router and vuex), express, and the WorldTradingData API. ",
      "warning": "WARNING: The API service being currently unavailable, the traderSim app cannot function properly as it cannot get the numeric data for stocks.",
      "description": "You can search for any stock and get its real time data, you can buy and sell stocks, add them to your watch list and rename the stocks you own or watch. A server enables you to authenticate and save your data to a mongoDB database."
    },
    "youtubeTogether": {
      "intro": "An app I made during the COVID quarantine so I could watch youtube videos in sync with my friends. Made with vueJS, express and socket.io",
      "description": "You can join a room to be able to watch a video in sync with everyone in the room. Features pausing, searching for a timer, and a chat."
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
  gap: 30px;
}
</style>
