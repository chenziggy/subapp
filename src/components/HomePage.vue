<template>
  <div>
    home page
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