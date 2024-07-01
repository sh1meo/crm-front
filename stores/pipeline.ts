import { apiV1Url } from "~/constants";
import type { Pipeline } from "~/types/pipeline"
type AccessiblePipeline = { id: number, title: string };

export const usePipelineStore = defineStore('pipeline', {
  state: (): {
    currentPipeline: Pipeline,
    accessiblePipelines: AccessiblePipeline[],
  } => ({
    currentPipeline: {
      id: 1,
      title: '',
      stages: [],
    },
    accessiblePipelines: [],
  }),
  actions: {
    async getPipeline(accountId: number, pipelineId: number): Promise<Pipeline> {
      const pipeline: Pipeline
        = await $fetch(`${apiV1Url}/pipeline/${pipelineId}`, {
          params: { accountId },
        });
      return pipeline;
    },
    setCurrentPipeline(pipeline: Pipeline): void {
      this.currentPipeline = pipeline;
    },
    async getAccessiblePipelines(
      accountId: number,
      userId: number
    ): Promise<AccessiblePipeline[]> {
      const accessiblePipelines: AccessiblePipeline[]
        = await $fetch(`${apiV1Url}/pipeline/all`, {
          params: { accountId, userId }
        });
      return accessiblePipelines;
    }
  }
});