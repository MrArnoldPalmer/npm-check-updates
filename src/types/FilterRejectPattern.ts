import { FilterFunction } from './FilterFunction.js'

/** Supported patterns for the --filter and --reject options. */
export type FilterRejectPattern = string | string[] | RegExp | RegExp[] | FilterFunction
