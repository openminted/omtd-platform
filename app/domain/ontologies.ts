export var componentOntologies = [
    {
        "children": [
            {
                "id": "http://w3id.org/meta-share/omtd-share/DocumentClassifier",
                "name": "Document classifier"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/ContradictionDetector",
                "name": "Contradiction detector"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/EventExtractor",
                "name": "Event extractor"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/LexiconExtractorFromLexica",
                "name": "Lexicon extractor from lexica"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/LanguageIdentifier",
                "name": "Language identifier"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/VariablesDectector",
                "name": "Variables dectector"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/InformationExtractor",
                "name": "Information extractor"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/TermExtractor",
                "name": "Term extractor"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/PersuasiveExpressionMiner",
                "name": "Persuasive expression miner"
            },
            {
                "children": [
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/WordSenseDisambiguator",
                        "name": "Word sense disambiguator"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Disambiguator",
                "name": "Disambiguator"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/KeywordExtractor",
                "name": "Keyword extractor"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/SentimentAnalyzer",
                "name": "Sentiment analyzer"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/TopicExtractor",
                "name": "Topic extractor"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/EmotionRecognizer",
                "name": "Emotion recognizer"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/LexiconExtractorFromCorpora",
                "name": "Lexicon extractor from corpora"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/Analyzer",
        "name": "Analyzer"
    },
    {
        "children": [
            {
                "id": "http://w3id.org/meta-share/omtd-share/Writer",
                "name": "Writer"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/Reader",
                "name": "Reader"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/AccessComponent",
        "name": "Access Component"
    },
    {
        "children": [
            {
                "children": [
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/Summarizer",
                        "name": "Summarizer"
                    },
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/Simplifier",
                        "name": "Simplifier"
                    }
                ],
                "id": "http://w3id.org/meta-share/omtd-share/Generator",
                "name": "Generator"
            },
            {
                "children": [
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/NamedEntitityRecognizer",
                        "name": "Named entitity recognizer"
                    },
                    {
                        "children": [
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/DependencyParser",
                                "name": "Dependency parser"
                            },
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/ConstituencyParser",
                                "name": "Constituency parser"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/Parser",
                        "name": "Parser"
                    },
                    {
                        "children": [
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/SentenceSplitter",
                                "name": "Sentence splitter"
                            },
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/Tokenizer",
                                "name": "Tokenizer"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/Segmenter",
                        "name": "Segmenter"
                    },
                    {
                        "children": [
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/PartOfSpeechTagger",
                                "name": "Part of speech tagger"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/MorphologicalTagger",
                        "name": "Morphological tagger"
                    },
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/Aligner",
                        "name": "Aligner"
                    },
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/CoReferenceAnnotator",
                        "name": "Co-reference annotator"
                    },
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/Stemmer",
                        "name": "Stemmer"
                    },
                    {
                        "children": [
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/ReadabilityAnnotator",
                                "name": "Readability annotator"
                            },
                            {
                                "id": "http://w3id.org/meta-share/omtd-share/AnnotatorOfSemanticRoleLabels",
                                "name": "Annotator of semantic role labels"
                            }
                        ],
                        "id": "http://w3id.org/meta-share/omtd-share/SemanticAnnotator",
                        "name": "Semantic annotator"
                    },
                    {
                        "id": "http://w3id.org/meta-share/omtd-share/Chunker",
                        "name": "Chunker"
                    },
                    {
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
        "children": [
            {
                "id": "http://w3id.org/meta-share/omtd-share/Normalizer",
                "name": "Normalizer"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/SpellingChecker",
                "name": "Spelling checker"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/Filter",
                "name": "Filter"
            },
            {
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
        "children": [
            {
                "id": "http://w3id.org/meta-share/omtd-share/InstanceBasedLearning",
                "name": "Instance-based Learning"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/ArtificialNeuralNetwork",
                "name": "Artificial Neural Network"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/EnsembleMethod",
                "name": "Ensemble Method"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/KernelMethod",
                "name": "Kernel Method"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/DimensionalityReduction",
                "name": "Dimensionality Reduction"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/RegressionAnalysis",
                "name": "Regression Analysis"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/DecisionTrees",
                "name": "Decision Trees"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/Bayesian",
                "name": "Bayesian"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/Regularisation",
                "name": "Regularisation"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/ClusteringMethod",
                "name": "Clustering Method"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/AssociationRuleLearning",
                "name": "Association Rule Learning"
            },
            {
                "id": "http://w3id.org/meta-share/omtd-share/DeepLearning",
                "name": "Deep Learning"
            }
        ],
        "id": "http://w3id.org/meta-share/omtd-share/MachineAndStatisticalLearningMethod",
        "name": "Machine and Statistical Learning Method"
    },
    {
        "id": "http://w3id.org/meta-share/omtd-share/StatisticalLearningMethod",
        "name": "Statistical Learning Method"
    },
    {
        "id": "http://w3id.org/meta-share/omtd-share/RuleBasedMethod",
        "name": "Rule-based Method"
    },
    {
        "id": "http://w3id.org/meta-share/omtd-share/Crowdsourcing",
        "name": "Crowdsourcing"
    },
    {
        "id": "http://w3id.org/meta-share/omtd-share/MachineLearningMethod",
        "name": "Machine Learning Method"
    }

];