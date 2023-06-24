import { init, parse } from 'es-module-lexer'
import MagicString from 'magic-string'
import { Parser } from 'acorn'

const ID_FILTER_REG = /\.(mjs|js|ts|vue|jsx|tsx)(\?.*|)$/;

export default function () {
  const virtualModuleId = 'virtual:useGlobalStore'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-plugin-pinia-store',
    enforce: 'pre',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },

    // async transform(code, id) {

    //   if (ID_FILTER_REG.test(id)) {
    //     await init

    //     console.log(code, '/n  xixixix', id)
    //     const [imports] = parse(code)

    //     let mStr
    //     imports.forEach(({
    //       d: dynamic,
    //       n: dependence,
    //       ss: statementStart,
    //       se: statementEnd,
    //     }) => {
    //       if (dependence === 'virtual:useGlobalStore') {
    //         console.log("d, n, ss, se", dynamic, dependence, statementStart, statementEnd)
    //         console.log('preview code: ', code)
    //         mStr = mStr || (mStr = new MagicString(code))
    //         const raw = code.substring(statementStart, statementEnd)
    //         const newImportStr = transformImports(raw)
    //         mStr.overwrite(statementStart, statementEnd, newImportStr)
    //         const ret = {
    //           code: mStr.toString(),
    //           map: mStr.generateMap(Object.assign({}, {
    //             source: id,
    //             includeContent: true,
    //             hires: true,
    //           })),
    //         }
    //         console.log(mStr.toString())

    //         return mStr.toString()
    //       }
    //     })
    //   }

    //   return code

    // }
  }
}

function transformImports(raw) {
  const ast = Parser.parse(raw, {
    ecmaVersion: 'latest',
    sourceType: 'module',
  })
  const specifiers = (ast.body[0])?.specifiers
  if (!specifiers) {
    return ''
  }
  const code = `const { ${specifiers.map(({ local }) => {
    return local.name
  }).join(',')} } = inject('useGlobalStore')`
  return code
  return `const { ${specifiers.map(({ local }) => {
    return local.name
  }).join(',')} } = inject('useGlobalStore')`
}