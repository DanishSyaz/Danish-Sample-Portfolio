import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Professional Profile — [YOUR NAME] | Technical Consultant",
  description:
    "Candidate Reference dossier and executive summary for hiring leaders. Computer Science rigor combined with enterprise Data Analytics advisory.",
};

export default function MyProfilePage() {
  return (
    <div className="w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10 sm:gap-12">
      {/* Breadcrumb & Dossier Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant text-xs"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <span className="text-outline">/</span>
          <span className="text-primary font-semibold">Professional Profile</span>
        </nav>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span>Candidate Reference dossier</span>
        </div>
      </div>

      {/* SECTION 1: IDENTITY & STRATEGIC STANCE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="space-y-2">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block font-semibold text-xs">
              Identity &amp; Strategic Stance
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Technical Consultant with Deep Roots in Computer Science &amp; Data Analytics
            </h1>
          </div>

          <div className="relative bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  psychology
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Executive Summary for Hiring Leaders
                </span>
              </div>
              <p className="font-body-lead text-body-lead text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Bridging rigorous academic foundations in{" "}
                <span className="text-on-surface font-semibold">
                  Computer Science
                </span>{" "}
                (algorithmic thinking, scalable systems design, and modular software engineering) with specialized expertise in{" "}
                <span className="text-on-surface font-semibold">
                  Data Analytics
                </span>{" "}
                (statistical validation, automated ETL pipelines, and performance metrics architecture).
              </p>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm leading-relaxed">
                Equipped to advise client leadership during volatile business transitions. Rather than proposing theoretical or unmaintainable implementations, I translate complex enterprise requirements into robust, deployable system blueprints—ensuring technical deliverables drive tangible business ROI from Day 1.
              </p>
            </div>

            <div className="mt-6 pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 bg-surface-container-low p-4 rounded-lg">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block text-[11px]">
                  Analysis Cadence
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Quantitative
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block text-[11px]">
                  Execution Style
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  End-to-End
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block text-[11px]">
                  Client Advisory
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  C-Suite &amp; Tech
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Aside: Key Candidate Attributes */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Key Candidate Attributes
              </span>
              <span className="material-symbols-outlined text-secondary text-[20px]">
                badge
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                  Academic Background
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
                  [Degree Name, Major]
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                  [University / Institution Name], [Graduation Year]
                </span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                  Current Focus
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
                  Technical Advisory &amp; Analytics
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                  Modern Data Stack &amp; Systems Integration
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                    Availability
                  </span>
                  <span className="font-label-bold text-label-bold text-tertiary text-xs">
                    [Immediate / Notice]
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                    Work Style
                  </span>
                  <span className="font-label-bold text-label-bold text-on-surface text-xs">
                    [Hybrid / Remote]
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                  Authorized Location
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium text-xs">
                  [City, State / Country, Work Authorization]
                </span>
              </div>
            </div>
            <Link
              href="/contact-me"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-bold text-label-bold hover:bg-on-primary-fixed-variant transition-colors shadow-sm text-center text-sm"
            >
              <span>Inquire About Engagement</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </aside>
      </section>

      {/* SECTION 2: CORE STRENGTHS & CONSULTING COMPETENCIES */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block font-semibold text-xs">
              Enterprise Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Core Strengths &amp; Consulting Competencies
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md text-xs sm:text-sm">
            Demonstrated capabilities across software lifecycles, translating enterprise friction into clean, verifiable deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ARCH-01 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    architecture
                  </span>
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold text-xs">
                  ARCH-01
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Technical Advisory &amp; Solution Architecture
              </h3>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                Transforming complex, ambiguous stakeholder requirements into structured technical specs and modular blueprints. Aligning data pipelines, microservices, and storage layers with cost budgets, fault tolerance expectations, and enterprise governance standards.
              </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap items-center gap-2">
              {["System Topology", "Feasibility Audits", "Trade-off Modeling"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-surface-container-low font-label-code text-label-code text-on-surface-variant text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DATA-02 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[24px]">
                    analytics
                  </span>
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-semibold text-xs">
                  DATA-02
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                End-to-End Data Analytics
              </h3>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                Execution of the complete analytics pipeline: rigorous schema normalization, anomaly detection, exploratory data analysis (EDA), and production dashboards. Translating disparate database schemas into standardized, audit-ready reporting suites.
              </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap items-center gap-2">
              {["Pipeline Ingestion", "Statistical Profiling", "Executive BI"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-surface-container-low font-label-code text-label-code text-on-surface-variant text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* COMM-03 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">
                    forum
                  </span>
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold text-xs">
                  COMM-03
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Cross-Functional Stakeholder Communication
              </h3>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                Serving as the high-fidelity translation layer between infrastructure teams, specialized data scientists, product owners, and non-technical business sponsors. Removing friction by framing trade-offs through the lens of delivery speed, capital risk, and maintainability.
              </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap items-center gap-2">
              {["C-Suite Briefings", "Sprint Syntheses", "Conflict Resolution"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-surface-container-low font-label-code text-label-code text-on-surface-variant text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* SYSTEM-04 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[24px]">
                    account_tree
                  </span>
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold text-xs">
                  SYSTEM-04
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Problem Decomposition &amp; Rapid Onboarding
              </h3>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                Approaching opaque legacy enterprise setups with methodical reverse-engineering. Dissecting monolithic blockers into atomic deliverable tracks, accelerating audit turnaround and rapidly building operational autonomy across unfamiliar tech stacks.
              </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap items-center gap-2">
              {["Legacy Refactoring", "Root-Cause Analysis", "Quick Ramp-Up"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-surface-container-low font-label-code text-label-code text-on-surface-variant text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRUCTURED CAPABILITY MATRIX */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block font-semibold text-xs">
            Structured Capability Matrix
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Technical Skills &amp; Operational Tooling
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl text-xs sm:text-sm">
            Classified by functional competence level without arbitrary percentage meters. Evaluated on production deliverability, architectural understanding, and day-to-day execution efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Domain A */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  database
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold text-base">
                  Data Analytics &amp; Modeling
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">
                Domain A
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "SQL (Window Functions, CTEs, Optimization)", level: "Proficient", isProficient: true },
                { name: "Python (Pandas, NumPy, Scikit-Learn)", level: "Proficient", isProficient: true },
                { name: "Statistical Hypothesis Testing & Regression", level: "Proficient", isProficient: true },
                { name: "R Language (Exploratory Data Analysis)", level: "Operational", isProficient: false },
                { name: "ETL / ELT Pipeline Design", level: "Proficient", isProficient: true },
                { name: "BI Tooling (Tableau, Power BI Dashboards)", level: "Proficient", isProficient: true },
                { name: "KPI & Metric Taxonomy Engineering", level: "Operational", isProficient: false },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-xs"
                >
                  <span className="font-label-bold text-label-bold text-on-surface">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-label-code text-label-code text-[11px] ${
                      skill.isProficient
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain B */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  terminal
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold text-base">
                  Computer Science &amp; Systems
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">
                Domain B
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Data Structures & Algorithmic Complexity", level: "Proficient", isProficient: true },
                { name: "Relational Database Normalization & Indexing", level: "Proficient", isProficient: true },
                { name: "Object-Oriented & Functional Design", level: "Proficient", isProficient: true },
                { name: "RESTful API Design & Integration", level: "Operational", isProficient: false },
                { name: "System Architecture & Distributed Principles", level: "Operational", isProficient: false },
                { name: "Version Control (Git Branching, PR Reviews)", level: "Proficient", isProficient: true },
                { name: "Code Quality & Automated Testing Workflows", level: "Operational", isProficient: false },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-xs"
                >
                  <span className="font-label-bold text-label-bold text-on-surface">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-label-code text-label-code text-[11px] ${
                      skill.isProficient
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain C */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  handshake
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold text-base">
                  Consulting &amp; Delivery Methods
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">
                Domain C
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Requirements Elicitation & User Stories", level: "Proficient", isProficient: true },
                { name: "Agile / Scrum Delivery Frameworks", level: "Proficient", isProficient: true },
                { name: "Technical Documentation & Architecture Specs", level: "Proficient", isProficient: true },
                { name: "Gap Analysis & Current-State Auditing", level: "Proficient", isProficient: true },
                { name: "Client Discovery Workshops & Co-Design", level: "Operational", isProficient: false },
                { name: "Executive ROI & Value Realization Modeling", level: "Operational", isProficient: false },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-xs"
                >
                  <span className="font-label-bold text-label-bold text-on-surface">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-label-code text-label-code text-[11px] ${
                      skill.isProficient
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain D */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  cloud_sync
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold text-base">
                  Infrastructure &amp; Productivity
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[11px]">
                Domain D
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Cloud Ecosystems [AWS / Azure / GCP Basics]", level: "Operational", isProficient: false },
                { name: "Containerization Fundamentals [Docker]", level: "Operational", isProficient: false },
                { name: "Advanced Excel / Financial & Data Modeling", level: "Proficient", isProficient: true },
                { name: "Jira / Confluence / Workflow Orchestration", level: "Proficient", isProficient: true },
                { name: "CI/CD Pipeline Fundamentals", level: "Operational", isProficient: false },
                { name: "Data Warehousing [Snowflake / BigQuery]", level: "Operational", isProficient: false },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-xs"
                >
                  <span className="font-label-bold text-label-bold text-on-surface">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-label-code text-label-code text-[11px] ${
                      skill.isProficient
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL APPROACH & WORKING PHILOSOPHY */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block font-semibold text-xs">
            Guiding Principles
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Professional Approach &amp; Working Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
              <span className="material-symbols-outlined text-[28px]">
                query_stats
              </span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
              Pillar I
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Evidence-First Decision Making
            </h3>
            <p className="font-body-default text-body-default text-on-surface-variant text-sm">
              Technical recommendations should never stem from intuition alone. Every proposal, refactoring project, or migration roadmap is backed by quantitative data, workload profiling, and rigorous benchmarking.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary mb-1">
              <span className="material-symbols-outlined text-[28px]">tune</span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
              Pillar II
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Maintainable Architecture
            </h3>
            <p className="font-body-default text-body-default text-on-surface-variant text-sm">
              Consultancy fails if a solution cannot outlive the consultant. Systems are designed to be accessible, modular, thoroughly documented, and maintainable by internal engineering teams after engagement sign-off.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-1">
              <span className="material-symbols-outlined text-[28px]">groups</span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
              Pillar III
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              User &amp; Stakeholder Centricity
            </h3>
            <p className="font-body-default text-body-default text-on-surface-variant text-sm">
              Technical complexity is not an achievement. The metric of success is human adoption and demonstrable organizational outcomes—ensuring software serves real-world workflows rather than vanity milestones.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTINUOUS GROWTH & HORIZONS */}
      <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block font-semibold text-xs">
            Continuous Growth &amp; Horizons
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Current Research &amp; Professional Trajectory
          </h3>
          <p className="font-body-default text-body-default text-on-surface-variant text-sm">
            Actively expanding depth across the <span className="font-medium text-on-surface">Modern Data Stack</span>, practical <span className="font-medium text-on-surface">Machine Learning integration</span> for real-time inference, and regulatory <span className="font-medium text-on-surface">Data Governance frameworks</span> for global multi-tenant operations.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Cloud Lakehouses", "Data Observability", "Enterprise GenAI Safeguards", "Semantic Layers"].map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded bg-surface-container font-label-code text-label-code text-on-surface text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <Link
            href="/my-background"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary font-label-bold text-label-bold hover:bg-on-primary-fixed-variant transition-colors shadow-sm text-center text-sm"
          >
            <span>Review Academic &amp; Professional Background</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
