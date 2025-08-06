import { Card } from "@/components/ui/card"

export function Timeline() {
  const timelineItems = [
    {
      day: "Day 1-2",
      title: "Data Preparation",
      description: "Set up data pipelines and initial bias detection algorithms",
      tasks: [
        "Configure SAP HANA Cloud for data ingestion",
        "Implement data preprocessing pipelines",
        "Set up initial bias detection metrics",
      ],
      color: "blue",
    },
    {
      day: "Day 3-5",
      title: "Bias Mitigation",
      description: "Implement FairML techniques and synthetic data augmentation",
      tasks: [
        "Develop fairness constraints for model training",
        "Implement synthetic data generation for underrepresented groups",
        "Configure SAP AI Core for model retraining",
      ],
      color: "purple",
    },
    {
      day: "Day 6",
      title: "Explainability",
      description: "Connect explainable AI interface and finalize dashboard",
      tasks: [
        "Integrate Joule for conversational explanations",
        "Build dashboard UI with SAP Build Code",
        "Implement SHAP value visualizations",
      ],
      color: "pink",
    },
    {
      day: "Day 7",
      title: "Final Testing",
      description: "Validate results, document impact, and prepare presentation",
      tasks: ["Run comprehensive fairness tests", "Generate compliance reports", "Prepare demo and presentation"],
      color: "teal",
    },
  ]

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
      <div className="relative">
        <h3 className="text-lg font-medium mb-4">7-Day Hackathon Sprint</h3>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-teal-500">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-slate-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {index + 1}
              </div>

              <div
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg ${
                  item.color === "blue"
                    ? "bg-blue-500/10 border-blue-500/20"
                    : item.color === "purple"
                      ? "bg-purple-500/10 border-purple-500/20"
                      : item.color === "pink"
                        ? "bg-pink-500/10 border-pink-500/20"
                        : "bg-teal-500/10 border-teal-500/20"
                } border`}
              >
                <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.day}</div>
                <div className="text-sm font-medium mb-1">{item.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{item.description}</div>
                <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc pl-4">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
