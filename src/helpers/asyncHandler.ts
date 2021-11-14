import { Request, Response } from 'express'

/**
 * Automatically catch any thrown errors
 *
 * @param {Function} fn
 */
export const asyncHandler = (fn: Function) => (
  (request: Request, response: Response, next: Function) => (
    fn(request, response, next).catch(next)
  )
)
