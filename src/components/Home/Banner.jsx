import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Banner() {
  return (
    <div className="hero min-h-full bg-[#111120] pt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/img/6378759.jpg"
          className="max-w-xs lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-[#f59e0b]">
            Tasks tamed, goals achieved.
          </h1>
          <p className="py-6 text-lg">
            Take control of your day and conquer your goals with our task
            management app. Whether you're a busy professional juggling
            deadlines, a creative mind overflowing with ideas, or someone simply
            wanting to make the most of every moment, our app empowers you to
            transform your to-do list into a powerful tool for productivity.
            Stop feeling overwhelmed and start achieving - download the app
            today and experience the satisfaction of getting things done,
            effortlessly.
          </p>
          <button className="btn bg-[#f59e0b] text-black text-xl hover:bg-[#F9731A]">
            <Link to={`dashboard`}>Try it for free</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
