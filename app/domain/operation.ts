/**
 * Created by stefania on 8/31/17.
 */
import {BaseMetadataRecord} from "./openminted-model";

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

export class Operation {
    id: string;
    component: string;
    corpus: Corpus;
    errors: Errors;
    person: string;
    date: Date;
    status: string;
}

export class EnrichedOperation {
    operation : Operation;
    resources : {[key : string]: BaseMetadataRecord };
}