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
          title: "tic tac toe",
          techs: "html, css, javascript",
          imgSrc: "tic-tac-toe.png",
          liveLink: "https://mczaba.github.io/tic-tac-toe/",
          code: "https://github.com/mczaba/tic-tac-toe"
        },
        {
          title: "to do list",
          techs: "html, css, javascript, webpack",
          imgSrc: "todo.png",
          liveLink: "https://mczaba.github.io/to-do-list/",
          code: "https://github.com/mczaba/to-do-list"
        },
        {
          title: "weatherApp",
          techs: "VueJS",
          imgSrc: "weather.png",
          liveLink: "https://weather-app-mc.herokuapp.com/",
          code: "https://github.com/mczaba/weatherApp"
        },
        {
          title: "Bulgneville",
          techs: "Nuxt, express, mySQL, Sequelize",
          imgSrc: "bulgneville.png",
          liveLink: "https://etude-cuny-morel.com"
        },
        {
          title: "Hesperides",
          techs: "Nuxt, express, mySQL, Sequelize, Vuetify",
          imgSrc: "hesperides.png",
          liveLink: "https://hesperides-cz.herokuapp.com/",
          code: "https://github.com/mczaba/hesperides"
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
    "tic tac toe": {
      "intro": "Un jeu de morpion jouable dans le navigateur contre un autre joueur ou contre un ordinateur",
      "description": "Choisissez le nom des 2 joueurs et si le 2eme joueur est humain pour lancer la partie. L'ordinateur ne peut pas perdre la partie et est codé avec l'algorithme minimax."
    },
    "to do list": {
      "intro": "Une application de gestion de tâches",
      "description": "Permet la création de plusieurs projets et de tâches rattachées à des projets. Un onglet permet de voir toutes les tâches quelques soit le projet, et les autres onglets toutes les tâches rattachées à un certain projet. Une tâche contient une dâte butoir, une importance et une description. Permet de trier les tâches par date ou ordre d'importance"
    },
    "weatherApp": {
      "intro": "Une application météo faite avec vueJS et l'API OpenWeatherMap.",
      "description" : "Vous pouvez rechercher la ville que vous souhaitez et avoir la météo des 5 prochains jours par tranche de 3 heures. Permet de choisir entre un thème de couleur clair ou sombre."
    },
    "Bulgneville": {
      "intro": "Le site web de l'étude notaire de bulgnéville.",
      "description": "Site web professionnel avec un CMS permettant de poster des articles ou annonces immobilières. L'utilisateur peut consulter les articles, annonces immobilières et informations sur l'étude, envoyer des messages à l'étude directement via le site, et utiliser un calculateur de frais de notaire ou d'échéance de prêt immobilier"
    },
    "Hesperides": {
      "intro": "Application web pour un syndic de copropriété",
      "description": "Une application permettant de consulter et éditer une base de donnée sur les propriétaires, lots et locataires d'une copropriété. Permet également de poster des documents (factures/devis) au format pdf et de modifier leur statut (traité ou à traiter). \n\nSystème d'authentication complet avec 4 types de permissions (consultation de la DB, modification de la DB, poster des documents, consulter les documents). \n\nVous pouvez vous connecter avec les logs admin // admin et consulter la liste des comptes pour vous connecter avec d'autres permissions. (le mot de passe est toujours le même que le login) \n\nNB: Le système de documents ne fonctionne pas sur cette version vitrine à cause des limitations d'heroku."
    }
      
  },
  "en": {
    "tic tac toe": {
      "intro": "A tic tac toe game playable in the browser against either a friend or the computer",
      "description": "Choose the name of both players and choose to play against the computer or another player then start the game. The computer is coded with the minimax algorithm and is unbeatable"
    },
    "to do list": {
      "intro": "A to do app",
      "description": "You can create multiple projects and multiple tasks binded to projects. One tab displays all of your tasks regardless of projects and the other tabs displays all tasks binded to a single projects. Tasks contains a description, a due date and an importance. You can sort tasks by due date or importance."
    },
    "weatherApp": {
      "intro": "A weather app made with vueJS and the OpenWeatherMap API.",
      "description": "You can search for the city you want and get the weather every 3 hours for the next 5 days. Features a dark and light color scheme that you can freely switch"
    },
    "Bulgneville": {
      "intro": "Bulgneville's notary office website.",
      "description": "Professionnal website with a CMS that let you post articles and real estate announces. The user can view articles, real estate announces, and the office appointments and informations about the office, send messages to the office directly from the website, and use a calculator for notary costs and real estate loan"
    },
    "Hesperides": {
      "intro": "Web app made for a co-ownership buildings",
      "description": "An app made for consulting and editing a database about owners, tenants, and appartement. Also features posting and consulting pdf document and editing their status to either 'to do' or 'done'. \n\nComplete authentication system with 4 types of authorizations (editing accounts, editing the database, posting documents and consulting documents). \n\nLogin using the credentials admin // admin to view the list of other accounts with different authorizations you can log on. (password is always equal to login)\n\nNB: Due to limitations on heroku hosting, the document features is not working on this showcase version."
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
