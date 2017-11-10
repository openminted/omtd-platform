/**
 * Created by stefania on 9/9/16.
 */
import { Facet } from "./facet";
import { Order } from "./openminted-model";
    
export class SearchResults<T> {

    from: number;
    to: number;
    total: number;
    
    results: Order<T>[];
    facets: Facet[];
}

export class SearchResultsNew<T> {

    from: number;
    to: number;
    total: number;

    results: T[];
    facets: Facet[];
}