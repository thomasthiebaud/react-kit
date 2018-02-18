export interface Feature {
  heading: string
  title: string
}

export interface State {
  features: Feature[]
  loading: boolean
}

export enum Type {
  SHUFFLE_DONE = 'SHUFFLE_DONE',
  SHUFFLE_REQUESTED = 'SHUFFLE_REQUESTED',
}

export interface ShuffleDoneAction {
  type: Type.SHUFFLE_DONE,
}

export interface ShuffleRequestedAction {
  type: Type.SHUFFLE_REQUESTED,
}

export type Action = ShuffleDoneAction | ShuffleRequestedAction
