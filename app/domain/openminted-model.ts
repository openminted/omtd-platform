// Generated using typescript-generator version 1.29.366 on 2017-11-23 18:11:23.

export class MyString {
    value: string;
    lang: string;
}

export class Abstract extends MyString {
}

export class ActorInfo {
    relatedPerson: PersonInfo;
    relatedGroup: GroupInfo;
    relatedOrganization: OrganizationInfo;
}

export class ActualUseInfo {
    applicationsInvolved: ApplicationType[];
    applicationOther: string;
    usageReports: RelatedDocumentInfo[];
    derivedResources: RelatedResource[];
    usageProjects: ProjectInfo[];
    actualUseDetails: string;
}

export class Affiliation {
    position: string;
    affiliatedOrganization: OrganizationInfo;
}

export class AnnotatedCorpusInfo {
    corpusSubtype: string;
    mediaType: string;
    lingualityInfo: LingualityInfo;
    languages: LanguageInfo[];
    sizes: SizeInfo[];
    dataFormats: DataFormatInfo[];
    annotations: AnnotationInfo[];
    characterEncoding: CharacterEncodingEnum;
    textClassifications: TextClassificationInfo[];
    domains: DomainInfo[];
    timeClassifications: TimeCoverageInfo[];
    geographicClassifications: GeographicCoverageInfo[];
}

export class AnnotatedDocumentInfo {
    rawPublication: RelatedDocumentInfo;
    dataFormatInfo: DataFormatInfo;
    annotations: AnnotationInfo[];
}

export class AnnotationInfo {
    annotationTypes: AnnotationTypeInfo[];
    typesystem: RelatedResource;
    annotationSchema: RelatedResource;
    annotationResource: RelatedResource;
    guidelinesDocumentedIn: RelatedDocumentInfo[];
    annotationMode: ProcessMode;
    annotationModeDetails: string;
    isAnnotatedBy: RelatedResource[];
    annotationDate: DateCombination;
    interannotatorAgreement: string;
    intraannotatorAgreement: string;
    annotators: ActorInfo[];
}

export class AnnotationTypeInfo {
    annotationType: AnnotationTypeType;
    annotationTypeOther: string;
}

export class AnnotationsInfo {
    corpusSubtype: string;
    rawCorpus: RelatedResource;
    annotationInfo: AnnotationInfo;
}

export class BaseMetadataRecord {
    metadataHeaderInfo: MetadataHeaderInfo;
}

export class CharacterEncodingInfo {
    characterEncoding: CharacterEncodingEnum;
    sizePerCharacterEncoding: SizeInfo;
}

export class CommunicationInfo {
    emails: string[];
    homepages: string[];
    postalAddress: PostalAddress;
    telephoneNumbers: string[];
}

export class Component extends BaseMetadataRecord {
    componentInfo: ComponentInfo;
}

export class ComponentCreationInfo {
    framework: FrameworkEnum;
    formalism: string;
    implementationLanguage: string;
    hasOriginalSource: ResourceIdentifier[];
    creationDetails: string;
    tdmmethod: TDMMethodType;
}

export class ComponentDependencies {
    typesystem: RelatedResource;
    annotationSchema: RelatedResource;
    annotationResources: RelatedResource[];
    mlModel: RelatedResource;
    softwareLibraries: string[];
}

export class ComponentDistributionInfo {
    componentDistributionForm: ComponentDistributionFormEnum;
    distributionLocation: string;
    command: string;
    webServiceType: WebServiceTypeEnum;
    operatingSystems: OperatingSystemEnum[];
}

export class ComponentEvaluationInfo {
    evaluated: boolean;
    evaluationLevels: EvaluationLevelEnum[];
    evaluationTypes: EvaluationTypeEnum[];
    evaluationCriteria: EvaluationCriterionEnum[];
    evaluationMeasures: EvaluationMeasureEnum[];
    goldStandardLocation: string;
    performanceIndicators: PerformanceIndicatorInfo[];
    evaluationReports: RelatedDocumentInfo[];
    evaluationSwComponents: RelatedResource[];
    evaluationDetails: string;
    evaluators: ActorInfo[];
}

export class ComponentInfo {
    resourceType: ResourceTypeEnum;
    identificationInfo: IdentificationInfo;
    versionInfo: VersionInfo;
    contactInfo: ContactInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    application: boolean;
    functionInfo: FunctionInfo;
    distributionInfos: ComponentDistributionInfo[];
    rightsInfo: RightsInfo;
    parameterInfos: ParameterInfo[];
    inputContentResourceInfo: ProcessingResourceInfo;
    outputResourceInfo: ProcessingResourceInfo;
    previousAnnotationTypesPolicy: PreviousAnnotationTypesPolicyEnum;
    componentDependencies: ComponentDependencies;
    componentCreationInfo: ComponentCreationInfo;
    keywords: string[];
    domains: Domain[];
    scmInfo: ScmInfo;
    issueManagementInfo: IssueManagementInfo;
    relations: RelationInfo[];
    componentEvaluationInfo: ComponentEvaluationInfo;
}

export class ComponentOperationInfo {
    runningEnvironmentInfo: RunningEnvironmentInfo;
    runningTime: string;
}

export class ContactInfo {
    contactPoint: string;
    contactType: ContactTypeEnum;
    contactPersons: PersonInfo[];
    contactGroups: GroupInfo[];
    mailingLists: MailingListInfo[];
}

export class Corpus extends BaseMetadataRecord {
    corpusInfo: CorpusInfo;
}

export class CorpusInfo {
    resourceType: string;
    identificationInfo: IdentificationInfo;
    versionInfo: VersionInfo;
    contactInfo: ContactInfo;
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    distributionInfos: DatasetDistributionInfo[];
    rightsInfo: RightsInfo;
    relations: RelationInfo[];
    corpusSubtypeSpecificInfo: CorpusSubtypeSpecificInfo;
}

export class CorpusSubtypeSpecificInfo {
    rawCorpusInfo: RawCorpusInfo;
    annotatedCorpusInfo: AnnotatedCorpusInfo;
}

export class CorpusTextPartInfo {
}

export class CreationInfo {
    originalSources: RelatedResource[];
    creationMode: ProcessMode;
    creationModeDetails: string;
    creationSwComponents: RelatedResource[];
}

export class DataFormatInfo {
    dataFormat: DataFormatType;
    dataFormatOther: string;
}

export class DatasetDistributionInfo {
    distributionMedium: DistributionMediumEnum;
    distributionLocation: string;
    textFormats: TextFormatInfo[];
    characterEncodings: CharacterEncodingInfo[];
}

export class OMTDDate {
    day: number;
    month: number;
    year: number;
}

export class DateCombination {
    date: OMTDDate;
    dateRange: DateRange;
}

export class DateRange {
    startDate: OMTDDate;
    endDate: OMTDDate;
}

export class DepartmentName extends MyString {
    nameType: NameTypeEnum;
}

export class Description extends MyString {
}

export class DistributionLoc {
}

export class Document {
    publication: DocumentInfo;
    annotatedPublication: AnnotatedDocumentInfo;
}

export class DocumentDistributionInfo {
    distributionLocation: string;
    hashkey: string;
    dataFormatInfo: DataFormatInfo;
    characterEncoding: CharacterEncodingEnum;
    sizes: SizeInfo[];
}

export class DocumentInfo {
    documentType: DocumentTypeEnum;
    publicationType: PublicationTypeEnum;
    identifiers: PublicationIdentifier[];
    titles: Title[];
    authors: PersonInfo[];
    contributors: ActorInfo[];
    publicationDate: OMTDDate;
    publisher: OrganizationInfo;
    journal: JournalInfo;
    inBook: RelatedDocumentInfo;
    volume: string;
    series: string;
    pages: string;
    edition: string;
    conference: string;
    distributions: DocumentDistributionInfo[];
    rightsInfo: RightsInfo;
    documentLanguages: string[];
    keywords: string[];
    subjects: Subject[];
    fullText: FullText;
    abstracts: Abstract[];
    fundingProjects: ProjectInfo[];
    sizes: SizeInfo[];
    relations: RelationInfo[];
}

export class DocumentMetadataRecord extends BaseMetadataRecord {
    document: Document;
}

export class Domain {
    value: string;
    classificationSchemeName: ClassificationSchemeName;
    schemeURI: string;
}

export class DomainInfo {
    domain: Domain;
    sizePerDomain: SizeInfo;
}

export class Formalisms {
    formalism: string;
}

export class FullText extends MyString {
}

export class FunctionInfo {
    function: OperationType;
    functionOther: string;
}

export class GeographicCoverageInfo {
    geographicCoverage: string;
    sizePerGeographicCoverage: SizeInfo;
}

export class GrammaticalPhenomenaCoverages {
    grammaticalPhenomenaCoverage: GrammaticalPhenomenaCoverageEnum[];
    weightedGrammar: boolean;
}

export class GroupInfo {
    groupNames: GroupName[];
    affiliatedOrganization: OrganizationInfo;
}

export class GroupName extends MyString {
}

export class IdentificationInfo {
    resourceNames: ResourceName[];
    descriptions: Description[];
    resourceShortName: string;
    resourceIdentifiers: ResourceIdentifier[];
    public: boolean;
}

export class IntendedApplications {
    intendedApplication: ApplicationType[];
    applicationOther: string;
}

export class IssueManagementInfo {
    system: string;
    url: string;
}

export class JournalIdentifier {
    value: string;
    journalIdentifierSchemeName: JournalIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class JournalInfo {
    journalTitles: JournalTitle[];
    identifiers: JournalIdentifier[];
    publisher: OrganizationInfo;
    languages: string[];
    subjects: Subject[];
    rights: RightsInfo[];
}

export class JournalTitle extends MyString {
}

export class LanguageDescription extends BaseMetadataRecord {
    languageDescriptionInfo: LanguageDescriptionInfo;
}

export class LanguageDescriptionEncodingInfo {
    encodingLevels: EncodingLevelEnum[];
    standardsBestPractices: ConformanceToStandardsBestPractices[];
    theoreticModels: string[];
    formalisms: Formalisms;
    tasks: TaskEnum[];
    grammaticalPhenomenaCoverages: GrammaticalPhenomenaCoverages;
}

export class LanguageDescriptionInfo {
    resourceType: string;
    identificationInfo: IdentificationInfo;
    contactInfo: ContactInfo;
    versionInfo: VersionInfo;
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    distributionInfos: DatasetDistributionInfo[];
    languageDescriptionType: LanguageDescriptionTypeEnum;
    modelOperationInfo: ModelOperationInfo;
    languageDescriptionEncodingInfo: LanguageDescriptionEncodingInfo;
    languageDescriptionOperationInfo: LanguageDescriptionOperationInfo;
    languageDescriptionPerformanceInfo: LanguageDescriptionPerformanceInfo;
    relations: RelationInfo[];
    languageDescriptionMediaType: LanguageDescriptionMediaType;
}

export class LanguageDescriptionMediaType {
    languageDescriptionTextInfo: LanguageDescriptionTextInfo;
}

export class LanguageDescriptionOperationInfo {
    runningEnvironmentInfo: RunningEnvironmentInfo;
    relatedLexiconInfo: RelatedLexiconInfo;
}

export class LanguageDescriptionPerformanceInfo {
    robustness: string;
    shallowness: string;
    output: string;
}

export class LanguageDescriptionTextInfo {
    mediaType: string;
    lingualityInfo: LingualityInfo;
    languages: LanguageInfo[];
    metalanguages: LanguageInfo[];
    dataFormatInfo: DataFormatInfo;
    characterEncoding: CharacterEncodingEnum;
    sizes: SizeInfo[];
    domains: Domain[];
    keywords: string[];
    timeCoverage: string;
    geographicCoverage: string;
    creationInfo: CreationInfo;
}

export class LanguageInfo {
    language: string;
    sizePerLanguage: SizeInfo;
    languageVarieties: LanguageVarietyInfo[];
}

export class LanguageVarietyInfo {
    languageVarietyType: LanguageVarietyTypeEnum;
    languageVarietyName: string;
    sizePerLanguageVariety: SizeInfo;
}

export class Lexical extends BaseMetadataRecord {
    lexicalConceptualResourceInfo: LexicalConceptualResourceInfo;
}

export class LexicalConceptualResourceEncodingInfo {
    contentTypes: ContentTypesEnum[];
    conformanceToStandardsBestPractices: ConformanceToStandardsBestPractices[];
    theoreticModel: string[];
    externalRef: string[];
}

export class LexicalConceptualResourceInfo {
    resourceType: string;
    identificationInfo: IdentificationInfo;
    contactInfo: ContactInfo;
    versionInfo: VersionInfo;
    distributionInfos: DatasetDistributionInfo[];
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    lexicalConceptualResourceType: LexicalConceptualResourceTypeEnum;
    lexicalConceptualResourceEncodingInfo: LexicalConceptualResourceEncodingInfo;
    relations: RelationInfo[];
    lexicalConceptualResourceMediaType: LexicalConceptualResourceMediaType;
}

export class LexicalConceptualResourceMediaType {
    lexicalConceptualResourceTextInfo: LexicalConceptualResourceTextInfo;
}

export class LexicalConceptualResourceTextInfo {
    mediaType: string;
    lingualityInfo: LingualityInfo;
    languages: LanguageInfo[];
    metalanguages: LanguageInfo[];
    sizes: SizeInfo[];
    dataFormatInfo: DataFormatInfo;
    characterEncoding: CharacterEncodingEnum;
    domains: Domain[];
    keywords: string[];
    timeCoverage: string;
    geographicCoverage: string;
    creationInfo: CreationInfo;
}

export class LicenceInfo {
    licence: LicenceEnum;
    nonStandardLicenceName: string;
    nonStandardLicenceTermsURL: string;
    nonStandaradLicenceTermsText: NonStandaradLicenceTermsText[];
    conditionOfUse: ConditionOfUseEnum[];
}

export class LingualityInfo {
    lingualityType: LingualityTypeEnum;
    multilingualityType: MultilingualityTypeEnum;
    multilingualityTypeDetails: string;
}

export class MailingListInfo {
    mailingListName: string;
    subscribe: string;
    unsubscribe: string;
    post: string;
    archive: string;
    otherArchives: string[];
}

export class MetadataHeaderInfo {
    metadataRecordIdentifier: MetadataIdentifier;
    metadataCreationDate: Date;
    metadataCreators: PersonInfo[];
    sourceOfMetadataRecord: SourceOfMetadataRecord;
    userQuery: string;
    metadataLastDateUpdated: Date;
    revision: string;
}

export class MetadataIdentifier {
    value: string;
    metadataIdentifierSchemeName: MetadataIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class ModalityInfo {
    modalityType: ModalityTypeEnum[];
    modalityTypeDetails: string;
    sizePerModality: SizeInfo;
}

export class ModelOperationInfo {
    variant: string;
    typesystem: RelatedResource;
    annotationSchema: RelatedResource;
    annotationResource: RelatedResource;
    tagset: RelatedResource;
    algorithm: string;
    algorithmDetails: string;
    trainingCorpusDetails: string;
    tdmmethod: TDMMethodType;
}

export class NonStandaradLicenceTermsText extends MyString {
}

export class ObjectFactory {
}

export class OrganizationAlternativeName extends MyString {
    nameType: NameTypeEnum;
}

export class OrganizationIdentifier {
    value: string;
    organizationIdentifierSchemeName: OrganizationIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class OrganizationInfo {
    organizationNames: OrganizationName[];
    organizationAlternativeNames: OrganizationAlternativeName[];
    organizationIdentifiers: OrganizationIdentifier[];
    departmentNames: DepartmentName[];
    communicationInfo: CommunicationInfo;
}

export class OrganizationName extends MyString {
}

export class OriginalDataProviderInfo {
    originalDataProviderType: OriginalDataProviderTypeEnum;
    originalDataProviderRepository: RepositoryInfo;
    originalDataProviderJournal: JournalInfo;
    originalDataProviderPublisher: OrganizationInfo;
}

export class ParameterInfo {
    parameterName: string;
    parameterLabel: string;
    parameterDescription: string;
    parameterType: ParameterTypeEnum;
    optional: boolean;
    multiValue: boolean;
    defaultValue: string[];
    dataFormats: DataFormatInfo[];
}

export class PerformanceIndicatorInfo {
    metric: MetricEnum;
    measure: number;
    unit: string;
}

export class PersonIdentifier {
    value: string;
    personIdentifierSchemeName: PersonIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class PersonInfo {
    surname: string;
    givenName: string;
    personIdentifiers: PersonIdentifier[];
    communicationInfo: CommunicationInfo;
    affiliation: Affiliation;
}

export class PostalAddress {
    address: string;
    zipCode: string;
    city: string;
    region: string;
    country: RegionIdType;
}

export class ProcessingResourceInfo {
    processingResourceTypes: ProcessingResourceTypeEnum[];
    dataFormats: DataFormatInfo[];
    characterEncodings: CharacterEncodingEnum[];
    languages: string[];
    annotationTypes: AnnotationTypeInfo[];
    typesystem: RelatedResource;
    annotationSchema: RelatedResource;
    annotationResource: RelatedResource;
    samplesLocation: string;
}

export class ProjectIdentifier {
    value: string;
    projectIdentifierSchemeName: string;
    schemeURI: string;
}

export class ProjectInfo {
    projectNames: ProjectName[];
    projectShortNames: ProjectShortName[];
    projectIdentifiers: ProjectIdentifier[];
    webpages: string[];
    funders: OrganizationInfo[];
    fundingTypes: FundingTypeEnum[];
    fundingProgramme: string;
    jurisdiction: string;
    fundingCountries: RegionIdType[];
    projectDates: DateCombination;
}

export class ProjectName extends MyString {
}

export class ProjectShortName extends MyString {
}

export class PublicationIdentifier {
    value: string;
    publicationIdentifierSchemeName: PublicationIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class RawCorpusInfo {
    corpusSubtype: string;
    mediaType: string;
    lingualityInfo: LingualityInfo;
    languages: LanguageInfo[];
    sizes: SizeInfo[];
    dataFormats: DataFormatInfo[];
    characterEncodings: CharacterEncodingInfo[];
    textClassifications: TextClassificationInfo[];
    domains: DomainInfo[];
    timeClassifications: TimeCoverageInfo[];
    geographicClassifications: GeographicCoverageInfo[];
    creationInfo: CreationInfo;
}

export class Register {
    value: string;
    classificationSchemeName: ClassificationSchemeName;
    schemeURI: string;
}

export class RelatedDocumentInfo {
    documentUnstructured: string;
    publicationIdentifiers: PublicationIdentifier[];
}

export class RelatedLexiconInfo {
    relatedLexiconType: RelatedLexiconTypeEnum;
    attachedLexiconPosition: string;
    compatibleLexiconType: CompatibleLexiconTypeEnum[];
}

export class RelatedResource {
    resourceNames: ResourceName[];
    resourceIdentifiers: ResourceIdentifier[];
}

export class RelationInfo {
    relationType: RelationTypeEnum;
    relatedResource: RelatedResource;
}

export class RepositoryIdentifier {
    value: string;
    repositoryIdentifierSchemeName: RepositoryIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class RepositoryInfo {
    repositoryNames: RepositoryName[];
    repositoryIdentifiers: RepositoryIdentifier[];
}

export class RepositoryName extends MyString {
}

export class ResourceCreationInfo {
    resourceCreators: ActorInfo[];
    fundingProjects: ProjectInfo[];
    creationDate: DateCombination;
}

export class ResourceDocumentationInfo {
    documentationDescription: string;
    documentationType: DocumentationTypeEnum;
    publicationIdentifiers: PublicationIdentifier[];
}

export class ResourceIdentifier {
    value: string;
    resourceIdentifierSchemeName: ResourceIdentifierSchemeNameEnum;
    schemeURI: string;
}

export class ResourceName extends MyString {
}

export class RightsInfo {
    availabilityStartDate: Date;
    copyrightStatement: string;
    availabilityEndDate: Date;
    licenceInfos: LicenceInfo[];
    rightsHolders: ActorInfo[];
    rightsStatement: RightsStatementEnum;
    attributionText: string;
}

export class RunningEnvironmentInfo {
    requiresSoftware: RelatedResource[];
    requiresLRs: RelatedResource[];
    runningEnvironmentDetails: string;
}

export class ScmInfo {
    connection: string;
    developerConnection: string;
    tag: string;
    url: string;
}

export class SizeInfo {
    size: string;
    sizeUnit: SizeUnitEnum;
}

export class SourceOfMetadataRecord {
    collectedFrom: RepositoryInfo;
    sourceMetadataLink: string;
    relatedMetadataScheme: string;
    originalDataProviderInfo: OriginalDataProviderInfo;
}

export class StructuralEncoding {
    value: string;
    schemeName: SchemeNameEnum;
    schemeURI: string;
}

export class StructuralEncodingInfo {
    structuralEncoding: StructuralEncoding;
    sizePerStructuralEncoding: SizeInfo;
}

export class Subject {
    value: string;
    classificationSchemeName: ClassificationSchemeName;
    schemeURI: string;
}

export class TextClassificationInfo {
    keywords: string[];
    textGenre: TextGenre;
    textType: TextType;
    register: Register;
    subject: Subject;
    sizePerTextClassification: SizeInfo;
}

export class TextFormatInfo {
    dataFormatInfo: DataFormatInfo;
    sizePerTextFormat: SizeInfo;
}

export class TextGenre {
    value: string;
    classificationSchemeName: ClassificationSchemeName;
    schemeURI: string;
}

export class TextType {
    value: string;
    classificationSchemeName: ClassificationSchemeName;
    schemeURI: string;
}

export class TimeCoverageInfo {
    timeCoverage: string;
    sizePerTimeCoverage: SizeInfo;
}

export class Title extends MyString {
    titleType: TitleTypeEnum;
}

export class UsageInfo {
    intendedApplications: IntendedApplications;
    actualUseInfos: ActualUseInfo[];
}

export class ValidationInfo {
    validated: boolean;
    validationType: ValidationTypeEnum;
    validationMode: ProcessMode;
    validationModeDetails: string;
    validationExtent: ValidationExtentEnum;
    validationExtentDetails: string;
    validationReports: RelatedDocumentInfo[];
    validationSwComponents: RelatedResource[];
    validators: ActorInfo[];
}

export class VersionInfo {
    version: string;
    versionDate: string;
    versionType: VersionTypeEnum;
    revision: string;
}

export const enum AnnotationTypeType {
    LEMMA,
    TOKEN,
}

export const enum ApplicationType {
    ANNOTATION,
    BILINGUAL_LEXICON_INDUCTION,
    CONTRADICTION_DETECTION,
    DEPENDENCY_PARSING,
    DERIVATIONAL_MORPHOLOGICAL_ANALYSIS,
    DISCOURSE_ANALYSIS,
    DOCUMENT_CLASSIFICATION,
    EMOTION_GENERATION,
    EMOTION_RECOGNITION,
    ENTITY_MENTION_RECOGNITION,
    EVENT_EXTRACTION,
    EXPRESSION_RECOGNITION,
    EXTRACTION_OF_FUNDING_INFORMATION,
    INTRA_DOCUMENT_COREFERENCE_RESOLUTION,
    LANGUAGE_IDENTIFICATION,
    LANGUAGE_MODELLING,
    LANGUAGE_MODELS_TRAINING,
    LEMMATIZATION,
    LEXICON_ACCESS,
    LEXICON_ACQUISITION_FROM_CORPORA,
    LEXICON_ENHANCEMENT,
    LEXICON_EXTRACTION_FROM_LEXICA,
    LEXICON_FORMAT_CONVERSION,
    LEXICON_MERGING,
    LEXICON_VISUALIZATION,
    MACHINE_TRANSLATION,
    MORPHOLOGICAL_ANALYSIS,
    MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING,
    MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING,
    NATURAL_LANGUAGE_GENERATION,
    NATURAL_LANGUAGE_UNDERSTANDING,
    OPINION_MINING,
    OTHER,
    PERSUASIVE_EXPRESSION_MINING,
    QUALITATIVE_ANALYSIS,
    QUESTION_ANSWERING,
    SEMANTIC_ROLE_LABELLING,
    SENTENCE_SPLITTING,
    SHALLOW_PARSING,
    SPELL_CHECKING,
    TEMPORAL_EXPRESSION_RECOGNITION,
    TERMINOLOGY_EXTRACTION,
    TEXT_GENERATION,
    TEXT_MINING,
    TOKENIZATION,
    TOKENIZATION_AND_SENTENCE_SPLITTING,
    TOPIC_DETECTION,
    TOPIC_DETECTION_AND_TRACKING,
    TOPIC_MODELLING,
    TEXT_AND_DATA_MINING,
    CONTENT_MINING,
    TEXT_AND_DATA_ANALYTICS,
    KNOWLEDGE_ACQUISITION,
    INFORMATION_EXTRACTION,
    WORD_SENSE_DISAMBIGUATION,
    EVENT_DETECTION,
    NAMED_ENTITY_RECOGNITION,
    KNOWLEDGE_DISCOVERY,
    KNOWLEDGE_DISCOVERY_AND_INFORMATION_EXTRACTION,
    KNOWLEDGE_REPRESENTATION,
    RELATION_EXTRACTION,
    HTTP___WWW_META_SHARE_ORG_ONTOLOGIES_OMTD_TDMONTOLOGY_ACCESSCOMPONENT,
    COREFERENCE_RESOLUTION,
    TEXT_CATEGORISATION,
    SUMMARISATION,
    SENTIMENT_ANALYSIS,
    EMOTION_DETECTION,
    COMPUTATIONAL_ARGUMENTATION,
    INFORMATION_RETRIEVAL,
    EXPLORATORY_SEARCH,
    SEMANTIC_SEARCH,
    INFORMATION_FILTERING,
    RECOMMENDER_SYSTEM,
    RECOGNIZING_TEXTUAL_ENTAILMENT,
    PARAPHRASING,
}

export const enum CharacterEncodingEnum {
    US_ASCII,
    WINDOWS_1250,
    WINDOWS_1251,
    WINDOWS_1252,
    WINDOWS_1253,
    WINDOWS_1254,
    WINDOWS_1257,
    ISO_8859_1,
    ISO_8859_2,
    ISO_8859_4,
    ISO_8859_5,
    ISO_8859_7,
    ISO_8859_9,
    ISO_8859_13,
    ISO_8859_15,
    KOI_8_R,
    UTF_8,
    UTF_16,
    UTF_16_BE,
    UTF_16_LE,
    WINDOWS_1255,
    WINDOWS_1256,
    WINDOWS_1258,
    ISO_8859_3,
    ISO_8859_6,
    ISO_8859_8,
    WINDOWS_31_J,
    EUC_JP,
    X_EUC_JP_LINUX,
    SHIFT_JIS,
    ISO_2022_JP,
    X_MSWIN_936,
    GB_18030,
    X_EUC_CN,
    GBK,
    ISCII_91,
    X_WINDOWS_949,
    EUC_KR,
    ISO_2022_KR,
    X_WINDOWS_950,
    X_MS_950_HKSCS,
    X_EUC_TW,
    BIG_5,
    BIG_5_HKSCS,
    TIS_620,
    BIG_5_SOLARIS,
    CP_037,
    CP_273,
    CP_277,
    CP_278,
    CP_280,
    CP_284,
    CP_285,
    CP_297,
    CP_420,
    CP_424,
    CP_437,
    CP_500,
    CP_737,
    CP_775,
    CP_838,
    CP_850,
    CP_852,
    CP_855,
    CP_856,
    CP_857,
    CP_858,
    CP_860,
    CP_861,
    CP_862,
    CP_863,
    CP_864,
    CP_865,
    CP_866,
    CP_868,
    CP_869,
    CP_870,
    CP_871,
    CP_874,
    CP_875,
    CP_918,
    CP_921,
    CP_922,
    CP_930,
    CP_933,
    CP_935,
    CP_937,
    CP_939,
    CP_942,
    CP_942_C,
    CP_943,
    CP_943_C,
    CP_948,
    CP_949,
    CP_949_C,
    CP_950,
    CP_964,
    CP_970,
    CP_1006,
    CP_1025,
    CP_1026,
    CP_1046,
    CP_1047,
    CP_1097,
    CP_1098,
    CP_1112,
    CP_1122,
    CP_1123,
    CP_1124,
    CP_1140,
    CP_1141,
    CP_1142,
    CP_1143,
    CP_1144,
    CP_1145,
    CP_1146,
    CP_1147,
    CP_1148,
    CP_1149,
    CP_1381,
    CP_1383,
    CP_33722,
    ISO_2022_CN_CNS,
    ISO_2022_CN_GB,
    JIS_AUTO_DETECT,
    MS_874,
    MAC_ARABIC,
    MAC_CENTRAL_EUROPE,
    MAC_CROATIAN,
    MAC_CYRILLIC,
    MAC_DINGBAT,
    MAC_GREEK,
    MAC_HEBREW,
    MAC_ICELAND,
    MAC_ROMAN,
    MAC_ROMANIA,
    MAC_SYMBOL,
    MAC_THAI,
    MAC_TURKISH,
    MAC_UKRAINE,
}

export const enum ClassificationSchemeName {
    DDC,
    UDC,
    EURO_VOC,
    LCSH,
    DK_5,
    ME_SH,
    ANC_CLASSIFICATION,
    BNC_CLASSIFICATION,
    NLK_CLASSIFICATION,
    PAROLE_TOPIC_CLASSIFICATION,
    PAROLE_GENRE_CLASSIFICATION,
    OTHER,
}

export const enum CompatibleLexiconTypeEnum {
    WORDNET,
    WORDLIST,
    MORPHOLOGICAL_LEXICON,
    OTHER,
}

export const enum ComponentDistributionFormEnum {
    WEB_SERVICE,
    SOURCE_CODE,
    EXECUTABLE_CODE,
    SOURCE_AND_EXECUTABLE_CODE,
    DOCKER_IMAGE,
    GALAXY_WORKFLOW,
    WORKFLOW_FILE,
}

export const enum ConditionOfUseEnum {
    ATTRIBUTION,
    NON_COMMERCIAL_USE,
    COMMERCIAL_USE,
    SHARE_ALIKE,
    NO_DERIVATIVES,
    NO_REDISTRIBUTION,
    EVALUATION_USE,
    RESEARCH,
    LANGUAGE_ENGINEERING_RESEARCH,
    EDUCATION,
    INFORM_LICENSOR,
    REDEPOSIT,
    COMPENSATE,
    PERSONAL_DATA_INCLUDED,
    SENSITIVE_DATA_INCLUDED,
    REQUEST_PLAN,
    SPATIAL_CONSTRAINT,
    USER_IDENTIFIED,
    ACADEMIC_USERS,
    COMMERCIAL_USERS,
    MEMBERS_OF_GROUP,
    OTHER,
}

export const enum ConformanceToStandardsBestPractices {
    AGRO_VOC,
    ALVIS,
    ARGO,
    BML,
    CES,
    DK_PRO_CORE,
    EAGLES,
    EDA_MONTOLOGY,
    ELSST,
    EML,
    EMMA,
    GATE,
    GESIS,
    GMX,
    GR_AF,
    HAM_NO_SYS,
    HASSET,
    INK_ML,
    ILSP_NLP,
    ISO_12620,
    ISO_16642,
    ISO_1987,
    ISO_26162,
    ISO_30042,
    ISO_704,
    JATS,
    LAF,
    LAPPS,
    LEMON,
    LMF,
    MAF,
    MLIF,
    MOSES,
    MULTEXT,
    MUMIN,
    MULTIMODAL_INTERACTION_FRAMEWORK,
    OAXAL,
    OLIA,
    OWL,
    PANACEA,
    PENN_TREE_BANK,
    PRAGUE_TREEBANK,
    RDF,
    SEM_AF,
    SEM_AF_DA,
    SEM_AF_NE,
    SEM_AF_SRL,
    SEM_AF_DS,
    SKOS,
    SRX,
    SYN_AF,
    TBX,
    TMX,
    TEI,
    TEI_P_3,
    TEI_P_4,
    TEI_P_5,
    TIME_ML,
    XCES,
    XLIFF,
    UD,
    WORD_NET,
    OTHER,
}

export const enum ContactTypeEnum {
    LANDING_PAGE,
    CONTACT_EMAIL,
}

export const enum ContentTypesEnum {
    ACCENTUATION,
    LEMMA,
    LEMMA_MULTI_WORD_UNITS,
    LEMMA_VARIANTS,
    LEMMA_ABBREVIATIONS,
    LEMMA_COMPOUNDS,
    LEMMA_CLITIC_FORMS,
    PART_OF_SPEECH,
    MORPHO_FEATURES,
    MORPHO_CASE,
    MORPHO_GENDER,
    MORPHO_NUMBER,
    MORPHO_DEGREE,
    MORPHO_IRREGULAR_FORMS,
    MORPHO_MOOD,
    MORPHO_TENSE,
    MORPHO_PERSON,
    MORPHO_ASPECT,
    MORPHO_VOICE,
    MORPHO_AUXILIARY,
    MORPHO_INFLECTION,
    MORPHO_REFLEXIVITY,
    SYNTAX_SUBCAT_FRAME,
    SEMANTICS_TRAITS,
    SEMANTICS_SEMANTIC_CLASS,
    SEMANTICS_CROSS_REFERENCES,
    SEMANTICS_RELATIONS,
    SEMANTICS_RELATIONS_HYPONYMS,
    SEMANTICS_RELATIONS_HYPERONYMS,
    SEMANTICS_RELATIONS_SYNONYMS,
    SEMANTICS_RELATIONS_ANTONYMS,
    SEMANTICS_RELATIONS_TROPONYMS,
    SEMANTICS_RELATIONS_MERONYMS,
    USAGE_FREQUENCY,
    USAGE_REGISTER,
    USAGE_COLLOCATIONS,
    USAGE_EXAMPLES,
    USAGE_NOTES,
    DEFINITION_GLOSS,
    TRANSLATION_EQUIVALENT,
    SEMANTICS_DOMAIN,
    SEMANTICS_EVENT_TYPE,
    SEMANTICS_SEMANTIC_ROLES,
    STATISTICAL_PROPERTIES,
    MORPHO_DERIVATION,
    SEMANTICS_QUALIA_STRUCTURE,
    SYNTACTICO_SEMANTIC_LINKS,
    OTHER,
}

export const enum DataFormatType {
    TEXT_PLAIN,
    APPLICATION_VND_XMI_XML,
    APPLICATION_XML,
    APPLICATION_X_XCES_XML,
    APPLICATION_TEI_XML,
    APPLICATION_RDF_XML,
    APPLICATION_XHTML_XML,
    APPLICATION_EMMA_XML,
    APPLICATION_PLS_XML,
    APPLICATION_POSTSCRIPT,
    TEXT_SGML,
    TEXT_HTML,
    APPLICATION_X_TEX,
    APPLICATION_RTF,
    APPLICATION_JSON_LD,
    APPLICATION_X_LATEX,
    TEXT_CSV,
    TEXT_TAB_SEPARATED_VALUES,
    APPLICATION_PDF,
    APPLICATION_X_MSACCESS,
    APPLICATION_MSWORD,
    APPLICATION_VND_MS_EXCEL,
    TEXT_TURTLE,
    ACL_ANTHOLOGY,
    ALVIS_ENRICHED_DOCUMENT,
    BNC,
    BIO_NLP,
    BIONLP_FORMAT_VARIANT_ST2013A1_A2,
    CADIXE_JSON,
    CONLL_2000,
    CONLL_2002,
    CONLL_2006,
    CONLL_2007,
    CONLL_2009,
    CONLL_2012,
    DATA_SIFT,
    FACTORED_TAG_LEM,
    GATE,
    GENIA,
    GRAF,
    HTML_5_MICRODATA,
    I_2_B_2,
    IMS_CWB,
    JDBC,
    KEA_CORPUS,
    LLL,
    NEGRA_EXPORT,
    PTB_FORMAT_VARIANT_CHUNKED,
    PTB_FORMAT_VARIANT_COMBINED,
    PML,
    RELP,
    AIMED_CORPUS,
    TIGER,
    TUPP_DZ,
    TWITTER,
    XCES_FORMAT_VARIANT_ILSP,
    WEB_1_T,
    UIMA_CAS_DUMP,
    UIMA_BINARY_CAS,
}

export const enum DistributionMediumEnum {
    WEB_EXECUTABLE,
    DOWNLOADABLE,
    ACCESSIBLE_THROUGH_INTERFACE,
    OTHER,
}

export const enum DocumentTypeEnum {
    BIBLIOGRAPHIC_RECORD_ONLY,
    WITH_ABSTRACT_ONLY,
    WITH_FULL_TEXT,
}

export const enum DocumentationTypeEnum {
    PUBLICATION_FOR_CITATION,
    PUBLICATION,
    MANUAL,
    ON_LINE_HELP_URL,
    ISSUE_TRACKER,
    SAMPLES_LOCATION,
    TRAINING_RESOURCE,
    DEMO_RESOURCE,
    OTHER,
}

export const enum EncodingLevelEnum {
    PHONETICS,
    PHONOLOGY,
    SEMANTICS,
    MORPHOLOGY,
    SYNTAX,
    PRAGMATICS,
    OTHER,
}

export const enum EvaluationCriterionEnum {
    EXTRINSIC,
    INTRINSIC,
}

export const enum EvaluationLevelEnum {
    TECHNOLOGICAL,
    USAGE,
    IMPACT,
    DIAGNOSTIC,
}

export const enum EvaluationMeasureEnum {
    HUMAN,
    AUTOMATIC,
}

export const enum EvaluationTypeEnum {
    GLASS_BOX,
    BLACK_BOX,
}

export const enum FrameworkEnum {
    UIMA,
    GATE,
    ALVIS_NLP,
    GALAXY,
    OTHER,
}

export const enum FundingTypeEnum {
    OTHER,
    OWN_FUNDS,
    NATIONAL_FUNDS,
    EU_FUNDS,
}

export const enum GrammaticalPhenomenaCoverageEnum {
    CLAUSE_STRUCTURE,
    PP_ATTACHMENT,
    NP_STRUCTURE,
    COORDINATION,
    ANAPHORA,
    OTHER,
}

export const enum JournalIdentifierSchemeNameEnum {
    DOI,
    HANDLE,
    ISSN,
    OTHER,
}

export const enum LanguageDescriptionTypeEnum {
    ML_MODEL,
    GRAMMAR,
    OTHER,
}

export const enum LanguageVarietyTypeEnum {
    DIALECT,
    JARGON,
    OTHER,
}

export const enum LexicalConceptualResourceTypeEnum {
    WORD_LIST,
    COMPUTATIONAL_LEXICON,
    ONTOLOGY,
    WORDNET,
    THESAURUS,
    FRAMENET,
    TERMINOLOGICAL_RESOURCE,
    MACHINE_READABLE_DICTIONARY,
    LEXICON,
    TYPESYSTEM,
    TAGSET,
    ANNOTATION_SCHEME,
    MAPPING_OF_RESOURCES,
    OTHER,
}

export const enum LicenceEnum {
    CC_BY_4_0,
    CC_BY_NC_4_0,
    CC_BY_NC_ND_4_0,
    CC_BY_NC_SA_4_0,
    CC_BY_ND_4_0,
    CC_BY_SA_4_0,
    CC0_1_0,
    CC_BY_3_0,
    CC_BY_NC_3_0,
    CC_BY_NC_ND_3_0,
    CC_BY_NC_SA_3_0,
    CC_BY_ND_3_0,
    CC_BY_SA_3_0,
    PDDL,
    ODC_BY_1_0,
    ODBL_1_0,
    AGPL_1_0,
    APACHE_2_0,
    BSD_4_CLAUSE,
    BSD_3_CLAUSE,
    BSD_2_CLAUSE,
    GFDL_1_3,
    GPL_3_0,
    LGPL_3_0,
    MIT,
    PRINCETON_WORD_NET,
    EPL_1_0,
    NLM,
    F_DPPL_3_0,
    M_DPPL_3_0,
    PROPRIETARY,
    UNDER_NEGOTIATION,
    NOT_AVAILABLE,
    NON_STANDARD_LICENCE_TERMS,
}

export const enum LingualityTypeEnum {
    MONOLINGUAL,
    BILINGUAL,
    MULTILINGUAL,
}

export const enum MediaTypeEnum {
    TEXT,
    AUDIO,
    VIDEO,
    IMAGE,
    TEXT_NUMERICAL,
}

export const enum MetadataIdentifierSchemeNameEnum {
    HANDLE,
    PURL,
    URL,
    URN,
    OMTD,
    OPEN_AIRE,
    CORE,
    OTHER,
}

export const enum MetricEnum {
    MAD,
    MTDV,
    MTSA,
    ART,
    MTBF,
    MTTR,
    OTHER,
}

export const enum MimeTypeEnum {
    TEXT_PLAIN,
    APPLICATION_VND_XMI_XML,
    TEXT_XML,
    APPLICATION_XML,
    APPLICATION_X_XCES_XML,
    APPLICATION_TEI_XML,
    APPLICATION_RDF_XML,
    APPLICATION_XHTML_XML,
    APPLICATION_EMMA_XML,
    APPLICATION_PLS_XML,
    APPLICATION_POSTSCRIPT,
    TEXT_SGML,
    TEXT_HTML,
    APPLICATION_X_TEX,
    APPLICATION_RTF,
    APPLICATION_JSON_LD,
    APPLICATION_X_LATEX,
    TEXT_CSV,
    TEXT_TAB_SEPARATED_VALUES,
    APPLICATION_PDF,
    APPLICATION_X_MSACCESS,
    APPLICATION_MSWORD,
    APPLICATION_VND_MS_EXCEL,
    TEXT_TURTLE,
    TEXT_RTF,
    TEXT_TCF_XML,
    OTHER,
}

export const enum ModalityTypeEnum {
    BODY_GESTURE,
    FACIAL_EXPRESSION,
    VOICE,
    COMBINATION_OF_MODALITIES,
    SIGN_LANGUAGE,
    SPOKEN_LANGUAGE,
    WRITTEN_LANGUAGE,
    OTHER,
}

export const enum MultilingualityTypeEnum {
    PARALLEL,
    COMPARABLE,
    MULTILINGUAL_SINGLE_TEXT,
    ORIGINAL_TRANSLATIONS_IN_SAME_TEXT,
    OTHER,
}

export const enum NameTypeEnum {
    SHORT_NAME,
    ALTERNATIVE_NAME,
    TRANSLATED_NAME,
}

export const enum OperatingSystemEnum {
    OS_INDEPENDENT,
    WINDOWS,
    LINUX,
    UNIX,
    MAC_OS,
    GOOGLE_CHROME_OS,
    I_OS,
    ANDROID,
    OTHER,
}

export const enum OperationType {
    ACCESS_COMPONENT,
    READER,
    WRITER,
    SUPPORT_COMPONENT,
    VISUALISER,
    DEBUGGER,
    VALIDATOR,
    VIEWER,
    CORPUS_VIEWER,
    LEXICON_VIEWER,
    EDITOR,
    ML_TRAINER,
    ML_PREDICTOR,
    FEATURE_EXTRACTOR,
    DATA_SPLITTER,
    DATA_MERGER,
    CONVERTER,
    DEPENDENCY_CONVERTER,
    DEPENDENCY_PARSER,
    CONSTITUENCY_PARSER,
    EVALUATOR,
    FLOW_CONTROLLER,
    SCRIPT_BASED_ANALYSER,
    MATCHER,
    GAZETEER_BASED_MATCHER,
    CROWD_SOURCING_COMPONENT,
    DATA_COLLECTOR,
    CRAWLER,
    PROCESSOR,
    ANNOTATOR,
    SEGMENTER,
    STEMMER,
    LEMMATIZER,
    MORPHOLOGICAL_TAGGER,
    CHUNKER,
    PARSER,
    COREFERENCE_ANNOTATOR,
    NAMED_ENTITY_RECOGNIZER,
    SEMANTICS_ANNOTATOR,
    SRL_ANNOTATOR,
    READABILITY_ANNOTATOR,
    ALIGNER,
    GENERATOR,
    SUMMARIZER,
    SIMPLIFIER,
    PRE_OR_POST_PROCESSING_COMPONENT,
    SPELLING_CHECKER,
    GRAMMAR_CHECKER,
    NORMALIZER,
    FILTERS,
    ANALYZER,
    TOPIC_EXTRACTOR,
    DOCUMENT_CLASSIFIER,
    LANGUAGE_IDENTIFIER,
    SENTIMENT_ANALYZER,
    EMOTION_RECOGNIZER,
    KEYWORDS_EXTRACTOR,
    TERM_EXTRACTOR,
    CONTRADICTION_DETECTOR,
    EVENT_EXTRACTOR,
    PERSUASIVE_EXPRESSION_MINER,
    INFORMATION_EXTRACTOR,
    LEXICON_EXTRACTOR_FROM_CORPORA,
    LEXICON_EXTRACTOR_FROM_LEXICA,
    WORD_SENSE_DISAMBIGUATOR,
    OTHER,
}

export const enum OrganizationIdentifierSchemeNameEnum {
    ISNI,
    GRID,
    FUND_REF,
    OTHER,
}

export const enum OriginalDataProviderTypeEnum {
    REPOSITORY,
    JOURNAL,
    PUBLISHER,
}

export const enum ParameterTypeEnum {
    DATA,
    STRING,
    INTEGER,
    BOOLEAN,
    FLOAT,
    OTHER,
    URL,
    DOCUMENT,
    CORPORA,
    COMPONENT,
}

export const enum PersonIdentifierSchemeNameEnum {
    ORCID,
    ISNI,
    RESEARCHER_ID,
    SCOPUS_ID,
    OTHER,
}

export const enum PreviousAnnotationTypesPolicyEnum {
    KEEP,
    MODIFY,
    DROP,
}

export const enum ProcessMode {
    MANUAL,
    AUTOMATIC,
    MIXED,
    INTERACTIVE,
}

export const enum ProcessingResourceTypeEnum {
    CORPUS,
    DOCUMENT,
    USER_INPUT_TEXT,
    LEXICAL_CONCEPTUAL_RESOURCE,
    LANGUAGE_DESCRIPTION,
}

export const enum PublicationIdentifierSchemeNameEnum {
    DOI,
    HANDLE,
    ARK,
    AR_XIV,
    BIBCODE,
    EAN_13,
    EISSN,
    ISBN,
    ISSN,
    ISTC,
    LISSN,
    LSID,
    PURL,
    UPC,
    URL,
    URN,
    OAI,
    PMCID,
    PMID,
    OPEN_AIRE,
    CORE,
    OTHER,
}

export const enum PublicationTypeEnum {
    JOURNAL_ARTICLE,
    BACHELOR_THESIS,
    MASTER_THESIS,
    DOCTORAL_THESIS,
    BOOK,
    BOOK_PART,
    REVIEW,
    CONFERENCE_OBJECT,
    LECTURE,
    WORKING_PAPER,
    PRE_PRINT,
    REPORT,
    ANNOTATION,
    CONTRIBUTION_TO_JOURNAL,
    PATENT,
    CONFERENCE_PAPER,
    CONFERENCE_POSTER,
    TECHNICAL_DOCUMENTATION,
    TECHNICAL_REPORT,
    BIBLIOGRAPHY,
    CONFERENCE_PROCEEDINGS,
    CONFERENCE_PAPER_NOT_IN_PROCEEDINGS,
    CONFERENCE_POSTER_NOT_IN_PROCEEDINGS,
    PERIODICAL,
    JOURNAL,
    REVIEW_ARTICLE,
    RESEARCH_ARTICLE,
    EDITORIAL,
    DATA_PAPER,
    LETTER_TO_THE_EDITOR,
    REPORT_PART,
    RESEARCH_PROPOSAL,
    INTERNAL_REPORT,
    MEMORANDUM,
    OTHER_TYPE_OF_REPORT,
    POLICY_REPORT,
    PROJECT_DELIVERABLE,
    REPORT_TO_FUNDING_AGENCY,
    RESEARCH_REPORT,
    BOOK_REVIEW,
    THESIS,
    OTHER,
}

export const enum RegionIdType {
    AA,
    AC,
    AD,
    AE,
    AF,
    AG,
    AI,
    AL,
    AM,
    AO,
    AQ,
    AR,
    AS,
    AT,
    AU,
    AW,
    AX,
    AZ,
    BA,
    BB,
    BD,
    BE,
    BF,
    BG,
    BH,
    BI,
    BJ,
    BL,
    BM,
    BN,
    BO,
    BQ,
    BR,
    BS,
    BT,
    BV,
    BW,
    BY,
    BZ,
    CA,
    CC,
    CD,
    CF,
    CG,
    CH,
    CI,
    CK,
    CL,
    CM,
    CN,
    CO,
    CP,
    CR,
    CU,
    CV,
    CW,
    CX,
    CY,
    CZ,
    DE,
    DG,
    DJ,
    DK,
    DM,
    DO,
    DZ,
    EA,
    EC,
    EE,
    EG,
    EH,
    ER,
    ES,
    ET,
    EU,
    FI,
    FJ,
    FK,
    FM,
    FO,
    FR,
    GA,
    GB,
    GD,
    GE,
    GF,
    GG,
    GH,
    GI,
    GL,
    GM,
    GN,
    GP,
    GQ,
    GR,
    GS,
    GT,
    GU,
    GW,
    GY,
    HK,
    HM,
    HN,
    HR,
    HT,
    HU,
    IC,
    ID,
    IE,
    IL,
    IM,
    IN,
    IO,
    IQ,
    IR,
    IS,
    IT,
    JE,
    JM,
    JO,
    JP,
    KE,
    KG,
    KH,
    KI,
    KM,
    KN,
    KP,
    KR,
    KW,
    KY,
    KZ,
    LA,
    LB,
    LC,
    LI,
    LK,
    LR,
    LS,
    LT,
    LU,
    LV,
    LY,
    MA,
    MC,
    MD,
    ME,
    MF,
    MG,
    MH,
    MK,
    ML,
    MM,
    MN,
    MO,
    MP,
    MQ,
    MR,
    MS,
    MT,
    MU,
    MV,
    MW,
    MX,
    MY,
    MZ,
    NA,
    NC,
    NE,
    NF,
    NG,
    NI,
    NL,
    NO,
    NP,
    NR,
    NU,
    NZ,
    OM,
    PA,
    PE,
    PF,
    PG,
    PH,
    PK,
    PL,
    PM,
    PN,
    PR,
    PS,
    PT,
    PW,
    PY,
    QA,
    QM__QZ,
    RE,
    RO,
    RS,
    RU,
    RW,
    SA,
    SB,
    SC,
    SD,
    SE,
    SG,
    SH,
    SI,
    SJ,
    SK,
    SL,
    SM,
    SN,
    SO,
    SR,
    SS,
    ST,
    SV,
    SX,
    SY,
    SZ,
    TA,
    TC,
    TD,
    TF,
    TG,
    TH,
    TJ,
    TK,
    TL,
    TM,
    TN,
    TO,
    TR,
    TT,
    TV,
    TW,
    TZ,
    UA,
    UG,
    UM,
    US,
    UY,
    UZ,
    VA,
    VC,
    VE,
    VG,
    VI,
    VN,
    VU,
    WF,
    WS,
    XA__XZ,
    YE,
    YT,
    ZA,
    ZM,
    ZW,
    ZZ,
    V001,
    V002,
    V003,
    V005,
    V009,
    V011,
    V013,
    V014,
    V015,
    V017,
    V018,
    V019,
    V021,
    V029,
    V030,
    V034,
    V035,
    V039,
    V053,
    V054,
    V057,
    V061,
    V142,
    V143,
    V145,
    V150,
    V151,
    V154,
    V155,
    V419,
}

export const enum RelatedLexiconTypeEnum {
    INCLUDED,
    ATTACHED,
    COMPATIBLE,
    NONE,
}

export const enum RelationTypeEnum {
    IS_PART_OF,
    IS_PART_WITH,
    HAS_PART,
    HAS_OUTCOME,
    IS_COMBINED_WITH,
    REQUIRES_LR,
    REQUIRES_SOFTWARE,
    IS_EXACT_MATCH,
    IS_SIMILAR_TO,
    IS_CONTINUATION_OF,
    IS_VERSION_OF,
    REPLACES,
    IS_REPLACED_WITH,
    IS_CREATED_BY,
    IS_ELICITED_BY,
    IS_RECORDED_BY,
    IS_EDITED_BY,
    IS_ANALYSED_BY,
    IS_EVALUATED_BY,
    IS_QUERIED_BY,
    IS_ACCESSED_BY,
    IS_ARCHIVED_BY,
    IS_DISPLAYED_BY,
    IS_COMPATIBLE_WITH,
    IS_ANNOTATED_VERSION_OF,
    HAS_ANNOTATED_VERSION,
}

export const enum RepositoryIdentifierSchemeNameEnum {
    DOI,
    HANDLE,
    URL,
    OAI,
    OPEN_DOAR,
    RE_3_DATA,
    ROAR,
    OTHER,
}

export const enum ResourceIdentifierSchemeNameEnum {
    DOI,
    ISLRN,
    HANDLE,
    ARK,
    AR_XIV,
    BIBCODE,
    EAN_13,
    EISSN,
    ISBN,
    ISSN,
    ISTC,
    LISSN,
    LSID,
    PURL,
    UPC,
    URL,
    URN,
    OAI,
    PMCID,
    PMID,
    MAVEN,
    DOCKER,
    OMTD_DOCKER,
    OMTD,
    OTHER,
}

export const enum ResourceTypeEnum {
    COMPONENT,
}

export const enum RightsStatementEnum {
    OPEN_ACCESS,
    RESTRICTED_ACCESS,
}

export const enum SchemeNameEnum {
    JATS,
    TEI_P_5,
    OTHER,
}

export const enum ScriptIdType {
    AFAK,
    AGHB,
    AHOM,
    ARAB,
    ARMI,
    ARMN,
    AVST,
    BALI,
    BAMU,
    BASS,
    BATK,
    BENG,
    BLIS,
    BOPO,
    BRAH,
    BRAI,
    BUGI,
    BUHD,
    CAKM,
    CANS,
    CARI,
    CHAM,
    CHER,
    CIRT,
    COPT,
    CPRT,
    CYRL,
    CYRS,
    DEVA,
    DSRT,
    DUPL,
    EGYD,
    EGYH,
    EGYP,
    ELBA,
    ETHI,
    GEOK,
    GEOR,
    GLAG,
    GOTH,
    GRAN,
    GREK,
    GUJR,
    GURU,
    HANG,
    HANI,
    HANO,
    HANS,
    HANT,
    HATR,
    HEBR,
    HIRA,
    HLUW,
    HMNG,
    HRKT,
    HUNG,
    INDS,
    ITAL,
    JAVA,
    JPAN,
    JURC,
    KALI,
    KANA,
    KHAR,
    KHMR,
    KHOJ,
    KNDA,
    KORE,
    KPEL,
    KTHI,
    LANA,
    LAOO,
    LATF,
    LATG,
    LATN,
    LEPC,
    LIMB,
    LINA,
    LINB,
    LISU,
    LOMA,
    LYCI,
    LYDI,
    MAHJ,
    MAND,
    MANI,
    MAYA,
    MEND,
    MERC,
    MERO,
    MLYM,
    MODI,
    MONG,
    MOON,
    MROO,
    MTEI,
    MULT,
    MYMR,
    NARB,
    NBAT,
    NKGB,
    NKOO,
    NSHU,
    OGAM,
    OLCK,
    ORKH,
    ORYA,
    OSMA,
    PALM,
    PAUC,
    PERM,
    PHAG,
    PHLI,
    PHLP,
    PHLV,
    PHNX,
    PLRD,
    PRTI,
    QAAA__QABX,
    RJNG,
    RORO,
    RUNR,
    SAMR,
    SARA,
    SARB,
    SAUR,
    SGNW,
    SHAW,
    SHRD,
    SIDD,
    SIND,
    SINH,
    SORA,
    SUND,
    SYLO,
    SYRC,
    SYRE,
    SYRJ,
    SYRN,
    TAGB,
    TAKR,
    TALE,
    TALU,
    TAML,
    TANG,
    TAVT,
    TELU,
    TENG,
    TFNG,
    TGLG,
    THAA,
    THAI,
    TIBT,
    TIRH,
    UGAR,
    VAII,
    VISP,
    WARA,
    WOLE,
    XPEO,
    XSUX,
    YIII,
    ZINH,
    ZMTH,
    ZSYM,
    ZXXX,
    ZYYY,
    ZZZZ,
}

export const enum SexEnum {
    MALE,
    FEMALE,
    UNKNOWN,
}

export const enum SizeUnitEnum {
    TERMS,
    ENTRIES,
    ARTICLES,
    FILES,
    ITEMS,
    ELEMENTS,
    UNITS,
    TEXTS,
    SENTENCES,
    BYTES,
    TOKENS,
    WORDS,
    KEYWORDS,
    IDIOMATIC_EXPRESSIONS,
    TRIPLES,
    NEOLOGISMS,
    MULTI_WORD_UNITS,
    EXPRESSIONS,
    SYNSETS,
    CLASSES,
    CONCEPTS,
    LEXICAL_TYPES,
    PHONETIC_UNITS,
    MORPHOLOGICAL_UNITS,
    SYNTACTIC_UNITS,
    SEMANTIC_UNITS,
    PREDICATES,
    FRAMES,
    KB,
    MB,
    GB,
    TB,
    UNIGRAMS,
    BIGRAMS,
    TRIGRAMS,
    V4_GRAMS,
    V5_GRAMS,
    RULES,
    OTHER,
}

export const enum TDMMethodType {
    RULE_BASED,
    MACHINE_LEARNING,
    STATISTICAL_LEARNING,
    MACHINE_AND_STATISTICAL_LEARNING,
    REGRESSION_ANALYSIS,
    REGULARISATION,
    INSTANCE_BASED_LEARNING,
    DECISION_TREES,
    BAYESIAN,
    KERNEL_METHOD,
    CLUSTERING_METHOD,
    ASSOCIATION_RULE_LEARNING,
    ARTIFICIAL_NEURAL_NETWORK,
    DEEP_LEARNING,
    ENSEMBLE_METHOD,
    DIMENSIONALITY_REDUCTION,
}

export const enum TaskEnum {
    ANAPHORA_RESOLUTION,
    CHUNKING,
    PARSING,
    NP_RECOGNITION,
    TITLES_PARSING,
    DEFINITIONS_PARSING,
    ANALYSIS,
    GENERATION,
    OTHER,
}

export const enum TitleTypeEnum {
    ALTERNATIVE_TITLE,
    SUBTITLE,
    TRANSLATED_TITLE,
    OTHER,
}

export const enum UserTypeEnum {
    ACADEMIC,
    COMMERCIAL,
    MEMBERS_OF_GROUP,
}

export const enum ValidationExtentEnum {
    FULL,
    PARTIAL,
}

export const enum ValidationTypeEnum {
    FORMAL,
    CONTENT,
}

export const enum VariantIdType {
    V1606NICT,
    ALALC_97,
    FONIPA,
    FONUPA,
    FONXSAMP,
    V1694ACAD,
    V1901,
    V1959ACAD,
    V1994,
    V1996,
    ALUKU,
    AREVELA,
    AREVMDA,
    BAKU_1926,
    BALANKA,
    BARLA,
    BAUDDHA,
    BISCAYAN,
    BISKE,
    BOHORIC,
    BOONT,
    DAJNKO,
    EKAVSK,
    EMODENG,
    HEPBURN,
    HOGNORSK,
    IJEKAVSK,
    ITIHASA,
    JAUER,
    JYUTPING,
    KKCOR,
    KSCOR,
    LAUKIKA,
    LIPAW,
    LUNA_1918,
    METELKO,
    MONOTON,
    NDYUKA,
    NEDIS,
    NJIVA,
    NULIK,
    OSOJS,
    PAMAKA,
    PETR_1708,
    PINYIN,
    POLYTON,
    PUTER,
    RIGIK,
    ROZAJ,
    RUMGR,
    SCOTLAND,
    SCOUSE,
    SOLBA,
    SOTAV,
    SURMIRAN,
    SURSILV,
    SUTSILV,
    TARASK,
    UCCOR,
    UCRCOR,
    ULSTER,
    UNIFON,
    VAIDIKA,
    VALENCIA,
    VALLADER,
    WADEGILE,
}

export const enum VersionTypeEnum {
    ACCEPTED,
    PUBLISHED,
    DRAFT,
    SUBMITTED,
    UPDATED,
}

export const enum WebServiceTypeEnum {
    REST,
    SOAP,
    OTHER,
}
