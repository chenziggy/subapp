<template>
  <div>
    <h1 class="text-blue mb-10">SubApp Home page</h1>
    <button @click="goBack">go back</button>
    <button  class="block mx-auto my-4 text-yellow text-10" type="button"  @click="counterStore.increment">useGlobalStore: {{counterStore.count}} {{ counterStore.doubleCount }}</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'
// import { useDepartmentStore,useCounterStore } from 'virtual:useGlobalStore'
const { useCounterStore } = inject('useGlobalStore')
const counterStore = useCounterStore()

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>