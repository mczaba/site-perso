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
          <p>{{ $t(`${project.title}.intro`) }}</p>
        </template>
        <p>{{ $t(`${project.title}.description`) }}</p>
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
          title: "YoutubeTogether",
          techs: "Typescript, Nuxt, Express, Socket.io",
          imgSrc: "YoutubeTogether.png",
          liveLink: "https://youtube-together-v2.herokuapp.com",
          code: "https://github.com/mczaba/YoutubeTogetherV2",
        },
        {
          title: "Hesperides",
          techs: "Nuxt, Express, mySQL, Sequelize, Vuetify",
          imgSrc: "hesperides.png",
          liveLink: "https://hesperides-cz.herokuapp.com/",
          code: "https://github.com/mczaba/hesperides",
        },
        {
          title: "Bulgneville",
          techs: "Nuxt, Express, mySQL, Sequelize",
          imgSrc: "bulgneville.png",
          liveLink: "https://etude-cuny-morel.com",
        },
        {
          title: "WeatherApp",
          techs: "VueJS",
          imgSrc: "weather.png",
          liveLink: "https://weather-app-mc.herokuapp.com/",
          code: "https://github.com/mczaba/weatherApp",
        },
        {
          title: "Calculator",
          techs: "HTML, CSS, JavaScript",
          imgSrc: "calculator.png",
          liveLink: "https://mczaba.github.io/calculator/",
          code: "https://github.com/mczaba/calculator",
        },
        {
          title: "Tic Tac Toe",
          techs: "HTML, CSS, JavaScript",
          imgSrc: "tic-tac-toe.png",
          liveLink: "https://mczaba.github.io/tic-tac-toe/",
          code: "https://github.com/mczaba/tic-tac-toe",
        },
        {
          title: "To do list",
          techs: "HTML, CSS, JavaScript, Webpack",
          imgSrc: "todo.png",
          liveLink: "https://mczaba.github.io/to-do-list/",
          code: "https://github.com/mczaba/to-do-list",
        },
      ],
    };
  },
  components: {
    ProjectCard,
  },
};
</script>

<i18n>
{
  "fr": {
    "Calculator": {
      "intro": "Une application de calculatrice avec possibilité de stocker les calculs sur un notepad.",
      "description": "Application de calculatrice avec support pour les parentheses et tout type d'opérations. Permet également de stocker les calculs souhaités dans un notepad à coté."
    },
    "Tic Tac Toe": {
      "intro": "Un jeu de morpion jouable dans le navigateur contre un autre joueur ou contre un ordinateur",
      "description": "Choisissez le nom des 2 joueurs et si le 2eme joueur est humain pour lancer la partie. L'ordinateur ne peut pas perdre la partie et est codé avec l'algorithme minimax."
    },
    "To do list": {
      "intro": "Une application de gestion de tâches.",
      "description": "Permet la création de plusieurs projets et de tâches rattachées à des projets. Un onglet permet de voir toutes les tâches quelques soit le projet, et les autres onglets toutes les tâches rattachées à un certain projet. Une tâche contient une dâte butoir, une importance et une description. Permet de trier les tâches par date ou ordre d'importance."
    },
    "WeatherApp": {
      "intro": "Une application météo faite avec vueJS et l'API OpenWeatherMap.",
      "description" : "Vous pouvez rechercher la ville que vous souhaitez et avoir la météo des 5 prochains jours par tranche de 3 heures. Permet de choisir entre un thème de couleur clair ou sombre."
    },
    "Bulgneville": {
      "intro": "Le site web de l'étude notaire de bulgnéville.",
      "description": "Site web professionnel avec un CMS permettant de poster des articles ou annonces immobilières. L'utilisateur peut consulter les articles, annonces immobilières et informations sur l'étude, envoyer des messages à l'étude directement via le site, et utiliser un calculateur de frais de notaire ou d'échéance de prêt immobilier."
    },
    "Hesperides": {
      "intro": "Application web pour un syndic de copropriété.",
      "description": "Une application permettant de consulter et éditer une base de donnée sur les propriétaires, lots et locataires d'une copropriété. Permet également de poster des documents (factures/devis) au format pdf et de modifier leur statut (traité ou à traiter). \n\nSystème d'authentication complet avec 4 types de permissions (consultation de la DB, modification de la DB, poster des documents, consulter les documents). \n\nVous pouvez vous connecter avec les logs admin // admin et consulter la liste des comptes pour vous connecter avec d'autres permissions. (le mot de passe est toujours le même que le login) \n\nNB: Le système de documents ne fonctionne pas sur cette version vitrine à cause des limitations d'heroku."
    },
    "YoutubeTogether": {
      "intro": "Application web permettant de regarder des vidéos youtube en synchronisé avec ses amis.",
      "description": "Créez ou rejoignez un salon en utilisant son nom et un pseudo avec lequel vous connecter. \n\nL'hôte du salon peut décider si lui seul ou tout le monde peut interagir avec la vidéo. L'hôte peut changer les droits à tout moment. Les personnes pouvant interragir avec la vidéo peuvent mettre en pause, changer le timer ou changer la vidéo. \n\nChaque salon dispose de son propre chat.\n\nL'utilisateur peut rejoindre directement un salon ou voir la liste de tous les salons actuellement en ligne."
    }
      
  },
  "en": {
    "Calculator": {
      "intro": "Calculator app with a notepad to store some calculus.",
      "description": "Calculator app which supports parentheses and all types of operators."
    },
    "Tic Tac Toe": {
      "intro": "A tic tac toe game playable in the browser against either a friend or the computer.",
      "description": "Choose the name of both players and choose to play against the computer or another player then start the game. The computer is coded with the minimax algorithm and is unbeatable."
    },
    "To do list": {
      "intro": "A to do app.",
      "description": "You can create multiple projects and multiple tasks binded to projects. One tab displays all of your tasks regardless of projects and the other tabs displays all tasks binded to a single projects. Tasks contains a description, a due date and an importance. You can sort tasks by due date or importance."
    },
    "WeatherApp": {
      "intro": "A weather app made with vueJS and the OpenWeatherMap API.",
      "description": "You can search for the city you want and get the weather every 3 hours for the next 5 days. Features a dark and light color scheme that you can freely switch."
    },
    "Bulgneville": {
      "intro": "Bulgneville's notary office website.",
      "description": "Professionnal website with a CMS that let you post articles and real estate announces. The user can view articles, real estate announces, and the office appointments and informations about the office, send messages to the office directly from the website, and use a calculator for notary costs and real estate loan."
    },
    "Hesperides": {
      "intro": "Web app made for a co-ownership buildings.",
      "description": "An app made for consulting and editing a database about owners, tenants, and appartement. Also features posting and consulting pdf document and editing their status to either 'to do' or 'done'. \n\nComplete authentication system with 4 types of authorizations (editing accounts, editing the database, posting documents and consulting documents). \n\nLogin using the credentials admin // admin to view the list of other accounts with different authorizations you can log on. (password is always equal to login)\n\nNB: Due to limitations on heroku hosting, the document features is not working on this showcase version."
    },
    "YoutubeTogether": {
      "intro": "Web App made for watching youtube videos in sync with your friends.",
      "description": "Join or create a room using a room name and a nickname you want to log with.\n\nThe room host can decide if everyone or only he can interract with the video. He can change the room rights anytime. People can interract with the video by setting it on pause, changing the timer or changing the video.\n\n Every room has its own chat.\n\nThe user can directly join a room or see a list of all rooms currently online."
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
  p {
    white-space: pre-wrap;
  }
}

@media screen and (max-width: 600px) {
  .portfolio {
    margin-bottom: 60px;
  }
}
</style>
