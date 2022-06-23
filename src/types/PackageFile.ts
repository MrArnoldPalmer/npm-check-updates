import { Index } from './IndexType.js'
import { PackageFileRepository } from './PackageFileRepository.js'
import { VersionSpec } from './VersionSpec.js'

/** The relevant bits of a parsed package.json file. */
export interface PackageFile {
  repository?: string | PackageFileRepository
  dependencies?: Index<VersionSpec>
  devDependencies?: Index<VersionSpec>
  peerDependencies?: Index<VersionSpec>
  optionalDependencies?: Index<VersionSpec>
  bundleDependencies?: Index<VersionSpec>
}
