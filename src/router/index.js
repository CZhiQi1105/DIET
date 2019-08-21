import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import FoodList from '../pages/FoodList/FoodList.vue'
import ArticlesCard from '../components/Articles-Card/Articles-Card.vue'
import ArticlesList from '../pages/ArticlesList/ArticlesList.vue'
import ClassifySearch from '../pages/ClassifySearch/ClassifySearch.vue'
import FoodSearch from '../pages/FoodSearch/FoodSearch.vue'
import CookingTips from '../pages/CookingTips/CookingTips.vue'
import Foods from '../components/Foods/Foods.vue'
import BeautifulImg from '../pages/CookingTips/BeautifulImg/BeautifulImg.vue'
// import Ingredients from '../components/Articles-Card/Articles-Card.vue'
import FoodIntro from '../pages/FoodIntro/FoodIntro.vue'
import FoodDetails from '../pages/FoodDetails/FoodDetails.vue'
import HotFoodList from '../pages/HotFoodList/HotFoodList.vue'
import Recipes from '../pages/Recipes/Recipes.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/food-list',
      component: FoodList,
      children: [
        {
          path: '/',
          redirect: '/food-list/food'
        },
        {
          path: '/food-list/food',
          component: Foods
        }
      ]
    },
    {
      path: '/articles-list',
      component: ArticlesList
    },
    {
      path: '/classify-search',
      component: ClassifySearch
    },
    {
      path: '/food-search',
      component: FoodSearch
    },
    {
      path: '/cooking-tips',
      component: CookingTips,
      children: [
        {
          path: '/',
          redirect: '/cooking-tips/cook-img'
        },
        {
          path: '/cooking-tips/cook-img',
          component: BeautifulImg
        },
        {
          path: '/cooking-tips/ingredients',
          component: ArticlesCard
        },
        {
          path: '/cooking-tips/formula',
          component: ArticlesCard
        },
        {
          path: '/cooking-tips/skills',
          component: ArticlesCard
        }
      ]
    },
    {
      path: '/food-intro',
      component: FoodIntro
    },
    {
      path: '/food-details',
      component: FoodDetails
    },
    {
      path:'/hot-food-list',
      component:HotFoodList,
      children: [
        {
          path: '/',
          redirect: '/hot-food-list/food'
        },
        {
          path: '/hot-food-list/food',
          component: Foods
        }
      ]
    },
    {
      path:'/recipes',
      component:Recipes,
      children: [
        {
          path: '/',
          redirect: '/recipes/food'
        },
        {
          path: '/recipes/food',
          component: Foods
        }
      ]
    }


  ]
})
