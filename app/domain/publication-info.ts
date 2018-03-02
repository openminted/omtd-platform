/**
 * Created by stefania on 26/02/2018.
 */
export class PublicationInfo {
    id: string;
    title: string;
    archiveId: string;
    hasAbstract: boolean;
    hasFulltext: boolean;
    hasMetadata: boolean;
    hasAnnotations: boolean;
    abstract_path: string;
    fulltext_path: string;
    metadata_path: string;
    annotations_path: string;
}