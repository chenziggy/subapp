export default function handle() {
  return {
    name: 'rollup-plugin-test',
    transform(code, id) {
      if (id.includes( 'entry')) {
      // console.log("🚀 ~ file: vite-plugin.js:5 ~ transform ~ code:", code)
      }
      return code
    },
    buildStart() {
      this.emitFile({
				type: 'chunk',
				id: 'src/entry.js',
        exports: ["registryApp"]
			});
    },
    
    outputOptions( out) {
    // console.log(JSON.stringify(out))

    },
    banner(chunk) {
      if (chunk.fileName === 'assets/entry.js') {
        console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    footer(chunk) {
      if (chunk.fileName === 'assets/entry.js') {
        console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    intro(chunk) {
      if (chunk.fileName === 'assets/entry.js') {
        console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    outro(chunk) {
      if (chunk.fileName === 'assets/entry.js') {
        console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    // renderDynamicImport(a) {
    //   if (a.moduleId.includes('entry.js')) {
    //     console.log(a)
    //   }
    // },
    renderChunk(code , chunk) {
      // if (chunk.fileName === 'assets/entry.js')
      // console.log("🚀 ~ file: vite-plugin.js:11 ~ renderChunk ~ chunk:", code)
      
    },
    writeBundle(opts, bundle ) {
      const keys = Object.keys(bundle)
      // console.log("🚀 ~ file: vite-plugin.js:12 ~ OutputOptions ~ keys:", keys)
      if (keys.includes('assets/entry.js')) {
        // console.log(bundle)
      }
    }
  }
}