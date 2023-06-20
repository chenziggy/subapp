<template>
  <div>
    <h1 class="text-blue mb-10">SubApp Home page</h1>
    <button @click="goBack">go back</button>
    <h2>{{counter.count}}</h2>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getCurrentInstance, onMounted } from 'vue'
import { getActivePinia } from 'pinia'

const router = useRouter()
const goBack = () => {
  router.back()
}
const  app = getCurrentInstance().appContext.app;
onMounted(() => {
})
const counter = getActivePinia().state.value.counter
console.log("🚀 ~ file: HomePage.vue:22 ~ getActivePinia():", getActivePinia())

</script>