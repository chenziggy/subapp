<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from 'virtual:useGlobalStore'

defineProps({
  msg: String,
})
const counterStore = useCounterStore()
const router = useRouter()
const value = ref('')

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <h1 class="text-red mb-10">
      SubApp zoom HelloWorld.vue
    </h1>
    <div>
      <button class="mx-4" @click="router.push('home')">
        go home
      </button>
      <button class="mx-4" @click="router.push('/helloworld')">
        go baseApp home
      </button>
    </div>
    <button class="block mx-auto my-4 text-yellow text-10" type="button" @click="count++">
      count is {{ count }}
    </button>
    <ZInput v-model="value" />
    <button class="block mx-auto my-4 text-yellow text-10" type="button" @click="counterStore.increment">
      useGlobalStore: {{ counterStore.count }} {{ counterStore.doubleCount }}
    </button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
