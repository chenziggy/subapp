<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'
import { useSubStore } from '@/store'

const { useCounterStore } = inject('useGlobalStore')

const counterStore = useCounterStore()
const subStore = useSubStore()
const router = useRouter()
function goBack() {
  router.back()
}

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  }]
</script>

<template>
  <div class="mx-auto">
    <h1 class="text-blue mb-10">
      SubApp Home page
    </h1>
    <button @click="goBack">
      go back
    </button>
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <button class="block mx-auto my-4 text-yellow text-10" type="button" @click="counterStore.increment">
      useGlobalStore: {{ counterStore.count }} {{ counterStore.doubleCount }}
    </button>
    <button class="block mx-auto my-4 text-yellow text-10" type="button" @click="subStore.increment">
      useSubStore: {{ subStore.count }} {{ subStore.doubleCount }}
    </button>
  </div>
</template>
