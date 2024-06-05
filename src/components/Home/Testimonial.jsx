export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "SavenIT has completely transformed the way our team manages tasks. The intuitive interface and robust features have significantly boosted our productivity.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback:
        "I love how easy it is to prioritize and schedule tasks with SavenIT. It's been a game-changer for my personal and professional life.",
      rating: 4,
    },
    {
      name: "Samuel Green",
      feedback:
        "The collaboration features in SavenIT have made it so much easier for our team to stay on the same page. Highly recommend!",
      rating: 5,
    },
  ];

  const averageRating = (
    testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) /
    testimonials.length
  ).toFixed(1);
  return (
    <div className="min-h- bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Client Satisfaction
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients have to say about their experience with
            SavenIT.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <p className="text-xl italic text-gray-800 mb-4">
                {testimonial.feedback}
              </p>
              <div className="mt-auto">
                <p className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <div className="flex items-center mt-2">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.274 2.304 9.726 2.304 9.951 2.927l1.562 3.839 4.056.331c.572.047.781.814.335 1.16l-3.021 2.627.898 3.902c.172.75-.612 1.325-1.248.933L10 13.101l-3.582 2.348c-.636.392-1.42-.183-1.248-.933l.898-3.902-3.021-2.627c-.446-.346-.237-1.113.335-1.16l4.056-.331L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900">
            Overall Satisfaction
          </h3>
          <div className="mt-4 text-6xl font-extrabold text-indigo-600">
            {averageRating}/5
          </div>
          <p className="mt-2 text-lg text-gray-600">
            Based on {testimonials.length} reviews
          </p>
        </div>
        <div className="bg-[#042f2e] px-3 py-1 lg:px-8 lg:py-3 lg:text-2xl rounded cursor-pointer font-semibold w-fit">
          <span className="">Leave a review</span>
        </div>
      </div>
    </div>
  );
}
