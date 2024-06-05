export default function OtherProjects() {
  const caseStudies = [
    {
      client: "ABC Corporation",
      description:
        "Implemented a comprehensive task management system that increased team productivity by 30%.",
      results: "30% increase in productivity",
      icon: "🏢",
    },
    {
      client: "XYZ Enterprises",
      description:
        "Streamlined project workflows, resulting in a 25% reduction in project completion time.",
      results: "25% reduction in completion time",
      icon: "🏭",
    },
  ];

  const partnerships = [
    {
      partner: "Tech Innovators Inc.",
      description:
        "Collaborated on integrating advanced AI features into our task management platform.",
      icon: "🤝",
    },
  ];

  const awards = [
    {
      title: "Best Task Management App 2023",
      organization: "Global Tech Awards",
      description:
        "Recognized for outstanding user experience and innovative features.",
      icon: "🏆",
    },
  ];
  return (
    <div className="min-h-fit bg-[#ecfdf5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Other Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore some of our successful projects, partnerships, and awards.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Case Studies</h3>
            <div className="grid gap-8 md:grid-cols-2 mt-6">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <div className="text-6xl">{caseStudy.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mt-4">
                    {caseStudy.client}
                  </h4>
                  <p className="mt-2 text-gray-600">{caseStudy.description}</p>
                  <p className="mt-4 text-indigo-600 font-semibold">
                    {caseStudy.results}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">Partnerships</h3>
            <div className="grid gap-8 md:grid-cols-2 mt-6">
              {partnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <div className="text-6xl">{partnership.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mt-4">
                    {partnership.partner}
                  </h4>
                  <p className="mt-2 text-gray-600">
                    {partnership.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">Awards</h3>
            <div className="grid gap-8 md:grid-cols-2 mt-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <div className="text-6xl">{award.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mt-4">
                    {award.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{award.description}</p>
                  <p className="mt-4 text-indigo-600 font-semibold">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
