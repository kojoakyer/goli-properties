import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <div className="relative bg-orange-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Building trust, creating value, and making property ownership a reality.
        </p>
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="samMD.jpg"
          alt="About Goli Properties"
          className="rounded-xl shadow-lg object-cover w-full h-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            At <span className="font-semibold text-orange-500">Goli Properties</span>, 
            we are a one-stop real estate solution, dedicated to helping individuals and businesses 
            acquire genuine lands and properties without litigation or stress.
          </p>
          <p className="mb-4">
            From land acquisition to property development and management, we 
            combine expertise, transparency, and innovation to deliver exceptional value. 
            Our mission is simple: make real estate ownership seamless and gratifying.
          </p>
          <p>
            With a team of passionate professionals, we’ve built a reputation 
            for trust, excellence, and customer satisfaction across Ghana and beyond.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-black">
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">Our Mission</h3>
            <p>
              Our mission is to simplify and modernize the experience of purchasing and selling of properties, by leveraging new technologies and fostering collaboration, whilst upholding the best standards in the industry
            </p>
          </div>
          <div className="p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-black">
            <h3 className="text-2xl font-semibold mb-3 text-orange-500">Our Vision</h3>
            <p>
             Our vision is to be a well-known and a market leading real estate firm with a diverse portfolio of high-quality and genuine properties, providing the best quality of service and delivering exceptional experiences to our clients, partners and team members.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Integrity</h4>
            <p>
                We uphold the highest ethical standards in all of our decisions and actions, exhibiting honesty and fairness in everything we do. We pledge to constantly act in the best interests of our clients, team and company, leading to mutual prosperity
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Excellence</h4>
            <p>In everything we do, we strive for quality and to exceed the expectations of our valued clients.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Accountability</h4>
            <p>We act with a high degree of transparency, assuming full responsibility for meeting our high standards.</p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <img
                src="samMD.jpg"
                alt="CEO"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-xl font-semibold">Samuel Tetteh</h4>
              <p className="text-orange-500 font-medium">CEO & Founder</p>
              <p className="mt-3 text-sm">
                Visionary leader with a passion for real estate innovation and sustainable development.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <img
                src="/team2.jpg"
                alt="Manager"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-xl font-semibold">Ama Osei</h4>
              <p className="text-orange-500 font-medium">Operations Manager</p>
              <p className="mt-3 text-sm">
                Expert in property management, ensuring seamless client experiences.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <img
                src="/team3.jpg"
                alt="Sales Lead"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-xl font-semibold">Kwame Boateng</h4>
              <p className="text-orange-500 font-medium">Sales Lead</p>
              <p className="mt-3 text-sm">
                Dedicated to helping clients find their dream property with ease and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Own Your Dream Property?</h2>
        <p className="mb-6">
          Let us guide you every step of the way. From land to luxury, your journey begins here.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
