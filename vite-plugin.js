export default function handle() {
  return {
    name: "rollup-plugin-test",
    transform(code, id) {
      if (id.includes("entry")) {
        // console.log("🚀 ~ file: vite-plugin.js:5 ~ transform ~ code:", code)
      }
      return code;
    },
    // buildStart() {
    //   this.emitFile({
    // 		type: 'chunk',
    // 		id: 'src/entry.js',
    //     exports: ["registryApp"]
    // 	});
    // },

    moduleParsed(moduleInfo, bundle) {
        // console.log(JSON.stringify(moduleInfo.id))
        if (moduleInfo.id.includes('entry.js')) {
        // console.log(JSON.stringify(moduleInfo))
      }
      // console.log("🚀 ~ file: vite-plugin.js:19 ~ renderDynamicImport ~ outputOptions:", outputOptions)
      // if (outputOptions.id.includes("entry.js")) {
        // console.log("🚀 ~ file: vite-plugin.js:19 ~ moduleParsed ~ outputOptions:", outputOptions)
      // }
        // console.log("🚀 ~ file: vite-plugin.js:19 ~ renderStart ~ inputOptions:", bundle['assets/entry.js'])

      // console.log("🚀 ~ file: vite-plugin.js:19 ~ renderStart ~ outputOptions:", outputOptions)
      
    },


  
    banner(chunk) {
      if (chunk.fileName === "assets/entry.js") {
        // console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    footer(chunk) {
      if (chunk.fileName === "assets/entry.js") {
        // console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    intro(chunk) {
      if (chunk.fileName === "assets/entry.js") {
        // console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    outro(chunk) {
      if (chunk.fileName === "assets/entry.js") {
        // console.log("🚀 ~ file: vite-plugin.js:40 ~ intro ~ chunk:", chunk)
        // console.log("🚀 ~ file: vite-plugin.js:38 ~ outro ~ chunk:", chunk)
        // console.log(chunk.modules['/home/ziggy/project/subapp/src/entry.js'])
      }
    },
    renderChunk(code, chunk) {
      if (chunk.fileName === "assets/entry.js") {
        // console.log("🚀 ~ file: vite-plugin.js:11 ~ renderChunk ~ chunk:", code)
      }
    },
    writeBundle(opts, bundle) {
      const keys = Object.keys(bundle);
      // console.log("🚀 ~ file: vite-plugin.js:12 ~ OutputOptions ~ keys:", keys)
      if (keys.includes("assets/entry.js")) {
        // console.log(bundle)
      }
    },
  };
}
