import { useState } from 'react';
import { EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

interface ProjectCategory {
  name: string;
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="bg-gray-200 border-2 border-dashed aspect-video" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
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
      name: "Generative AI",
      projects: [
        {
          title: "GPT-3 Text Generator",
          description: "A sophisticated text generation system using OpenAI's GPT-3 API with custom fine-tuning for specific use cases.",
          technologies: ["Python", "OpenAI API", "FastAPI", "Docker"],
          githubUrl: "https://github.com/example/gpt3-generator",
        },
        {
          title: "Image Generation Pipeline",
          description: "End-to-end image generation system using Stable Diffusion with custom training pipeline.",
          technologies: ["PyTorch", "Stable Diffusion", "CUDA", "AWS"],
          githubUrl: "https://github.com/example/image-gen",
        },
      ],
    },
    {
      name: "Machine Learning & Deep Learning",
      projects: [
        {
          title: "Computer Vision Classifier",
          description: "Deep learning model for real-time object detection and classification using transfer learning.",
          technologies: ["TensorFlow", "OpenCV", "Python", "Keras"],
          githubUrl: "https://github.com/example/cv-classifier",
        },
      ],
    },
    {
      name: "NLP, Big Data, SQL",
      projects: [
        {
          title: "Sentiment Analysis Pipeline",
          description: "Large-scale sentiment analysis system processing millions of social media posts using distributed computing.",
          technologies: ["Spark", "BERT", "Kafka", "PostgreSQL"],
          githubUrl: "https://github.com/example/sentiment-analysis",
        },
      ],
    },
    {
      name: "Statistics & Dataviz",
      projects: [
        {
          title: "Sentiment Analysis Pipeline",
          description: "Large-scale sentiment analysis system processing millions of social media posts using distributed computing.",
          technologies: ["Spark", "BERT", "Kafka", "PostgreSQL"],
          githubUrl: "https://github.com/example/sentiment-analysis",
        },
      ],
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-48 h-48 relative">
            <img 
              src="/profilepic.png" 
              alt="Profile picture" 
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>  
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Andrea Ricciardelli</h1>
            <h2 className="text-2xl text-indigo-400 mb-4">Data Scientist</h2>
            <p className="text-gray-300 mb-6">
              Passionate and hard-working Data Scientist with a strong Computer Science foundation.<br></br>
              I love developing models with tangible real-word impact and I'm addicted to constantly improving my skills.
            </p>
            
            <div className="space-y-3 mb-6">
              <a href="mailto:andrearicciardelli@disr.it" className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 hover:text-indigo-300">
                <EnvelopeIcon className="w-5 h-5" />
                andrearicciardelli@disr.it
              </a>
              <a href="https://www.linkedin.com/in/andrearicciardelli9/" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 hover:text-indigo-300">
                LinkedIn
              </a>
              <a href="https://github.com/laufragor" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 hover:text-indigo-300">
                Github
              </a>
            </div>
            
            <a 
              href="/ref/CV_Andrea_Ricciardelli.pdf"
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
      <section className="container mx-auto px-6 py-5">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
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
