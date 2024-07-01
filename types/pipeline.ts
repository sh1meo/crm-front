type Stage = {
  id: number,
  title: string,
  state: 'active' | 'successfull' | 'closed'
}
export type Pipeline = {
  id: number,
  title: string,
  stages: Stage[],
}