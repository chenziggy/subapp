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
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <h1 class="text-red mb-10">
        SubApp zoom HelloWorld.vue
        <img src="~@img/avatar.png" class="h-10 w-10 block mx-auto my-5" alt="">
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
        sub count is {{ count }}
      </button>
      <ZInput v-model="value" />
      <button class="block mx-auto my-4 text-yellow text-10" type="button" @click="counterStore.increment">
        useGlobalStore: {{ counterStore.count }} {{ counterStore.doubleCount }}
      </button>
    </div>
    <VzFlipClock/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
