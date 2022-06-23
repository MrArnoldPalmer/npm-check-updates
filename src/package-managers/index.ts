import { Index } from '../types/IndexType.js'
import { PackageManager } from '../types/PackageManager.js'
import * as npm from './npm.js'
import * as yarn from './yarn.js'
import * as gitTags from './gitTags.js'
import * as staticRegistry from './staticRegistry.js'

export default {
  npm,
  yarn,
  gitTags,
  staticRegistry,
} as Index<PackageManager>
