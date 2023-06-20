export default function () {
  const virtualModuleId = 'virtual:useGlobalStore'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-plugin-pinia-store',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        // return `export const msg = "from virtual module"`
        return `import { getCurrentInstance } from 'vue';export const useGlobalStore = getCurrentInstance(); console.log(useGlobalStore)`
      }
    },
  }
}