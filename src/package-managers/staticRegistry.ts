import fs from 'fs'
import { default as memoize } from 'fast-memoize'
import { GetVersion } from '../types/GetVersion.js'
import { Version } from '../types/Version.js'
import { Options } from '../types/Options.js'
import { StaticRegistry } from '../types/StaticRegistry.js'

/**
 * Returns registry object given a valid path
 *
 * @param path
 * @returns a registry object
 */
const readStaticRegistry = (path: string): StaticRegistry => {
  return JSON.parse(fs.readFileSync(path, 'utf8'))
}

const registryMemoized = memoize(readStaticRegistry)

/**
 * Fetches the version in static registry.
 *
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns A promise that fulfills to string value or null
 */
export const latest: GetVersion = (packageName: string, currentVersion: Version, options: Options = {}) => {
  const registry: { [key: string]: string } = registryMemoized(options.registry!)
  return Promise.resolve(registry[packageName] || null)
}
