import { Index } from './IndexType.js'
import { Version } from './Version.js'

/** A pacote packument result object. */
export interface Packument {
  name: string
  deprecated?: boolean
  engines: {
    node: string
  }
  time: Index<string>
  version: Version
  versions: Packument[]
}
