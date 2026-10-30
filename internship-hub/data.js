// All content for the internship hub. Edit this file to update the site.
window.HUB_DATA = {
  meta: {
    updated: "30 Oct 2026",
    target: "Tech internship from 1 Dec 2026 to 31 Jan 2027, in Delhi NCR (on-site or hybrid) or remote. Paid preferred, unpaid ranks last.",
    searched: "About 1,100 listings checked on Internshala, LinkedIn, Unstop and the AICTE National Internship Portal, plus government schemes (NIC, Indian Army, DRDO SAG, NeGD, C-DOT, UIDAI, I4C).",
    nicOpens: "2026-11-02T00:00:00+05:30",
    rescan: "~15 Nov",
    timing: "Internshala and LinkedIn postings ask you to start within about five weeks, so roles posted today want November joiners. Delhi NCR roles that start in December should appear from about 15 November. Ask Kiro to scan again then.",
  },

  nextSteps: [
    { id: "nsut-email", when: "This week", text: "Send the recommendation-letter email to NSUT (add your roll number). The letter takes the longest.", href: "#nic-email" },
    { id: "sop-review", when: "Before 2 Nov", text: "Read the Statement of Purpose and tell Kiro what to change.", href: "#nic-sop" },
    { id: "nic-apply", when: "2 Nov", text: "Apply on dii.nic.in by copying the answers from the NIC pack.", href: "#nic-form-card" },
    { id: "atomic-apply", when: "Any time", text: "Apply to Atomic Computing on LinkedIn and ask whether December–January works.", href: "#opt-2" },
    { id: "rescan", when: "~15 Nov", text: "Ask Kiro to re-scan Internshala and LinkedIn for December-start roles in Delhi NCR.", href: "#shortlist" },
  ],

  shortlist: [
    {
      id: "opt-1",
      priority: 1,
      tag: "Top pick",
      org: "National Informatics Centre (NIC), MeitY",
      role: "NIC Winter Internship 2026 (Digital India Internship Scheme)",
      facts: [
        ["Where", "NIC Headquarters, New Delhi · on-site"],
        ["Dates", "1 Dec 2026 – 31 Jan 2027 (can be extended by a month)"],
        ["Stipend", "₹10,000/month · 50 seats"],
        ["Apply", "Opens 2 Nov 2026 on dii.nic.in · closing date not announced yet"],
        ["Eligibility", "B.Tech 3rd year with 60%+ in the last exam. You qualify."],
      ],
      why: "The only verified program that matches your dates, city and field. Areas include cyber security, cloud computing, DevOps and AI/ML.",
      next: "Get the NSUT letter now, then apply on 2 Nov with the NIC pack below. dii.nic.in doesn't load from Kiro's sandbox, so you submit this one yourself.",
      links: [
        { label: "Application portal", url: "https://dii.nic.in" },
        { label: "2026 batch news", url: "https://www.jagranjosh.com/news/nic-winter-internship-2026-applications-open-november-2-check-eligibility-stipend-and-dates-188754" },
        { label: "2025 guidelines (PDF)", url: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/11/202511062137738962.pdf" },
      ],
    },
    {
      id: "opt-2",
      priority: 2,
      tag: "Ask about dates",
      org: "Atomic Computing",
      role: "Internship, AI Software Engineering (Delhi NCR)",
      facts: [
        ["Where", "Remote contract · Delhi NCR"],
        ["Dates", "Not stated"],
        ["Stipend", "Not stated"],
        ["Posted", "28 Oct 2026 · 200+ applicants"],
        ["Stack", "MERN, Linux, AWS, cloud and AI proof-of-concepts"],
      ],
      why: "An AWS partner building cloud and AI systems. The stack matches CampusBazaar, Haven and CloudGuard.",
      next: "Apply on LinkedIn and ask whether a December–January internship works.",
      links: [{ label: "LinkedIn posting", url: "https://www.linkedin.com/jobs/view/4484460741/" }],
    },
    {
      id: "opt-3",
      priority: 3,
      tag: "Outside Delhi",
      org: "IIT (ISM) Dhanbad",
      role: "Winter Research Internship Scheme (WRIS) 2026",
      facts: [
        ["Where", "Dhanbad, Jharkhand · on-site"],
        ["Dates", "Winter (Dec–Jan). Confirm on the official notice."],
        ["Stipend", "₹5,000/month for institute-funded short-term interns"],
        ["Apply", "Reported open on 29 Oct 2026. Deadline not confirmed."],
      ],
      why: "Research with an IIT faculty member. Kiro only found news coverage, not the official notice.",
      next: "Only worth it if you'd stay in Dhanbad for December–January.",
      links: [
        { label: "IIT ISM notices", url: "https://www.iitism.ac.in/all-notice" },
        { label: "News report", url: "https://www.rasayanika.com/2026/10/29/ism-dhanbad-internship-wris-2026/" },
      ],
    },
  ],

  tracker: [
    { priority: 1, org: "NIC (MeitY)", role: "NIC Winter Internship 2026", where: "New Delhi, on-site", dates: "1 Dec – 31 Jan", stipend: "₹10,000/mo", window: "Opens 2 Nov", status: "Preparing", next: "Get NSUT letter; apply 2 Nov", url: "https://dii.nic.in" },
    { priority: 2, org: "Atomic Computing", role: "AI Software Engineering Intern", where: "Remote, Delhi NCR", dates: "Not stated", stipend: "Not stated", window: "Posted 28 Oct", status: "Not started", next: "Apply; ask about Dec–Jan", url: "https://www.linkedin.com/jobs/view/4484460741/" },
    { priority: 3, org: "IIT (ISM) Dhanbad", role: "Winter Research Internship 2026", where: "Dhanbad, on-site", dates: "Dec – Jan", stipend: "₹5,000/mo", window: "Open (deadline unconfirmed)", status: "Not started", next: "Only if you'd relocate", url: "https://www.iitism.ac.in/all-notice" },
  ],

  nic: {
    nameNote: "Use your legal name, Keeratjyot Singh, everywhere on this form. Your marksheets, Aadhaar and the NSUT letter carry that name.",
    basis: "The documents and form fields below follow the official Winter 2025 guidelines. Check them against the 2026 notice when the portal opens on 2 November.",
    documents: [
      { id: "doc-letter", text: "Recommendation letter from NSUT on the institute letterhead" },
      { id: "doc-cgpa", text: "CGPA-to-percentage declaration (NSUT's formula), attested by the college" },
      { id: "doc-x", text: "Class X marksheet (PDF scan)" },
      { id: "doc-xii", text: "Class XII marksheet (PDF scan)" },
      { id: "doc-sem", text: "Latest NSUT semester result (PDF scan)" },
      { id: "doc-photo", text: "Recent passport-size photo and Aadhaar, in case the 2026 form asks" },
    ],
    email: {
      to: "NSUT Training & Placement cell, or the IT department HoD (whoever issues internship letters)",
      subject: "Request for recommendation letter – NIC Winter Internship 2026 (Digital India Internship Scheme)",
      body: `Respected Sir/Ma'am,

I am Keeratjyot Singh (Roll No. [your roll number]), a third-year B.Tech Information Technology (Network and Information Security) student. I am applying to the NIC Winter Internship 2026 under the Digital India Internship Scheme of MeitY. It runs from 1 December 2026 to 31 January 2027 at NIC Headquarters, New Delhi, and applications open on 2 November on dii.nic.in.

The scheme requires a recommendation letter forwarded by the institution on the institute's letterhead, along with an attested declaration of the formula used to convert CGPA to percentage. I would be grateful if you could issue both. My latest marksheet and resume are attached.

Thank you.

Keeratjyot Singh
Roll No. [your roll number] | B.Tech IT (ITNS), 3rd year, NSUT
+91 98110 48178 | itskeerat43@gmail.com`,
    },
    form: [
      ["Name", "Keeratjyot Singh"],
      ["Date of birth", null],
      ["Gender", "Male"],
      ["Nationality", "Indian"],
      ["Mobile", "9811048178"],
      ["Email", "itskeerat43@gmail.com"],
      ["Address", "[your full address, New Delhi]"],
      ["Father's name (if asked)", "[fill in]"],
      ["Institute", "Netaji Subhas University of Technology (NSUT), New Delhi"],
      ["Course", "B.Tech, Information Technology (Network and Information Security)"],
      ["Year of study", "3rd year (2024–2028)"],
      ["CGPA", "8.34 / 10"],
      ["Percentage (if asked)", "[use NSUT's formula from the attested declaration]"],
      ["Class XII", "CBSE, Guru Harkrishan Public School, 2023, 88.6%"],
      ["Class X", "CBSE, BS International Sr. Sec. School, 2021, 89.2%"],
      ["Area of interest 1", "Cyber Security"],
      ["Area of interest 2", "Cloud Computing"],
    ],
    dobNote: "Left off this page because the repo is public. Copy it from your Aadhaar.",
    areasNote: "The 2025 list also had DevOps, AI/ML, Angular/React and Java Programming. If the 2026 list changes, keep Cyber Security and Cloud Computing: CloudGuard, CampusBazaar and the Google Cloud Cybersecurity certificate all sit there.",
    sopLimits: [100, 250],
    sop: `I am a third-year B.Tech student in Information Technology (Network and Information Security) at Netaji Subhas University of Technology, Delhi, with a CGPA of 8.34. I am applying for the Cyber Security and Cloud Computing areas.

Most of my project work sits where these two areas meet. I built CloudGuard, a scanner that audits a Google Cloud project for storage, IAM, logging and firewall misconfigurations and gives it a risk score. To run it safely, I wrote two custom IAM roles that limit the scanner to six read-only permissions. I also built CampusBazaar, a student marketplace where access rules are enforced inside the database through PostgreSQL Row-Level Security. In December 2025, I led a six-member team to the Smart India Hackathon grand finale with SAJAG, a monitoring platform for NDMA disaster-preparedness trainings, where I owned the backend and its role-based access control. I recently completed the Google Cloud Cybersecurity Professional Certificate.

NIC builds and runs systems that millions of citizens depend on, such as eHospital, Vahan and PM-KISAN. I want to learn how security and cloud infrastructure are designed, audited and operated at that scale, and how government security standards shape everyday engineering decisions. In return, I can contribute from the first week: security reviews and tooling, access-control checks, and backend services in Python, Node.js or Java.`,
  },

  profile: {
    contact: [
      ["Name you use", "Keerat Malhotra"],
      ["Legal name", "Keeratjyot Singh"],
      ["Email", "itskeerat43@gmail.com (alt: keeratjyot@gmail.com)"],
      ["Phone", "+91 98110 48178"],
      ["Location", "New Delhi, India"],
      ["Gender · Nationality", "Male · Indian"],
    ],
    links: [
      { label: "Portfolio", url: "https://keeratmalhotra.vercel.app" },
      { label: "Resume (PDF)", url: "https://keeratmalhotra.vercel.app/assets/resume.pdf" },
      { label: "GitHub", url: "https://github.com/KeeratMalhotra" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/malhotrakeerat/" },
      { label: "LeetCode", url: "https://leetcode.com/u/keeratmalhotra/" },
      { label: "CodeChef", url: "https://www.codechef.com/users/km111" },
    ],
    nameRules: [
      ["Government, PSU and research forms, or anything needing a college letter or ID", "Keeratjyot Singh"],
      ["Company applications", "Keerat Malhotra (matches your resume). Use Keeratjyot Singh in “legal name” fields."],
      ["After an offer", "Tell the company your documents say Keeratjyot Singh, so the offer letter and stipend payments match."],
    ],
    education: [
      ["B.Tech, Information Technology (Network & Information Security)", "NSUT, Delhi · 2024–2028 · CGPA 8.34"],
      ["Class XII (CBSE)", "Guru Harkrishan Public School · 2023 · 88.6%"],
      ["Class X (CBSE)", "BS International Sr. Sec. School · 2021 · 89.2%"],
      ["JEE Main", "98.64 percentile"],
      ["Coursework", "DSA, OOP, DBMS, Computer Networks, Operating Systems"],
    ],
    projects: [
      { name: "CloudGuard", what: "GCP misconfiguration scanner", detail: "4 detection modules, a 0–100 risk score, and 2 custom least-privilege IAM roles with 6 read-only permissions.", stack: "Python · GCP IAM, Storage, Compute, Logging · Streamlit", year: "2026", url: "https://github.com/KeeratMalhotra/CloudGuard" },
      { name: "CampusBazaar", what: "Anonymous NSUT-only marketplace", detail: "@nsut.ac.in sign-in enforced by a database trigger, Row-Level Security on every table, realtime chat, Gemini moderation with admin review.", stack: "Next.js 16 · React 19 · Supabase · Postgres RLS · Gemini", year: "2026", url: "https://github.com/KeeratMalhotra/CampusBazaar" },
      { name: "Haven", what: "Multi-agent AI companion", detail: "An orchestrator routes to 9 specialist agents that act through 4 MCP servers (Calendar, Tasks, Gmail, Slides).", stack: "Next.js 15 · FastAPI · Vertex AI · MCP · Firestore · Docker", year: "2026", url: "https://github.com/KeeratMalhotra/Haven" },
      { name: "SAJAG", what: "Disaster-readiness platform for NDMA", detail: "SIH 2025 Grand Finalist as team lead. Owned the backend: Docker, bulk CSV ingestion, 4-tier JWT RBAC.", stack: "Node.js · Express · PostgreSQL · Docker · Mapbox", year: "2025", url: "https://github.com/KeeratMalhotra/SAJAG-National-Disaster-Readiness-Platform" },
      { name: "QUORUM", what: "Multi-agent crypto paper-trading system", detail: "Backtest Jan 2022 – Sep 2026: +126% vs +83% for BTC, with a 43% max drawdown vs 67%.", stack: "Python · FastAPI · scikit-learn · React", year: "2026", url: "https://github.com/KeeratMalhotra/Trading-bot" },
      { name: "Career Disha", what: "AI career counselling app", detail: "Gemini chatbot, Google one-tap sign-in and a 100+ college discovery module.", stack: "React · Node.js · Firebase · Gemini", year: "2025", url: "https://github.com/KeeratMalhotra/Career-Disha" },
      { name: "Society Management System", what: "REST backend for housing societies", detail: "Residents, automated billing and complaints, with RazorpayX dues collection.", stack: "Node.js · Express · MySQL · Razorpay", year: "2025", url: "https://github.com/KeeratMalhotra/Society-Management-System" },
    ],
    skills: [
      ["Languages", "Java (proficient), C++, Python, JavaScript, TypeScript, SQL"],
      ["Backend", "Node.js, Express, FastAPI, REST, WebSockets"],
      ["Frontend", "React, Next.js, Tailwind CSS"],
      ["Data & infra", "PostgreSQL, MySQL, Supabase, Firestore, Docker, Git, Vercel, GCP"],
      ["Security", "IAM and least privilege, Postgres RLS, OAuth 2.0, JWT/RBAC, CTF cryptography"],
      ["AI", "Gemini API, Vertex AI, MCP, multi-agent orchestration, scikit-learn"],
    ],
    coding: [
      ["LeetCode (keeratmalhotra)", "454 solved (144 easy, 261 medium, 49 hard) · contest rating 1603 · 15 contests · top 24.12%"],
      ["CodeChef (km111)", "Rating 1391 · highest 1411 (2★) · 32 solved"],
    ],
    codingNote: "Checked on 30 Oct 2026. Use these figures when a form asks for ratings.",
    achievements: [
      "Smart India Hackathon 2025 Grand Finalist, team lead (Dec 2025)",
      "Xerocrypt CTF 2025: 3rd of 150+ teams, team lead",
      "Google Cloud Cybersecurity Professional Certificate (Oct 2026)",
      "DSA Head, DevComm NSUT (Jun 2026 – present)",
      "Class Representative, B.Tech ITNS cohort of 72 (Dec 2024 – present)",
    ],
    preferences: [
      ["Roles", "Any tech role: SWE, backend, full-stack, cloud/security, AI/ML, data, DevOps"],
      ["Dates", "Free in December 2026 and January 2027"],
      ["Location", "Delhi NCR preferred (on-site or hybrid). Remote is fine."],
      ["Pay", "Any stipend. Unpaid ranks last."],
      ["Job sites", "You're creating Internshala, Unstop, LinkedIn, Wellfound and Naukri accounts. You log in and submit there."],
    ],
  },

  excluded: [
    { name: "Indian Army Internship Programme (₹75,000)", reason: "Internshala still shows “apply by 6 Nov”, but the official AICTE portal lists all 45 projects as closed between 31 Jul and 5 Sep 2026. They started in Aug–Sep.", url: "https://internship.aicte-india.org/dashboards/indianarmy/internship-list" },
    { name: "DRDO SAG paid internship (Delhi)", reason: "Final-year students only, and it lasts 6 months.", url: "https://indianexpress.com/article/education/drdo-sag-internships-2025-vacancies-stipend-eligibility-btech-mtech-sarkari-naukari-10416317/" },
    { name: "NeGD technical internship", reason: "Recent graduates and final-year students only (Winter 2025 notice).", url: "https://negd.gov.in/wp-content/uploads/2025/12/New-Updated-Winter-Announcement-2025.pdf" },
    { name: "C-DOT paid internship", reason: "Minimum 3 months.", url: "https://www.cdot.in/cdotweb/assets/docs/curr_openings/adv/Notification_PaidInternship.pdf" },
    { name: "I4C (MHA) cybercrime winter internship", reason: "The 2025 edition closed on 17 Oct 2025. No 2026 notice found.", url: "https://indianexpress.com/article/education/mha-introduces-winter-internship-in-cybercrime-via-indian-cyber-crime-coordination-centre-10312228/" },
    { name: "Babaclick, Gurugram (₹40,000/month)", reason: "3 months, and it asks for 1+ year of professional experience.", url: "https://www.linkedin.com/jobs/view/4482962065/" },
    { name: "CredHive, Park+, Heads Up For Tails, Rempact, eTeam, Multiplier AI (Delhi NCR)", reason: "6-month roles, or final-year / 2026–2027 batches only." },
    { name: "IBM Research, Gurgaon", reason: "Runs May–Aug 2027, so it's a summer internship.", url: "https://www.linkedin.com/jobs/view/4480620993/" },
    { name: "Delhi NCR in-office roles on Internshala (Warewe, Future Lab Studio, Calmveda)", reason: "Start windows close between 9 and 19 Nov. They want November joiners." },
    { name: "Paid work-from-home listings: Codeatrix, Cornixe, Innoknowvex, Simpli Intern, MediNex Workforce, Crossing Infotech, ThinkNovaa, Jobs4PanIndia, Skillzen Loop", reason: "The first four describe themselves as training, bootcamp or edtech providers. The rest post near-identical internships for many roles at once, mostly with “up to” or performance-based stipends." },
    { name: "NGO internships: NayePankh, Pledge India, Hope Behind Tails, Basti Ki Pathshala, Queens Of Change, Women First India, She Can, InAmigos", reason: "1–4 week unpaid certificate programs with up to about 600 applicants each." },
    { name: "AICTE portal short internships", reason: "Every paid tech listing that fit came from a training provider, with 200–400 openings per listing." },
  ],

  sources: [
    { label: "NIC Winter Internship 2026: Jagran Josh, 29 Oct 2026", url: "https://www.jagranjosh.com/news/nic-winter-internship-2026-applications-open-november-2-check-eligibility-stipend-and-dates-188754" },
    { label: "NIC Winter Internship 2026: NDTV", url: "https://www.ndtv.com/education/ministry-of-electronics-and-it-offers-two-month-internship-with-rs-20-000-stipend-apply-from-november-2-12248778" },
    { label: "NIC Digital India Internship Scheme, Winter 2025 guidelines (PDF)", url: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/11/202511062137738962.pdf" },
    { label: "Indian Army internship list: AICTE National Internship Portal", url: "https://internship.aicte-india.org/dashboards/indianarmy/internship-list" },
    { label: "Indian Army Internship Programme 2026-27: PW", url: "https://www.pw.live/news/indian-army-internship-programme-2026-27-apply-online-stipend" },
    { label: "DRDO SAG internships: Indian Express", url: "https://indianexpress.com/article/education/drdo-sag-internships-2025-vacancies-stipend-eligibility-btech-mtech-sarkari-naukari-10416317/" },
    { label: "NeGD Winter 2025 announcement (PDF)", url: "https://negd.gov.in/wp-content/uploads/2025/12/New-Updated-Winter-Announcement-2025.pdf" },
    { label: "C-DOT paid internship notification (PDF)", url: "https://www.cdot.in/cdotweb/assets/docs/curr_openings/adv/Notification_PaidInternship.pdf" },
    { label: "I4C winter internship 2025: Indian Express", url: "https://indianexpress.com/article/education/mha-introduces-winter-internship-in-cybercrime-via-indian-cyber-crime-coordination-centre-10312228/" },
    { label: "IIT (ISM) Dhanbad WRIS 2026: rasayanika.com", url: "https://www.rasayanika.com/2026/10/29/ism-dhanbad-internship-wris-2026/" },
  ],
};
