const HomePage = resolve => {
    require.ensure(["./components/HomePage.vue"], () => {
        resolve(require("./components/HomePage.vue"))
    })
}
const ModelIndex = resolve => {
    require.ensure(["./components/ModelsIndex.vue"], () => {
        resolve(require("./components/ModelsIndex.vue"))
    })
}
const ModelView = resolve => {
    require.ensure(["./components/ModelView.vue"], () => {
        resolve(require("./components/ModelView.vue"))
    })
}
const InfoPage = resolve => {
    require.ensure(["./components/Information.vue"], () => {
        resolve(require("./components/Information.vue"))
    })
}

export const routes = [
    {path: "/", component: HomePage},
    {path: "/models", component: ModelIndex},
    {path: "/models$:id", component: ModelView, name: "modelView" },
    {path: "/info", component: InfoPage},
]