/**
 * Created by stefania on 9/1/17.
 */
import { Identifiable } from "./identifiable";

export type CurrentStatus = "INITIATING" | "SUBMITTED" | "EMPTY" | "PROCESSING" | "PROCESSING_METADATA" | "PROCESSING_FULLTEXT" | "CREATED" | "CANCELED" | "DELETED" | "FAILED";

export class CorpusBuildingState extends Identifiable {
    connector: string;
    totalHits: number;
    totalFulltext: number;
    totalRejected: number;
    currentStatus: CurrentStatus;
    metadataProgress: number;
    fulltextProgress: number;
}