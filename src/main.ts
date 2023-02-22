import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import ForumThreads from "./components/ForumThreads.vue";
import ThreadsDivisions from "./components/ThreadsDivisions.vue";


const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(faCaretDown, faMagnifyingGlass);

app.use(router);
app.use(store);
app.component("ForumThreads", ForumThreads)
app.component("ThreadsDivisions", ThreadsDivisions)

app.mount("#app");
