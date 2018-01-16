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
        "comment": "The automated processing of unstructured text and/or structured data leading to the extraction of previously hidden knowledge.",
        "children": [
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
        ],
        "id": "http://w3id.org/meta-share/omtd-share/TextAndDataMining",
        "name": "Text and Data Mining"
    },
    {
        "comment": "The process/task of reducing one or more textual documents with a computer program in order to create a summary that retains the most important points of the original document(s).",
        "id": "http://w3id.org/meta-share/omtd-share/Summarization",
        "name": "Summarization"
    },
    {
        "comment": "The process/task of converting unstructured text and data into high-quality structured data that can be further analysed to extract knowledge, support decision making etc.",
        "id": "http://w3id.org/meta-share/omtd-share/TextAndDataAnalytics",
        "name": "Text and Data Analytics"
    }

];