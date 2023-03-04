/* eslint-disable linebreak-style */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown, faChartSimple, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ForumThreads from "./components/ForumThreads.vue";
import ThreadsDivisions from "./components/ThreadsDivisions.vue";
import ForumStatistics from "./components/ForumStatistics.vue";
import LatestPosts from "./components/Latestposts.vue";
import Register from "./views/Register.vue";


const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(faCaretDown, faMagnifyingGlass, faChartSimple, faMessage);

app.use(router);
app.component("ForumThreads", ForumThreads);
app.component("ThreadsDivisions", ThreadsDivisions);
app.component("ForumStatistics", ForumStatistics);
app.component("LatestPosts", LatestPosts);
app.component("Register", Register)

app.mount("#app");
