/**
 * Created by stefania on 9/9/16.
 */
import { Results } from "./results";
import { Facet } from "./facet";
import { BaseMetadataRecord, Order } from "./openminted-model";
    
export class SearchResults {

    from: number;
    to: number;
    total: number;
    
    results: Order<BaseMetadataRecord>[];
    facets: Facet[];
}