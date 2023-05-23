import { createRouter, createWebHistory } from "vue-router"
import { RouteName } from "./RouteName"
import HomePageScene from "@/views/homePage/HomePageScene"
import { RoutePath } from "./RoutePath"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", redirect: "/homePage" },
		{
			path: RoutePath.homePage,
			name: RouteName.homePage,
			component: HomePageScene
		}
	]
})

export default router
