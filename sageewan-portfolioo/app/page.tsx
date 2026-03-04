'use client';

import React from "react";
import { motion } from "framer-motion";

export default function FounderPortfolio() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest">
            SAGEEWAN
          </h1>
          <div className="space-x-8 text-sm font-medium hidden md:flex">
            <a href="#mission" className="hover:text-yellow-600 transition">Mission</a>
            <a href="#zeal" className="hover:text-yellow-600 transition">Zeal Estate Exchange</a>
            <a href="#experience" className="hover:text-yellow-600 transition">Experience</a>
            <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.img
            src="/profile.jpg" // Replace with your image path
            alt="Sageewan Subendran"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-10 w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-yellow-600 shadow-xl"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Engineer. Operator. <span className="text-yellow-600">Founder.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            I build scalable software systems and real estate platforms designed for
            real-world execution. As the founder of Zeal Estate Exchange, I focus on
            creating infrastructure that connects investors, operators, and
            opportunities efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#zeal"
              className="bg-yellow-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-700 transition"
            >
              Explore My Work
            </a>

            <a
              href="https://calendly.com/zealestateholdings/15mins-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-2xl hover:bg-yellow-600 hover:text-white transition"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-24 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Building Systems That Scale
          </h2>
          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            With over four years of backend engineering experience, I design high-reliability systems focused on performance, security, and long-term maintainability. My mission is to build technology infrastructure that scales — platforms capable of supporting growing user bases, increasing transaction volume, and evolving operational complexity within the real estate ecosystem.

            I plan to leverage software to deliver practical solutions across the real estate space, from acquisition pipelines and investor marketplaces to analytics-driven decision systems. Beyond technology, I am actively acquiring residential properties in the Greater Montreal area that require strategic renovations, improving housing quality and delivering stronger rental experiences for tenants.

            Looking ahead, I intend to expand into ground-up apartment development to increase rental supply and create long-term, scalable real estate assets. My work sits at the intersection of engineering discipline and real-world asset ownership — building both digital systems and physical infrastructure that compound over time.
          </p>
        </div>
      </section>

      {/* ZEAL ESTATE EXCHANGE */}
      <section id="zeal" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Zeal Estate Exchange
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              A real estate wholesaling platform designed to streamline deal
              flow, investor matching, and property visibility. Built with a
              focus on scalability, authentication security, and efficient
              data management.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              The platform simplifies acquisition pipelines, improves
              transparency, and enables investors to access curated
              opportunities in a structured ecosystem.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-xl font-semibold text-yellow-500">
              Product Focus Areas
            </h3>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>• Secure Authentication & Role Management</li>
              <li>• Scalable Backend Infrastructure</li>
              <li>• Investor & Seller Dashboards</li>
              <li>• Automated Deal Workflow Systems</li>
            </ul>
          </div>
          <div className="mt-10">
            <a
              href="www.zealestateexchange.com"
              className="bg-yellow-600 px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-700 transition"
            >
              Check It Out
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Experience
          </h2>

          <div className="space-y-12">

            {/* Real Estate Roles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-600">Real Estate</h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="font-semibold text-lg">Founder & Developer — Zeal Estate Exchange</h4>
                    <span className="text-sm text-gray-500">2026 – Present</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Building and operating a real estate wholesaling platform focused on scalable deal flow,
                    investor matching, and streamlined acquisition systems.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="font-semibold text-lg">Real Estate Investor</h4>
                    <span className="text-sm text-gray-500">2021 - Present</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Property acquisition, ARV analysis, renovation oversight, valuation strategy,
                    and capital deployment across residential investments.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering & Product Roles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-600">Engineering & Product</h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="font-semibold text-lg">Software Engineer — Lockheed Martin</h4>
                    <span className="text-sm text-gray-500">2021 – Present</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Backend development using Java and SQL, building secure enterprise systems,
                    implementing CI/CD pipelines, and optimizing system performance and reliability.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="font-semibold text-lg">Software Developer / Product-Focused Roles</h4>
                    <span className="text-sm text-gray-500">Previous Roles</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Contributed to full software development lifecycles including feature design,
                    stakeholder collaboration, system architecture discussions, and product
                    delivery aligned with end-user needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-black text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Let’s Build Something Meaningful</h2>
          <p className="mt-6 text-gray-400">
            Open to strategic partnerships, product collaborations, and
            opportunities that align with scalable technology and real estate
            innovation.
          </p>
          <div className="mt-10">
            <a
              href="mailto:ssagee24@gmail.com"
              className="bg-yellow-600 px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-700 transition"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex justify-center space-x-8 text-gray-400">
              <a
                href="https://www.linkedin.com/in/sageewan-subendran/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SageewanSubendran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
