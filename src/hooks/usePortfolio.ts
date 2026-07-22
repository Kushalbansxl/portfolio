'use client'

import { useState } from 'react'

export default function usePortfolio() {
  const [projects] = useState<any[]>([
    {
      id: "1",
      title: "Trello clone",
      description: "This project is a full-stack Trello Clone with modern web technologies featuring drag-and-drop interactions and real-time updates.",
      technologies: "Next.js, React 19, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS, Shadcn UI, @dnd-kit, React Hook Form, Zod, Recharts, Vercel Analytics",
      key_features: "Boards Lists and Cards, Drag & Drop Functionality, Rich Card Details, Task Checklists, Custom Labels, Member Assignment, Analytics Dashboards",
      image_url: "/assets/projects/trello/1.png",
      image_urls: ["/assets/projects/trello/1.png", "/assets/projects/trello/2.png", "/assets/projects/trello/3.png", "/assets/projects/trello/4.png", "/assets/projects/trello/5.png"],
      live_url: "https://trelly-xi.vercel.app/"
    },
    {
      id: "2",
      title: "Dr. Apple medical chatbot",
      description: "A highly accurate medical chatbot powered by Google Gemini and Pinecone Vector Database running an optimized local RAG pipeline.",
      technologies: "Flask, Google Gemini, Pinecone, LangChain, Hugging Face, PyPDF, HTML/CSS/JavaScript",
      key_features: "Retrieval-Augmented Generation (RAG) with local PDFs, Cyberpunk UI with hacker-aesthetic chat interface, Optimized Local Execution, Fast & Responsive semantic search",
      image_url: "/assets/projects/saheli/1.png",
      image_urls: ["/assets/projects/saheli/1.png", "/assets/projects/saheli/2.png", "/assets/projects/saheli/3.png"],
      live_url: "https://medical-chatbot-fg3d.onrender.com"
    },
    {
      id: "3",
      title: "Heart Disease Predictor",
      description: "A dual-model diagnostic tool for predicting heart failure using clinical data through a Random Forest model and MRI image analysis using a CNN.",
      technologies: "Python, Scikit-learn, TensorFlow / Keras, Streamlit, Pandas, NumPy, PyDicom, Matplotlib",
      key_features: "Dual-Model Diagnostic Approach, Clinical Data Analysis with 12 parameters, MRI Image Analysis with CNN, Interactive Web Interface dashboard, End-to-End Automated Training Pipeline, Specialized Image Processing",
      image_url: "/assets/projects/heart/1.png",
      image_urls: ["/assets/projects/heart/1.png", "/assets/projects/heart/2.png", "/assets/projects/heart/3.png", "/assets/projects/heart/4.png"],
      live_url: "https://heart-failure-prediction-by-kushal.streamlit.app/"
    }
  ])

  const [certificates] = useState<any[]>([
    {
      id: "1",
      title: "NVIDIA: Accelerated Computing (CUDA)",
      image_url: "/assets/certificates/cert1.png"
    },
    {
      id: "2",
      title: "DeepLearning.AI: Improving DNNs",
      image_url: "/assets/certificates/cert2.png"
    },
    {
      id: "3",
      title: "U. Washington: ML Classification",
      image_url: "/assets/certificates/cert1.png"
    },
    {
      id: "4",
      title: "Duke Univ: Intro to Machine Learning",
      image_url: "/assets/certificates/cert2.png"
    },
    {
      id: "5",
      title: "UCSD: Algorithmic Toolbox",
      image_url: "/assets/certificates/cert1.png"
    }
  ])

  const [techStacks] = useState<any[]>([
    { id: "1", name: "Python", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { id: "2", name: "C++", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { id: "3", name: "Java", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { id: "4", name: "JavaScript", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { id: "5", name: "SQL", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { id: "6", name: "TensorFlow", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { id: "7", name: "PyTorch", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { id: "8", name: "Scikit-Learn", logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { id: "9", name: "Pandas", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { id: "10", name: "Git", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { id: "11", name: "Node.js", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { id: "12", name: "Express.js", logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
  ])

  const [loading] = useState(false)

  return {
    projects,
    certificates,
    techStacks,
    loading,
  }
}