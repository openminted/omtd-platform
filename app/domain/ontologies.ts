export var componentOntologies = [
    {
        "comment": "A component that is used for analyzing an input text in order to extract specific features/information (e.g. word list), or to produce statements over the whole text (e.g. classify it by topic)",
        "children": [
            {
                "comment": "A component that tries to classify a document into one or more categories",
                "id": "http://w3id.org/meta-share/omtd-share/DocumentClassifier",
                "name": "Document classifier"
            },
            {
                "comment": "A component that tries to automatically recognize elements that reveal contradiction in a text",
                "id": "http://w3id.org/meta-share/omtd-share/ContradictionDetector",
                "name": "Contradiction detector"
            },
            {
                "comment": "A component that tries to extract information related to incidents referred to in a text",
                "id": "http://w3id.org/meta-share/omtd-share/EventExtractor",
                "name": "Event extractor"
            },
            {
                "comment": "A component that extracts specific lexical information contained in other lexica",
                "id": "http://w3id.org/meta-share/omtd-share/LexiconExtractorFromLexica",
                "name": "Lexicon extractor from lexica"
            },
            {
                "comment": "A component that identifies the language of a given text based on its contents",
                "id": "http://w3id.org/meta-share/omtd-share/LanguageIdentifier",
                "name": "Language identifier"
            },
            {
                "comment": "A component that tries to identify variables (in social sciences) in a text",
                "id": "http://w3id.org/meta-share/omtd-share/VariablesDectector",
                "name": "Variables dectector"
            },
            {
                "comment": "A component that automatically extracts structured information from unstructured and/or semi-structured machine-readable documents",
                "id": "http://w3id.org/meta-share/omtd-share/InformationExtractor",
                "name": "Information extractor"
            },
            {
                "comment": "A component that tries to extract terms from a corpus",
                "id": "http://w3id.org/meta-share/omtd-share/TermExtractor",
                "name": "Term extractor"
            },
            {
                "comment": "A component that tries to identify persuasive expressions in a given text",
                "id": "http://w3id.org/meta-share/omtd-share/PersuasiveExpressionMiner",
                "name": "Persuasive expression miner"
            },
            {
                "comment": "A component that is used to disambiguate between two or more ambiguous items",
                "children": [
                    {
                        "comment": "A component that tries to identify which sense of a word (i.e. meaning) is used in a sentence, when the word has multiple meanings",
                        "id": "http://w3id.org/meta-share/omtd-share/WordSenseDisambiguator",
                        "name": "Word sense disambiguator"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Disambiguator",
                "name": "Disambiguator"
            },
            {
                "comment": "A component that tries to extract keywords from a given text",
                "id": "http://w3id.org/meta-share/omtd-share/KeywordExtractor",
                "name": "Keyword extractor"
            },
            {
                "comment": "A component that tries to identify sentences that express the author\u2019s negative or positive feelings on something",
                "id": "http://w3id.org/meta-share/omtd-share/SentimentAnalyzer",
                "name": "Sentiment analyzer"
            },
            {
                "comment": "A component that guesses the topic of a text",
                "id": "http://w3id.org/meta-share/omtd-share/TopicExtractor",
                "name": "Topic extractor"
            },
            {
                "comment": "A component that tries to recognize and annotate emotions (e.g. fear, anger, happiness etc.) from text, video, audio and image",
                "id": "http://w3id.org/meta-share/omtd-share/EmotionRecognizer",
                "name": "Emotion recognizer"
            },
            {
                "comment": "A component that extracts lexical information from corpora in order to produce structured lexical resources",
                "id": "http://w3id.org/meta-share/omtd-share/LexiconExtractorFromCorpora",
                "name": "Lexicon extractor from corpora"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Analyzer",
        "name": "Analyzer"
    },
    {
        "comment": "A component that provides access to data resources, e.g. reads a resource or writes the output of a process in a certain format",
        "children": [
            {
                "comment": "A component that writes processing results in various formats",
                "id": "http://w3id.org/meta-share/omtd-share/Writer",
                "name": "Writer"
            },
            {
                "comment": "A component that reads content of various types (pdf, txt, xml etc.)",
                "id": "http://w3id.org/meta-share/omtd-share/Reader",
                "name": "Reader"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/AccessComponent",
        "name": "Access Component"
    },
    {
        "comment": "A component that is used in processing operations",
        "children": [
            {
                "comment": "A component that generates (semi-)automatically natural language texts (based on non-linguistic data, keywords, logical forms, knowledge bases...)",
                "children": [
                    {
                        "comment": "A component that produces a natural language synopsis of a longer text",
                        "id": "http://w3id.org/meta-share/omtd-share/Summarizer",
                        "name": "Summarizer"
                    },
                    {
                        "comment": "A component that outputs a simpler rendition of a given item (sentence, text etc.)",
                        "id": "http://w3id.org/meta-share/omtd-share/Simplifier",
                        "name": "Simplifier"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Generator",
                "name": "Generator"
            },
            {
                "comment": "A component that annotates any data (text, video, audio etc.), i.e. adds any descriptive or analytic notations (structural, linguistic, etc) to raw data",
                "children": [
                    {
                        "comment": "A component that seeks to locate and classify elements in a text into pre-defined categories such as the names of persons, organizations, locations, expressions of times, discipline-specific classes, etc",
                        "id": "http://w3id.org/meta-share/omtd-share/NamedEntitityRecognizer",
                        "name": "Named entitity recognizer"
                    },
                    {
                        "comment": "A component that takes as input text and returns a form of data structure (e.g. syntactic parse as a tree, or bracketed structure etc.)",
                        "children": [
                            {
                                "comment": "A component that generates a dependency tree from typically token and part-of-speech annotations",
                                "id": "http://w3id.org/meta-share/omtd-share/DependencyParser",
                                "name": "Dependency parser"
                            },
                            {
                                "comment": "A component that builds a constituency tree from typically token and part-of-speech annotations",
                                "id": "http://w3id.org/meta-share/omtd-share/ConstituencyParser",
                                "name": "Constituency parser"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/Parser",
                        "name": "Parser"
                    },
                    {
                        "comment": "A component that segments a text into structural untis (chapters, paragraphs, sentences, words, tokens etc.)",
                        "children": [
                            {
                                "comment": "A component that splits a text into sentences",
                                "id": "http://w3id.org/meta-share/omtd-share/SentenceSplitter",
                                "name": "Sentence splitter"
                            },
                            {
                                "comment": "A component that recognizes and tags tokens (words, punctuation marks, digits etc.) in a text",
                                "id": "http://w3id.org/meta-share/omtd-share/Tokenizer",
                                "name": "Tokenizer"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/Segmenter",
                        "name": "Segmenter"
                    },
                    {
                        "comment": "A component that annotates tokens of a text with morphological information (part-of-speech and morphological features)",
                        "children": [
                            {
                                "comment": "A component that annotates tokens of a text with part-of-speech information",
                                "id": "http://w3id.org/meta-share/omtd-share/PartOfSpeechTagger",
                                "name": "Part of speech tagger"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/MorphologicalTagger",
                        "name": "Morphological tagger"
                    },
                    {
                        "comment": "A component that detects and annotates equivalence relations between items (corpora, texts, paragraphs, sentences, phrases, words) in two languages",
                        "id": "http://w3id.org/meta-share/omtd-share/Aligner",
                        "name": "Aligner"
                    },
                    {
                        "comment": "A component that annotates tokens of a text with coreference labels, marking expressions that refer to the same entity in the text",
                        "id": "http://w3id.org/meta-share/omtd-share/CoReferenceAnnotator",
                        "name": "Co-reference annotator"
                    },
                    {
                        "comment": "A component that extracts stems from words in a text, usually by removing the most common morphological and inflectional endings from words",
                        "id": "http://w3id.org/meta-share/omtd-share/Stemmer",
                        "name": "Stemmer"
                    },
                    {
                        "comment": "A component that annotates the tokens of a text with semantic features",
                        "children": [
                            {
                                "comment": "A component that annotates the tokens of a text with readability scores",
                                "id": "http://w3id.org/meta-share/omtd-share/ReadabilityAnnotator",
                                "name": "Readability annotator"
                            },
                            {
                                "comment": "A component that annotates the tokens of a text with Semantic Role labels",
                                "id": "http://w3id.org/meta-share/omtd-share/AnnotatorOfSemanticRoleLabels",
                                "name": "Annotator of semantic role labels"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/SemanticAnnotator",
                        "name": "Semantic annotator"
                    },
                    {
                        "comment": "A component that groups tokens of a text into chunks",
                        "id": "http://w3id.org/meta-share/omtd-share/Chunker",
                        "name": "Chunker"
                    },
                    {
                        "comment": "A component that annotates the tokens of a text with lemma information",
                        "id": "http://w3id.org/meta-share/omtd-share/Lemmatizer",
                        "name": "Lemmatizer"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Annotator",
                "name": "Annotator"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Processor",
        "name": "Processor"
    },
    {
        "comment": "A component that is used at pre- or post-processing stages in order to normalize input/output",
        "children": [
            {
                "comment": "A component that removes unwanted material from text (e.g. quotation marks, hyphenations etc.) or performs edits so that specific items (tokens, dates,  etc.) are substituted/represented with normalized values",
                "id": "http://w3id.org/meta-share/omtd-share/Normalizer",
                "name": "Normalizer"
            },
            {
                "comment": "A component that corrects spelling mistakes in a text",
                "id": "http://w3id.org/meta-share/omtd-share/SpellingChecker",
                "name": "Spelling checker"
            },
            {
                "comment": "A component that is used for filtering text input or annotations based on specific criteria",
                "id": "http://w3id.org/meta-share/omtd-share/Filter",
                "name": "Filter"
            },
            {
                "comment": "A component that corrects grammatical mistakes in a text",
                "id": "http://w3id.org/meta-share/omtd-share/GrammarChecker",
                "name": "Grammar checker"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/PreOrPostProcessor",
        "name": "Pre- or Post-Processor"
    }
];

export var applicationOntologies = [

    {
        "comment": "The task/process of automatically searching large volumes of data for patterns that can be considered knowledge about the data",
        "children": [
            {
                "comment": "The task/process of assigning documents into classes or categories",
                "id": "http://w3id.org/meta-share/omtd-share/TextCategorization",
                "name": "Text categorization"
            },
            {
                "comment": "The process/task of computationally identifying and categorizing opinions expressed in a piece of text, especially in order to determine whether the writer's attitude towards a particular topic, product, etc. is positive, negative, or neutral",
                "id": "http://w3id.org/meta-share/omtd-share/SentimentAnalysis",
                "name": "Sentiment analysis"
            },
            {
                "comment": "A task/process that intends to recognize for two text fragments whether the meaning of one text is entailed in that of the other, i.e. whether the truth of one text fragment follows from that of the other fragment.",
                "id": "http://w3id.org/meta-share/omtd-share/RecognizingTextualEntailment",
                "name": "Recognizing Textual Entailment"
            },
            {
                "comment": "The task/process where computer systems try to automatically answer questions posed by users in the form of natural language.",
                "id": "http://w3id.org/meta-share/omtd-share/QuestionAnswering",
                "name": "Question Answering"
            },
            {
                "comment": "The task/process of identifying the topic of a text or dataset (e.g. by clustering keywords or using topic models)",
                "id": "http://w3id.org/meta-share/omtd-share/TopicDetection",
                "name": "Topic detection"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/KnowledgeDiscovery",
        "name": "Knowledge discovery"
    },
    {
        "comment": "In Machine Learning, it refers to the use of algorithms that learn from previous data in order to make predictions on data (by estimating probabilities from previous data)",
        "id": "http://w3id.org/meta-share/omtd-share/Prediction",
        "name": "Prediction"
    },
    {
        "comment": "The activity of obtaining information resources relevant to an information need from a collection of information resources; searches can be based on full-text or other content-based indexing",
        "children": [
            {
                "comment": "A type of search that seeks to improve search accuracy by understanding the searcher's intent and the contextual meaning of terms as they appear in the searchable dataspace, whether on the Web or within a closed system, to generate more relevant results.",
                "id": "http://w3id.org/meta-share/omtd-share/SemanticSearch",
                "name": "Semantic search"
            },
            {
                "comment": "The process/task of removing (filtering out) redundant or unwanted information from an information stream using (semi)automated or computerized methods prior to presentation to a human user; the selection of the items is based on the correlation between the content of the items and the user\u2019s preferences (content-based filtering) or the correlation between people with similar preferences (collaborative filtering)",
                "children": [
                    {
                        "comment": "The delivery of information in the form of suggestions by recommender systems; recommender systems seek to predict the \"rating\" or \"preference\" that a user would give to an item",
                        "id": "http://w3id.org/meta-share/omtd-share/InformationFilteringByRecommenderSystems",
                        "name": "Information filtering by recommender systems"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/InformationFiltering",
                "name": "Information filtering"
            },
            {
                "comment": "A type of search which, in contrast to traditional lookup search, covers a broad class of activities, such as investigating, evaluating, comparing, and synthesizing",
                "id": "http://w3id.org/meta-share/omtd-share/ExploratorySearch",
                "name": "Exploratory search"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/InformationRetrieval",
        "name": "Information retrieval"
    },
    {
        "comment": "The process/task of extracting, organising and systematising knowledge usually of a specific domain from external sources so that it can be used in a knowledge-based system",
        "children": [
            {
                "comment": "The task/process of creating an ontology based on other resources (corpora, other lexical resources, etc.)",
                "id": "http://w3id.org/meta-share/omtd-share/OntologyAcquisition",
                "name": "Ontology acquisition"
            },
            {
                "comment": "The task/process of improving an ontology, typically by adding new relations or entities",
                "id": "http://w3id.org/meta-share/omtd-share/OntologyEnhancement",
                "name": "Ontology enhancement"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/KnowledgeAcquisition",
        "name": "Knowledge acquisition"
    },
    {
        "comment": "The task/process of representing information about entities in a form that machines are capable of understanding it",
        "id": "http://w3id.org/meta-share/omtd-share/KnowledgeRepresentation",
        "name": "Knowledge Representation"
    },
    {
        "comment": "The process/task of automatically extracting structured information from unstructured and/or semi-structured data",
        "children": [
            {
                "comment": "The task/process of assigning documents into classes or categories",
                "id": "http://w3id.org/meta-share/omtd-share/TextCategorization",
                "name": "Text categorization"
            },
            {
                "comment": "The process/task of identifying types of feelings (e.g. anger, fear, happiness, sadness, etc.) in the linguistic expression of texts or facial expressions",
                "id": "http://w3id.org/meta-share/omtd-share/EmotionDetection",
                "name": "Emotion detection"
            },
            {
                "comment": "The process/task of computationally identifying and categorizing opinions expressed in a piece of text, especially in order to determine whether the writer's attitude towards a particular topic, product, etc. is positive, negative, or neutral",
                "id": "http://w3id.org/meta-share/omtd-share/SentimentAnalysis",
                "name": "Sentiment analysis"
            },
            {
                "comment": "Extraction of information that pertains to specific domains/disciplines; it can be used combined with \"Annotation type\" to specify the type of information extracted",
                "children": [
                    {
                        "comment": "The task/process of detecting in a text and extracting information relevant to funding (e.g. funding programme, award, funder etc.)",
                        "id": "http://w3id.org/meta-share/omtd-share/ExtractionOfFundingInformation",
                        "name": "Extraction of funding information"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/ExtractionOfDomainSpecificInformation",
                "name": "Extraction of domain-specific information"
            },
            {
                "comment": "The process/task of identifying and classifying relation mentions between entities in text and/or data.",
                "id": "http://w3id.org/meta-share/omtd-share/RelationExtraction",
                "name": "Relation extraction"
            },
            {
                "comment": "The process/task of identifying and representing argumentation in text, so that systems have the ability to use them in tasks, such as automated logical reasoning",
                "id": "http://w3id.org/meta-share/omtd-share/ComputationalArgumentation",
                "name": "Computational argumentation"
            },
            {
                "comment": "The task/process of identifying keywords (words deemed indicative of the topic/subject) in a text/corpus",
                "id": "http://w3id.org/meta-share/omtd-share/KeywordExtraction",
                "name": "Keyword extraction"
            },
            {
                "comment": "The task/process of identifying conflicting statements (contradictions) in a dataset",
                "id": "http://w3id.org/meta-share/omtd-share/ContradictionDetection",
                "name": "Contradiction detection"
            },
            {
                "comment": "The task/process of identifying and extracting (especially from political speech texts) pieces of text that aim to persuade",
                "id": "http://w3id.org/meta-share/omtd-share/PersuasiveExpressionMining",
                "name": "Persuasive expression mining"
            },
            {
                "comment": "A task/process that intends to recognize for two text fragments whether the meaning of one text is entailed in that of the other, i.e. whether the truth of one text fragment follows from that of the other fragment.",
                "id": "http://w3id.org/meta-share/omtd-share/RecognizingTextualEntailment",
                "name": "Recognizing Textual Entailment"
            },
            {
                "comment": "A subtask of information extraction that seeks to locate and classify named entities in text into pre-defined categories such as the names of persons, organizations, locations, expressions of times, quantities, monetary values, percentages, etc.",
                "id": "http://w3id.org/meta-share/omtd-share/NamedEntityRecognition",
                "name": "Named Entity Recognition"
            },
            {
                "comment": "The task/process of detecting in a text mentions of a specific class of entities (e.g. biochemical entities, historical persons)",
                "id": "http://w3id.org/meta-share/omtd-share/EntityMentionRecognition",
                "name": "Entity mention recognition"
            },
            {
                "comment": "The task/process where computer systems try to automatically answer questions posed by users in the form of natural language.",
                "id": "http://w3id.org/meta-share/omtd-share/QuestionAnswering",
                "name": "Question Answering"
            },
            {
                "comment": "The act/process of identifying and extracting candidate terms from a domain-specific corpus",
                "id": "http://w3id.org/meta-share/omtd-share/TermExtraction",
                "name": "Term extraction"
            },
            {
                "comment": "The task/process of identifying temporal expressions (also called timex) in a text in order to extract temporal information",
                "id": "http://w3id.org/meta-share/omtd-share/TemporalExpressionRecognition",
                "name": "Temporal expression recognition"
            },
            {
                "comment": "The process/task of identifying events in data (text, video, images etc.), usually combined with their classification into types of events and recognition of the event attributes (e.g. time, place, participants and duration)",
                "id": "http://w3id.org/meta-share/omtd-share/EventDetection",
                "name": "Event detection"
            },
            {
                "comment": "The task/process of identifying the topic of a text or dataset (e.g. by clustering keywords or using topic models)",
                "id": "http://w3id.org/meta-share/omtd-share/TopicDetection",
                "name": "Topic detection"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/InformationExtraction",
        "name": "Information extraction"
    }
];

export var dataFormatOntologies = [

    {
        "comment": "A format used by a specific type of corpus (collection of texts)",
        "children": [
            {
                "comment": "KEA-style (Keyphrase Extraction Algorithm) corpus",
                "id": "http://w3id.org/meta-share/omtd-share/KeaCorpus",
                "name": "KEA corpus"
            },
            {
                "comment": "Reuters-21578 corpus transformed into text format using ExtractReuters in the lucene-benchmarks project",
                "id": "http://w3id.org/meta-share/omtd-share/Reuters21578Txt",
                "name": "Reuters21578 Txt"
            },
            {
                "comment": "Reuters-21578 corpus in SGML format",
                "id": "http://w3id.org/meta-share/omtd-share/Reuters21578Sgml",
                "name": "Reuters21578 SGML"
            },
            {
                "comment": "Data format specific to the ACL Anthology Reference Corpus (http://acl-arc.comp.nus.edu.sg/), most probably version 20080325",
                "id": "http://w3id.org/meta-share/omtd-share/AclAnthologyCorpusFormat",
                "name": "ACL Anthology Corpus format"
            },
            {
                "comment": "Format of the Tu\u0308bingen Partially Parsed Corpus of Written German (Tu\u0308PP-D/Z) XML files; T\u00fcPP D/Z (http://www.sfs.uni-tuebingen.de/de/ascl/ressourcen/corpora/tuepp-dz.html) is a collection of articles from the German newspaper taz (die tageszeitung) annotated and encoded in a XML format.",
                "id": "http://w3id.org/meta-share/omtd-share/Tuepp",
                "name": "Tuepp"
            },
            {
                "comment": "An XML data exchange format developed within the WebLicht architecture to facilitate efficient interoperability between the tools; it allows the various linguistic annotations produced by the tools within WebLicht to be stored in one document; it supports incremental enrichment of linguistic annotations at various levels of analysis in a stand-\u00adoff XML\u2010based format",
                "id": "http://w3id.org/meta-share/omtd-share/Tcf",
                "name": "TCF"
            },
            {
                "comment": "File format used by the Web1T n-gram corpus, a huge collection of n-grams collected from the internet.",
                "id": "http://w3id.org/meta-share/omtd-share/Web1t",
                "name": "Web1T"
            },
            {
                "comment": "Format of the Aimed corpus (225 abstracts from MEDLINE) with the gold standard sentence, protein, protein-protein interaction annotations.",
                "id": "http://w3id.org/meta-share/omtd-share/AimedCorpusFormat",
                "name": "AIMED corpus format"
            },
            {
                "comment": "A tab-separated format with limited markup (e.g. for sentences, documents, but not recursive structures like parse-trees) used by the IMS Open Corpus Workbench.",
                "id": "http://w3id.org/meta-share/omtd-share/Imscwb",
                "name": "imsCwb"
            },
            {
                "comment": "The TIGER XML format was created for encoding syntactic constituency structures in the German TIGER corpus. It has since been used for many other corpora as well. TIGERSearch is a linguistic search engine specifically targetting this format. The format has later been extended to also support semantic frame annotations.",
                "id": "http://w3id.org/meta-share/omtd-share/TigerXml",
                "name": "Tiger XML"
            },
            {
                "comment": "Data format for the XML version of the British National Corpus (http://www.natcorp.ox.ac.uk/)",
                "id": "http://w3id.org/meta-share/omtd-share/BncFormat",
                "name": "BNC format"
            },
            {
                "comment": "The NLP Interchange Format (NIF) is an RDF/OWL-based format that aims to achieve interoperability between Natural Language Processing (NLP) tools, language resources and annotations; it consists of specifications, ontologies and software (overview), which are combined under the version identifier \"NIF 2.0\", but are versioned individually",
                "id": "http://w3id.org/meta-share/omtd-share/Nif",
                "name": "NIF"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/CorpusFormat",
        "name": "Corpus format"
    },
    {
        "comment": "Formats for RDF (Resource Description Framework) resources",
        "children": [
            {
                "comment": "Data format for RDF (Resource Description Framework) XML format; RDF/XML is a serialisation for RDF",
                "id": "http://w3id.org/meta-share/omtd-share/Rdf_xml",
                "name": "RDF/XML"
            },
            {
                "comment": "Superclass for formats used for OWL",
                "children": [
                    {
                        "comment": "XML format for OWL ontologies",
                        "id": "http://w3id.org/meta-share/omtd-share/Owl_xml",
                        "name": "OWL/XML"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Owl",
                "name": "OWL"
            },
            {
                "comment": "Textual syntax for RDF that allows an RDF graph to be completely written in a compact and natural text form, with abbreviations for common usage patterns and datatypes.",
                "id": "http://w3id.org/meta-share/omtd-share/Turtle",
                "name": "Turtle"
            },
            {
                "comment": "Serialization format for ontologies according to the Open Biomedical Ontologies model.",
                "id": "http://w3id.org/meta-share/omtd-share/Obo",
                "name": "OBO"
            },
            {
                "comment": "The NLP Interchange Format (NIF) is an RDF/OWL-based format that aims to achieve interoperability between Natural Language Processing (NLP) tools, language resources and annotations; it consists of specifications, ontologies and software (overview), which are combined under the version identifier \"NIF 2.0\", but are versioned individually",
                "id": "http://w3id.org/meta-share/omtd-share/Nif",
                "name": "NIF"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/RdfFormats",
        "name": "RDF formats"
    },
    {
        "comment": "Formats used for databases",
        "children": [
            {
                "comment": "Data format for Microsoft Access database",
                "id": "http://w3id.org/meta-share/omtd-share/MsAccessDatabase",
                "name": "MS-Access database"
            },
            {
                "comment": "For JDBC databases",
                "id": "http://w3id.org/meta-share/omtd-share/Jdbc",
                "name": "JDBC"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/DatabaseFormat",
        "name": "Database format"
    },
    {
        "comment": "Superclass for wiki formats",
        "children": [
            {
                "comment": "Wiki markup for formatting",
                "id": "http://w3id.org/meta-share/omtd-share/MediaWikiMarkup",
                "name": "Media Wiki markup"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/WikiFormats",
        "name": "Wiki formats"
    },
    {
        "comment": "Any format of a computer file in which information is stored in the form of ones and zeros, or in some other binary (two-state) sequence; used mainly for executable files or files that need to be interpreted by a computer program",
        "children": [
            {
                "comment": "A compressed binary encoding of GATE XML",
                "id": "http://w3id.org/meta-share/omtd-share/FastInfoset",
                "name": "Fast Infoset"
            },
            {
                "comment": "Data format for PDF files (Portable Document Format)",
                "id": "http://w3id.org/meta-share/omtd-share/Pdf",
                "name": "PDF"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/BinaryFormat",
        "name": "Binary format"
    },
    {
        "comment": "Any format based on columns",
        "children": [
            {
                "comment": "Data format with comma-separated values",
                "id": "http://w3id.org/meta-share/omtd-share/Csv",
                "name": "CSV"
            },
            {
                "comment": "Format for files with tab-separated values",
                "id": "http://w3id.org/meta-share/omtd-share/Tsv",
                "name": "TSV"
            },
            {
                "comment": "Data format for Microsoft Excel documents",
                "id": "http://w3id.org/meta-share/omtd-share/MsExcel",
                "name": "MS-Excel"
            },
            {
                "comment": "A tab-separated format with limited markup (e.g. for sentences, documents, but not recursive structures like parse-trees) used by the IMS Open Corpus Workbench.",
                "id": "http://w3id.org/meta-share/omtd-share/Imscwb",
                "name": "imsCwb"
            },
            {
                "comment": "Formats used in the CoNLL Shared Tasks",
                "children": [
                    {
                        "comment": "The CoNLL 2006 (aka CoNLL-X) format targets dependency parsing. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2006",
                        "name": "CoNLL-2006"
                    },
                    {
                        "comment": "The CoNLL 2002 format encodes named entity spans. Fields are separated by a single space. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2002",
                        "name": "CoNLL-2002"
                    },
                    {
                        "comment": "The CoNLL 2004 format encodes named entity spans and chunk spans. Fields are separated by a single space. Sentences are separated by a blank new line. Named entities and chunks are encoded in the IOB1 format. I.e. a B prefix is only used if the category of the following span differs from the category of the current span.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2003",
                        "name": "CoNLL-2003"
                    },
                    {
                        "comment": "The CoNLL 2000 format represents POS and Chunk tags. Fields in a line are separated by spaces. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2000",
                        "name": "CoNLL-2000"
                    },
                    {
                        "comment": "The CoNLL 2008 format targets syntactic and semantic dependencies. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2008",
                        "name": "CoNLL-2008"
                    },
                    {
                        "comment": "The CoNLL 2009 format targets semantic role labeling. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2009",
                        "name": "CoNLL-2009"
                    },
                    {
                        "comment": "Format used for CoNLL.",
                        "id": "http://w3id.org/meta-share/omtd-share/ConllU",
                        "name": "CoNLL-U"
                    },
                    {
                        "comment": "The CoNLL 2012 format targets semantic role labeling and coreference. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2012",
                        "name": "CoNLL-2012"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/ConllFormat",
                "name": "CoNLL format"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/TabularFormat",
        "name": "Tabular format"
    },
    {
        "comment": "Formats used for linked data",
        "children": [
            {
                "comment": "Data format encoding Linked Data using JSON",
                "id": "http://w3id.org/meta-share/omtd-share/Json_ld",
                "name": "JSON/LD"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/LinkedDataFormat",
        "name": "Linked data format"
    },
    {
        "comment": "Superclass of JSON formats",
        "children": [
            {
                "comment": "Data format encoding Linked Data using JSON",
                "id": "http://w3id.org/meta-share/omtd-share/Json_ld",
                "name": "JSON/LD"
            },
            {
                "comment": "JSON format of the Genia dataset",
                "id": "http://w3id.org/meta-share/omtd-share/Json_genia",
                "name": "JSON/Genia"
            },
            {
                "comment": "KAF (also known as Knowledge Annotation Format) is a language neutral annotation format representing both morpho-syntactic and semantic annotation of documents through a stand-off multilayered structure",
                "id": "http://w3id.org/meta-share/omtd-share/Kaf",
                "name": "KAF"
            },
            {
                "comment": "Common format for social media data from http://datasift.com",
                "id": "http://w3id.org/meta-share/omtd-share/Datasift_json",
                "name": "DataSift/JSON"
            },
            {
                "comment": "AlvisAE protocol format",
                "id": "http://w3id.org/meta-share/omtd-share/Cadixe_json",
                "name": "Cadixe/JSON"
            },
            {
                "comment": "A Twitter-style JSON format used for GATE documents",
                "id": "http://w3id.org/meta-share/omtd-share/Gate_json",
                "name": "GATE/JSON"
            },
            {
                "comment": "A structured model and format to enable annotations to be shared and reused across different hardware and software platforms.",
                "id": "http://w3id.org/meta-share/omtd-share/WebAnnotationFormat",
                "name": "Web annotation format"
            },
            {
                "comment": "UIMA serialisation in JSON",
                "id": "http://w3id.org/meta-share/omtd-share/Uima_json",
                "name": "UIMA/JSON"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Json",
        "name": "JSON"
    },
    {
        "comment": "Formats used for wikipedia",
        "children": [
            {
                "comment": "Format for wikipedia discussion pages",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaDiscussion",
                "name": "Wikipedia discussion"
            },
            {
                "comment": "Format of general article infos",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaArticleInfo",
                "name": "Wikipedia article info"
            },
            {
                "comment": "Format of wikipedia pages in the database (articles, discussions, etc)",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaPage",
                "name": "Wikipedia page"
            },
            {
                "comment": "Reads all article pages that match a query created by the numerous parameters of this class.",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaQuery",
                "name": "Wikipedia query"
            },
            {
                "comment": "Pairs of adjacent revisions of all articles",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaRevisionPair",
                "name": "Wikipedia revision pair"
            },
            {
                "comment": "Format for wikipedia pages that contain or do not contain the templates specified in the template whitelist and template blacklist",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaTemplateFilteredArticle",
                "name": "Wikipedia template filtered article"
            },
            {
                "comment": "Format for wikipedia links",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaLink",
                "name": "Wikipedia link"
            },
            {
                "comment": "Format for wikipedia revision pages",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaRevision",
                "name": "Wikipedia revision"
            },
            {
                "comment": "Format for wikipedia articles",
                "id": "http://w3id.org/meta-share/omtd-share/WikipediaArticle",
                "name": "Wikipedia article"
            },
            {
                "comment": "The Java Wikipedia API (Bliki engine) is a parser library for converting Wikipedia wikitext notation to HTML.",
                "id": "http://w3id.org/meta-share/omtd-share/Blikiwikipedia",
                "name": "blikiWikipedia"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/WikipediaFormat",
        "name": "Wikipedia format"
    },
    {
        "comment": "Solr format",
        "children": [
            {
                "comment": "Superclass for formats used for OWL",
                "children": [
                    {
                        "comment": "XML format for OWL ontologies",
                        "id": "http://w3id.org/meta-share/omtd-share/Owl_xml",
                        "name": "OWL/XML"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Owl",
                "name": "OWL"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Solr",
        "name": "Solr"
    },
    {
        "comment": "Superclass for grouping together XML formats",
        "children": [
            {
                "comment": "Data format for RDF (Resource Description Framework) XML format; RDF/XML is a serialisation for RDF",
                "id": "http://w3id.org/meta-share/omtd-share/Rdf_xml",
                "name": "RDF/XML"
            },
            {
                "comment": "Format according to the Prague Markup Language (http://ufal.mff.cuni.cz/jazz/PML/index_en.html); PML is a generic data format based on XML intended for storing linguistically annotated data, such as the Prague Dependency Treebank, also annotation lexicons, etc.",
                "id": "http://w3id.org/meta-share/omtd-share/Pml",
                "name": "PML"
            },
            {
                "comment": "Data format for TEI-encoded (Text Encoding Initiative) texts",
                "id": "http://w3id.org/meta-share/omtd-share/Tei",
                "name": "TEI"
            },
            {
                "comment": "XPath is a language for addressing parts of an XML document, designed to be used by both XSLT and XPointer.",
                "id": "http://w3id.org/meta-share/omtd-share/Xpath",
                "name": "XPath"
            },
            {
                "comment": "XML format for OWL ontologies",
                "id": "http://w3id.org/meta-share/omtd-share/Owl_xml",
                "name": "OWL/XML"
            },
            {
                "comment": "The purpose of the TMX format is to provide a standard method to describe translation memory data that is being exchanged among tools and/or translation vendors, while introducing little or no loss of critical data during the process.",
                "id": "http://w3id.org/meta-share/omtd-share/Tmx",
                "name": "TMX"
            },
            {
                "comment": "Format of the Tu\u0308bingen Partially Parsed Corpus of Written German (Tu\u0308PP-D/Z) XML files; T\u00fcPP D/Z (http://www.sfs.uni-tuebingen.de/de/ascl/ressourcen/corpora/tuepp-dz.html) is a collection of articles from the German newspaper taz (die tageszeitung) annotated and encoded in a XML format.",
                "id": "http://w3id.org/meta-share/omtd-share/Tuepp",
                "name": "Tuepp"
            },
            {
                "comment": "Data format for XHTML (Extensible HyperText Markup Language)",
                "id": "http://w3id.org/meta-share/omtd-share/Xhtml",
                "name": "XHTML"
            },
            {
                "comment": "BioC is a simple format to share text data and annotations.",
                "id": "http://w3id.org/meta-share/omtd-share/XmlBioc",
                "name": "XML BioC"
            },
            {
                "comment": "Data format for documents and corpora using the XCES standard (Corpus Encoding Standard for XML), cf. http://www.xces.org/",
                "children": [
                    {
                        "comment": "A variant of XCES implemented for documents",
                        "id": "http://w3id.org/meta-share/omtd-share/XcesIlspVariant",
                        "name": "XCES ILSP variant"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Xces",
                "name": "XCES"
            },
            {
                "comment": "Data format according to the EMMA (Extensible MultiModal Annotation markup language) specifications, cf. https://www.w3.org/TR/2007/CR-emma-20071211/",
                "id": "http://w3id.org/meta-share/omtd-share/Emma",
                "name": "EMMA"
            },
            {
                "comment": "An XML data exchange format developed within the WebLicht architecture to facilitate efficient interoperability between the tools; it allows the various linguistic annotations produced by the tools within WebLicht to be stored in one document; it supports incremental enrichment of linguistic annotations at various levels of analysis in a stand-\u00adoff XML\u2010based format",
                "id": "http://w3id.org/meta-share/omtd-share/Tcf",
                "name": "TCF"
            },
            {
                "comment": "Data format according to the Pronunciation Lexicon Specification (PLS)",
                "id": "http://w3id.org/meta-share/omtd-share/Pls",
                "name": "PLS"
            },
            {
                "comment": "FoLiA is an XML-based annotation format, suitable for the representation of linguistically annotated language resources",
                "id": "http://w3id.org/meta-share/omtd-share/Folia",
                "name": "FoLiA"
            },
            {
                "comment": "Inline XML file format",
                "id": "http://w3id.org/meta-share/omtd-share/InlineXml",
                "name": "Inline XML"
            },
            {
                "comment": "Data format for the XML Metadata Interchange (XMI), which is an Object Management Group (OMG) standard for exchanging metadata information via Extensible Markup Language (XML)",
                "id": "http://w3id.org/meta-share/omtd-share/Xmi",
                "name": "XMI"
            },
            {
                "comment": "The TIGER XML format was created for encoding syntactic constituency structures in the German TIGER corpus. It has since been used for many other corpora as well. TIGERSearch is a linguistic search engine specifically targetting this format. The format has later been extended to also support semantic frame annotations.",
                "id": "http://w3id.org/meta-share/omtd-share/TigerXml",
                "name": "Tiger XML"
            },
            {
                "comment": "Format for linguistic annotations of documents used for the ALVIS framework",
                "id": "http://w3id.org/meta-share/omtd-share/AlvisEnrichedDocumentFormat",
                "name": "ALVIS Enriched Document format"
            },
            {
                "comment": "Data format for the XML version of the British National Corpus (http://www.natcorp.ox.ac.uk/)",
                "id": "http://w3id.org/meta-share/omtd-share/BncFormat",
                "name": "BNC format"
            },
            {
                "comment": "XML-based format for GATE components",
                "id": "http://w3id.org/meta-share/omtd-share/GateXml",
                "name": "GATE XML"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Xml",
        "name": "XML"
    },
    {
        "comment": "Any format used for documents (textual resources)",
        "children": [
            {
                "comment": "Rich Text Format; proprietary data format of Microsoft",
                "id": "http://w3id.org/meta-share/omtd-share/Rtf",
                "name": "RTF"
            },
            {
                "comment": "HTML format",
                "children": [
                    {
                        "comment": "Format according to the specifications of HTML5 Microdata",
                        "id": "http://w3id.org/meta-share/omtd-share/Html5Microdata",
                        "name": "HTML5 Microdata"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Html",
                "name": "HTML"
            },
            {
                "comment": "Data format for documents using Tex (a typesetting system)",
                "id": "http://w3id.org/meta-share/omtd-share/Tex",
                "name": "TEX"
            },
            {
                "comment": "Data format encoding Linked Data using JSON",
                "id": "http://w3id.org/meta-share/omtd-share/Json_ld",
                "name": "JSON/LD"
            },
            {
                "comment": "Textual format used for PubMed articles",
                "id": "http://w3id.org/meta-share/omtd-share/Pubmed",
                "name": "PubMed"
            },
            {
                "comment": "Plain Text",
                "id": "http://w3id.org/meta-share/omtd-share/Text_plain",
                "name": "Plain Text"
            },
            {
                "comment": "SGML format",
                "id": "http://w3id.org/meta-share/omtd-share/Sgml",
                "name": "SGML"
            },
            {
                "comment": "Data format for XHTML (Extensible HyperText Markup Language)",
                "id": "http://w3id.org/meta-share/omtd-share/Xhtml",
                "name": "XHTML"
            },
            {
                "comment": "Data format for Microsoft Excel documents",
                "id": "http://w3id.org/meta-share/omtd-share/MsExcel",
                "name": "MS-Excel"
            },
            {
                "comment": "Formats used  for BioNLP shared tasks",
                "children": [
                    {
                        "comment": "File format used for the BioNLP Shared Task format",
                        "id": "http://w3id.org/meta-share/omtd-share/Bionlp",
                        "name": "BioNLP"
                    },
                    {
                        "comment": "JSON format of the Genia dataset",
                        "id": "http://w3id.org/meta-share/omtd-share/Json_genia",
                        "name": "JSON/Genia"
                    },
                    {
                        "comment": "Format used in BioNLP Shared Task 2013",
                        "id": "http://w3id.org/meta-share/omtd-share/BionlpSt2013A1_a2",
                        "name": "BioNLP-ST 2013 a1/a2"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/BionlpFormats",
                "name": "BioNLP formats"
            },
            {
                "comment": "Data format according to the Pronunciation Lexicon Specification (PLS)",
                "id": "http://w3id.org/meta-share/omtd-share/Pls",
                "name": "PLS"
            },
            {
                "comment": "Data format for PostScript files",
                "id": "http://w3id.org/meta-share/omtd-share/Postscript",
                "name": "postscript"
            },
            {
                "comment": "Data format for Microsoft Word documents",
                "id": "http://w3id.org/meta-share/omtd-share/MsWord",
                "name": "MS-Word"
            },
            {
                "comment": "Data format for the XML Metadata Interchange (XMI), which is an Object Management Group (OMG) standard for exchanging metadata information via Extensible Markup Language (XML)",
                "id": "http://w3id.org/meta-share/omtd-share/Xmi",
                "name": "XMI"
            },
            {
                "comment": "Data format for PDF files (Portable Document Format)",
                "id": "http://w3id.org/meta-share/omtd-share/Pdf",
                "name": "PDF"
            },
            {
                "comment": "Data format for documents using LaTeX (a high-quality typesetting system very popular for scientific documents)",
                "id": "http://w3id.org/meta-share/omtd-share/Latex",
                "name": "LATEX"
            },
            {
                "comment": "Format used in Cochrane texts",
                "id": "http://w3id.org/meta-share/omtd-share/Cochrane",
                "name": "Cochrane"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/DocumentFormat",
        "name": "Document format"
    },
    {
        "comment": "Any format used for annotated textual documents",
        "children": [
            {
                "comment": "Export format for annotated corpora in the NeGra project",
                "id": "http://w3id.org/meta-share/omtd-share/NegraExport",
                "name": "NeGra export"
            },
            {
                "comment": "Format according to the Prague Markup Language (http://ufal.mff.cuni.cz/jazz/PML/index_en.html); PML is a generic data format based on XML intended for storing linguistically annotated data, such as the Prague Dependency Treebank, also annotation lexicons, etc.",
                "id": "http://w3id.org/meta-share/omtd-share/Pml",
                "name": "PML"
            },
            {
                "comment": "Format according to the specifications of HTML5 Microdata",
                "id": "http://w3id.org/meta-share/omtd-share/Html5Microdata",
                "name": "HTML5 Microdata"
            },
            {
                "comment": "Data format for TEI-encoded (Text Encoding Initiative) texts",
                "id": "http://w3id.org/meta-share/omtd-share/Tei",
                "name": "TEI"
            },
            {
                "comment": "Topic proportions in the shape [\\t]\\t\\t... sorted",
                "id": "http://w3id.org/meta-share/omtd-share/MalletLdaTopicProportionsSorted",
                "name": "Mallet LDA Topic Proportions Sorted"
            },
            {
                "comment": "BRAT stand-off format for annotations (BRAT is a online environment for collaborative text annotation, cf. http://brat.nlplab.org/)",
                "id": "http://w3id.org/meta-share/omtd-share/Brat",
                "name": "BRAT"
            },
            {
                "comment": "The purpose of the TMX format is to provide a standard method to describe translation memory data that is being exchanged among tools and/or translation vendors, while introducing little or no loss of critical data during the process.",
                "id": "http://w3id.org/meta-share/omtd-share/Tmx",
                "name": "TMX"
            },
            {
                "comment": "Format of the Tu\u0308bingen Partially Parsed Corpus of Written German (Tu\u0308PP-D/Z) XML files; T\u00fcPP D/Z (http://www.sfs.uni-tuebingen.de/de/ascl/ressourcen/corpora/tuepp-dz.html) is a collection of articles from the German newspaper taz (die tageszeitung) annotated and encoded in a XML format.",
                "id": "http://w3id.org/meta-share/omtd-share/Tuepp",
                "name": "Tuepp"
            },
            {
                "comment": "Topic proportions in the shape [\\t]\\t\\t...",
                "id": "http://w3id.org/meta-share/omtd-share/MalletLdaTopicProportions",
                "name": "Mallet LDA Topic Proportions"
            },
            {
                "comment": "Data format for Microsoft Excel documents",
                "id": "http://w3id.org/meta-share/omtd-share/MsExcel",
                "name": "MS-Excel"
            },
            {
                "comment": "Data format for documents and corpora using the XCES standard (Corpus Encoding Standard for XML), cf. http://www.xces.org/",
                "children": [
                    {
                        "comment": "A variant of XCES implemented for documents",
                        "id": "http://w3id.org/meta-share/omtd-share/XcesIlspVariant",
                        "name": "XCES ILSP variant"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Xces",
                "name": "XCES"
            },
            {
                "comment": "Penn Tree Bank formats",
                "children": [
                    {
                        "comment": "Penn Treebank combined format",
                        "id": "http://w3id.org/meta-share/omtd-share/PtbCombined",
                        "name": "PTB-combined"
                    },
                    {
                        "comment": "Penn Treebank chunked format",
                        "id": "http://w3id.org/meta-share/omtd-share/PtbChunked",
                        "name": "PTB-chunked"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Ptb",
                "name": "PTB"
            },
            {
                "comment": "Format of the I2B2 challenge",
                "id": "http://w3id.org/meta-share/omtd-share/I2b2",
                "name": "I2B2"
            },
            {
                "comment": "Format for TGrep2 (search engine for searching syntactic parse trees represented as bracketed structures)",
                "id": "http://w3id.org/meta-share/omtd-share/Tgrep2",
                "name": "TGrep2"
            },
            {
                "comment": "KAF (also known as Knowledge Annotation Format) is a language neutral annotation format representing both morpho-syntactic and semantic annotation of documents through a stand-off multilayered structure",
                "id": "http://w3id.org/meta-share/omtd-share/Kaf",
                "name": "KAF"
            },
            {
                "comment": "GrAF (Graph Annotation Format) is an extension of the Linguistic Annotation Framework (LAF)",
                "id": "http://w3id.org/meta-share/omtd-share/Graf",
                "name": "GrAF"
            },
            {
                "comment": "Data format according to the EMMA (Extensible MultiModal Annotation markup language) specifications, cf. https://www.w3.org/TR/2007/CR-emma-20071211/",
                "id": "http://w3id.org/meta-share/omtd-share/Emma",
                "name": "EMMA"
            },
            {
                "comment": "An XML data exchange format developed within the WebLicht architecture to facilitate efficient interoperability between the tools; it allows the various linguistic annotations produced by the tools within WebLicht to be stored in one document; it supports incremental enrichment of linguistic annotations at various levels of analysis in a stand-\u00adoff XML\u2010based format",
                "id": "http://w3id.org/meta-share/omtd-share/Tcf",
                "name": "TCF"
            },
            {
                "comment": "FoLiA is an XML-based annotation format, suitable for the representation of linguistically annotated language resources",
                "id": "http://w3id.org/meta-share/omtd-share/Folia",
                "name": "FoLiA"
            },
            {
                "comment": "DkPro format for tokenized files containing one sentence per line and tokens split by whitespaces.",
                "id": "http://w3id.org/meta-share/omtd-share/DkproTokenized",
                "name": "DKPro tokenized"
            },
            {
                "comment": "Format of the LLL challenge",
                "id": "http://w3id.org/meta-share/omtd-share/Lll",
                "name": "LLL"
            },
            {
                "comment": "Inline XML file format",
                "id": "http://w3id.org/meta-share/omtd-share/InlineXml",
                "name": "Inline XML"
            },
            {
                "comment": "AlvisAE protocol format",
                "id": "http://w3id.org/meta-share/omtd-share/Cadixe_json",
                "name": "Cadixe/JSON"
            },
            {
                "comment": "The NAF format is linguistic annotation format designed for complex NLP pipelines. NAF combines strengths of the Linguistic Annotation Framework (LAF) as described in Ide et al. (2003) and the NLP Interchange Format (Hellman et al. 2013, NIF).",
                "id": "http://w3id.org/meta-share/omtd-share/Naf",
                "name": "NAF"
            },
            {
                "comment": "Factored tag lemma format",
                "id": "http://w3id.org/meta-share/omtd-share/FactoredTagLemFormat",
                "name": "Factored tag lem format"
            },
            {
                "comment": "The TIGER XML format was created for encoding syntactic constituency structures in the German TIGER corpus. It has since been used for many other corpora as well. TIGERSearch is a linguistic search engine specifically targetting this format. The format has later been extended to also support semantic frame annotations.",
                "id": "http://w3id.org/meta-share/omtd-share/TigerXml",
                "name": "Tiger XML"
            },
            {
                "comment": "Format for linguistic annotations of documents used for the ALVIS framework",
                "id": "http://w3id.org/meta-share/omtd-share/AlvisEnrichedDocumentFormat",
                "name": "ALVIS Enriched Document format"
            },
            {
                "comment": "CHAT (Codes for the Human Analysis of Transcripts) transcription format; used by CHILDES corpora",
                "id": "http://w3id.org/meta-share/omtd-share/Chat",
                "name": "CHAT"
            },
            {
                "comment": "Format following Dialogue Act Markup Language (DiAML) which is defined within the ISO standard 24617-2",
                "id": "http://w3id.org/meta-share/omtd-share/Diaml",
                "name": "DIAML"
            },
            {
                "comment": "A structured model and format to enable annotations to be shared and reused across different hardware and software platforms.",
                "id": "http://w3id.org/meta-share/omtd-share/WebAnnotationFormat",
                "name": "Web annotation format"
            },
            {
                "comment": "The NLP Interchange Format (NIF) is an RDF/OWL-based format that aims to achieve interoperability between Natural Language Processing (NLP) tools, language resources and annotations; it consists of specifications, ontologies and software (overview), which are combined under the version identifier \"NIF 2.0\", but are versioned individually",
                "id": "http://w3id.org/meta-share/omtd-share/Nif",
                "name": "NIF"
            },
            {
                "comment": "Formats used in the CoNLL Shared Tasks",
                "children": [
                    {
                        "comment": "The CoNLL 2006 (aka CoNLL-X) format targets dependency parsing. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2006",
                        "name": "CoNLL-2006"
                    },
                    {
                        "comment": "The CoNLL 2002 format encodes named entity spans. Fields are separated by a single space. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2002",
                        "name": "CoNLL-2002"
                    },
                    {
                        "comment": "The CoNLL 2004 format encodes named entity spans and chunk spans. Fields are separated by a single space. Sentences are separated by a blank new line. Named entities and chunks are encoded in the IOB1 format. I.e. a B prefix is only used if the category of the following span differs from the category of the current span.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2003",
                        "name": "CoNLL-2003"
                    },
                    {
                        "comment": "The CoNLL 2000 format represents POS and Chunk tags. Fields in a line are separated by spaces. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2000",
                        "name": "CoNLL-2000"
                    },
                    {
                        "comment": "The CoNLL 2008 format targets syntactic and semantic dependencies. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2008",
                        "name": "CoNLL-2008"
                    },
                    {
                        "comment": "The CoNLL 2009 format targets semantic role labeling. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2009",
                        "name": "CoNLL-2009"
                    },
                    {
                        "comment": "Format used for CoNLL.",
                        "id": "http://w3id.org/meta-share/omtd-share/ConllU",
                        "name": "CoNLL-U"
                    },
                    {
                        "comment": "The CoNLL 2012 format targets semantic role labeling and coreference. Columns are tab-separated. Sentences are separated by a blank new line.",
                        "id": "http://w3id.org/meta-share/omtd-share/Conll2012",
                        "name": "CoNLL-2012"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/ConllFormat",
                "name": "CoNLL format"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/AnnotationFormat",
        "name": "Annotation format"
    },
    {
        "comment": "Formats used for the GATE framework",
        "children": [
            {
                "comment": "A compressed binary encoding of GATE XML",
                "id": "http://w3id.org/meta-share/omtd-share/FastInfoset",
                "name": "Fast Infoset"
            },
            {
                "comment": "Common format for social media data from http://datasift.com",
                "id": "http://w3id.org/meta-share/omtd-share/Datasift_json",
                "name": "DataSift/JSON"
            },
            {
                "comment": "A Twitter-style JSON format used for GATE documents",
                "id": "http://w3id.org/meta-share/omtd-share/Gate_json",
                "name": "GATE/JSON"
            },
            {
                "comment": "XML-based format for GATE components",
                "id": "http://w3id.org/meta-share/omtd-share/GateXml",
                "name": "GATE XML"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/GateFormat",
        "name": "GATE format"
    },
    {
        "comment": "Formats used for the UIMA CAS (Common Analysis System) objects",
        "children": [
            {
                "comment": "The CAS is the native data model used by UIMA; there are various ways of saving CAS data, using XMI, XCAS, or binary formats; this is for the serialized format",
                "id": "http://w3id.org/meta-share/omtd-share/SerializedCas",
                "name": "Serialized CAS"
            },
            {
                "comment": "Binary format used for CAS data",
                "id": "http://w3id.org/meta-share/omtd-share/BinaryCas",
                "name": "Binary CAS"
            },
            {
                "comment": "UIMA serialisation in JSON",
                "id": "http://w3id.org/meta-share/omtd-share/Uima_json",
                "name": "UIMA/JSON"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/UimaCasFormat",
        "name": "UIMA CAS format"
    }
];