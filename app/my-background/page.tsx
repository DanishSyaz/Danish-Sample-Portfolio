import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Academic & Professional Journey — [YOUR NAME] | Technical Consultant",
  description:
    "A verified chronological record of education in Computer Science & Data Analytics, enterprise industry experience, and accredited professional certifications.",
};

export default function MyBackgroundPage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HEADER & SCANNABLE SUMMARY */}
      <section className="w-full bg-surface py-8 sm:py-12">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-outline-variant">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-wider text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  history_edu
                </span>
                Curriculum Vitae &amp; Verified Timeline
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Academic &amp; Professional Journey
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant text-sm sm:text-base">
                A verified chronological record of education in Computer Science &amp; Data Analytics, enterprise industry experience, and accredited professional certifications.
              </p>
            </div>

            {/* Recruiter Snapshot Card */}
            <div className="shrink-0 p-4 bg-surface-container-lowest rounded-xl shadow-sm max-w-xs w-full">
              <div className="flex items-center justify-between pb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                  Verification Status
                </span>
                <span className="inline-flex items-center gap-1 font-label-code text-label-code text-tertiary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>{" "}
                  Validated
                </span>
              </div>
              <div className="font-headline-sm text-headline-sm text-on-surface pb-1 font-bold">
                [YEARS OF EXP] Total Exp.
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                Specialization in Enterprise Architecture, Scalable Analytics &amp; Tech Advisory.
              </p>
            </div>
          </div>

          {/* Jump Navigation Bar */}
          <div className="sticky top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-2 shadow-sm flex items-center justify-between overflow-x-auto gap-2 mt-6">
            <div className="flex items-center gap-1 min-w-max">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase px-2 text-xs font-semibold">
                Jump to:
              </span>
              <a
                className="px-3 py-1.5 rounded-lg font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-xs"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="px-3 py-1.5 rounded-lg font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-xs"
                href="#education"
              >
                Education
              </a>
              <a
                className="px-3 py-1.5 rounded-lg font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-xs"
                href="#certifications"
              >
                Certifications
              </a>
              <a
                className="px-3 py-1.5 rounded-lg font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-xs"
                href="#continuous-learning"
              >
                Professional Development
              </a>
            </div>
            <div className="hidden sm:flex items-center pr-2">
              <span className="font-label-code text-label-code text-on-surface-variant bg-surface-container-low px-2 py-1 rounded text-xs">
                REV-[YEAR].04
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL EXPERIENCE TIMELINE */}
      <section className="w-full py-12 sm:py-16 bg-surface-container-low/40" id="experience">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-1 text-xs font-semibold">
                Track Record
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Professional Consulting Experience
              </h2>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant text-xs">
              System Architecture &bull; Client Delivery &bull; Analytics
            </span>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 sm:pl-10 space-y-8">
            {/* Vertical Spine */}
            <div className="absolute left-2 sm:left-3.5 top-3 bottom-4 w-0.5 bg-outline-variant/60"></div>

            {/* Role 1: Current */}
            <div className="relative group">
              <div className="absolute -left-6 sm:-left-10 top-1.5 flex items-center justify-center w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-primary text-on-primary shadow-sm ring-4 ring-surface-container-high transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[12px] sm:text-[16px]">
                  work
                </span>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-caps text-label-caps uppercase tracking-wide text-[10px] font-bold">
                        Current Role
                      </span>
                      <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                        [Full-Time Advisory]
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                      [Job Title / Technical Consultant] &mdash;{" "}
                      <span className="text-primary">[Current Company / Organisation]</span>
                    </h3>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="font-label-bold text-label-bold text-on-surface text-sm">
                      [Year &ndash; Present]
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center lg:justify-end gap-1 text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        location_on
                      </span>
                      [Location / Remote]
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded-lg mb-4">
                  <span className="font-label-bold text-label-bold text-on-surface block mb-1 text-xs uppercase tracking-wider">
                    Practice &amp; Engagement Scope
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Providing technical leadership across large-scale data infrastructure modernization, stakeholder alignment, and algorithmic optimization for Fortune 500 &amp; tier-1 enterprise accounts.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider block font-semibold text-xs">
                    Key Deliverables &amp; Direct Impact
                  </span>
                  <ul className="space-y-2 font-body-default text-body-default text-on-surface-variant text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">Led cross-functional requirements discovery and technical architecture design for enterprise clients</strong>{" "}
                        &mdash; Formulated detailed target-state blueprints, data flow models, and technical specifications aligning client IT stakeholders with C-level business targets.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">Implemented data extraction, modeling, and automated analytics dashboards for operational decision-making</strong>{" "}
                        &mdash; Built resilient ELT workflows and high-concurrency analytical layers that diminished manual reporting latency and accelerated insight generation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">Collaborated directly with client project leads to define KPIs, mitigate delivery risks, and document system architecture</strong>{" "}
                        &mdash; Conducted sprint-level technical reviews, managed interface agreements between legacy monoliths and microservices, and sustained zero critical SLA breaches.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant flex flex-wrap items-center gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs mr-1">
                    Core Tech &amp; Methods:
                  </span>
                  {[
                    "Technical Consulting",
                    "Data Analytics",
                    "Client Advisory",
                    "SQL",
                    "Python",
                    "Agile Delivery",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-code text-label-code text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 2: Previous */}
            <div className="relative group">
              <div className="absolute -left-6 sm:-left-10 top-1.5 flex items-center justify-center w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-surface-container-highest text-on-surface-variant shadow-sm ring-4 ring-surface transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[12px] sm:text-[16px]">
                  domain
                </span>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wide text-[10px] font-semibold">
                        Previous Engagement
                      </span>
                      <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                        [Practice Track]
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                      [Previous Job Title / Associate Consultant or Data Analyst] &mdash;{" "}
                      <span className="text-secondary">[Company Name]</span>
                    </h3>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="font-label-bold text-label-bold text-on-surface text-sm">
                      [Year &ndash; Year]
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center lg:justify-end gap-1 text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        location_on
                      </span>
                      [Location]
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider block font-semibold text-xs">
                    Key Deliverables &amp; Applied Analysis
                  </span>
                  <ul className="space-y-2 font-body-default text-body-default text-on-surface-variant text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">Conducted quantitative data validation, workflow audits, and technical reporting</strong>{" "}
                        &mdash; Systematically cleansed unstructured datasets, identified performance bottlenecks, and verified transactional ledger consistency across relational databases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-on-surface">Supported senior consultants in creating client-facing deliverables and architectural diagrams</strong>{" "}
                        &mdash; Authored functional requirements specifications (FRS), user story matrices, and end-to-end process maps for executive presentations.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant flex flex-wrap items-center gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs mr-1">
                    Core Tech &amp; Methods:
                  </span>
                  {["Data Analysis", "Scripting", "Requirements Gathering", "Excel Modeling"].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-code text-label-code text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EDUCATION */}
      <section className="w-full py-12 sm:py-16 bg-surface" id="education">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-1 text-xs font-semibold">
                Foundation &amp; Academic Rigor
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Higher Education
              </h2>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant text-xs">
              Algorithms &bull; Mathematics &bull; Data Systems
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Degree Header Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase tracking-wide text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    school
                  </span>
                  Conferred Degree
                </div>
                <h3 className="font-headline-xl text-headline-xl text-on-surface">
                  [Bachelor of Science / Master of Science] in Computer Science
                </h3>
                <div className="text-primary font-headline-sm text-headline-sm font-semibold">
                  Major in Data Analytics
                </div>
                <div className="pt-2 space-y-1">
                  <div className="font-label-bold text-label-bold text-on-surface flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      account_balance
                    </span>
                    [University Name]
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 text-xs">
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      location_city
                    </span>
                    [City, Country]
                  </div>
                  <div className="font-label-code text-label-code text-on-surface-variant flex items-center gap-2 pt-1 text-xs">
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      calendar_today
                    </span>
                    [Year &ndash; Year]
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-surface-container-low p-4 relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">data_object</span>
                    </div>
                    <div>
                      <div className="font-label-bold text-label-bold text-on-surface text-sm">
                        Dual Focus Competence
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Core Software Engineering + Advanced Mathematical Modeling
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coursework & Capstone */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block mb-3 font-semibold text-xs">
                    Academic Focus &amp; Relevant Coursework
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: "terminal",
                        title: "Algorithms & Data Structures",
                        desc: "Complexity analysis, graph search, optimization",
                      },
                      {
                        icon: "database",
                        title: "Database Systems & Design",
                        desc: "Relational theory, indexing, schema normalization",
                      },
                      {
                        icon: "insights",
                        title: "Statistical Inference",
                        desc: "Hypothesis testing, regression, Bayesian models",
                      },
                      {
                        icon: "hub",
                        title: "Big Data Analytics",
                        desc: "Distributed processing, parallel batch pipelines",
                      },
                      {
                        icon: "precision_manufacturing",
                        title: "Software Engineering Principles",
                        desc: "System design, clean code, testing architectures",
                      },
                      {
                        icon: "cloud",
                        title: "Cloud Architecture",
                        desc: "Compute elasticity, serverless patterns, security",
                      },
                    ].map((course) => (
                      <div
                        key={course.title}
                        className="p-3 rounded-lg bg-surface-container-low flex items-start gap-2.5"
                      >
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          {course.icon}
                        </span>
                        <div>
                          <div className="font-label-bold text-label-bold text-on-surface text-xs font-semibold">
                            {course.title}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                            {course.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Senior Capstone Highlight */}
                <div className="p-4 rounded-xl bg-surface-container-high/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wide text-xs">
                      Senior Capstone / Applied Research
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                      [ACADEMIC HONORS]
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-sm">
                    [Senior Capstone Project Name: e.g. Predictive Analytics Modeling / Scalable Data Processing Pipeline]
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                    Synthesized high-volume data streams into an algorithmic scoring engine; evaluated model accuracy and operational latency against baseline benchmarks under academic faculty mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL CERTIFICATIONS & ACCREDITATIONS */}
      <section className="w-full py-12 sm:py-16 bg-surface-container-low/40" id="certifications">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-1 text-xs font-semibold">
                Industry Credentials
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Professional Certifications &amp; Accreditations
              </h2>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant text-xs">
              Verified Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cert 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">
                      cloud_done
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase text-xs">
                    Cloud &amp; Infra
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-semibold">
                  [Certification: AWS Certified Cloud Practitioner / Azure Data Fundamentals]
                </h3>
                <div className="font-label-bold text-label-bold text-secondary mb-3 text-xs">
                  [Issuing Body]
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 text-xs">
                  Validates foundational proficiency across global cloud infrastructure, core services, distributed architectural compliance, and billing configurations.
                </p>
              </div>
              <div className="pt-3 bg-surface-container-low/50 -mx-6 -mb-6 px-6 pb-3 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Conferred: [Year]
                </span>
                <span className="font-label-code text-label-code text-tertiary flex items-center gap-1 text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>{" "}
                  Active Status
                </span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">
                      analytics
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase text-xs">
                    Analytics
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-semibold">
                  [Certification: Professional Data Analytics Certification]
                </h3>
                <div className="font-label-bold text-label-bold text-secondary mb-3 text-xs">
                  [Issuing Body]
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 text-xs">
                  Comprehensive credential covering end-to-end data lifecycle: extraction, exploratory analysis, relational querying, statistical validation, and executive dashboarding.
                </p>
              </div>
              <div className="pt-3 bg-surface-container-low/50 -mx-6 -mb-6 px-6 pb-3 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Conferred: [Year]
                </span>
                <span className="font-label-code text-label-code text-tertiary flex items-center gap-1 text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>{" "}
                  Active Status
                </span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">
                      sync_alt
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase text-xs">
                    Execution
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-semibold">
                  [Certification: Agile / Project Management or Specialized Consulting Credential]
                </h3>
                <div className="font-label-bold text-label-bold text-secondary mb-3 text-xs">
                  [Issuing Body]
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 text-xs">
                  Demonstrates mastery in iterative delivery models, sprint ceremonies, stakeholder communication frameworks, and cross-functional technical team coordination.
                </p>
              </div>
              <div className="pt-3 bg-surface-container-low/50 -mx-6 -mb-6 px-6 pb-3 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Conferred: [Year]
                </span>
                <span className="font-label-code text-label-code text-tertiary flex items-center gap-1 text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>{" "}
                  Active Status
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTINUOUS LEARNING */}
      <section className="w-full py-12 sm:py-16 bg-surface" id="continuous-learning">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-1 text-xs font-semibold">
                Continuing Education
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Continuous Learning &amp; Professional Development
              </h2>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant text-xs">
              Iterative Upskilling
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 space-y-3">
            {[
              {
                icon: "architecture",
                course: "[Course: Enterprise Software Architecture & System Patterns]",
                provider: "[Provider: e.g., MIT xPRO / Coursera / Stanford Online]",
                year: "[Year]",
              },
              {
                icon: "query_stats",
                course: "[Course: Advanced SQL Modeling & BigQuery Performance Optimization]",
                provider: "[Provider: Google Cloud Skills / Udacity Nanodegree]",
                year: "[Year]",
              },
              {
                icon: "psychology",
                course: "[Course: Executive Stakeholder Engagement & Technical Advisory]",
                provider: "[Provider: Specialized Consulting Professional Program]",
                year: "[Year]",
              },
            ].map((item) => (
              <div
                key={item.course}
                className="p-4 rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-sm">
                      {item.course}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      {item.provider}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-code text-label-code text-on-surface-variant text-xs">
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-tertiary text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>{" "}
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
