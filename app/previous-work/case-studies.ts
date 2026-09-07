export interface CaseStudy {
  id: number;
  category: "Data Analytics" | "Consulting & Strategy" | "Systems & Engineering" | "Research & Modeling";
  meta: string;
  roleTitle: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  year: string;
  executiveSummary: string;
  timeline: string;
  impact: string;
  stakeholders: string;
  deployment: string;
  challenge: string;
  role: string;
  approach: string;
  tools: string[];
  outcomes: string[];
  learnings: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    category: "Data Analytics",
    meta: "[YEAR] • Role: [Lead Consultant & Analytics Architect]",
    roleTitle: "[Lead Consultant & Analytics Architect]",
    title: "Enterprise Data Warehouse & Automated BI Framework",
    shortDescription:
      "Designed a centralized data repository and automated KPI reporting suite reducing executive report compilation latency by 60%.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtRPuT7_iC_J4_ZbgASzPHyVOTGla7bhxV2s67bCvt461WbVVZfc9I2ryQQhD-rXsUJSnnTde0c4IwFtSB9VUXNAmHd2Dp3L0VY8LFyAYdt0KIw3culixtLcJAN1TCcQ5EYI3o7XNEQKj9aqF8ZkEsmqSRMCZxNOXTsNhyTUcOZmeh4QIpl-WK-zgUXLydXb64q3luh3Ol-mpAFF3RzfEjdXAq9o7mvocT0nDVIcI1NmaZtLmkXKYoyg",
    imageAlt: "High fidelity analytical business intelligence dashboard",
    tags: ["SQL", "Python", "Snowflake/BigQuery", "PowerBI"],
    year: "[YEAR]",
    executiveSummary:
      "Architected a unified single source of truth data lakehouse and reporting warehouse for multi-department operations, cutting reporting latency by over 60%.",
    timeline: "4 Months",
    impact: "60% Faster",
    stakeholders: "12 Execs",
    deployment: "Snowflake Cloud",
    challenge:
      "Client maintained disconnected relational databases and siloed spreadsheet systems. Executive decision cycles were delayed up to 10 business days waiting for reconciled monthly reports.",
    role: "Led technical schema architecture, data pipeline engineering (ELT), stakeholder requirement discovery, and PowerBI semantic modeling.",
    approach:
      "Adopted dimensional modeling (Star Schema) via dbt and Snowflake. Built scheduled orchestration tasks in Python with automated data quality checks and reconciliation alert webhooks.",
    tools: ["Snowflake", "SQL", "Python", "dbt", "PowerBI", "AWS S3", "Airflow"],
    outcomes: [
      "Reduced recurring KPI query turnaround from 14 hours manual work to 15-minute automated incremental refreshes.",
      "Eliminated schema drift and data discrepancies across 4 regional operating divisions.",
      "Delivered self-service executive dashboards adopted by 45+ senior leaders within the first month.",
    ],
    learnings:
      "Early alignment on standardized business definitions across sales, finance, and logistics is twice as critical as raw schema optimization.",
  },
  {
    id: 2,
    category: "Consulting & Strategy",
    meta: "[YEAR] • Role: [Technical Consultant]",
    roleTitle: "[Technical Consultant]",
    title: "Technical System Migration & Process Audit",
    shortDescription:
      "Conducted end-to-end technical due diligence and migration roadmap for a legacy transactional database into modern cloud microservices.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyqgqJAya_YeLHPhqF49bHJIpXgVkLjgxyLN3NACyEHbEs-YnYYK4u6cyu2yexy3HQ9VJhFf9RWvZJBetB2QgYzglNjksuP0ZEswiScoxU-zZfKKqYT_x5c8xx90OeskFMawSVakC9JpOD3sX4bhsYuZ2vcb2zv6f3rq9zOJq2Q2QjnaIqxjyL6KsX5mx-4fQXxeG5criX-Z11ngeYuu6rv5Wf6TWmbn4A3rjiqHYgYO1obIt_hA64g",
    imageAlt: "Technical system architectural workflow diagram",
    tags: ["Cloud Architecture", "Gap Analysis", "Technical Specs", "Draw.io"],
    year: "[YEAR]",
    executiveSummary:
      "Led complete systems due diligence, codebase profiling, and multi-phase cloud migration planning for a core transaction processing application.",
    timeline: "3 Months",
    impact: "Zero Downtime",
    stakeholders: "25+ Eng",
    deployment: "AWS Microservices",
    challenge:
      "Monolithic on-premise transactional core was experiencing recurrent failover crashes under peak Q4 demand. Technical debt prevented continuous delivery cycles.",
    role: "Conducted architecture audit, technical feasibility assessment, microservices target state blueprinting, and migration milestone roadmapping.",
    approach:
      "Leveraged Strangler Fig pattern for staged domain decoupling. Created complete API gateway specifications, data replication mappings, and risk-mitigation fallback plans.",
    tools: ["Cloud Architecture", "System Gap Analysis", "Draw.io", "AWS ECS", "Docker", "Technical RFC Writing"],
    outcomes: [
      "Delivered 65-page vetted technical blueprint and phased execution sequence accepted unanimously by the board of directors.",
      "Identified 18 legacy code anti-patterns and performance bottlenecks prior to production migration.",
      "Engineered zero-downtime cutover strategy protecting $2.4M in daily volume.",
    ],
    learnings:
      "Architectural migrations succeed when phased incrementally based on transactional value rather than purely infrastructural convenience.",
  },
  {
    id: 3,
    category: "Data Analytics",
    meta: "[YEAR] • Role: [Data Analytics Consultant]",
    roleTitle: "[Data Analytics Consultant]",
    title: "Predictive Customer Churn & Segmentation Engine",
    shortDescription:
      "Engineered feature sets and statistical classification models allowing marketing teams to proactively identify retention risks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIFhjIX_JSCrtvFF2_CbTStHOfCdlYsMv2hcp8G7J4azrxg0MbBVIclCRxkFNVR9Vr2ZjN2dFZ5xSHSg09BvEyNaH2gWPCUUZ2AC-F1ijELhfEljHvp2XE14fEArZdm2rb9nv5CXASj3Rz9iJrt-0T7Sc5uqiFdR6L8uyP3nd8zrpxAQ1odjO8mDkAPM8RKohgfTrTSfqDc-l0ga82OoIHw-CMooDQZpWjabGsgtnzT3RT0qu4u2XKQA",
    imageAlt: "Data science confusion matrix heatmap visualization",
    tags: ["Python (pandas/sklearn)", "Statistical Modeling", "Clustering"],
    year: "[YEAR]",
    executiveSummary:
      "Built end-to-end machine learning scoring pipelines to detect early behavioral indicators of customer churn and segment high-value cohorts.",
    timeline: "2.5 Months",
    impact: "+18% Retention",
    stakeholders: "Product & Growth",
    deployment: "Scikit-Learn / Cloud",
    challenge:
      "SaaS client experienced steady revenue leakage with churn only diagnosed retroactively upon non-renewal notices, lacking proactive retention touchpoints.",
    role: "Data discovery, statistical exploratory analysis, feature extraction, supervised classification model tuning, and marketing platform integration.",
    approach:
      "Analyzed 18 months of session logs and transaction history. Engineered 42 predictive behavioral features. Evaluated Random Forests and XGBoost against precision-recall thresholds.",
    tools: ["Python", "pandas", "scikit-learn", "XGBoost", "PostgreSQL", "Matplotlib", "Jupyter"],
    outcomes: [
      "Achieved 0.84 ROC-AUC on 60-day advance churn risk prediction.",
      "Directly empowered proactive customer success campaigns that salvaged 18% of flagged at-risk accounts in Q3.",
      "Identified 3 previously unnoticed product usage drop-off choke points.",
    ],
    learnings:
      "Model interpretability (SHAP values) proved significantly more influential in driving operational adoption than a 2% boost in raw algorithmic accuracy.",
  },
  {
    id: 4,
    category: "Systems & Engineering",
    meta: "[YEAR] • Role: [Software & Data Engineer]",
    roleTitle: "[Software & Data Engineer]",
    title: "API-Driven Data Pipeline for Operational Monitoring",
    shortDescription:
      "Built fault-tolerant REST API data ingestion pipelines handling daily streaming events with automated error handling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5b7yWs6JokN_9L4AyJ_gVKue-9uCY983roiiKsPJd9X5c4B0k0GwqPgWKkUILbDL_giU9p2vxWoN7X52m4o-eg1z7tLQeDN3oxmKl1QJyG8ARt0_mR13QKcDPFtVxHuv-loxDafDJJpbUrFTeGxlmcS74_4Qjg3g4a-_cVT-3Oojcyl5H2rirXVFD8dt1n28XIW31TM-KGoIrs4ba0zSJ2qIAp1smX-pgGrXwIoiHBncTwQRC7TeAMg",
    imageAlt: "Technical data engineering schema showing ETL pipeline flow",
    tags: ["Python", "REST APIs", "PostgreSQL", "Docker", "Git"],
    year: "[YEAR]",
    executiveSummary:
      "Engineered scalable telemetry ingestion services processing daily IoT and transactional streaming payloads with strict durability guarantees.",
    timeline: "5 Months",
    impact: "99.98% Uptime",
    stakeholders: "Ops & SRE",
    deployment: "Docker / Hybrid Cloud",
    challenge:
      "Legacy cron-based batch synchronization caused cascading memory bottlenecks, database locks, and frequent silent dropouts in telemetry monitoring.",
    role: "Designed fault-tolerant REST ingestion microservice, retry queues, schema validation decorators, and automated container deployment scripts.",
    approach:
      "Implemented asynchronous HTTP workers, Redis buffering queues, and dead-letter queues for unparseable packets. Automated continuous integration tests via Git.",
    tools: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Git", "Grafana", "Linux"],
    outcomes: [
      "Successfully sustained ingestion spikes of 1,200 events/sec without packet drop.",
      "Reduced telemetry data ingestion latency from 4 hours to sub-second real-time streaming.",
      "Established automated alerts that flagged infrastructure anomalies 20 minutes before customer impact.",
    ],
    learnings:
      "Proactive dead-letter queue inspection and comprehensive payload schema validation prevent downstream database deadlocks in distributed event systems.",
  },
  {
    id: 5,
    category: "Consulting & Strategy",
    meta: "[YEAR] • Role: [Associate Consultant]",
    roleTitle: "[Associate Consultant]",
    title: "Enterprise IT Infrastructure Assessment & Cost Optimization",
    shortDescription:
      "Identified cloud licensing redundancies and resource over-provisioning yielding estimated 25% annual infrastructure savings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBst1g3j_ICjgnwGH2rKZ1E6OgPSLU97H9gnX02zrNMCdqJbU6O6WUjA2t8EIw_09iFVQ7t-YS-H4IDPRRZkBx2J6deVnHVguFNTD1RvMALVbFYxaSZ5bbUuC3PdcCwUZMBKfKvXK4HeixLYQ1DV-hS8dOb97SnpH3jT3vy3IFQvkTZuCNuN5NI1BP7HLkMpN6nokK1i719eXw_58Q9otdEDN-PxFfWsXHXjk4ehWRxLYvr245d6cwQlQ",
    imageAlt: "Corporate financial modeling and cloud infrastructure cost waterfall chart",
    tags: ["Cost Analytics", "Stakeholder Workshops", "Financial Modeling"],
    year: "[YEAR]",
    executiveSummary:
      "Comprehensive audit of cloud and third-party SaaS infrastructure spend for an enterprise client, uncovering structural redundancies and over-provisioning.",
    timeline: "2 Months",
    impact: "25% Annual Save",
    stakeholders: "CFO & VP Eng",
    deployment: "FinOps Review",
    challenge:
      "Unchecked departmental cloud provisioning led to 40% year-over-year operational expenditure spikes without commensurate traffic or user growth.",
    role: "Data extraction across billing APIs, cluster utilization profiling, rightsizing analysis, and presentation of executive savings roadmaps.",
    approach:
      "Conducted automated node telemetry analysis, unallocated volume sweeps, and pricing model comparisons (Reserved Instances vs On-Demand vs Spot).",
    tools: ["Cost Analytics", "Financial Modeling", "AWS Cost Explorer", "Excel Advanced", "Executive Presentation"],
    outcomes: [
      "Identified $140,000 in immediate, risk-free annual savings within the first 14 days.",
      "Negotiated reserved capacity agreements and decommissioned 34 idle development databases.",
      "Formulated sustainable FinOps tagging policy enforced across subsequent engineering sprints.",
    ],
    learnings:
      "Cloud cost optimization is rarely a pure technical issue; it requires establishing cross-functional financial accountability across engineering leads.",
  },
  {
    id: 6,
    category: "Research & Modeling",
    meta: "[YEAR] • Role: [CS Research Lead]",
    roleTitle: "[CS Research Lead]",
    title: "Academic Capstone: Distributed Computing Benchmark",
    shortDescription:
      "Evaluated data throughput and memory bottlenecks across distributed database clusters for high-volume analytical queries.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAae46qIuKNDz3eC4AL7Jv88RF1tz8fq-CXfBbtzMWOKdWI6JbiJHnOai4dwv1n1g5xKBpz8H3ls7aDLVbO_ZZwmxSj8jpvZU_AxRrPxJpkkNQtMY_Y9DKz6_LOSlfxGADNEmivbdZKaLGUJ2UoYvBsAbBzt7knOT_O3v6oqAfuvmelMoVU22JkQN69h6bx6aAGWFOnC92wiydR0wAoenHYsoo-g72V4j3oCsaa5vm5vxXqx0GG20kPHg",
    imageAlt: "High performance computing performance latency comparison multi-bar graph",
    tags: ["CS Algorithms", "Linux", "Distributed Systems", "Python"],
    year: "[YEAR]",
    executiveSummary:
      "Rigorous experimental research assessing cluster consensus latency, partition tolerance, and query throughput in distributed database systems.",
    timeline: "6 Months",
    impact: "Published Paper",
    stakeholders: "Academic Faculty",
    deployment: "Cluster Testbed",
    challenge:
      "Quantifying performance tradeoffs between strong consistency and eventual consistency models under simulated network partition stress.",
    role: "Experimentation design, cluster node automation scripting, test execution harness development, and peer-reviewed statistical analysis.",
    approach:
      "Provisioned multi-node Linux testbeds using custom Python benchmarking harnesses. Injected systematic network latency and packet loss using NetEm.",
    tools: ["Distributed Systems", "Python", "Linux Bash", "Jepsen Testing", "Statistical Testing", "LaTeX"],
    outcomes: [
      "Evaluated over 100,000 simulated distributed query transactions under varying partition states.",
      "Discovered undocumented latency tail behavior in partitioned cluster leader re-elections.",
      "Authored research publication commended by Computer Science department advisory council.",
    ],
    learnings:
      "Theoretical algorithmic guarantees often diverge under real-world network turbulence; systematic chaos testing is essential for mission-critical distributed software.",
  },
];
