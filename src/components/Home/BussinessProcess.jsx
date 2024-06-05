export default function BussinessProcess() {
  const steps = [
    {
      title: "Task Creation",
      description:
        "Easily create tasks with detailed descriptions, due dates, and tags.",
      icon: "📝",
    },
    {
      title: "Prioritization",
      description: "Prioritize tasks to focus on what's most important.",
      icon: "⭐",
    },
    {
      title: "Scheduling",
      description: "Schedule tasks to manage your time efficiently.",
      icon: "📅",
    },
    {
      title: "Collaboration",
      description:
        "Collaborate with team members by assigning tasks and sharing progress.",
      icon: "🤝",
    },
    {
      title: "Completion",
      description: "Mark tasks as complete to track your progress.",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-fit bg-[#ecfdf5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Task Management Process
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-6xl">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
