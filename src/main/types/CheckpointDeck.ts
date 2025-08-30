export type Checkpoint = {
  id: string
  checkpoint: string
  tags: string[]
}

export type CheckpointDeck = {
  name: string
  checkpoints: Checkpoint[]
}
