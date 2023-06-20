<template>
  <div>
    <h1 class="text-blue mb-10">SubApp Home page</h1>
    <button @click="goBack">go back</button>
    <!-- <h2>{{counter.count}}</h2> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { inject, onMounted } from 'vue'
// import {useCounterStore} from 'virtual:useGlobalStore'
import {useGlobalStore} from 'virtual:useGlobalStore'

console.log(2222,
  inject('useGlobalStore'),
  useGlobalStore,
)
const router = useRouter()
const goBack = () => {
  router.back()
}
onMounted(() => {
  // console.log(111111,useCounterStore)
  import('virtual:useGlobalStore').then(res => {
  console.log('res', res)
})

})

</script>