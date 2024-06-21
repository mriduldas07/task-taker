export default function OurServices() {
  const services = [
    {
      title: "Task Creation and Prioritization",
      description:
        "Easily create tasks, set priorities, and organize your workflow.",
      icon: "📝",
    },
    {
      title: "Calendar Integration",
      description:
        "Integrate your tasks with your calendar to manage deadlines efficiently.",
      icon: "📅",
    },
    {
      title: "Collaboration Features",
      description:
        "Collaborate with team members, assign tasks, and share progress.",
      icon: "🤝",
    },
    {
      title: "Reporting and Analytics",
      description:
        "Generate detailed reports and analytics to track your productivity.",
      icon: "📊",
    },
  ];
  return (
    <div className="min-h-fit bg-[#111120] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#f59e0b]">
            Our Services
          </h2>
          <p className="mt-4 text-lg">
            Discover the core functionalities of SavenIT that help you manage
            your tasks efficiently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#20212C] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
