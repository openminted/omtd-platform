/**
 * Created by stefania on 8/31/17.
 */
import {BaseMetadataRecord} from "./openminted-model";
import { Identifiable } from "./identifiable";

export class Corpus {
    input: string;
    output: string;
}

export class Date {
    finished: number;
    started: number;
    submitted: number;
}

export class Errors {
}

export class Monitoring {
    cpu_milliseconds: number;
    cpu_count: number;
    vm_count: number;
    ram_usage: number;
}

export class Operation extends Identifiable {
    component: string;
    corpus: Corpus;
    errors: Error[];
    date: Date;
    status: string;
    monitoring: Monitoring;
}

export class EnrichedOperation {
    operation : Operation;
    resources : {[key : string]: BaseMetadataRecord };
}