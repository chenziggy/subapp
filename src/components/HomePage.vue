<template>
  <div>
    <h1 class="text-blue mb-10">SubApp Home page</h1>
    <button @click="goBack">go back</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.back()
}

</script>