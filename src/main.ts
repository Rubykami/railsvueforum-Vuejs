/* eslint-disable linebreak-style */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown, faChartSimple, faMessage, faMagnifyingGlass, faFile, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ForumThreads from "./components/ForumThreads/ForumThreads.vue";
import ThreadsDivisions from "./components/ThreadsDivision/ThreadsDivisions.vue";
import ForumStatistics from "./components/ForumStatistics/ForumStatistics.vue";
import LatestPosts from "./components/Latestposts/Latestposts.vue";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection.vue";
import Footer from "./components/Footer/Footer.vue";


const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(faCaretDown, faMagnifyingGlass, faChartSimple, faMessage, faFile, faEye, faEyeSlash);

app.use(router);
app.component("ForumThreads", ForumThreads);
app.component("ThreadsDivisions", ThreadsDivisions);
app.component("ForumStatistics", ForumStatistics);
app.component("LatestPosts", LatestPosts);
app.component("WelcomeSection", WelcomeSection)
app.component("Footer", Footer)

app.mount("#app");
