import { useState } from 'react';
import { EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageSrc: string;
}

interface ProjectCategory {
  name: string;
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    {/* Render image if imageUrl is provided */}
    {project.imageSrc ? (
      <img
        src={project.imageSrc}
        alt={project.title}
        className="w-full object-cover aspect-video"
      />
    ) : (
      <div className="bg-gray-200 border-2 border-dashed aspect-video" />
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </div>
);

export default function Portfolio() {
  const [categories] = useState<ProjectCategory[]>([
    {
      name: "Machine Learning & Deep Learning",
      projects: [
        {
          title: "Toxic comments filter",
          description: "Multilabel text classification model with bidirectional LSTM. Filter user comments based on six different toxicity categories.",
          tags: ["TensorFlow", "biLSTM", "Multilabel classification"],
          githubUrl: "https://github.com/laufragor/filtro-commenti-tossici",
          imageSrc: "/project_imgs/toxic_comments.png",
        },
        {
          title: "Face detection from scratch",
          description: "Detect all faces appearing in a picture. Created a dataset of faces and trained a face classifier on it, then used a sliding window technique to identify multiple faces in a picture.",
          tags: ["Computer Vision", "SVM", "Sliding window", "Non-maximum suppression"],
          githubUrl: "https://github.com/laufragor/face-detection-professionai",
          imageSrc: "/project_imgs/face_detection_agg.png",
        },
        {
          title: "Credit risk classification",
          description: "ML model to assess credit reliability for credit card approval, using existing cardholders' debt record and applicants' informations",
          tags: ["Interpretability", "Custom target variable", "SMOTE", "EDA"],
          githubUrl: "https://github.com/laufragor/affidabilita-creditizia",
          imageSrc: "/project_imgs/credit_card_approval.jpeg",
        },
        {
          title: "Cross-selling insurance",
          description: "ML model to predict if people with a health insurance policy could be interested in a car insurance policy as well",
          tags: ["Imblearn", "Scikit-learn"],
          githubUrl: "https://github.com/laufragor/cross-sell-assicurazioni",
          imageSrc: "/project_imgs/insurance_cross_selling.png",
        } 
      ],
    },
    {
      name: "Generative AI",
      projects: [
        {
          title: "Cold Email Generator",
          description: "Input the URL of a job offer from that page and generate a personalized cold email. Includes relevant portfolio links sourced from a vector database.",
          tags: ["Llama", "Groq", "ChromaDB", "Streamlit"],
          githubUrl: "https://github.com/laufragor/cold-email-generator",
          imageSrc: "/project_imgs/cold_email_generator.jpeg"
        },
        {
          title: "Q&A system for academy",
          description: "LLM based Q&A system for an e-learning academy. Reduce the staff workload in assisting their course learners.",
          tags: ["RAG", "Gemini", "FAISS", "Streamlit"],
          githubUrl: "https://github.com/laufragor/qna-academy-rag",
          imageSrc: "/project_imgs/qna_academy.png",
        },
        {
          title: "Chat with online PDFs",
          description: "Load one or multiple PDFs from the web and use Google Gemini to generate answers to your questions.",
          tags: ["Langchain", "Gemini", "FAISS", "Streamlit"],
          githubUrl: "https://github.com/laufragor/chat-with-pdf-urls/",
          imageSrc: "/project_imgs/chat_pdf.png"
        },
      ],
    },
    {
      name: "NLP, Big Data, SQL",
      projects: [
        {
          title: "SQL bank analysis",
          description: "Creation of a denormalized table (to be used for a ML model) from a bank database. The table contains many behavioral indicators for each client.",
          tags: ["SQL", "Temporary tables", "Denormalization"],
          githubUrl: "https://github.com/laufragor/sql-analisi-banca",
          imageSrc: "/project_imgs/sql_bank.jpg",
        },
        {
          title: "NLP spam detection",
          description: "Identify SPAM emails and analyze the main topics and organizations present in them",
          tags: ["NLP", "Spam detection", "gensim", "spacy"],
          githubUrl: "https://github.com/laufragor/nlp-spam-detection",
          imageSrc: "/project_imgs/spam_detection.png",
        },
        {
          title: "Wikipedia analysis",
          description: "Analysis of 150k wikipedia articles including statistics on article length and categories, word cloud for each category and text classification for categories.",
          tags: ["Big data", "Spark", "Databricks"],
          githubUrl: "https://github.com/laufragor/big-data-project",
          imageSrc: "/project_imgs/wikipedia.webp",
        },
      ],
    },
    // {
    //   name: "Statistics & Dataviz",
    //   projects: [
    //     {
    //       title: "Sentiment Analysis Pipeline",
    //       description: "Large-scale sentiment analysis system processing millions of social media posts using distributed computing.",
    //       tags: ["....."],
    //       githubUrl: "https://github.com/example/sentiment-analysis",
    //     },
    //   ],
    // }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-80 h-80 relative">
            <img 
              src="/profilepic.png" 
              alt="Profile picture" 
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>  
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Andrea Ricciardelli</h1>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Data Scientist</h2>
            <p className="text-gray-300 mb-6">
              Passionate and hard-working Data Scientist with a strong Computer Science foundation.<br></br>
              I love developing models with tangible real-word impact and I'm addicted to constantly improving my skills.
            </p>
            
            <div className="space-y-3 mb-6">
              <a
                href="mailto:andrearicciardelli@disr.it"
                className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 hover:text-indigo-300 underline"
              >
                <EnvelopeIcon className="w-5 h-5" />
                andrearicciardelli@disr.it
              </a>
              <a
                href="https://www.linkedin.com/in/andrearicciardelli9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 hover:text-indigo-300 underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .774 0 1.727v20.546C0 23.226.8 24 1.77 24h20.46c.97 0 1.77-.774 1.77-1.727V1.727C24 .774 23.2 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.326 7.564c-1.126 0-2.04-.932-2.04-2.077 0-1.145.914-2.077 2.04-2.077s2.04.932 2.04 2.077c0 1.145-.914 2.077-2.04 2.077zM20.452 20.452h-3.53v-5.966c0-1.423-.03-3.254-1.984-3.254-1.987 0-2.29 1.548-2.29 3.145v6.075h-3.53V9h3.391v1.56h.048c.472-.9 1.623-1.847 3.342-1.847 3.57 0 4.229 2.35 4.229 5.407v6.332z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/laufragor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 hover:text-indigo-300 underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.998.108-.775.418-1.305.763-1.604-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.4 11.4 0 0 1 6.003 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.767.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.624-5.479 5.918.43.37.824 1.096.824 2.21v3.285c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </a>
            </div>

            <a 
              href="/CV_Andrea_Ricciardelli.pdf"
              download
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors mx-auto md:mx-0"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download CV/Resume
            </a>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <h2 className="mx-4 text-3xl font-bold text-center">Main projects</h2>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>        
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-8 text-indigo-400">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <ProjectCard key={projectIndex} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
