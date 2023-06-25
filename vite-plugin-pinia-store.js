import { init, parse } from 'es-module-lexer'
import MagicString from 'magic-string'
import { Parser } from 'acorn'

const ID_FILTER_REG = /\.(mjs|js|ts|vue|jsx|tsx)(\?.*|)$/;
const REG_USE_GLOBALSTORE = /from\s+['"]virtual:useGlobalStore['"]/;

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

    load(id) {
      if (id === resolvedVirtualModuleId) {
        // return `export const msg = "from virtual module"`
        return `export default 'virtual:useGlobalStore'`
      }
    },

    async transform(code, id) {

      if (ID_FILTER_REG.test(id) && REG_USE_GLOBALSTORE.test(code)) {
        const { startIndex, scriptContent } = matchScript(code)

        await init

        const [imports] = parse(scriptContent)

        let mStr
        imports.forEach(({
          n: dependence,
          ss: statementStart,
          se: statementEnd,
        }) => {
          if (dependence === virtualModuleId) {
            mStr = mStr || (mStr = new MagicString(code))
            const raw = code.substring(startIndex + statementStart, startIndex + statementEnd)
            const newImportStr = transformImports(raw)
            mStr.overwrite(startIndex + statementStart, startIndex + statementEnd, newImportStr)
          }
        })
        return mStr.toString()
      }
      return code
    }
  }
}

function matchScript(code) {
  const regex = /<script([^>]*)>(.*?)<\/script>/gs;
  let match;
  while ((match = regex.exec(code)) !== null) {
    const scriptContent = match[2]
    const startIndex = match.index + match[0].indexOf(scriptContent)
    return { startIndex, scriptContent }
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
  const code = `import { inject } from 'vue'\nconst { ${specifiers.map(({ local }) => {
    return local.name
  }).join(',')} } = inject('useGlobalStore')`
  return code
}
