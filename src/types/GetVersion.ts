import { Options } from './Options.js'
import { Version } from './Version.js'

/** A function that gets a target version of a dependency. */
export type GetVersion = (packageName: string, currentVersion: Version, options?: Options) => Promise<Version | null>
