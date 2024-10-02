// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChessRook, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faGithub, faLinkedin, faTwitter, faChessRook, faCheckCircle);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("DefaultLayout", DefaultLayout);

  // Add font-awesome
  Vue.component("font-awesome", FontAwesomeIcon);

  // Add moment
  Vue.prototype.moment = moment;

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;1,400&amp;display=swap",
  });
}
