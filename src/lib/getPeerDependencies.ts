import fs from 'fs'
import jph from 'json-parse-helpfulerror'
import { print } from '../logging.js'
import getCurrentDependencies from './getCurrentDependencies.js'
import { Index } from '../types/IndexType.js'
import { Options } from '../types/Options.js'
import { VersionSpec } from '../types/VersionSpec.js'

/** Get peer dependencies from installed packages */
function getPeerDependencies(current: Index<VersionSpec>, options: Options) {
  const basePath = options.cwd || './'
  return Object.keys(current).reduce((accum, pkgName) => {
    const path = basePath + 'node_modules/' + pkgName + '/package.json'
    let peers = {}
    try {
      const pkgData = fs.readFileSync(path, 'utf-8')
      const pkg = jph.parse(pkgData)
      peers = getCurrentDependencies(pkg, { ...options, dep: 'peer' })
    } catch (e) {
      print(options, 'Could not read peer dependencies for package ' + pkgName + '. Is this package installed?', 'warn')
    }
    return { ...accum, [pkgName]: peers }
  }, {})
}

export default getPeerDependencies
