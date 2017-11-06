
/**
 * Generated at 30/May/2017
 */

export class Description {
    desc : string;
    label : string;
    mandatory? : boolean;
    recommended? : boolean;
};
export var sizePerValidationDesc = {
    desc : "Specifies the size of the validated part of a resource",
    label : "Size per validation",
    mandatory : false,
    recommended : false
};

export var monthDesc = {
    desc : "Optional month; to be used in two-digit format",
    label : "Month",
    mandatory : false,
    recommended : false
};

export var requiresSoftwareDesc = {
    desc : "Additional software required for running a s/w component and/or computational grammar",
    label : "Requires software",
    mandatory : false,
    recommended : false
};

export var dataFormatDesc = {
    desc : "Specifies the format that is used since often the mime type will not be sufficient for machine processing; NOTE: normally the format should be represented as a combination of the mimetype (e.g. application/xml) and some name and link to the documentation about the supplementary conventions used (e.g xces, alvisED etc.)",
    label : "Plain text",
    mandatory : true,
    recommended : false
};

export var groupInfoTypeDesc = {
    desc : "Base type for groups; group name and affiliations",
    label : "Group name",
    mandatory : true,
    recommended : true
};

export var homepageDesc = {
    desc : "A URL used as homepage of a person, group or organization",
    label : "Homepage",
    mandatory : false,
    recommended : false
};

export var outputResourceInfoDesc = {
    desc : "Groups together information on the output of a component",
    label : "Information on output",
    mandatory : false,
    recommended : false
};

export var processModeDesc = {
    desc : "Base type for all modes of processing (e.g. annotation, conversion, creation etc.)",
    label : "Manual",
    mandatory : true,
    recommended : false
};

export var hasOriginalSourceDesc = {
    desc : "The identifier of the original resources that were at the base of the creation process of the resource",
    label : "Has original source",
    mandatory : true,
    recommended : false
};

export var characterEncodingDesc = {
    desc : "The name of the character encoding used in the resource or supported by the component",
    label : "Character encoding set",
    mandatory : true,
    recommended : false
};

export var languageDescriptionOperationInfoDesc = {
    desc : "Groups together information on the operation requirements of the Language Descriptions",
    label : "Language description operation",
    mandatory : true,
    recommended : false
};

export var fundingCountryDesc = {
    desc : "The name of the funding country, in case of national funding as mentioned in ISO3166",
    label : "Funding country",
    mandatory : false,
    recommended : true
};

export var languageIdTypeDesc = {
    desc : "Base type for languages according to ISO 639; the codes are taken from ISO 639-1 and, if not covered, from ISO 639-3, according to the BCP-47 guidlelines",
    label : "languageIdType",
    mandatory : true,
    recommended : false
};

export var resourceIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for resources (corpora, lexical/conceptual resources etc.)",
    label : "Resource identifier scheme name",
    mandatory : true,
    recommended : false
};

export var validationTypeDesc = {
    desc : "Specifies the type of the validation that have been performed ",
    label : "Validation type",
    mandatory : false,
    recommended : false
};

export var variantIdTypeDesc = {
    desc : "Base type for language variants according to the BCP-47 guidlelines",
    label : "variantIdType",
    mandatory : true,
    recommended : false
};

export var givenNameDesc = {
    desc : "The given name (first name) of a person; initials can also be used",
    label : "Given name",
    mandatory : false,
    recommended : true
};

export var affiliationDesc = {
    desc : "Groups information on the organization to whom a person is affiliated",
    label : "Affiliation",
    mandatory : false,
    recommended : true
};

export var compatibleLexiconTypeDesc = {
    desc : "Type of (external) lexicon that can be used with the grammar",
    label : "Compatible lexicon type",
    mandatory : false,
    recommended : false
};

export var multiValueDesc = {
    desc : "Specifies whether the parameter takes a list of values; the default value is set to false",
    label : "Multi-value",
    mandatory : true,
    recommended : false
};

export var resourceNameDesc = {
    desc : "Specifies the name (full title) by which the resource is known",
    label : "Name",
    mandatory : true,
    recommended : false
};

export var fundingTypeDesc = {
    desc : "Specifies the type of funding of the project",
    label : "Funding type",
    mandatory : false,
    recommended : false
};

export var versionDesc = {
    desc : "Associates a resource with a numeric pattern of the form major_version.minor_version.patch (in accordance to the semantic versioning guidelines, cf. http://semver.org) that identifies its version",
    label : "Version",
    mandatory : true,
    recommended : false
};

export var intendedApplicationDesc = {
    desc : "Specifies an application where the resource can be used or is recommended to be used",
    label : "intendedApplication",
    mandatory : false,
    recommended : false
};

export var lexicalConceptualResourceTypeDesc = {
    desc : "Specifies the subtype of lexicalConceptualResource",
    label : "Lexical conceptual resource type",
    mandatory : true,
    recommended : false
};

export var publicDesc = {
    desc : "Declares whether the resource is meant for private use or can be publicly available through the registry",
    label : "Public",
    mandatory : true,
    recommended : false
};

export var isValidatedByDesc = {
    desc : "Links a resource to the identifier of the software component that has been used for its validation",
    label : "Is validated by",
    mandatory : false,
    recommended : false
};

export var contactPersonDesc = {
    desc : "Groups information on the person(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact person",
    mandatory : true,
    recommended : false
};

export var runningTimeDesc = {
    desc : "Gives information on the running time of a component",
    label : "Running time",
    mandatory : false,
    recommended : false
};

export var licenceDesc = {
    desc : "The licence of use for the resource",
    label : "Licence",
    mandatory : true,
    recommended : false
};

export var addressDesc = {
    desc : "The street and the number of the postal address of a person or organization",
    label : "Address",
    mandatory : false,
    recommended : false
};

export var evaluationMeasureDesc = {
    desc : "Defines whether the evaluation measure is human or automatic",
    label : "Evaluation measure",
    mandatory : false,
    recommended : false
};

export var publisherDesc = {
    desc : "Information about the publisher",
    label : "Publisher",
    mandatory : true,
    recommended : false
};

export var conditionOfUseDesc = {
    desc : "Specifies the conditions and terms of use imposed by the licence. It is an optional element and only to be taken as providing brief human readable information on the fact that the LR is provided under a specific set of conditions. These correspond to the most frequently used conditions imposed by the licensor of the LR (via the specified licence). The proper exposition of all conditions and possible exceptions is to be found inside the licence text. LR depositors should, hence, carefully choose the values of this field to match the licence chosen and users should carefully read that licence before using the LR.",
    label : "Condition of use",
    mandatory : false,
    recommended : false
};

export var usageReportDesc = {
    desc : "Reports on the research papers documenting the usage of a resource, either in a structured form or in free text",
    label : "Usage report",
    mandatory : false,
    recommended : false
};

export var repositoryInfoTypeDesc = {
    desc : "Base type for repositories",
    label : "Repository name",
    mandatory : true,
    recommended : false
};

export var annotatedCorpusInfoTypeDesc = {
    desc : "Groups together all information related to annotated corpora",
    label : "Media type parts of corpus",
    mandatory : true,
    recommended : true
};

export var funderDesc = {
    desc : "Funder of the project (e.g. EC for European Commission); preferred format is the registration through fundref",
    label : "Funder",
    mandatory : true,
    recommended : true
};

export var annotationResourceDesc = {
    desc : "A name or an identifier (e.g. url reference) to the ancillary resource (e.g. tagset, ontology, term list) used in the annotation of the resource or used by the component",
    label : "Annotation resource",
    mandatory : true,
    recommended : false
};

export var evaluationTypeDesc = {
    desc : "Indicates the evaluation type",
    label : "Evaluation type",
    mandatory : false,
    recommended : false
};

export var validationModeDetailsDesc = {
    desc : "Textual field for additional information on validation",
    label : "Validation mode details",
    mandatory : false,
    recommended : false
};

export var metadataRecordIdentifierDesc = {
    desc : "A persistent identifier for the metadata record itself",
    label : "Metadata record identifier",
    mandatory : true,
    recommended : false
};

export var originalDataProviderTypeDesc = {
    desc : "Refers to the type of the original data provider (repository/journal/publisher/aggregator etc.)",
    label : "Original data provider type",
    mandatory : false,
    recommended : false
};

export var feeDesc = {
    desc : "Specifies the costs that are required to access the resource, a fragment of the resource or to use a component",
    label : "Fee",
    mandatory : true,
    recommended : false
};

export var languageDescriptionEncodingInfoDesc = {
    desc : "Groups together information on the contents of the LanguageDescriptions",
    label : "Language description encoding",
    mandatory : true,
    recommended : false
};

export var applicationFunctionDesc = {
    desc : "Specifies the type of an end-user application, in terms of the function/task it performs",
    label : "Type of application",
    mandatory : true,
    recommended : false
};

export var parameterNameDesc = {
    desc : "A name used to identify the parameter",
    label : "Parameter name",
    mandatory : true,
    recommended : false
};

export var organizationIdentifierTypeDesc = {
    desc : "Base type for identifiers for organizations",
    label : "Organization identifier scheme name",
    mandatory : true,
    recommended : false
};

export var parameterTypeDesc = {
    desc : "Classifies the parameter according to a specific (not yet standardised) typing system (e.g. whether it's boolean, string, integer, a document, mapping etc.)",
    label : "Parameter type",
    mandatory : true,
    recommended : false
};

export var relationInfoDesc = {
    desc : "Groups together information on relations between resources",
    label : "Annotations",
    mandatory : true,
    recommended : false
};

export var nonStandardLicenceNameDesc = {
    desc : "The name with which a licence is known; to be used for licences not included in the pre-defined list of licences",
    label : "Name",
    mandatory : true,
    recommended : false
};

export var timeCoverageDesc = {
    desc : "The time period that the content of a resource is about",
    label : "Time coverage",
    mandatory : true,
    recommended : false
};

export var runningEnvironmentDetailsDesc = {
    desc : "Provides further information on the running environment",
    label : "Running environment details",
    mandatory : false,
    recommended : false
};

export var validationExtentDetailsDesc = {
    desc : "Provides information on size or other details of partially validated data; to be used if only part of the resource has been validated and as an alternative to SizeInfo if the validated part cannot be counted otherwise",
    label : "Validation extent details",
    mandatory : false,
    recommended : false
};

export var resourceShortNameDesc = {
    desc : "A short form (e.g. abbreviation, acronym etc.) used to identify the resource.",
    label : "Short Name",
    mandatory : false,
    recommended : true
};

export var tagDesc = {
    desc : "The tag of current code. By default, it's set to HEAD during development.",
    label : "tag",
    mandatory : false,
    recommended : false
};

export var validatedDesc = {
    desc : "Specifies the validation status of the resource",
    label : "Validated",
    mandatory : true,
    recommended : false
};

export var fundingProjectDesc = {
    desc : "Groups information on the project that has funded the resource; choice between the ID of a project or a project title",
    label : "Funding project",
    mandatory : false,
    recommended : false
};

export var mediaTypeDesc = {
    desc : "Specifies the media type of the resource and basically corresponds to the physical medium of the content representation. Each media type is described through a distinctive set of features. A resource may consist of parts attributed to different types of media. A tool/service may take as input/output more than one different media types.",
    label : "Media type",
    mandatory : true,
    recommended : false
};

export var nonStandardLicenceTermsURLDesc = {
    desc : "Used to provide a hyperlink to a URL containing the text of a licence not included in the predefined list or describing the terms of use for a language resource or terms of service for web services",
    label : "URL",
    mandatory : true,
    recommended : false
};

export var languageDescriptionInfoDesc = {
    desc : "Groups together all information related to language descriptions",
    label : "Language description",
    mandatory : true,
    recommended : false
};

export var webServiceTypeDesc = {
    desc : "A classification of web services based on the protocol used for accessing them",
    label : "web service type",
    mandatory : false,
    recommended : false
};

export var characterEncodingInfoDesc = {
    desc : "Groups together information on character encoding of the resource",
    label : "Character encoding",
    mandatory : true,
    recommended : false
};

export var organizationAlternativeNameDesc = {
    desc : "An alternative name (e.g. abbreviation, acronym, translation etc.) used for an organization",
    label : "Organization alternative name",
    mandatory : false,
    recommended : true
};

export var otherArchiveDesc = {
    desc : "Alternative ULRs where the mailing list messages are archived (for mirrored mailing lists)",
    label : "Other archive",
    mandatory : true,
    recommended : false
};

export var descriptionDesc = {
    desc : "A short free-text account that provides information about the resource (e.g. function, contents, technical information etc.)",
    label : "Description",
    mandatory : true,
    recommended : false
};

export var mustBeCitedWithDesc = {
    desc : "Specifies one or more publication that must be used for citation purposes as requested by the resource provider (usually a scientific article that describes the resource)",
    label : "Publlication to be used for citation purposes",
    mandatory : false,
    recommended : true
};

export var annotationInfoDesc = {
    desc : "Groups information on the annotated part(s) of a resource",
    label : "Annotation",
    mandatory : true,
    recommended : false
};

export var variantDesc = {
    desc : "variant name used for the model",
    label : "variant",
    mandatory : false,
    recommended : false
};

export var attributionTextDesc = {
    desc : "The text that must be quoted for attribution purposes when using a resource - for cases where a resource is provided with a restriction on attribution; you can use a standard text such as \"Resource A by Resource Creator/Owner B used under licence C as accessed at D\"",
    label : "Attribution text",
    mandatory : true,
    recommended : false
};

export var runningEnvironmentInfoDesc = {
    desc : "Groups together information on the running environment of a tool or a language description",
    label : "Running environment",
    mandatory : true,
    recommended : false
};

export var dateDesc = {
    desc : "Basic format for dates, with optional day and month and obligatory year",
    label : "Date",
    mandatory : true,
    recommended : false
};

export var schemeURIDesc = {
    desc : "Specifies the URI of the scheme according to which the resource identifier is assigned by the authority that issues it",
    label : "URI for scheme",
    mandatory : true,
    recommended : false
};

export var personIdentifierTypeDesc = {
    desc : "Base type for identifiers for persons",
    label : "Person identifier scheme name",
    mandatory : true,
    recommended : false
};

export var modalityInfoDesc = {
    desc : "Groups information on the modalities represented in the resource",
    label : "Modality",
    mandatory : true,
    recommended : false
};

export var projectIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the project identifier is assigned by the authority that issues it",
    label : "Project identifier scheme name",
    mandatory : true,
    recommended : false
};

export var registerDesc = {
    desc : "For corpora that have already been using register classification",
    label : "Register",
    mandatory : true,
    recommended : false
};

export var relatedLexiconTypeDesc = {
    desc : "Indicates the position of the lexica that must or can be used with the grammar",
    label : "Related lexicon type",
    mandatory : true,
    recommended : false
};

export var corpusMediaPartsDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type parts of corpus",
    mandatory : true,
    recommended : true
};

export var sizePerLanguageDesc = {
    desc : "Provides information on the size per language component",
    label : "Size per language",
    mandatory : false,
    recommended : false
};

export var webpageDesc = {
    desc : "A URL used as webpage of a project",
    label : "Webpage",
    mandatory : false,
    recommended : true
};

export var contactGroupDesc = {
    desc : "Groups information on the group(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact group",
    mandatory : false,
    recommended : true
};

export var componentInfoDesc = {
    desc : "Groups together all information related to software components",
    label : "Component",
    mandatory : true,
    recommended : false
};

export var organizationInfoDesc = {
    desc : "Groups information on organizations related to the resource",
    label : "Organization",
    mandatory : true,
    recommended : false
};

export var sizeInfoDesc = {
    desc : "Groups information on the size of the resource or of resource parts",
    label : "Size",
    mandatory : true,
    recommended : false
};

export var departmentNameDesc = {
    desc : "The name of the department or unit (e.g. specific university faculty/department, department/unit of a research organization or private company etc.)",
    label : "Department name",
    mandatory : false,
    recommended : false
};

export var personInfoDesc = {
    desc : "Groups information relevant to persons related to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided",
    label : "Person",
    mandatory : true,
    recommended : false
};

export var nonStandaradLicenceTermsTextDesc = {
    desc : "Used for inputting the text of licences (that are not included in the pre-defined list) and terms of use or terms of service (for web services)",
    label : "Text (for non-standard licences / terms of use / terms of service)",
    mandatory : false,
    recommended : false
};

export var communicationInfoDesc = {
    desc : "Groups information on the communication details of a person or an organization",
    label : "Communication information",
    mandatory : true,
    recommended : false
};

export var geographicCoverageInfoDesc = {
    desc : "Groups information on geographic classification of the resource",
    label : "Geographic coverage",
    mandatory : true,
    recommended : false
};

export var userQueryDesc = {
    desc : "The query text that has created the corpus of scholarly publications",
    label : "User query",
    mandatory : false,
    recommended : true
};

export var relatedResourceTypeDesc = {
    desc : "Base type for related resources; sequence of resource names and identifiers",
    label : "relatedResourceType",
    mandatory : true,
    recommended : false
};

export var modalityTypeDesc = {
    desc : "Specifies the type of the modality represented in the resource or processed by a tool/service",
    label : "Modality type",
    mandatory : true,
    recommended : false
};

export var structuralEncodingInfoDesc = {
    desc : "Groups information on the encoding of the structure of the contents of the corpus",
    label : "Structural encoding",
    mandatory : true,
    recommended : false
};

export var zipCodeDesc = {
    desc : "The zip code of the postal address of a person or organization",
    label : "Zip code",
    mandatory : false,
    recommended : false
};

export var evaluationDetailsDesc = {
    desc : "Provides further information on the evaluation process of a component",
    label : "Evaluation details",
    mandatory : false,
    recommended : true
};

export var scriptIdDesc = {
    desc : "The identifier of the script subelement according to the IETF BCP47 guidelines (i.e. ISO 15924 codes)",
    label : "Script identifier",
    mandatory : false,
    recommended : false
};

export var inBookDesc = {
    desc : "The title or identifier of a book in which a publication appears (e.g. as a chapter, as article in a collection of articles, conference proceedings etc.)",
    label : "In book",
    mandatory : false,
    recommended : false
};

export var validationModeDesc = {
    desc : "Specifies the validation methodology applied",
    label : "Validation mode",
    mandatory : false,
    recommended : false
};

export var creationDateDesc = {
    desc : "The date of creation of the resource, expressed as a range between starting and end date or exact date",
    label : "Creation date",
    mandatory : false,
    recommended : false
};

export var dayDesc = {
    desc : "Optional day, always in two-digit format",
    label : "Day",
    mandatory : false,
    recommended : false
};

export var requiresLRsDesc = {
    desc : "If for running a s/w component and/or computational grammar, specific LRs (e.g. a grammar, a list of words etc.) are required",
    label : "Requires language resources",
    mandatory : false,
    recommended : false
};

export var languageVarietyInfoDesc = {
    desc : "Groups information on language varieties occurred in the resource (e.g. dialects)",
    label : "Language variety",
    mandatory : true,
    recommended : false
};

export var organizationNameDesc = {
    desc : "The full name of an organization",
    label : "Organization name",
    mandatory : true,
    recommended : false
};

export var nameDesc = {
    desc : "The full name of a person; the preferred format is \"family name, given name\"",
    label : "Name",
    mandatory : true,
    recommended : false
};

export var dateRangeDesc = {
    desc : "Basic format for date ranges, allowing combinations of years and full dates",
    label : "Date range",
    mandatory : true,
    recommended : false
};

export var domainDesc = {
    desc : "Specifies the application domain of the resource or the tool/service",
    label : "Domain",
    mandatory : true,
    recommended : false
};

export var seriesDesc = {
    desc : "The name of a series or set of books. When citing an entire book, the title field gives its title and an optional series field gives the name of a series or multi-volume set in which the book is published",
    label : "Series",
    mandatory : false,
    recommended : false
};

export var creationModeDesc = {
    desc : "Specifies whether the resource is created automatically or in a manual or interactive mode ",
    label : "Creation mode",
    mandatory : false,
    recommended : false
};

export var structuralEncodingDesc = {
    desc : "Information on whether the structure of the corpus documents is formally encoded and the scheme used for this",
    label : "Structural encoding",
    mandatory : true,
    recommended : false
};

export var publicationIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for publications",
    label : "Publication identifier scheme name",
    mandatory : true,
    recommended : false
};

export var languageVarietyNameDesc = {
    desc : "The name of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety name",
    mandatory : true,
    recommended : false
};

export var yearDesc = {
    desc : "for year; to be used with four digits always",
    label : "Year",
    mandatory : false,
    recommended : false
};

export var parameterInfoDesc = {
    desc : "Groups together information on each parameter of a component",
    label : "Parameter",
    mandatory : true,
    recommended : false
};

export var rawCorpusInfoTypeDesc = {
    desc : "Groups together all information related to raw corpora",
    label : "Media type component of corpus",
    mandatory : true,
    recommended : true
};

export var validationInfoDesc = {
    desc : "Groups information on validation of a resource; it can be repeated to allow for different validations (e.g. formal validation of the whole resource; content validation of one part of the resource etc.). ",
    label : "Validation",
    mandatory : true,
    recommended : false
};

export var metalanguageInfoDesc = {
    desc : "Groups information on the languages used for the description of the resource",
    label : "Metalanguage",
    mandatory : true,
    recommended : false
};

export var workflowDesc = {
    desc : "Indicates whether the component is a workflow, i.e. consists of other components in a linear or branching execution",
    label : "Workflow",
    mandatory : false,
    recommended : false
};

export var grammaticalPhenomenaCoverageDesc = {
    desc : "An indication of the grammatical phenomena covered by the grammar",
    label : "Grammatical phenomena coverage",
    mandatory : false,
    recommended : false
};

export var resourceDocumentationInfoDesc = {
    desc : "Groups together information on any document (publication, report, manual etc.) about the resource",
    label : "Documentation about the resource",
    mandatory : true,
    recommended : true
};

export var publicationIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Publication identifier",
    mandatory : true,
    recommended : false
};

export var documentUnstructuredDesc = {
    desc : "Used to encode a bibliographic record, preferrably in the form of a bibtex record or as a free text description",
    label : "Unstructured document",
    mandatory : true,
    recommended : false
};

export var classificationSchemeNameDesc = {
    desc : "Base type for listing recommended/popular classification schemes",
    label : "Dewey Decimal Classification",
    mandatory : true,
    recommended : false
};

export var textGenreDesc = {
    desc : "Genre: The conventionalized discourse or text types of the content of the resource, based on extra-linguistic and internal linguistic criteria",
    label : "Text genre",
    mandatory : true,
    recommended : false
};

export var publicationTypeDesc = {
    desc : "Specifies the type of the publication; the list takes values from the COAR Controlled Vocabulary for Resource Type Genres (restricted to concepts under \"text\" that can be used for publications)",
    label : "Publication type",
    mandatory : true,
    recommended : false
};

export var lexicalConceptualResourceMediaTypeDesc = {
    desc : "Restriction of mediaType for lexicalConceptualResources",
    label : "Media type component of lexical / conceptual resource",
    mandatory : true,
    recommended : false
};

export var languageDesc = {
    desc : "The language that is used in the resource or supported by the component, as specified in the BCP47 guidelines (https://tools.ietf.org/html/bcp47); the language tag is built upon (a) language tag according to ISO 639-1 and for languages not covered by this, the ISO 639-3; (b) the script tag according to ISO 15924; (c) the region tag according to ISO 3166-1;  (d) the variant subtag",
    label : "Language",
    mandatory : true,
    recommended : false
};

export var startDateDesc = {
    desc : "Basic format for start dates, with optional day and month and obligatory year",
    label : "Start date",
    mandatory : true,
    recommended : false
};

export var faxNumberDesc = {
    desc : "The fax number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Fax number",
    mandatory : false,
    recommended : false
};

export var dataFormatInfoDesc = {
    desc : "Groups the information for the data format; at least mimetype and, if required, a description and documentation url should be provided",
    label : "Data format information",
    mandatory : true,
    recommended : false
};

export var sizeDesc = {
    desc : "Specifies the size of the resource with regard to the SizeUnit measurement in form of a number",
    label : "Size",
    mandatory : true,
    recommended : false
};

export var cityDesc = {
    desc : "The name of the city, town or village as mentioned in the postal address of a person or organization",
    label : "City",
    mandatory : false,
    recommended : false
};

export var sizePerCharacterEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different character encoding",
    label : "Size per character encoding",
    mandatory : false,
    recommended : false
};

export var publicationDesc = {
    desc : "Groups information on a document in a structured format; it can be used both for published or unpublished documents",
    label : "Publication",
    mandatory : true,
    recommended : false
};

export var intraannotatorAgreementDesc = {
    desc : "Provides information on the intra-annotator agreement and the methods/metrics applied  ",
    label : "Intraannotator agreement",
    mandatory : false,
    recommended : false
};

export var systemDesc = {
    desc : "The name of the issue management system, e.g. Bugzilla",
    label : "system",
    mandatory : false,
    recommended : false
};

export var resourceIdentifierDesc = {
    desc : "Associates a resource to an identifier (e.g. PID, DOI, internal to an organization etc.), i.e. a string used to uniquely identify it",
    label : "Identifier",
    mandatory : false,
    recommended : false
};

export var relationTypeDesc = {
    desc : "Specifies the type of relation holding between two entities (e.g. two resources that comprise one new resource together, a corpus and the s/w component that has been used for its creation or a corpus and the publication that describes it",
    label : "Relation type",
    mandatory : true,
    recommended : false
};

export var myStringDesc = {
    desc : "Base type for multilingual elements",
    label : "myString",
    mandatory : true,
    recommended : false
};

export var encodingLevelDesc = {
    desc : "Information on the contents of the lexicalConceptualResource as regards the linguistic level of analysis",
    label : "Encoding level",
    mandatory : true,
    recommended : false
};

export var lastDateUpdatedDesc = {
    desc : "Date when the version of the resource being described was last updated",
    label : "Last date updated",
    mandatory : false,
    recommended : false
};

export var timeCoverageInfoDesc = {
    desc : "Groups together information on time classification of the resource",
    label : "Time coverage",
    mandatory : true,
    recommended : false
};

export var documentInfoTypeDesc = {
    desc : "Base type for documents (single files) mainly intended for publications",
    label : "Document type",
    mandatory : true,
    recommended : true
};

export var regionIdTypeDesc = {
    desc : "Base type for countries (regions) according to ISO 3166",
    label : "regionIdType",
    mandatory : true,
    recommended : false
};

export var unsubscribeDesc = {
    desc : "The email address to be used for unsubscribing from the mailing list",
    label : "Unsubscribe",
    mandatory : false,
    recommended : false
};

export var annotatedDocumentInfoTypeDesc = {
    desc : "Base type for annotated documents (single files); combination of raw publication (with link to it) and the annotated file",
    label : "annotatedDocumentInfoType",
    mandatory : true,
    recommended : false
};

export var theoreticModelDesc = {
    desc : "Name of the theoretic model applied for the creation or enrichment of the resource, and/or a reference (URL or bibliographic reference) to informative material about the theoretic model used",
    label : "Theoretic model",
    mandatory : true,
    recommended : false
};

export var projectIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for projects",
    label : "Project identifier scheme name",
    mandatory : true,
    recommended : false
};

export var keywordDesc = {
    desc : "A word or phrase considered important for the classification of a resource and included as tag in its metadata",
    label : "Keyword",
    mandatory : true,
    recommended : false
};

export var rightsInfoDesc = {
    desc : "Groups information on licensing terms for the distribution of a resource; at least a licence (preferred option) or formal rights statement (e.g. open access) must be declared for the resource",
    label : "Information on distribution rights",
    mandatory : true,
    recommended : false
};

export var workflowDescriptionDesc = {
    desc : "Reserved for the description of workflow (most probably in Galaxy); provides information on the components that the workflow consists of and how it should be executed",
    label : "Workflow description",
    mandatory : false,
    recommended : false
};

export var externalRefDesc = {
    desc : "Another resource to which the lexicalConceptualResource is linked (e.g. link to a wordnet or ontology)",
    label : "External reference",
    mandatory : false,
    recommended : false
};

export var languageDescriptionPerformanceInfoDesc = {
    desc : "Groups together information on the performance of the Language Descriptions",
    label : "Language description performance",
    mandatory : true,
    recommended : false
};

export var shallownessDesc = {
    desc : "Free text statement on the shallowness of the grammar (how deep the syntactic analysis performed by the grammar can be)",
    label : "Shallowness",
    mandatory : false,
    recommended : false
};

export var operatingSystemDesc = {
    desc : "The operating system on which the tool can run",
    label : "Operating system",
    mandatory : false,
    recommended : false
};

export var mimeTypeDesc = {
    desc : "The mime-type of the resource which is a formalized specifier for the format included or a mime-type that the tool/service accepts, in conformance with the values of the IANA (Internet Assigned Numbers Authority); you can select one of the pre-defined values or add a value, PREFERABLY FROM THE IANA MEDIA MIMETYPE RECOMMENDED VALUES (http://www.iana.org/assignments/media-types/media-types.xhtml)",
    label : "Mime type",
    mandatory : true,
    recommended : false
};

export var rawCorpusInfoDesc = {
    desc : "Groups together information on corpora of all media types",
    label : "Raw corpus",
    mandatory : true,
    recommended : false
};

export var surnameDesc = {
    desc : "The surname (family name) of a person",
    label : "Surname",
    mandatory : true,
    recommended : false
};

export var httpURIDesc = {
    desc : "Base type to be used for url's, ftp's, secure url's",
    label : "httpURI",
    mandatory : true,
    recommended : false
};

export var lexicalConceptualResourceInfoDesc = {
    desc : "Groups together all information related to lexical/conceptual resources",
    label : "Lexical/conceptual resource",
    mandatory : true,
    recommended : false
};

export var publicationDateDesc = {
    desc : "The publication date or, for an unpublished work, the date it was written",
    label : "Publication date",
    mandatory : false,
    recommended : true
};

export var resourceIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the resource identifier is assigned by the authority that issues it (e.g. DOI, ISLRN etc.)",
    label : "Resource identifier scheme name",
    mandatory : true,
    recommended : false
};

export var fullTextDesc = {
    desc : "The full text of the publication in simple text format",
    label : "Full text",
    mandatory : false,
    recommended : true
};

export var languageDescriptionMediaTypeDesc = {
    desc : "Groups information on the media type-specific components for language descriptions",
    label : "Media type component of language description",
    mandatory : true,
    recommended : false
};

export var distributionURLDesc = {
    desc : "Any url where the resource can be accessed from, either in a downloadable form or as a web executable command etc.",
    label : "Download URL",
    mandatory : true,
    recommended : true
};

export var sizePerDomainDesc = {
    desc : "Specifies the size of resource parts per domain",
    label : "Size per domain",
    mandatory : false,
    recommended : false
};

export var metadataHeaderInfoTypeDesc = {
    desc : "Base type for metadata header",
    label : "Metadata record identifier",
    mandatory : true,
    recommended : true
};

export var isCreatedByDesc = {
    desc : "The identifier or the s/w component used in the creation process",
    label : "Is created by",
    mandatory : false,
    recommended : false
};

export var trainingCorpusDetailsDesc = {
    desc : "Detailed description of the training corpus (e.g. size, number of features etc.)",
    label : "trainingCorpusDetails",
    mandatory : false,
    recommended : false
};

export var documentDistributionInfoDesc = {
    desc : "Groups information on the distribution of a document (single file)",
    label : "Document distribution",
    mandatory : true,
    recommended : false
};

export var lexicalConceptualResourceEncodingInfoDesc = {
    desc : "Groups all information regarding the contents of lexical/conceptual resources",
    label : "Lexical / Conceptual resource encoding",
    mandatory : true,
    recommended : false
};

export var isDocumentedInDesc = {
    desc : "Links a resource to publications, research articles, manuals, reports etc. that describe it",
    label : "Is documented in",
    mandatory : false,
    recommended : false
};

export var metadataCreationDateDesc = {
    desc : "The date of creation of this metadata description",
    label : "Metadata creation date",
    mandatory : true,
    recommended : false
};

export var licenceInfoDesc = {
    desc : "Groups information on licences for the resource; can be repeated to allow for different modes of access and restrictions of use (e.g. free for academic use, on-a-fee basis for commercial use, download of a sample for free use etc.)",
    label : "Licence",
    mandatory : true,
    recommended : false
};

export var evaluatorDesc = {
    desc : "Groups information on person or organization that evaluated the component",
    label : "Evaluator",
    mandatory : false,
    recommended : false
};

export var pagesDesc = {
    desc : "One or more page numbers or range of page numbers",
    label : "Pages",
    mandatory : false,
    recommended : false
};

export var sizePerTimeCoverageDesc = {
    desc : "Provides information on size per time period represented in the resource",
    label : "Size per time coverage",
    mandatory : false,
    recommended : false
};

export var updateFrequencyDesc = {
    desc : "Specifies the frequency with which a new updated version of the resource is released (e.g. every 6 months or two years)",
    label : "Update frequency",
    mandatory : false,
    recommended : false
};

export var urlDesc = {
    desc : "URL for the issue management system used by the project.",
    label : "url",
    mandatory : false,
    recommended : false
};

export var geographicCoverageDesc = {
    desc : "The geographic region that the content of a resource is about; for countries, recommended use of ISO-3166",
    label : "Geographic coverage",
    mandatory : true,
    recommended : false
};

export var relatedResourceDesc = {
    desc : "Reference to a resource participating in a relation; the preferred form of reference is a unique identifier, otherwise the resource name",
    label : "Related resource",
    mandatory : true,
    recommended : false
};

export var jurisdictionDesc = {
    desc : "Authority granted to a formally consittute legal body (e.g. EU for European Union)",
    label : "Funding program",
    mandatory : false,
    recommended : true
};

export var relatedLexiconInfoDesc = {
    desc : "Groups together information on requirements for lexica set by the LanguageDescriptions",
    label : "Related lexicon",
    mandatory : false,
    recommended : false
};

export var regiontIdDesc = {
    desc : "The identifier of the region subelement according to the IETF BCP47 guidelines (i.e. ISO 3166 codes)",
    label : "Region identifier",
    mandatory : false,
    recommended : false
};

export var titleDesc = {
    desc : "The title of the publication",
    label : "Title",
    mandatory : true,
    recommended : false
};

export var typesystemDesc = {
    desc : "A name or an identifier (e.g. url reference) to the typesystem used in the annotation of the resource or used by the component",
    label : "Tagset",
    mandatory : true,
    recommended : false
};

export var metadataIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the metadata record identifier is assigned by the authority that issues it",
    label : "Metadata identifier scheme name",
    mandatory : true,
    recommended : false
};

export var annotationDateDesc = {
    desc : "The dates (either date or range of dates) in which the annotation process has taken place",
    label : "Annotation date",
    mandatory : false,
    recommended : true
};

export var derivedResourceDesc = {
    desc : "The name, the identifier or the url of the outcome or product of the resource.",
    label : "Derived resource",
    mandatory : false,
    recommended : false
};

export var implementationLanguageDesc = {
    desc : "The programming languages needed for allowing user contributions, or for running the tools, in case no executables are available",
    label : "Implementation language",
    mandatory : false,
    recommended : true
};

export var metadataHeaderInfoDesc = {
    desc : "Groups information on the metadata record itself",
    label : "Metadata header",
    mandatory : true,
    recommended : false
};

export var emailAddressDesc = {
    desc : "Base type for validating email addresses",
    label : "emailAddress",
    mandatory : true,
    recommended : false
};

export var dateCombinationTypeDesc = {
    desc : "Base type to be used for choice betwwen range of dates and exact date",
    label : "dateCombinationType",
    mandatory : true,
    recommended : false
};

export var annotationsInfoDesc = {
    desc : "Groups together information on annotations",
    label : "Annotations",
    mandatory : true,
    recommended : false
};

export var documentMetadataRecordDesc = {
    desc : "Root element for metadata records of single files (documents); groups metadata header and information about the document itself",
    label : "Document metadata record",
    mandatory : true,
    recommended : false
};

export var dateRangeTypeDesc = {
    desc : "Base type to be used for range of dates (time periods)",
    label : "dateRangeType",
    mandatory : true,
    recommended : false
};

export var personIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the person identifier is assigned by the authority that issues it (e.g. ORCID, ScopusId, ResearcherID etc.)",
    label : "Person identifier scheme name",
    mandatory : true,
    recommended : false
};

export var creationInfoDesc = {
    desc : "Groups together information on the resource creation (e.g. for corpora, selection of texts/audio files/ video files etc.; for lexica, construction of lemma list etc.)",
    label : "Creation",
    mandatory : true,
    recommended : false
};

export var hasValidationReportDesc = {
    desc : "Link to a short account (prose description) of the validation details or the identifier of a document with detailed information on the validation process and results",
    label : "Has validation report",
    mandatory : false,
    recommended : false
};

export var corpusMediaPartsTypeDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type component of corpus",
    mandatory : true,
    recommended : true
};

export var versionDateDesc = {
    desc : "Associates a resource with the last modification date (or creation date if it hasn't been modified); the preferred format is YYYYMMDD",
    label : "Version",
    mandatory : true,
    recommended : false
};

export var sexDesc = {
    desc : "Either of the two main categories (male and female) into which humans and most other living things are divided on the basis of their reproductive functions. (Source:OED)",
    label : "Sex",
    mandatory : true,
    recommended : false
};

export var editionDesc = {
    desc : "The edition of a book",
    label : "Edition",
    mandatory : false,
    recommended : false
};

export var samplesLocationDesc = {
    desc : "Links a resource to a url (or url's) with samples of the resource or, in the case of tools, of samples of input and/or output processes",
    label : "Samples location",
    mandatory : false,
    recommended : false
};

export var parameterDescriptionDesc = {
    desc : "Provides a short account of the parameter (function it performs, input / output requirements etc.) in free text",
    label : "Description of the parameter",
    mandatory : false,
    recommended : false
};

export var documentTypeDesc = {
    desc : "Specifies whether the record includes direct access to the full text, the abstract in txt format (inside the record) or serves only as a bibliographic record (includes only metadata)",
    label : "Document type",
    mandatory : true,
    recommended : false
};

export var subjectDesc = {
    desc : "For resources that are using subject / topic classification",
    label : "Subject",
    mandatory : true,
    recommended : false
};

export var weightedGrammarDesc = {
    desc : "Indicates whether the grammar contains numerical weights (incl. probabilities)",
    label : "Weighted grammar",
    mandatory : false,
    recommended : false
};

export var corpusInfoDesc = {
    desc : "Groups together all information related to corpora",
    label : "Corpus",
    mandatory : true,
    recommended : false
};

export var sourceOfMetadataRecordDesc = {
    desc : "Refers to the catalog or repository from which the metadata record has been originated (for harvested records)",
    label : "Source of metadata record",
    mandatory : false,
    recommended : false
};

export var availabilityEndDateDesc = {
    desc : "Specifies the end date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability end date",
    mandatory : true,
    recommended : false
};

export var usageProjectDesc = {
    desc : "Groups information on the project in which the resource has been used",
    label : "Usage project",
    mandatory : false,
    recommended : false
};

export var fundingProgrammeDesc = {
    desc : "A specific programme (e.g. FP7, H2020)",
    label : "Funding program",
    mandatory : false,
    recommended : true
};

export var postalAddressDesc = {
    desc : "The postal address of a person, group or organization",
    label : "Postal address",
    mandatory : false,
    recommended : false
};

export var emailDesc = {
    desc : "The email address of a person, group or organization",
    label : "Email address",
    mandatory : true,
    recommended : false
};

export var creationModeDetailsDesc = {
    desc : "Provides further information on the creation methods and processes",
    label : "Creation mode details",
    mandatory : false,
    recommended : false
};

export var applicationInvolvedDesc = {
    desc : "Specifies an application where the resource has actually been involved and used",
    label : "Application where the resource was used",
    mandatory : false,
    recommended : false
};

export var optionalDesc = {
    desc : "Specifies whether the parameter is mandatory or optional; the default value is set to true",
    label : "Optional",
    mandatory : true,
    recommended : false
};

export var actualUseInfoDesc = {
    desc : "Groups information on how the resource has already been used",
    label : "Actual use",
    mandatory : true,
    recommended : false
};

export var personInfoTypeDesc = {
    desc : "Groups information relevant to persons related to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided",
    label : "Person",
    mandatory : true,
    recommended : true
};

export var countryDesc = {
    desc : "The country mentioned in the postal address of a person or organization as defined in the list of values of ISO 3166",
    label : "Country (identifier)",
    mandatory : false,
    recommended : false
};

export var regionDesc = {
    desc : "The name of the region, county or department as mentioned in the postal address of a person or organization",
    label : "Region",
    mandatory : false,
    recommended : false
};

export var scmInfoDesc = {
    desc : "Information about the SCM (Software Configuration Management, also called Source Code/Control Management or, succinctly, version control)",
    label : "SCM information",
    mandatory : false,
    recommended : false
};

export var connectionDesc = {
    desc : "The source control management system URL that describes the repository and how to connect to the repository.",
    label : "connection",
    mandatory : true,
    recommended : false
};

export var applicationTypeDesc = {
    desc : "A classification of NLP/TDM applications; please, note that the ontology is under revision",
    label : "Application type",
    mandatory : true,
    recommended : false
};

export var collectedFromDesc = {
    desc : "Refers to the entity (repository, aggregator etc.) from which the metadata record has been harvested",
    label : "Source repository",
    mandatory : true,
    recommended : false
};

export var dateTypeDesc = {
    desc : "Base type to be used for dates, allowing optional day and month",
    label : "Day",
    mandatory : true,
    recommended : false
};

export var nameTypeDesc = {
    desc : "Allows to classify the type of the name of an entity",
    label : "Short name",
    mandatory : true,
    recommended : false
};

export var corpusTextPartInfoDesc = {
    desc : "Groups together information on the text component of a resource",
    label : "Corpus text part",
    mandatory : true,
    recommended : false
};

export var subscribeDesc = {
    desc : "The email address to be used for subscribing to the mailing list",
    label : "Subscribe",
    mandatory : false,
    recommended : false
};

export var annotatedPublicationDesc = {
    desc : "Groups information on annotated documents (publications), with a link to the record of the raw publication and information about the annotation",
    label : "Annotated publication",
    mandatory : true,
    recommended : false
};

export var conferenceDesc = {
    desc : "The name of the conference in which the document has been presented",
    label : "Conference",
    mandatory : false,
    recommended : false
};

export var onLineHelpURLDesc = {
    desc : "URL link to an online manual or help pages",
    label : "On line help URL",
    mandatory : false,
    recommended : true
};

export var groupNameDesc = {
    desc : "The name(s) of the group",
    label : "Group name",
    mandatory : true,
    recommended : false
};

export var mailingListNameDesc = {
    desc : "The name of the mailing list",
    label : "Mailing list name",
    mandatory : true,
    recommended : false
};

export var organizationIdentifierDesc = {
    desc : "Associates an organizationto an identifier, i.e. a string used to uniquely identify it",
    label : "Organization identifier",
    mandatory : true,
    recommended : false
};

export var sizePerTextFormatDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format",
    mandatory : false,
    recommended : false
};

export var componentDistributionInfoDesc = {
    desc : "Groups information on the distributable form of a component (e.g. as a software code, an executable programme, a web service etc.)",
    label : "Document distribution",
    mandatory : true,
    recommended : false
};

export var componentOperationInfoDesc = {
    desc : "Groups together information on the operation of a component",
    label : "Component operation",
    mandatory : true,
    recommended : false
};

export var textClassificationInfoDesc = {
    desc : "Groups together information on text type/genre of the resource",
    label : "Text classification",
    mandatory : true,
    recommended : false
};

export var projectNameDesc = {
    desc : "The full name of a project related to the resource",
    label : "Project name",
    mandatory : true,
    recommended : false
};

export var journalIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the journal identifier is assigned by the authority that issues it",
    label : "Journal identifier scheme name",
    mandatory : true,
    recommended : false
};

export var isAnnotatedByDesc = {
    desc : "The name, the identifier or the url of the tool used for the annotation of the resource",
    label : "Annotation tool",
    mandatory : false,
    recommended : true
};

export var variantIdDesc = {
    desc : "The identifier of the variant subelement according to the IETF BCP47 guidelines",
    label : "Variant identifier",
    mandatory : false,
    recommended : false
};

export var lexicalConceptualResourceTextInfoDesc = {
    desc : "Groups information on the textual part of the lexical/conceptual resource",
    label : "Lexical / Conceptual resource text",
    mandatory : true,
    recommended : false
};

export var landingPageDesc = {
    desc : "A URL used as the landing page of a resource providing general information; for instance, it may present a description of the resource, its creators and possibly include links to the URL where it can be accessed from",
    label : "Landing page",
    mandatory : true,
    recommended : false
};

export var evaluationLevelDesc = {
    desc : "Indicates the evaluation level",
    label : "Evaluation level",
    mandatory : false,
    recommended : false
};

export var modalityTypeDetailsDesc = {
    desc : "Provides further information on modalities",
    label : "Modality type details",
    mandatory : false,
    recommended : false
};

export var resourceTypeDesc = {
    desc : "Description not available",
    label : "Resource type",
    mandatory : true,
    recommended : false
};

export var evaluatedDesc = {
    desc : "Indicates whether the component has been evaluated",
    label : "Evaluated",
    mandatory : true,
    recommended : false
};

export var documentationURLDesc = {
    desc : "Link to the documentation for the specific data format (explanations and examples)",
    label : "documentationURL",
    mandatory : false,
    recommended : false
};

export var languageDescriptionTextInfoDesc = {
    desc : "Groups together all information relevant to the text module of a language description (e.g. format, languages, size etc.); it is obligatory for all language descriptions",
    label : "Language description text component",
    mandatory : true,
    recommended : false
};

export var rightsHolderDesc = {
    desc : "Groups information on a person or an organization who holds the Copyright and SGDB rights that subsist in the resource. The rights holder could be different from the creator that may have assigned the rights to another person or organization (e.g. an author as a creator assigns her rights to the publisher who is the rights holder) and the distributor that holds a specific licence (i.e. a permission) to distribute the work.",
    label : "Rights holder",
    mandatory : true,
    recommended : false
};

export var contactEmailDesc = {
    desc : "A general email address that can be used as contact point for a resource (e.g. resource@example.com)",
    label : "Contact email",
    mandatory : true,
    recommended : false
};

export var userTypeDesc = {
    desc : "The conditions imposed by the user type (for instance, use may be allowed only for academic users or the fee may vary depending on the user type)",
    label : "User type",
    mandatory : true,
    recommended : false
};

export var documentLanguageDesc = {
    desc : "The language the document is written in (according to the IETF BCP47 guidelines)",
    label : "Language of the document",
    mandatory : false,
    recommended : true
};

export var issueManagementInfoDesc = {
    desc : "Information about the issue tracking (or bug tracking) system used to manage the resource.",
    label : "issueManagementInfo",
    mandatory : false,
    recommended : false
};

export var originalDataProviderPublisherDesc = {
    desc : "Information about the publisher (organization) that has originally provided the metadata record",
    label : "Original data provider (publisher)",
    mandatory : true,
    recommended : false
};

export var annotationLevelDesc = {
    desc : "Specifies the annotation level of the resource or what a s/w component consumes or produces as an output",
    label : "Annotation level",
    mandatory : true,
    recommended : false
};

export var languageTypeDesc = {
    desc : "The container for the language elements (i.e. identifier according to BCP47 guidelines and all the elements that produce this id)",
    label : "Language",
    mandatory : true,
    recommended : false
};

export var formalismDesc = {
    desc : "Reference (name, bibliographic reference or link to url) for the formalism used for the creation/enrichment of the resource (grammar or tool/service)",
    label : "Formalism",
    mandatory : false,
    recommended : false
};

export var creationDetailsDesc = {
    desc : "Provides additional information on the creation of a component",
    label : "Creation details",
    mandatory : false,
    recommended : false
};

export var authorDesc = {
    desc : "The name(s) of the author(s), preferrably in the format: surname, initials (first name) prefix with optional identifier for persons",
    label : "Author",
    mandatory : false,
    recommended : true
};

export var usageInfoDesc = {
    desc : "Groups information on usage of the resource (both intended use and cases where it has already been used)",
    label : "Information on usage",
    mandatory : true,
    recommended : false
};

export var domainInfoDesc = {
    desc : "Groups together information on domains represented in the resource; can be repeated for parts of the resource with distinct domain",
    label : "Domain",
    mandatory : true,
    recommended : false
};

export var archiveDesc = {
    desc : "The URL where the mailing list messages are archived",
    label : "Archive",
    mandatory : true,
    recommended : false
};

export var componentEvaluationInfoDesc = {
    desc : "Groups together information on the evaluation status of a component",
    label : "Component evaluation",
    mandatory : true,
    recommended : false
};

export var personIdentifierDesc = {
    desc : "Associates a person to an identifier (e.g. ORCID, LinkedIn etc.), i.e. a string used to uniquely identify it",
    label : "Person identifier",
    mandatory : true,
    recommended : false
};

export var documentDesc = {
    desc : "Root element for documents (single files); choice among raw publications and annotated publications",
    label : "Document",
    mandatory : true,
    recommended : false
};

export var datasetDistributionInfoDesc = {
    desc : "Groups information on the distribution of a dataset resource (multiple files)",
    label : "Document distribution",
    mandatory : true,
    recommended : false
};

export var annotatorDesc = {
    desc : "Groups information on the annotators of the specific annotation type",
    label : "Annotator",
    mandatory : false,
    recommended : false
};

export var journalIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Journal Identifier",
    mandatory : true,
    recommended : false
};

export var developerConnectionDesc = {
    desc : "Just like connection, but for developers, i.e. this scm connection will not be read only.",
    label : "developerConnection",
    mandatory : false,
    recommended : false
};

export var taskDesc = {
    desc : "An indication of the task performed by the grammar",
    label : "Task",
    mandatory : false,
    recommended : false
};

export var frameworkDesc = {
    desc : "The framework used for developing and deploying the component",
    label : "Framework",
    mandatory : true,
    recommended : false
};

export var journalTitleDesc = {
    desc : "The full name of the journal",
    label : "Journal title",
    mandatory : false,
    recommended : false
};

export var commandDesc = {
    desc : "A command line used for the execution of a component",
    label : "Command",
    mandatory : true,
    recommended : false
};

export var rightsStatementDesc = {
    desc : "The name (identifier) of a formal statement indicative of licensing terms for the use of a resource (e.g. open access, free to read etc.); its semantics should be clear, preferrably formally expressed and stored at a URL",
    label : "Rights statement",
    mandatory : true,
    recommended : false
};

export var positionDesc = {
    desc : "The position or the title of a person if affiliated to an organization",
    label : "Position",
    mandatory : false,
    recommended : true
};

export var endDateDesc = {
    desc : "Basic format for end dates, with optional day and month and obligatory year",
    label : "End date",
    mandatory : true,
    recommended : false
};

export var inputContentResourceInfoDesc = {
    desc : "Groups together information on the requirements set on the input resource of a component",
    label : "Information on input",
    mandatory : false,
    recommended : false
};

export var componentDistributionFormDesc = {
    desc : "Specifies the form of distribution of the component (e.g. as source code, executable programme etc.)",
    label : "web service",
    mandatory : true,
    recommended : false
};

export var hashkeyDesc = {
    desc : "Specifies the hashkey for indexing and downloading the publication",
    label : "Hashkey",
    mandatory : true,
    recommended : true
};

export var sourceMetadataLinkDesc = {
    desc : "A link to the original metadata record, in cases of harvesting",
    label : "Original metadata record link",
    mandatory : true,
    recommended : false
};

export var versionInfoDesc = {
    desc : "Groups information on a specific version or release of the resource",
    label : "Information on version",
    mandatory : true,
    recommended : false
};

export var textTypeDesc = {
    desc : "Specifies the type of the text according to a text type classification",
    label : "Text type",
    mandatory : true,
    recommended : false
};

export var projectShortNameDesc = {
    desc : "A short name, abbreviation or acronym of a project related to the resource",
    label : "Project short name",
    mandatory : false,
    recommended : false
};

export var TDMMethodDesc = {
    desc : "Description not available",
    label : "TDM method",
    mandatory : true,
    recommended : true
};

export var multilingualityTypeDetailsDesc = {
    desc : "Provides further information on multilinguality of a resource in free text",
    label : "Multilinguality type details",
    mandatory : false,
    recommended : false
};

export var copyrightStatementDesc = {
    desc : "A free text statement that may be included with the resource, usually containing the name(s) of copyright holders and licensing terms (intended for resources that already have such a statement); the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Copyright statement",
    mandatory : true,
    recommended : false
};

export var languageInfoDesc = {
    desc : "Groups information on the languages represented in the resource",
    label : "Language",
    mandatory : true,
    recommended : false
};

export var sizePerAnnotationDesc = {
    desc : "Provides information on size for the annotated parts of the resource",
    label : "Size per annotation",
    mandatory : false,
    recommended : false
};

export var metadataLastDateUpdatedDesc = {
    desc : "The date of the last updating of the metadata record",
    label : "Metadata last date updated",
    mandatory : false,
    recommended : false
};

export var resourceCreationInfoDesc = {
    desc : "Groups information on the creation procedure and agents of a resource",
    label : "Resource creation",
    mandatory : true,
    recommended : true
};

export var componentTypeDesc = {
    desc : "Specifies the type of a component, in terms of the function/task it performs; please, note that the ontology is under revision",
    label : "Type of component",
    mandatory : true,
    recommended : false
};

export var parameterLabelDesc = {
    desc : "A label used to show to the user for the parameter",
    label : "Parameter label",
    mandatory : true,
    recommended : false
};

export var outputDesc = {
    desc : "Indicates whether the output of the operation of the grammar is a statement of grammaticality (grammatical/ungrammatical) or structures (interpretation of the input)",
    label : "Output",
    mandatory : false,
    recommended : false
};

export var algorithmDetailsDesc = {
    desc : "Detailed description of the algorithm, incl. info on whether it's supervised or not",
    label : "algorithmDetails",
    mandatory : false,
    recommended : false
};

export var actualUseDetailsDesc = {
    desc : "Reports on the usage of the resource in free text",
    label : "Actual use details",
    mandatory : false,
    recommended : false
};

export var originalDataProviderInfoDesc = {
    desc : "Refers to the original data provider, in case the metadata record carries information taken from previous repositories/journals/publishers (e.g. in case the record's last source is an aggregator)",
    label : "Original data provider",
    mandatory : false,
    recommended : false
};

export var publicationIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the publication identifier is assigned by the authority that issues it (e.g. DOI, PubMed Central etc.)",
    label : "Publication identifier scheme name",
    mandatory : true,
    recommended : false
};

export var sizeUnitDesc = {
    desc : "Specifies the unit that is used when providing information on the size of the resource or of resource parts",
    label : "Size unit",
    mandatory : true,
    recommended : false
};

export var languageDescriptionTypeDesc = {
    desc : "The type of the language description",
    label : "Language description type",
    mandatory : true,
    recommended : false
};

export var metadataIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for metadata records",
    label : "Metadata identifier scheme name",
    mandatory : true,
    recommended : false
};

export var sizePerLanguageVarietyDesc = {
    desc : "Provides information on the size per language variety component",
    label : "Size per language variety",
    mandatory : false,
    recommended : false
};

export var languageIdDesc = {
    desc : "The identifier of the language subelement according to the IETF BCP47 guidelines (i.e. ISO 639-3 codes when existing supplemented with ISO 639-3 codes for new entries)",
    label : "Language identifier",
    mandatory : true,
    recommended : false
};

export var validationExtentDesc = {
    desc : "The resource coverage in terms of validated data",
    label : "Validation extent",
    mandatory : false,
    recommended : false
};

export var textFormatInfoDesc = {
    desc : "Groups information on the text format(s) of a resource",
    label : "Text format",
    mandatory : true,
    recommended : false
};

export var repositoryNameDesc = {
    desc : "The name(s) of the repository",
    label : "Repository name",
    mandatory : true,
    recommended : false
};

export var mailingListInfoDesc = {
    desc : "Groups information on the mailing list(s) that can be used for further information regarding the resource",
    label : "Mailing list",
    mandatory : false,
    recommended : false
};

export var multilingualityTypeDesc = {
    desc : "Indicates whether the corpus is parallel, comparable or mixed",
    label : "Multilinguality type",
    mandatory : false,
    recommended : false
};

export var hasEvaluationReportDesc = {
    desc : "A bibliographical record of or link to a report describing the evaluation process, tool, method etc. of the component",
    label : "Evaluation report",
    mandatory : false,
    recommended : true
};

export var conformanceToStandardsBestPracticesDesc = {
    desc : "Specifies the standards or the best practices to which the tagset used for the annotation conforms",
    label : "Conformance to standards / best practices",
    mandatory : false,
    recommended : false
};

export var repositoryDesc = {
    desc : "Information about the repository where the publication is deposited",
    label : "Repository",
    mandatory : true,
    recommended : false
};

export var journalDesc = {
    desc : "Information about the journal where the publication has appeared",
    label : "Journal",
    mandatory : true,
    recommended : false
};

export var originalDataProviderRepositoryDesc = {
    desc : "Information about the repository that has originally provided the metadata record",
    label : "Original data provider (repository)",
    mandatory : true,
    recommended : false
};

export var contentTypesDesc = {
    desc : "A more detailed account of the information contained in the lexicalConceptualResource",
    label : "Linguistic information",
    mandatory : true,
    recommended : true
};

export var versionTypeDesc = {
    desc : "A type of versioning vocabulary used mainly for works (e.g. scholarly articles, books etc.) that go through a formal review process before final publication, marked with major changes across the versions",
    label : "Version type",
    mandatory : false,
    recommended : false
};

export var organizationIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the organization identifier is assigned by the authority that issues it",
    label : "Organization identifier scheme name",
    mandatory : true,
    recommended : false
};

export var journalIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for journals",
    label : "Journal identifier scheme name",
    mandatory : true,
    recommended : false
};

export var postDesc = {
    desc : "The email address to be used for posting messages to the mailing list",
    label : "Post",
    mandatory : true,
    recommended : false
};

export var repositoryIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for repositories, archives etc.",
    label : "DOI (Digital Object Identifier)",
    mandatory : true,
    recommended : false
};

export var sizePerGeographicCoverageDesc = {
    desc : "Provides information on size per geographically distinct section of the resource",
    label : "Size per geographic coverage",
    mandatory : false,
    recommended : false
};

export var evaluationCriterionDesc = {
    desc : "Defines the criteria of the evaluation of a tool",
    label : "Evaluation criteria",
    mandatory : false,
    recommended : false
};

export var distributionMediumDesc = {
    desc : "Specifies the medium (channel) used for delivery or providing access to the resource",
    label : "Distribution medium",
    mandatory : true,
    recommended : true
};

export var availabilityStartDateDesc = {
    desc : "Specifies the start date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability start date",
    mandatory : true,
    recommended : false
};

export var contributorDesc = {
    desc : "The identifier of the contributor, preferrably in the format: surname, initials (first name) prefix or the unique identifier of the author",
    label : "Contributor",
    mandatory : false,
    recommended : false
};

export var projectDatesDesc = {
    desc : "The duration dates the project",
    label : "Project dates",
    mandatory : false,
    recommended : false
};

export var modelOperationInfoDesc = {
    desc : "Information provided for the description of Machine Learning models",
    label : "Information on machine learning models",
    mandatory : false,
    recommended : true
};

export var defaultValueDesc = {
    desc : "Used for parameters that take a list of values in order to indicate the default value(s)",
    label : "Parameter default value",
    mandatory : false,
    recommended : false
};

export var isEvaluatedByDesc = {
    desc : "The identifier of the component used for the evaluation of the component being described",
    label : "Is evaluated by",
    mandatory : false,
    recommended : true
};

export var sizePerModalityDesc = {
    desc : "Provides information on the size per modality component",
    label : "Size per modality",
    mandatory : false,
    recommended : false
};

export var projectIdentifierDesc = {
    desc : "A unique identifier for research projects",
    label : "projectIdentifier",
    mandatory : true,
    recommended : false
};

export var originalDataProviderJournalDesc = {
    desc : "Information about the journal that has originally provided the metadata record",
    label : "Original data provider (journal)",
    mandatory : true,
    recommended : false
};

export var lingualityTypeDesc = {
    desc : "Indicates whether the resource includes one, two or more languages",
    label : "Linguality type",
    mandatory : true,
    recommended : false
};

export var relatedMetadataSchemeDesc = {
    desc : "Refers to the metadata schema originally used for the description of the resource",
    label : "Original metadata scheme",
    mandatory : false,
    recommended : false
};

export var metadataCreatorDesc = {
    desc : "Groups information on the person that has created the metadata record (for records manually edited)",
    label : "Metadata creator",
    mandatory : false,
    recommended : false
};

export var volumeDesc = {
    desc : "Specifies the volume of a journal or multivolume book",
    label : "Volume",
    mandatory : false,
    recommended : false
};

export var sizePerTextClassificationDesc = {
    desc : "Provides information on size of resource parts with different text classification",
    label : "Size per text classification",
    mandatory : false,
    recommended : false
};

export var scriptIdTypeDesc = {
    desc : "Base type for scripts according to ISO 15924",
    label : "scriptIdType",
    mandatory : true,
    recommended : false
};

export var actorInfoTypeDesc = {
    desc : "Base type for actors/agents; choice between person and organization",
    label : "actorInfoType",
    mandatory : true,
    recommended : false
};

export var annotationModeDesc = {
    desc : "Indicates whether the resource is annotated manually or by automatic processes",
    label : "annotationMode",
    mandatory : false,
    recommended : true
};

export var robustnessDesc = {
    desc : "Free text statement on the robustness of the grammar (how well the grammar can cope with misspelt/unknown etc. input, i.e. whether it can produce even partial interpretations of the input)",
    label : "Robustness",
    mandatory : false,
    recommended : false
};

export var interannotatorAgreementDesc = {
    desc : "Provides information on the interannotator agreement and the methods/metrics applied ",
    label : "Interannotator agreement",
    mandatory : false,
    recommended : false
};

export var sizePerStructuralEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format",
    mandatory : false,
    recommended : false
};

export var journalInfoTypeDesc = {
    desc : "Base type for journals",
    label : "Journal title",
    mandatory : true,
    recommended : true
};

export var attachedLexiconPositionDesc = {
    desc : "Indicates the position of the lexicon, if attached to the grammar",
    label : "Attached lexicon position",
    mandatory : false,
    recommended : false
};

export var identificationInfoDesc = {
    desc : "Groups together information needed to identify and describe at a minimal level the resource",
    label : "Identification",
    mandatory : true,
    recommended : false
};

export var abstractDesc = {
    desc : "The abstract of the document in plain text format; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Abstract",
    mandatory : false,
    recommended : false
};

export var guidelinesDocumentedInDesc = {
    desc : "A bibliographic reference or ms:httpURI link to the annotation manual",
    label : "Guidelines documented in",
    mandatory : false,
    recommended : false
};

export var contactInfoDesc = {
    desc : "Groups information on the possible sources for obtaining further information regarding the resource; at least a general email address or a landing page (website) must be supplied, although the recommended practice is to describe a contact person or group",
    label : "Contact information",
    mandatory : true,
    recommended : false
};

export var languageTagDesc = {
    desc : "The identifier of the language that is included in the resource or supported by the component, according to the IETF BCP47 guidelines",
    label : "Language",
    mandatory : true,
    recommended : false
};

export var processingResourceTypeDesc = {
    desc : "The type of the resource that a component takes as input or produces as output",
    label : "Processing resource type",
    mandatory : true,
    recommended : false
};

export var projectInfoDesc = {
    desc : "Groups information on a project related to the resource(e.g. a project the resource has been used in; a funded project that led to the resource creation etc.)",
    label : "Project",
    mandatory : true,
    recommended : false
};

export var applicationDesc = {
    desc : "Indicates whether the component can be used as an integrated end-user application",
    label : "Application",
    mandatory : true,
    recommended : false
};

export var lingualityInfoDesc = {
    desc : "Groups information on the number of languages of the resource part and of the way they are combined to each other",
    label : "Linguality",
    mandatory : true,
    recommended : false
};

export var affiliatedOrganizationDesc = {
    desc : "The organization to which the group is affiliated",
    label : "Affiliated organization",
    mandatory : true,
    recommended : true
};

export var revisionDesc = {
    desc : "A short free-text account of the revisions made to the current version vis-a-vis the previous version or a link to a document reporting these revisions",
    label : "Revision",
    mandatory : false,
    recommended : false
};

export var annotationModeDetailsDesc = {
    desc : "Provides further information on annotation process ",
    label : "Annotation mode details",
    mandatory : false,
    recommended : false
};

export var repositoryIdentifierDesc = {
    desc : "Reference to the identifier used for repositories, archives etc.",
    label : "Repository identifier",
    mandatory : true,
    recommended : false
};

export var resourceCreatorDesc = {
    desc : "Used to provide information on the person or the organization that has created the resource",
    label : "Resource creator",
    mandatory : false,
    recommended : true
};

export var telephoneNumberDesc = {
    desc : "The telephone number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Telephone number",
    mandatory : false,
    recommended : false
};

export var annotationStandoffDesc = {
    desc : "Indicates whether the annotation is created inline or in a stand-off fashion",
    label : "Annotation standoff",
    mandatory : false,
    recommended : true
};

export var algorithmDesc = {
    desc : "Training algorithm used for the model (e.g. maximum entropy, svm etc.)",
    label : "algorithm",
    mandatory : false,
    recommended : false
};

export var languageVarietyTypeDesc = {
    desc : "Specifies the type of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety type",
    mandatory : true,
    recommended : false
};

export var validatorDesc = {
    desc : "Groups information on the person(s) or the organization(s) that validated the resource",
    label : "Validator",
    mandatory : false,
    recommended : false
};

export var annotatedCorpusInfoDesc = {
    desc : "Groups together information on annotated corpora of all media types",
    label : "Annotated corpus",
    mandatory : true,
    recommended : false
};

export var componentCreationInfoDesc = {
    desc : "Groups together information on the creation of a component",
    label : "Component creation",
    mandatory : true,
    recommended : false
};

