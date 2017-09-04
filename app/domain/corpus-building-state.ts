/**
 * Created by stefania on 9/1/17.
 */
export class CorpusBuildingState {
    id: string;
    connector: string;
    totalHits: number;
    totalFulltext: number;
    totalRejected: number;
    currentStatus: string;
    metadataProgress: number;
    fulltextProgress: number;
}