import { INC, DEC } from '../constants/example'

export const inc = (step = 1) => ({
  type: INC,
  payload: step
})

export const dec = (step = 1) => ({
  type: DEC,
  payload: step
})