export default function Tips() {
  const blogPosts = [
    {
      title: "5 Tips for Boosting Productivity in the Workplace",
      snippet:
        "Discover simple yet effective strategies for increasing productivity and efficiency in your work environment.",
    },
    {
      title: "The Power of Time Blocking: A Guide to Better Time Management",
      snippet:
        "Learn how to use time blocking to prioritize tasks, minimize distractions, and make the most of your time.",
    },
  ];

  const productivityTips = [
    "Start your day with the most important task.",
    "Take regular breaks to recharge and avoid burnout.",
    "Use productivity tools to streamline your workflow.",
    "Set specific, achievable goals to stay motivated.",
    "Practice mindfulness to stay focused and present.",
  ];

  const successStories = [
    {
      name: "Sarah",
      story:
        "Thanks to Saven, I was able to complete my project ahead of schedule, resulting in a promotion at work!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Alex",
      story:
        "Saven helped me stay organized and focused during a busy semester at college. I aced all my exams!",
      avatar: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div className="min-h-fit bg-[#111120] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h2 className="text-4xl font-extrabold text-[#f59e0b]">
            Get Inspired & Stay Productive
          </h2>
          <p className="mt-4 text-lg ">
            Discover valuable resources, actionable tips, and success stories to
            boost your productivity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-[#f59e0b]">
              Featured Blog Posts
            </h3>
            {blogPosts.map((post, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold text-[#ef4444]">
                  {post.title}
                </h4>
                <p className="mt-2">{post.snippet}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#f59e0b]">Featured Tips</h3>
            <ul className="mt-4 space-y-2">
              {productivityTips.map((tip, index) => (
                <li key={index} className="">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#f59e0b]">
              Success Stories
            </h3>
            {successStories.map((story, index) => (
              <div key={index} className="mt-4 flex items-center">
                <img
                  src={story.avatar}
                  alt={`Avatar of ${story.name}`}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-[#ef4444]">
                    {story.name}
                  </p>
                  <p className="mt-1 ">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
