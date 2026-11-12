import {
  BarChart3,
  Boxes,
  CheckSquare,
  Database,
  FileText,
  Filter,
  Gauge,
  LayoutDashboard,
  Lock,
  Map,
  Plug,
  Server,
  Wrench,
  Zap,
} from 'lucide-react';
import type { Experience, Highlight, NavItem, Profile, Project, SkillGroup } from './types';

export const profile: Profile = {
  name: 'GALIPELLI MANIDEEP',
  displayName: 'Galipelli Manideep',
  title: 'Senior Full Stack Developer',
  subtitle: 'React.js & Node.js',
  location: 'Hyderabad, India',
  email: 'manideepgalipelli007@gmail.com',
  phone: '+91-9618900236',
  linkedin: 'https://www.linkedin.com/in/galipelli-manideep-b66203209',
  github: 'https://github.com/manideep007996',
  resumePath: `${import.meta.env.BASE_URL}resume/Manideep_Galipelli_Resume_2026.pdf`,
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'highlights', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
];

export const heroStats = [
  { label: 'Experience', value: '5 years' },
  { label: 'React components', value: '30+' },
  { label: 'Banks live', value: '24' },
];

export const aboutParagraphs: string[] = [
  'I am a **Full Stack Developer with 5 years of experience** building responsive, high-performance web applications with React.js, Redux and TypeScript on the frontend, and **3 years of backend experience** designing REST and GraphQL APIs with Node.js and Express.js.',
  'My strongest area is **frontend architecture**: turning Figma and UX wireframes into reusable, accessible (508-compliant) component systems, building configurable dashboards, and keeping large React applications maintainable as the feature surface grows. On the backend I build REST APIs, JWT authentication, role-based access control and secure communication modules.',
  'Recent work has centred on **role-based dashboard builders, dynamic query builders integrated with Apache NiFi, GIS and geospatial visualisation, real-time monitoring and enterprise reporting** — including the ICCC Converge platform for the Bihar State Cooperative Bank and the iResponse flood management system used for statewide disaster monitoring.',
  'I work in Agile teams of 10–18 people across the full SDLC, and I care about the parts that do not show up in a screenshot: predictable component structure, sensible state management, accessibility tested with NVDA, and Jest-covered UI.',
];

export const aboutFacts: { term: string; value: string }[] = [
  { term: 'Latest role', value: 'Senior Software Engineer, PruTech IT Solutions' },
  { term: 'Experience', value: '5 years' },
  { term: 'Core stack', value: 'React.js · Redux · Node.js · GraphQL' },
  { term: 'Domains', value: 'Banking, government, finance, edtech' },
  { term: 'Education', value: 'B.Tech, ECE — CMR Engineering College, 2020' },
  { term: 'Location', value: 'Hyderabad, India' },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: LayoutDashboard,
    items: [
      'JavaScript (ES6+)',
      'React.js',
      'TypeScript',
      'Redux',
      'React Hooks',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Material UI',
      'Sync-Fusion',
      'Responsive Design',
    ],
    primary: ['React.js', 'TypeScript', 'Redux'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Authentication', 'MVC Architecture'],
    primary: ['Node.js', 'Express.js', 'GraphQL'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: Database,
    items: ['MongoDB', 'SQL', 'Query Optimization'],
    primary: ['MongoDB'],
  },
  {
    id: 'api',
    name: 'Data & Integration',
    icon: Plug,
    items: ['JSON', 'AJAX', 'Axios', 'WebSockets', 'Apache NiFi'],
    primary: ['Axios', 'Apache NiFi'],
  },
  {
    id: 'viz',
    name: 'Visualisation & GIS',
    icon: Map,
    items: ['GIS / Geospatial Visualisation', 'Leaflet.js', 'Chart.js', 'PDF/Excel Reporting'],
    primary: ['GIS / Geospatial Visualisation'],
  },
  {
    id: 'testing',
    name: 'Testing & Accessibility',
    icon: CheckSquare,
    items: ['Jest', '508 Compliance', 'NVDA Screen-Reader Testing', 'Postman', 'Swagger'],
    primary: ['Jest', '508 Compliance'],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    icon: Wrench,
    items: ['Git', 'GitHub', 'GitLab', 'npm', 'Yarn', 'VS Code', 'Jira', 'Azure DevOps', 'Figma', 'Windows', 'Linux'],
  },
  {
    id: 'arch',
    name: 'Architecture & Concepts',
    icon: Boxes,
    items: [
      'Role-Based Access Control',
      'Component Architecture',
      'Full Stack Development',
      'Performance Optimization',
      'Accessibility',
      'Agile/Scrum',
      'SDLC',
    ],
    primary: ['Role-Based Access Control', 'Component Architecture'],
  },
];

export const experience: Experience[] = [
  {
    company: 'PruTech IT Solutions',
    role: 'Senior Software Engineer',
    when: 'Jun 2024 — Jul 2026',
    where: 'Hyderabad, India',
    projects: [
      {
        name: 'ICCC Converge — Bihar State Cooperative Bank',
        when: 'Feb 2025 — Jul 2026',
        bullets: [
          'Led frontend development from inception across dynamic dashboards, query builder, bank/branch management and user role management, converting Figma wireframes into **30+ reusable React components**.',
          'Architected a role-based Dashboard Builder for 4 user types (Super Admin, Head Office Admin, Bank, Branch) with configurable cards, charts, tables, maps and tree selectors, draft/publish workflows and bank/branch-level filtering — rolled out across **all 24 cooperative banks in Bihar**, cutting new dashboard setup time by **60%**.',
          'Created a Query Builder that lets non-technical users construct table joins, aggregations, filters and sorting, and save queries for reuse as live widget-level data sources, integrated with Apache NiFi.',
          'Implemented role-based access control and secure communication modules with Node.js/Express.js REST APIs and MongoDB, supporting real-time incident, alert and analytics monitoring.',
          'Owned the Grievance/Ticketing module end to end for 6 roles — dynamic validation, helpdesk filtering, SLA-based auto-escalation, hierarchical reassignment, bidirectional status workflows, bulk actions, WebSocket notifications and PDF/Excel export — cutting resolution turnaround by **40%**.',
        ],
      },
      {
        name: 'iResponse — Bihar Flood Management',
        when: 'Jun 2024 — Feb 2025',
        bullets: [
          'Engineered the Situation Awareness / GIS page with real-time mapping and spatial data visualisation for statewide disaster monitoring, plotting incidents by latitude/longitude with linked images and video for faster field assessment.',
          'Built **6 monitoring dashboards** (Flood, Fire, Human Loss, Heatwave, Coldwave, Incidents) with interactive charts and dynamic GIS maps for real-time decision-making.',
          'Developed the Task and SOP Management module with assignment tracking and real-time progress monitoring for field-officer coordination.',
          'Built reporting modules with UI-driven data-capture forms and automated PDF/Excel generation matching required formats, cutting manual report preparation by **50%**.',
        ],
      },
    ],
  },
  {
    company: 'Birlasoft',
    role: 'Software Engineer',
    when: 'Aug 2022 — Mar 2024',
    where: 'Hyderabad, India',
    projects: [
      {
        name: 'Conduent — React Developer',
        when: 'Aug 2022 — Mar 2024',
        bullets: [
          'Developed responsive web applications and new components from UI/UX wireframes using React.js, maintaining component state via props and Redux, in a team of **18**.',
          'Integrated RESTful APIs and resolved client-reported production defects within an agile team of 10.',
          'Fixed a high volume of production bugs and worked on the **Finance module**, improving stability and reliability of client-facing features.',
          'Wrote **Jest** unit tests for React components and validated UI against **508 Compliance** and NVDA accessibility standards.',
        ],
      },
    ],
  },
  {
    company: 'Ensar Solutions',
    role: 'Associate Software Engineer',
    when: 'May 2021 — Jul 2022',
    where: 'Hyderabad, India',
    projects: [
      {
        name: 'Tele Teachers — Full Stack Developer',
        when: 'May 2021 — Jul 2022',
        bullets: [
          'Built responsive web pages and applications using HTML, CSS, JavaScript and React.js, integrating **REST and GraphQL** backend services.',
          'Developed a **Node.js/Express** server with router-based REST APIs and **JWT-based** token authentication for user registration and login.',
          'Built a time-slot booking feature enabling parents to schedule and manage appointments with their child’s teachers, including slot availability and conflict handling.',
          'Built UI components using Material UI and Sync-Fusion libraries; managed source control via Git branches and repositories.',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'iccc',
    name: 'ICCC Converge',
    client: 'Bihar State Cooperative Bank',
    tag: 'Banking',
    when: 'Feb 2025 — Jul 2026',
    role: 'Senior Software Engineer, PruTech IT Solutions',
    summary:
      'An integrated command and control platform for a state cooperative banking network: configurable role-based dashboards, a visual query builder for non-technical users, bank and branch administration, and an end-to-end grievance and ticketing system.',
    stack: [
      'React.js',
      'TypeScript',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'WebSockets',
      'Apache NiFi',
      'Chart.js',
      'RBAC',
    ],
    metrics: [
      { value: '24', label: 'cooperative banks in Bihar running the platform' },
      { value: '60%', label: 'faster new dashboard setup' },
      { value: '40%', label: 'faster ticket resolution turnaround' },
    ],
    overview:
      'ICCC Converge serves four levels of the cooperative banking hierarchy — Super Admin, Head Office Admin, Bank and Branch — from one platform. Each level needs a different view of the same data, so the product is built around configuration rather than hard-coded screens.',
    myRole:
      'Led frontend development from inception across dynamic dashboards, the query builder, bank/branch management and user role management, converting Figma wireframes into 30+ reusable React components. Also implemented role-based access control and secure communication modules on the backend with Node.js, Express.js and MongoDB.',
    features: [
      'Role-based Dashboard Builder for 4 user types with configurable cards, charts, tables, maps and tree selectors',
      'Draft and publish workflows with bank and branch level data filtering',
      'Query Builder for non-technical users: table joins, aggregations, filters and sorting',
      'Saved queries reusable as live data sources at widget level, integrated with Apache NiFi',
      'Grievance/Ticketing module for 6 roles (L1, L2, L3, Head Office, Super Admin, Support Admin)',
      'SLA-based auto-escalation, hierarchical reassignment and bidirectional status workflows',
      'Bulk actions, WebSocket notifications and PDF/Excel export',
      'Real-time incident, alert and analytics monitoring',
    ],
    challenges: [
      'Four user types and six ticketing roles needed different data scopes and permissions from a single codebase, which made role-based access control central to both the UI and the API layer.',
      'Dashboards had to be configured by users rather than hard-coded, so widgets, data sources and filters needed a schema the frontend could render generically.',
      'Non-technical bank staff needed to build their own joins, aggregations and filters without writing SQL.',
    ],
    implementation: [
      'Composed the UI from 30+ reusable React components derived from the Figma wireframes, with Redux managing shared dashboard and ticketing state.',
      'Made dashboard widgets configuration-driven — cards, charts, tables, maps and tree selectors are rendered from saved configuration, with draft and publish states and bank/branch filtering applied consistently.',
      'Backed saved Query Builder queries with Apache NiFi for backend query management so a query can be attached to a widget as a live data source.',
      'Implemented RBAC and secure communication modules as Node.js/Express.js REST APIs over MongoDB.',
      'Used WebSockets for ticket notifications and real-time incident and alert monitoring.',
    ],
    results: [
      'Dashboard Builder rolled out across all 24 cooperative banks in Bihar.',
      'New dashboard setup time reduced by 60%.',
      'Ticket resolution turnaround reduced by 40%.',
    ],
  },
  {
    id: 'iresponse',
    name: 'iResponse',
    client: 'Bihar Flood Management',
    tag: 'Government / GIS',
    when: 'Jun 2024 — Feb 2025',
    role: 'Senior Software Engineer, PruTech IT Solutions',
    summary:
      'A statewide disaster monitoring platform. Incidents are plotted geospatially with linked media for field assessment, six dashboards track different hazard types, and reporting modules generate the formats officials are required to file.',
    stack: [
      'React.js',
      'JavaScript',
      'GIS / Leaflet.js',
      'Chart.js',
      'REST APIs',
      'Real-time monitoring',
      'PDF/Excel reporting',
    ],
    metrics: [
      { value: '6', label: 'monitoring dashboards delivered' },
      { value: '50%', label: 'less manual report preparation' },
      { value: 'Statewide', label: 'disaster monitoring coverage' },
    ],
    overview:
      'iResponse supports flood and disaster response across Bihar. Control-room staff need one screen that shows what is happening and where, while field officers need tasks, SOPs and a way to file structured reports.',
    myRole:
      'Engineered the Situation Awareness / GIS page, built the six monitoring dashboards, developed the Task and SOP Management module, and built the reporting modules.',
    features: [
      'Situation Awareness / GIS page with real-time mapping and spatial data visualisation',
      'Incidents plotted by latitude and longitude with linked images and video for field assessment',
      '6 monitoring dashboards: Flood, Fire, Human Loss, Heatwave, Coldwave and Incidents',
      'Interactive charts and dynamic GIS maps for real-time decision-making',
      'Task and SOP Management with assignment tracking and real-time progress monitoring',
      'UI-driven data-capture forms with automated PDF and Excel report generation',
    ],
    challenges: [
      'Control-room decisions depend on current data, so map and dashboard state had to reflect incidents in real time rather than on refresh.',
      'Reports had to match the exact formats officials were already required to submit, so generated PDF and Excel output could not be approximated.',
      'Six hazard types each needed their own dashboard while sharing charting and map behaviour.',
    ],
    implementation: [
      'Built the GIS page with real-time mapping, plotting incidents by latitude/longitude and linking images and video to each marker.',
      'Delivered six dashboards on shared chart and map components so hazard-specific views stay consistent.',
      'Built the Task and SOP module with assignment tracking and live progress monitoring for field officers.',
      'Built reporting as UI-driven capture forms feeding automated PDF/Excel generation in the required formats.',
    ],
    results: [
      '6 monitoring dashboards delivered for statewide disaster monitoring.',
      'Manual report preparation reduced by 50%.',
    ],
  },
  {
    id: 'conduent',
    name: 'Conduent',
    client: 'Birlasoft',
    tag: 'Enterprise / Finance',
    when: 'Aug 2022 — Mar 2024',
    role: 'Software Engineer (React Developer), Birlasoft',
    summary:
      'Client-facing enterprise web applications for Conduent, including the Finance module — new React components from UI/UX wireframes, REST integration, production defect resolution and accessibility-compliant UI.',
    stack: ['React.js', 'Redux', 'JavaScript (ES6+)', 'REST APIs', 'Jest', '508 Compliance', 'NVDA', 'HTML5', 'CSS3'],
    metrics: [
      { value: '18', label: 'member delivery team' },
      { value: '508', label: 'compliant, NVDA-tested UI' },
      { value: 'Jest', label: 'unit-tested React components' },
    ],
    overview:
      'A large client-facing enterprise application where stability and accessibility mattered as much as new features. Work combined new component development from wireframes with production support on live features.',
    myRole:
      'Developed responsive web applications and new React components from UI/UX wireframes, integrated RESTful APIs, resolved client-reported production defects, worked on the Finance module, and wrote Jest unit tests.',
    features: [
      'Responsive React.js components built from UI/UX wireframes',
      'Component state managed via props and Redux',
      'RESTful API integration across client-facing features',
      'Finance module enhancements and stabilisation',
      'Jest unit tests for React components',
      'UI validated against 508 Compliance and NVDA accessibility standards',
    ],
    challenges: [
      'A high volume of client-reported production defects had to be resolved without destabilising live, client-facing features.',
      'UI had to meet 508 Compliance and work correctly with the NVDA screen reader, not just look right visually.',
    ],
    implementation: [
      'Built new components from wireframes in React.js, with shared state in Redux and local state via props.',
      'Integrated REST APIs and worked through production defects within an agile team of 10.',
      'Covered React components with Jest unit tests.',
      'Validated screens against 508 Compliance and with NVDA screen-reader testing.',
    ],
    results: [
      'Improved stability and reliability of client-facing features, including the Finance module.',
      'Accessible, 508-compliant UI validated with NVDA.',
    ],
  },
  {
    id: 'teleteachers',
    name: 'Tele Teachers',
    client: 'Ensar Solutions',
    tag: 'EdTech / Full Stack',
    when: 'May 2021 — Jul 2022',
    role: 'Associate Software Engineer (Full Stack), Ensar Solutions',
    summary:
      'A full stack education platform connecting parents and teachers — React.js frontend over REST and GraphQL services, a Node.js/Express API with JWT authentication, and a time-slot booking system for parent–teacher appointments.',
    stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT', 'Material UI', 'Sync-Fusion', 'Git'],
    metrics: [
      { value: 'Full stack', label: 'frontend and backend ownership' },
      { value: 'JWT', label: 'secured registration and login' },
      { value: '15', label: 'member delivery team' },
    ],
    overview:
      'Tele Teachers needed a web platform where parents could register, log in and book time with their child’s teachers, backed by an API that handled authentication and scheduling.',
    myRole:
      'Built responsive pages and React.js applications, developed the Node.js/Express server with router-based REST APIs and JWT authentication, and built the time-slot booking feature.',
    features: [
      'Responsive web pages and applications in HTML, CSS, JavaScript and React.js',
      'Integration with REST and GraphQL backend services',
      'Node.js/Express server with router-based REST APIs',
      'JWT-based token authentication for user registration and login',
      'Time-slot booking for parent–teacher appointments with availability and conflict handling',
      'UI components built with Material UI and Sync-Fusion',
    ],
    challenges: [
      'Booking had to prevent double-booking a teacher’s slot while keeping availability accurate for every parent.',
      'Registration and login needed stateless, token-based authentication across the API.',
    ],
    implementation: [
      'Built the API as a Node.js/Express server with router-based REST endpoints.',
      'Issued and verified JWT tokens for registration and login.',
      'Implemented slot availability and conflict handling for the booking flow.',
      'Composed the UI from Material UI and Sync-Fusion components, with source control managed via Git branches.',
    ],
    results: [
      'Parents can schedule and manage appointments with teachers online.',
      'Secure JWT-based registration and login in production.',
    ],
  },
];

export const highlights: Highlight[] = [
  {
    icon: LayoutDashboard,
    title: 'Role-based dashboard architecture',
    body: 'Configuration-driven dashboards serving four user types, with widget-level data sources, draft/publish states and bank/branch scoping.',
  },
  {
    icon: Filter,
    title: 'Dynamic query builder',
    body: 'A UI that lets non-technical users assemble joins, aggregations, filters and sorting, then save the result as a reusable live data source via Apache NiFi.',
  },
  {
    icon: Map,
    title: 'GIS & spatial visualisation',
    body: 'Real-time mapping of incidents by latitude and longitude with linked media, built for statewide disaster monitoring.',
  },
  {
    icon: Zap,
    title: 'Real-time systems',
    body: 'WebSocket notifications and live incident, alert and analytics monitoring across multi-role platforms.',
  },
  {
    icon: Boxes,
    title: 'Reusable React component architecture',
    body: '30+ components from Figma wireframes on one platform, plus Material UI and Sync-Fusion component work, built so teams compose rather than rebuild.',
  },
  {
    icon: Plug,
    title: 'REST & GraphQL APIs',
    body: 'Node.js/Express.js REST APIs and GraphQL integration on the backend, with Axios-based service layers on the frontend.',
  },
  {
    icon: Database,
    title: 'Data handling',
    body: 'MongoDB storage behind access control and monitoring modules, and saved queries managed through Apache NiFi.',
  },
  {
    icon: FileText,
    title: 'Enterprise reporting',
    body: 'UI-driven capture forms with automated PDF and Excel generation matching the formats organisations are required to file.',
  },
  {
    icon: Lock,
    title: 'RBAC & authentication',
    body: 'Role-based access control across four user types and six ticketing roles, and JWT-based registration and login.',
  },
  {
    icon: Gauge,
    title: 'Performance optimisation',
    body: 'Faster initial dashboard loads by scoping widgets to a default bank on first load, with on-demand bank/branch switching.',
  },
  {
    icon: BarChart3,
    title: 'Data visualisation',
    body: 'Interactive charts, maps and configurable widgets across monitoring and analytics dashboards.',
  },
  {
    icon: CheckSquare,
    title: 'Quality & accessibility',
    body: 'Jest unit tests for React components, and UI validated against 508 Compliance with NVDA screen-reader testing.',
  },
];
