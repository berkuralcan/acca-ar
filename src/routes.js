import HomePage from "./components/HomePage.vue"
import ModelIndex from "./components/ModelsIndex.vue"
import ModelView from "./components/ModelView.vue"
import InfoPage from "./components/Information.vue"


export const routes = [
    {path: "/", components: {default: HomePage}},
    {path: "/models", component: ModelIndex},
    {path: "/models$:id", component: ModelView, name: "modelView" },
    {path: "/info", component: InfoPage},
]