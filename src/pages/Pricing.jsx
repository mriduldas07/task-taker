export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["300 tasks", "Customization limited", "Make all tasks"],
    },
    {
      name: "Standard",
      price: "$20/month",
      features: [
        "600 tasks",
        "Unlimited Customization",
        "100 task share",
        "Update tasks",
      ],
    },
    {
      name: "Advanced",
      price: "$30/month",
      features: [
        "Unlimited tasks",
        "Unlimited Customization",
        "Share unlimited",
        "Updated tasks",
        "Create group",
      ],
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111120] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl font-extrabold text-center">
          Choose Your Plan
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-200 text-black p-6 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
