import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/views/HomePage.vue"
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import ForgotPasswordPage from "@/views/ForgotPasswordPage.vue"
import ChangePasswordPage from "@/views/ChangePasswordPage.vue"
import MoodPage from "@/views/MoodPage.vue"
import ExercisesPage from "@/views/ExercisesPage.vue"
import AdvicePage from "@/views/AdvicePage.vue"
import SettingsPage from "@/views/SettingsPage.vue"
import ProfilePage from "@/views/ProfilePage.vue"
import AboutPage from "@/views/AboutPage.vue"
import StatsPage from "../views/StatsPage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/forgot", component: ForgotPasswordPage },
  { path: "/change-password", component: ChangePasswordPage },
  { path: "/mood", component: MoodPage },
  { path: "/exercises", component: ExercisesPage },
  { path: "/advice", component: AdvicePage },
  { path: "/profile", component: ProfilePage },
  { path: "/settings", component: SettingsPage },
  { path: "/about", component: AboutPage },
  { path: "/stats", component: StatsPage }
]

export default createRouter({
  history: createWebHistory("/MoodTracker/"),
  routes
})
