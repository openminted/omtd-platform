/**
 * Created by stefania on 9/10/16.
 */
import {
    BaseMetadataRecord, ComponentInfo, CorpusInfo, LanguageDescriptionInfo,
    LexicalConceptualResourceInfo
} from "./openminted-model";

export class ShortResultInfo {

    id: string;
    title: string;
    description: string;
    resourceType: string;
    rightsInfo: boolean;
    creationDate: Date;

    constructor(resource: BaseMetadataRecord) {
        let resourceInfo: CorpusInfo | ComponentInfo | LexicalConceptualResourceInfo | LanguageDescriptionInfo;
        if (typeof resource['corpusInfo'] != 'undefined') {
            resourceInfo = resource['corpusInfo'];
            this.resourceType = 'corpus';
        } else if (typeof resource['componentInfo'] != 'undefined') {
            resourceInfo = resource['componentInfo'];
            this.resourceType = (resourceInfo as ComponentInfo).application ? 'application' : 'component';
        } else if (typeof resource['lexicalConceptualResourceInfo'] != 'undefined') {
            resourceInfo = resource['lexicalConceptualResourceInfo'];
            this.resourceType = 'lexical';
        } else if (typeof resource['languageDescriptionInfo'] != 'undefined') {
            resourceInfo = resource['languageDescriptionInfo'];
            this.resourceType = 'language';
        }
        this.title = resourceInfo.identificationInfo.resourceNames[0].value;
        this.id = resource.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.description = resourceInfo.identificationInfo.descriptions[0].value;
        this.rightsInfo = (resourceInfo.rightsInfo.rightsStatement as any) === "OPEN_ACCESS";
        this.creationDate = resource.metadataHeaderInfo.metadataCreationDate;
    }
}