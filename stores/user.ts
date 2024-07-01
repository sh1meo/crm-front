import { apiV1Url } from "~/constants"

export const useUserStore = defineStore('user', {
  state: (): {
    id: number,
    defaultPipelineId: number
  } => ({
    id: 1,
    defaultPipelineId: 1,
  }),
  actions: {
    async getCurrentPipelineId(accountId: number) {
      const { pipelineId }: { pipelineId: number }
        = await $fetch(`${apiV1Url}/user/${this.id}/default-pipeline`);
      this.defaultPipelineId = pipelineId;
    }
  }
})