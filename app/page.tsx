import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: RECRUITER EXECUTIVE HERO */}
      <section className="relative w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Primary Pitch & Fast-Action CTA Stack */}
          <div className="lg:col-span-7 space-y-6">
            {/* Recruiter Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant font-semibold tracking-wide uppercase text-xs">
                Available for Technical Consulting &amp; Analytics Roles &bull; Relocation / Hybrid Open
              </span>
            </div>

            {/* Identity & Value Proposition */}
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block font-semibold text-xs">
                  Executive Portfolio &bull; [YEAR] Edition
                </span>
                <h1 className="font-display-hero text-headline-xl sm:text-display-hero text-on-surface tracking-tight">
                  [YOUR NAME]
                </h1>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-semibold">
                Technical Consultant | Computer Science &amp; Data Analytics
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl pt-2">
                Bridging the gap between complex data architectures and strategic business execution. Combining computer science rigor, data-driven analytical modeling, and hands-on consulting delivery to solve enterprise challenges.
              </p>
              <p className="font-label-code text-label-code text-outline text-xs">
                /* Note: Replace bracketed tokens with your actual personal and company metrics */
              </p>
            </div>

            {/* Immediate Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/previous-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-bold text-label-bold shadow-sm hover:bg-primary transition-all duration-150"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/my-background"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-bold text-label-bold shadow-sm hover:bg-surface-container transition-all duration-150"
              >
                Explore My Background
              </Link>
              <a
                href="#"
                download="Resume-[YOUR-NAME].pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-low text-on-surface-variant font-label-bold text-label-bold hover:text-primary hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  description
                </span>
                <span>Download Resume [PDF]</span>
              </a>
            </div>

            {/* Quick Proof Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="font-label-metric text-label-metric text-on-surface">
                  [5+]
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Enterprise Engagements Delivered
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="font-label-metric text-label-metric text-primary">
                  [$2.4M+]
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Validated Business ROI Unlocked
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="font-label-metric text-label-metric text-tertiary">
                  [99.9%]
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Pipeline &amp; System Reliability
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Preview Deck */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-md space-y-4">
              {/* Card Header & Status Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span className="font-label-code text-label-code text-on-surface font-semibold uppercase text-xs">
                    System_Capability_Matrix.v2
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-code text-[11px]">
                  VERIFIED [YEAR]
                </span>
              </div>

              {/* Pillar 1: Technical Architecture */}
              <div className="p-4 rounded-lg bg-surface-container-low space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      account_tree
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      1. Technical Architecture
                    </span>
                  </div>
                  <span className="font-label-code text-label-code text-primary font-bold text-xs">
                    98.4% Efficiency
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  System modularity, decoupled microservices, fault-tolerant infrastructure &amp; API governance.
                </p>
                {/* Data Sparkline SVG */}
                <div className="pt-1">
                  <svg
                    className="w-full h-8 text-primary"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 280 32"
                  >
                    <path
                      d="M0 24 L40 18 L80 22 L120 10 L160 14 L200 6 L240 12 L280 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 24 L40 18 L80 22 L120 10 L160 14 L200 6 L240 12 L280 4 V32 H0 Z"
                      fill="currentColor"
                      fillOpacity="0.08"
                    />
                  </svg>
                </div>
              </div>

              {/* Pillar 2: Data & Predictive Analytics */}
              <div className="p-4 rounded-lg bg-surface-container-low space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">
                      query_stats
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      2. Data &amp; Predictive Analytics
                    </span>
                  </div>
                  <span className="font-label-code text-label-code text-tertiary font-bold text-xs">
                    ETL &amp; Modeling
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Distributed ingestion pipelines, analytical schemas, dimensional warehouses, and regression models.
                </p>
                {/* Progress Bar Graph Mock */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between font-label-code text-[11px] text-on-surface-variant">
                    <span>Ingestion Throughput (Records/Sec)</span>
                    <span>[120K rps]</span>
                  </div>
                  <div className="w-full h-2 rounded bg-surface-container overflow-hidden">
                    <div
                      className="h-full bg-tertiary rounded transition-all duration-1000"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Enterprise Implementation */}
              <div className="p-4 rounded-lg bg-surface-container-low space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface text-[20px]">
                      fact_check
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      3. Enterprise Delivery
                    </span>
                  </div>
                  <span className="font-label-code text-label-code text-on-surface font-bold text-xs">
                    On-Schedule: 100%
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  C-level executive translation, cross-functional engineering leadership, roadmaps &amp; compliance.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code text-[10px]">
                    Agile/Scrum
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code text-[10px]">
                    Cloud Ops
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code text-[10px]">
                    SOC2 Aligned
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container text-center">
                <span className="font-label-code text-label-code text-on-surface-variant text-xs">
                  Core Stack:{" "}
                  <span className="text-primary font-semibold">
                    [Python, SQL, AWS, Azure, Snowflake, Spark, React]
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK SCANNABLE EXECUTIVE HIGHLIGHTS */}
      <section className="w-full bg-surface-container-low py-12 sm:py-16">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold text-xs">
                Core Competencies
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                Built for Immediate Impact Across Three Disciplines
              </h2>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Structured to translate technical ambiguity into deterministic, measured commercial results.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Technical Consulting */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    handshake
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Technical Consulting &amp; Solution Delivery
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                  Directing technical initiatives from requirements elicitation through implementation. Experienced in bridging senior business leadership with core development squads.
                </p>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Enterprise Architecture Audits &amp; Modernization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Cross-functional C-suite Stakeholder Alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Vendor RFP Evaluations &amp; System Selection</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Key Metric
                </span>
                <span className="font-label-code text-label-code text-primary font-bold">
                  100% Scope Retention
                </span>
              </div>
            </div>

            {/* Card 2: Data Analytics */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[28px]">
                    insights
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Data Analytics &amp; Quantitative Modeling
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                  Designing scalable analytical backbones, automated data warehouses, and executive intelligence dashboards that convert raw events into operational levers.
                </p>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Predictive Forecasting &amp; Cohort Modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Real-Time Ingestion &amp; Reverse ETL Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Automated Executive KPIs &amp; Governance Rules</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Scale Profile
                </span>
                <span className="font-label-code text-label-code text-tertiary font-bold">
                  [10M+] Records Daily
                </span>
              </div>
            </div>

            {/* Card 3: Computer Science Foundations */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[28px]">
                    terminal
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Computer Science Foundations
                </h3>
                <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                  Grounded in algorithmic complexity, concurrency management, and distributed systems logic. Writing clean, documented, and resilient code built to endure.
                </p>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-on-surface text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Optimized Algorithm Complexity (O-Notation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-on-surface text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Microservices Architecture &amp; RESTful/gRPC APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-on-surface text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>Automated CI/CD Workflows &amp; Containerization</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                  Benchmark
                </span>
                <span className="font-label-code text-label-code text-on-surface font-bold">
                  [&lt;15ms] Sub-system Latency
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT ME EXECUTIVE SNAPSHOT */}
      <section className="w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="p-6 sm:p-8 md:p-12 rounded-2xl bg-surface-container-lowest shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Profile Headshot Vignette */}
          <div className="lg:col-span-4 relative">
            <div className="rounded-xl overflow-hidden shadow-sm relative aspect-[4/5] bg-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Professional corporate headshot of technical consultant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Q2_irUoRfq7T0FDyjuTgqHAM9qpGeyVtoTX0LV2zWcgT-5Nn8eBG_PC3lJHi9E3uKjE08JUcZa6rzW7UuDR5wj-hwdFNxmrkO4FM57E7elf9Hsnp3WkJ0HULdwq0kSrz9DTAXePosJSF9BzyqbTgU9rRSDbgzlgtCWspcgak9iNfdixHeEP9KgDNKFmab6owLHf9ChaVvsOadW804LCnt2JwdPm_EbbPyQ3nps_sW4dz2-X06t9EhA"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface font-semibold text-xs">
                    [YOUR NAME]
                  </span>
                  <span className="font-label-code text-[11px] text-tertiary font-bold">
                    AVAILABLE NOW
                  </span>
                </div>
                <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                  B.S. / M.S. in Computer Science &bull; [YOUR UNIVERSITY]
                </span>
              </div>
            </div>
          </div>

          {/* Text Overview */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold text-xs">
                Executive Narrative
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                From Rigorous Computational Foundations to Strategic Advisory
              </h2>
            </div>
            <div className="space-y-4 font-body-default text-body-default text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <p>
                With formal training spanning Computer Science and Advanced Data Analytics at <strong className="text-on-surface font-semibold">[YOUR UNIVERSITY/PROGRAM]</strong>, my career is shaped by an urge to apply theoretical computing constructs to real-world corporate friction. I specialize in turning complex software ecosystems and fragmented data silos into organized, scalable revenue drivers.
              </p>
              <p>
                Over previous engagements, I have advised engineering managers and enterprise stakeholders across financial services, cloud tech, and operational logistics. Whether defining multi-region data models, automating reporting flows, or remediating legacy infrastructure, I operate with an uncompromising focus on clean architecture, verifiable ROI, and rapid time-to-value.
              </p>
            </div>

            {/* Domain Competencies Pills */}
            <div className="space-y-2 pt-2">
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider block font-semibold text-xs">
                Core Expertise Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Solution Architecture",
                  "Data Modeling & Warehousing",
                  "Requirements Engineering",
                  "Business Strategy & ROI",
                  "Cloud Infrastructure (AWS/GCP)",
                  "Predictive Algorithms",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-code text-label-code font-semibold text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Deep-Dive CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/my-profile"
                className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:text-on-primary-fixed-variant transition-colors group text-sm"
              >
                <span>Read Full Profile</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <span className="text-outline">&bull;</span>
              <Link
                href="/my-background"
                className="font-label-bold text-label-bold text-on-surface-variant hover:text-on-surface transition-colors text-sm"
              >
                View Career Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PREVIOUS WORK PREVIEW */}
      <section className="w-full bg-surface-container-low py-12 sm:py-16">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold text-xs">
                Case Studies
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                Featured Previous Engagements
              </h2>
            </div>
            <Link
              href="/previous-work"
              className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary hover:underline text-sm"
            >
              <span>Explore All Case Studies</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 3 Featured Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Enterprise data pipeline telemetry dashboard"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0JEISlx_sKAXUb9dAjZ_YCbowcQbYjlTt1yasKGkhuQK3NOzGAphnQ6HFjKpgXVX6AQsysSEigTM41XqB3HIulzW5Fj4WYaJaR5yyslAf6YfIS2b2mvpWaB4bhIu3x2BWQ_JMloLFtGWc53Pz4L1ImUABfSghJbEKdn8vbVjDxPkNsui37TzEyyLvqSeV22fHurvXAZLdtv0whpPBgsujhb9Bs3hQwbPjgov_xqTUYkDlDz149gQZzw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm font-label-code text-[11px] font-semibold text-primary">
                    Data Analytics &amp; Consulting
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-code text-[11px] text-on-surface-variant">
                    [YEAR]
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <span className="font-label-code text-[11px] text-outline uppercase font-semibold">
                      Role: Lead Technical Consultant
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      [PROJECT 1: Enterprise Data Pipeline &amp; Analytics Platform]
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Redesigned ingestion topology handling multi-source transactional schemas. Consolidated fragmented reporting into unified data warehouse with automated audit verification.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["SQL", "Python", "Snowflake", "PowerBI"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[11px] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="p-3 rounded-lg bg-surface-container-low mb-4 flex items-center justify-between">
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Throughput Improvement:
                  </span>
                  <span className="font-label-bold text-label-bold text-tertiary">
                    [+340% Speed]
                  </span>
                </div>
                <Link
                  href="/previous-work"
                  className="inline-flex items-center gap-1.5 font-label-bold text-label-bold text-primary hover:underline text-sm"
                >
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Modern cloud architecture schematic visualization"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsWiKy2EUO0K3fQpUeiHCly6P_JFcUBXhUk0boaCJPUGfE0RX5CXjJTyrcuRbYDNxW_xQqXhr3lttZUlgbnRv6dc-4Zks66bNVA5HfgzONPW960b01NPzenCTuoPNWndJTqro_OJMwrwhbjHc4VlBFvH1hmFtpE5BEmlkZyZ7KSYLCrxyK8AuaahsOpwX_XB7kKJauhE4Hzj1IMnVzO2Bn25pI1kVeCUISo2Z-iZjED5wnBs2JW7TdjQ"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm font-label-code text-[11px] font-semibold text-secondary">
                    Technology &amp; Systems
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-code text-[11px] text-on-surface-variant">
                    [YEAR]
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <span className="font-label-code text-[11px] text-outline uppercase font-semibold">
                      Role: Systems Architect
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      [PROJECT 2: Automated Workflow &amp; Decision Intelligence System]
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Built deterministic rules engine for high-volume trade processing. Replaced manual review procedures with automated machine-verifiable routing logic.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["FastAPI", "Docker", "AWS ECS", "PostgreSQL"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[11px] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="p-3 rounded-lg bg-surface-container-low mb-4 flex items-center justify-between">
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Manual Overhead Reduction:
                  </span>
                  <span className="font-label-bold text-label-bold text-tertiary">
                    [-72% Workload]
                  </span>
                </div>
                <Link
                  href="/previous-work"
                  className="inline-flex items-center gap-1.5 font-label-bold text-label-bold text-primary hover:underline text-sm"
                >
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Strategic technical consulting session diagram"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGw5uDA58TyVHlwmN3eg5iFlAzRMPikymVIumMIq6sQbkCOsHhbb0YSe5JuTENHW6lQZ8wLztBXErEGAxt1k1IpGATzJOxwt8IxiQJmWle51kysAk_6OyUiNxImRuCm-_VQ8v5s-s4NBfMDde_6KAx3bhOJH15Z-nV2Jrf0Pbfnad5yX65FKDhwfOXenxrUNBdaA1BV_Fe2yVjJ8vX1kXw1EkOxzsVI9z2cDFVcaqNzytKd_1vTzIDaw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm font-label-code text-[11px] font-semibold text-primary">
                    Technical Consulting
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 font-label-code text-[11px] text-on-surface-variant">
                    [YEAR]
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <span className="font-label-code text-[11px] text-outline uppercase font-semibold">
                      Role: Advisory Lead
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      [PROJECT 3: Technical Architecture Assessment &amp; Migration Strategy]
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conducted comprehensive technical due diligence on on-premise monolithic architecture. Formulated zero-downtime roadmap to serverless cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Terraform", "Kubernetes", "GCP", "Cost Ops"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[11px] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="p-3 rounded-lg bg-surface-container-low mb-4 flex items-center justify-between">
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Annual Infrastructure Savings:
                  </span>
                  <span className="font-label-bold text-label-bold text-tertiary">
                    [$480K / Year]
                  </span>
                </div>
                <Link
                  href="/previous-work"
                  className="inline-flex items-center gap-1.5 font-label-bold text-label-bold text-primary hover:underline text-sm"
                >
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RECRUITER VALUE PROPOSITION / WHY WORK WITH ME */}
      <section className="w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold text-xs">
              Evaluation Criteria
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Why Technical Teams &amp; Executive Leaders Trust My Work
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant text-sm">
              Optimized for low-friction organizational integration and verifiable impact from week one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  analytics
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Data-Backed Rigor
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Zero reliance on intuition. Every recommendation is supported by architectural benchmarks, query analytics, and unit-tested models.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  forum
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Clear Stakeholder Clarity
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bilingual fluency across engineering jargon and executive summaries. Complex constraints communicated transparently to board level.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  view_in_ar
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Scalable Systems Focus
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Delivering clean maintainable codebases with full CI/CD test coverage, thorough documentation, and resilient failover patterns.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  rocket_launch
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Adaptable Rapid Onboarding
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Equipped with a self-starter consulting playbook to ingest documentation, audit repositories, and ship value within sprint one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING EXECUTIVE CTA BANNER */}
      <section className="w-full bg-surface-container-low py-12 sm:py-16">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-code text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                ACTIVE SEARCH / CONSULTING ENGAGEMENTS
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                Let’s Connect on Upcoming Initiatives or Opportunities
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant text-sm">
                Currently evaluating high-impact roles and technical consulting engagements. Available for immediate interview loops, technical assessments, or exploratory architecture discussions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact-me"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-bold text-label-bold shadow-sm hover:bg-primary transition-all text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                <span>Get In Touch [YOUR EMAIL]</span>
              </Link>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container text-on-surface font-label-bold text-label-bold hover:bg-surface-container-high transition-colors text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  link
                </span>
                <span>Connect on LinkedIn [YOUR LINKEDIN]</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
