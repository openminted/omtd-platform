/**
 * Created by stefania on 8/31/17.
 */
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
    job: string;
    person: string;
    date: Date;
}