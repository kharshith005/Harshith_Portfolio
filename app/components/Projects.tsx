import { Cpu } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-block section-anchor">
      <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-500 mb-12 flex items-center gap-4">
        <Cpu size={18} /> Selected Projects
      </h2>
      <div className="space-y-12">
        <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-200">Multi-Agent Travel Itinerary Planner</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-6 space-y-2">
            <li>
              Architected an 8-component multi-agent LLM system using LangGraph, coordinating
              specialized agents to generate constraint-aware, multi-day travel itineraries, raising
              final pass rate from 4.4% to 31% over a single-agent GPT-4 Turbo baseline on identical data.
            </li>
            <li>
              Built a two-stage repair pipeline (mechanical pre-repair + up to 3 LLM-driven rounds)
              with agent-attribution logging for targeted routing, achieving 100% delivery and 94%
              commonsense constraint satisfaction across 180 benchmark queries at 4.3 LLM calls/query.
            </li>
          </ul>
          <div className="flex gap-3">
            {['Python', 'LangGraph', 'Streamlit', 'Vertex AI'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-[10px] font-bold uppercase">{tag}</span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-200">Multimodal Image Retrieval System</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-6 space-y-2">
            <li>
              Designed and implemented a multimodal deep learning retrieval pipeline using
              ResNet (CNN) for visual feature extraction and LSTM-based text embeddings, achieving
              80–85% retrieval accuracy by aligning visual and semantic representations.
            </li>
            <li>
              Built an end-to-end image–text retrieval workflow integrating advanced text
              preprocessing and image feature analysis, improving search relevance over baseline models.
            </li>
          </ul>
          <div className="flex gap-3">
            {['Python', 'Keras', 'Flask', 'Vue.js'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-[10px] font-bold uppercase">{tag}</span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-200">Facial Emotion Recognition</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-6 space-y-2">
            <li>
              Engineered a real-time facial emotion recognition system using OpenCV and DCNNs to
              classify seven facial expressions with improved accuracy over traditional baselines.
            </li>
            <li>
              Developed a real-time alerting and data transmission module to stream emotion
              predictions and geolocation metadata for remote monitoring scenarios.
            </li>
          </ul>
          <div className="flex gap-3">
            {['Python', 'TensorFlow', 'Keras', 'OpenCV'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-[10px] font-bold uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
