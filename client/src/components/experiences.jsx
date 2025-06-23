import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const jobs = [
  {
    year: "2025",
    company: "Visenze Pte Ltd",
    image: "/assets/visenze.png",
    role: "Machine Learning Research Engineer",
    bullets: [
      "Conducted research and experimentation to improve dense and sparse transformer-based embeddings for ViSenze’s multi-modal search system",
      "Engineered and scaled large-scale hard negative mining workflows, culminating in an end-to-end continual improvement training pipeline for Visenze's sparse and dense models",
      "Leveraged and integrated LLM into research pipeline for structured annotation and generation, building an efficient MLOps codebase for future research purposes",
      "Fine-tuned and deployed feature set release for synonym improvement for fashion search products"
    ],
    stack: [{ name: "Tensorflow"},{ name: "Pytorch"},{ name: "CUDA"},{ name: "Langchain"},{ name: "Ollama"},{ name: "OpenAI"},{ name: "HuggingFace Transformers"}],
    github: "",
    live: ""
  },
  {
    year: "2024",
    company: "Deloitte & Touche",
    image: "/assets/deloitte.jpg",
    role: "Financial Forensic Data Analyst",
    bullets: [
      "Built an ensemble ML classifier (unsupervised + supervised) to flag risky/fraudulent customers & transactions",
      "Researched Graph Neural Network applications for fraud analytics",
      "Enhanced features in existing data-viz software",
      "Queried and managed transactional data via SQL in relational databases",
    ],
    stack: [{ name: "Python"}, { name: "Scikit-learn"}, { name: "Jupyterlab"}],
    github: "",
    live: ""
  },
  {
    year: "2023",
    company: "Land Transport Authority",
    image: "/assets/lta.jpeg",
    role: "Finance Software Engineer",
    bullets: [
      "Developed Python and UiPath bots to automate inefficient and manual financial processes",
      "Gathered requirements from relevant stakeholders and engaged in Software Development Life Cycle using SCRUM",
      "Streamlined workflows, reducing manual time by 65% (21 man-days saved/yr)",
      "Conducted multiple User Acceptance Testing cycles",
    ],
    stack: [{ name: "Python"}, { name: "Java"}],
    github: "",
    live: ""
  },
  {
    year: "2022",
    company: "PriceWaterhouseCoopers",
    image: "/assets/pwc.jpg",
    role: "Assurance Intern",
    bullets: [
      "Processed incoming Bank Confirmations before dissemination to relevant GA teams and Partners for further action",
      "Developed Python scripts to accelerate drawn-out manual workflows",
      "Facilitated processing and sending out of engagement letters to firms",
      "Used Excel and Outlook for business communications and data recording",
    ],
    stack: [],
    github: "",
    live: ""
  },
];

export default function Experiences() {
  return (
    <section className="relative py-0 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <span className="font-poppins-bold text-6xl text-gradient">My Work Experiences</span>
        </div>
        <div className="text-center mt-3">
            <span className="font-poppins-regular text-lg text-white/50">Building expertise through hands-on learning and innovation</span>
        </div>
      {/* Central vertical line */}
      <div className="relative mt-12 lg:mt-24">
      <div className="absolute left-[1%] lg:left-1/2 top-0 w-1 bg-gray-300 h-full lg:-translate-x-1/2" />

      <div className="space-y-12">
        {jobs.map((exp, i) => {
          const isEven = i % 2 === 0;

          return (
            // 1) full-width relative wrapper
            <div key={i} className={cn(
                    "relative w-full",
                    i > 0 && "lg:-mt-[100px]",            // every card after the first lifts 20px
                    !isEven && "lg:-mt-[250px]"          // and left-side cards get 50px total
                )}>
              
              {/* 2) the dot, now centered to the page */}
              <div
                className="
                  absolute lg:left-1/2 top-1/2 left-[0%]
                  w-4 h-4 bg-accent rounded-full
                  lg:-translate-x-1/2 -translate-y-1/2
                "
              />

              {/* 3) your half-width card */}
              <motion.div
                className={`
                  relative w-[calc(100%-2.5rem)] w-5/6 lg:w-[45%] p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-left ml-8 lg:ml-0
                  ${isEven ? "lg:ml-auto" : "lg:mr-auto"}
                `}
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Year + Logo */}
                <div className={`flex items-center justify-start gap-4 mb-1`}>
                  <span className="text-xl font-poppins-semibold text-accent ">{exp.year}</span>
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 object-contain rounded"
                  />
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-poppins-semibold text-white/80">{exp.role}</h3>
                <p className="font-poppins-semibold mb-2 text-gradient">{exp.company}</p>

                {/* Bullets */}
                <ul className="list-disc list-inside space-y-1 text-white/60 hidden lg:block font-poppins-regular">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                {/* Tech stack */}
                {exp.stack.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-white/40 mb-2 font-poppins-semibold">Tech Stack:</h4>
                    <ul className={`flex flex-wrap justify-${isEven ? "lg:end" : "lg:start"} gap-2`}>
                      {exp.stack.map((tech, idx) => (
                        <li
                          key={idx}
                          className="bg-gradient text-white px-2 py-1 rounded-full text-sm font-poppins-regular"
                        >
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}