/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="min-h-screen bg-[#111120] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-white">About SavenIT</h2>
          <p className="mt-4 text-xl text-white">
            Simplifying task management for individuals and teams with
            innovative solutions.
          </p>
        </div>

        <section className="bg-[#20212C] p-8 rounded-lg shadow-md">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold">Our Mission</h3>
              <p className="mt-4 text-lg">
                At SavenIT, our mission is to empower individuals and teams to
                achieve their goals through effective task management. We aim to
                provide intuitive and powerful tools that enhance productivity
                and streamline workflows.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                className="w-full rounded-lg"
                src="https://img.freepik.com/free-vector/project-management-concept-successful-strategy-planning-motivation-leadership-marketing-analysis-development-vector-illustration-cartoon-style_613284-1394.jpg?t=st=1717579323~exp=1717582923~hmac=4199756d2f7e5d543e813a64cce9985b5de41d24cb6288e3bfeac64fb89cb239&w=740"
                alt="Our Mission"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#20212C] p-8 rounded-lg shadow-md">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <img
                className="w-full rounded-lg"
                src="https://img.freepik.com/free-photo/group-positive-young-people-posing-together_23-2148431344.jpg?t=st=1717579589~exp=1717583189~hmac=bae3574037d3d0b4f969079d10ca1f47b6c8e045948a5deb28e74adaa6fc9ec5&w=1380"
                alt="Our Team"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h3 className="text-4xl font-bold">Our Team</h3>
              <p className="mt-4 text-lg">
                We are a group of passionate professionals dedicated to making
                task management easier and more efficient. Our team is composed
                of experienced developers, designers, and project managers who
                work tirelessly to deliver the best possible product to our
                users.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#20212C] p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <p className="mt-4 text-lg">
            Have questions or feedback? We'd love to hear from you! Reach out to
            us at{" "}
            <a
              href="mailto:contact@savenit.com"
              className="text-indigo-600 hover:text-indigo-500"
            >
              contact@savenit.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
