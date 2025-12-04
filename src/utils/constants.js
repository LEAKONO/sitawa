import { 
  Globe, Users, BookOpen, Target, Award, Languages,
  FileText, BarChart, Map, Shield, Cpu, Database,
  GitBranch, Cloud, Server, Terminal, Lock, Code,
  Linkedin, Twitter, Github, Mail, Phone, MapPin,
  Calendar, Briefcase, ExternalLink, Download
} from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: 'Dr. Michael Sitawa Mugah',
  title: 'Senior Researcher & Strategic Consultant',
  bio: 'Ph.D in Sociology with extensive experience in Security Sector Reform, Peace Operations, and Maritime Security in Eastern Africa.',
  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Publications' },
  ],
};

export const aboutData = {
  bio: 'Driven by a passion for strategic management, market surveillance, networking, resource mobilization, research and publication, I have extensive experience in strategic planning, negotiation, conflict resolution, management, research, monitoring and evaluation, data collection, data analysis, presentation, and report writing.',
  stats: [
    { value: 'Ph.D', label: 'Sociology' },
    { value: 'M.A', label: 'Community Development' },
    { value: 'B.A', label: 'Social Sciences' },
  ],
  competencies: [
    'Strategic Planning',
    'Research & Analysis',
    'Security Sector Reform',
    'Peace Operations',
    'Maritime Security',
    'Conflict Resolution',
    'Policy Development',
    'Capacity Building',
  ],
  languages: [
    { name: 'English', level: 'Native', proficiency: 100 },
    { name: 'French', level: 'Fluent', proficiency: 90 },
    { name: 'Kiswahili', level: 'Native', proficiency: 100 },
  ],
};

export const skills = [
  { name: 'Strategic Planning', level: 'Expert', icon: <Target /> },
  { name: 'Research Methodology', level: 'Expert', icon: <BookOpen /> },
  { name: 'Data Analysis', level: 'Expert', icon: <BarChart /> },
  { name: 'SPSS', level: 'Advanced', icon: <Cpu /> },
  { name: 'Policy Analysis', level: 'Expert', icon: <FileText /> },
  { name: 'Conflict Resolution', level: 'Expert', icon: <Shield /> },
  { name: 'Geospatial Analysis', level: 'Intermediate', icon: <Map /> },
  { name: 'Project Management', level: 'Expert', icon: <Users /> },
];

export const experiences = [
  {
    id: 1,
    position: 'Senior Researcher',
    company: 'International Peace Support Training Centre',
    period: 'May 2020 - Present',
    location: 'Karen, Nairobi',
    type: 'Full-time',
    description: 'Conducting evidence-based research on gender, peace and security issues in Eastern Africa region.',
    responsibilities: [
      'Lead high-profile research activities for the organization',
      'Develop and utilize appropriate research methodologies',
      'Provide inputs for training related to peace operations',
      'Enhance visibility of IPSTC research findings',
    ],
    achievements: [
      'Secured $54,000 USD funding for research conference',
      'Established international collaborations through MoUs',
      'Published multiple research papers and books',
    ],
    skills: ['Research', 'Policy Analysis', 'Strategic Planning', 'Capacity Building'],
  },
  {
    id: 2,
    position: 'Researcher',
    company: 'Institute for Security Studies',
    period: 'Aug 2024 - Present',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Conduct desktop research and contribute to security sector governance projects.',
    responsibilities: [
      'Conduct research on Security Sector Reform and Governance',
      'Design surveys and assist with data collection',
      'Analyze research findings using appropriate methodologies',
      'Prepare research reports and presentations',
    ],
    skills: ['Data Collection', 'Report Writing', 'Stakeholder Engagement', 'Policy Review'],
  },
  {
    id: 3,
    position: 'Interim Programme Head',
    company: 'National Defence University-Kenya',
    period: 'Dec 2021 - Present',
    location: 'Karen, Nairobi',
    type: 'Academic Leadership',
    description: 'Lead the Master of Arts Programme in National Security and Strategy.',
    responsibilities: [
      'Academic and administrative leadership',
      'Curriculum development and quality assurance',
      'Staff performance reviews',
      'Budget planning and management',
    ],
    skills: ['Academic Leadership', 'Program Management', 'Quality Assurance', 'Strategic Planning'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Transnational Organized Crime in Lake Tanganyika',
    description: 'Comprehensive research on TOC activities and threats linked to lake use in the DRC region.',
    category: 'research',
    tech: ['Field Research', 'Stakeholder Analysis', 'Policy Recommendations'],
    stats: { Countries: 2, 'KIIs': 45, 'FGDs': 12 },
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: 'Disaster Risk Reduction in Conflict Zones',
    description: 'Research focusing on food security in Lamu County to inform Kenya Defence Forces operations.',
    category: 'research',
    tech: ['GIS Mapping', 'Risk Assessment', 'Policy Analysis'],
    stats: { Reports: 3, 'Workshops': 8, 'Policy Briefs': 5 },
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: 'Lamu County DRM Policy Framework',
    description: 'Development of disaster risk management policy and legislation for Lamu County.',
    category: 'consulting',
    tech: ['Policy Development', 'Stakeholder Engagement', 'Legal Framework'],
    stats: { 'Policy Docs': 3, 'Stakeholders': 25, 'Timeline': '3 months' },
    github: null,
    demo: null,
  },
];

export const certificates = [
  {
    id: 1,
    title: 'Ph.D in Sociology',
    issuer: 'Kenyatta University',
    date: 'February 2019',
    type: 'Doctorate',
    credentialId: 'KU-PHD-2019-001',
  },
  {
    id: 2,
    title: 'Master of Arts in Sociology',
    issuer: 'University of Nairobi',
    date: '2009',
    type: 'Masters',
    credentialId: 'UON-MA-2009',
  },
  {
    id: 3,
    title: 'French Language Proficiency',
    issuer: 'Alliance Française',
    date: '2010',
    type: 'Language',
    credentialId: 'AF-C1-2010',
  },
];

export const publications = [
  {
    id: 1,
    title: 'Disaster Risk Reduction in Conflict Zones: Focus on Food Security in Lamu County, Kenya',
    authors: 'Michael Sitawa, Japheth Mwasaru',
    year: '2022',
    journal: 'International Peace Support Training Centre',
    type: 'Research Paper',
    keywords: ['Disaster Risk', 'Conflict', 'Food Security', 'Kenya'],
    abstract: 'This paper examines the intersection of disaster risk reduction and conflict in Lamu County...',
    link: '#',
  },
  {
    id: 2,
    title: 'Status of Persons with Disabilities in Maritime Disaster Risk Reduction',
    authors: 'Michael Sitawa, Mohamed Idriss',
    year: '2021',
    journal: 'Africa Amani Journal',
    type: 'Journal Article',
    keywords: ['Disability', 'Maritime Security', 'Inclusion'],
    abstract: 'Analysis of disability inclusion in maritime disaster risk reduction efforts...',
    link: '#',
  },
];

export const contactInfo = [
  {
    type: 'email',
    label: 'Email',
    value: 'michael.sitawa@gmail.com',
    href: 'mailto:michael.sitawa@gmail.com',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+254 720 776 277',
    href: 'tel:+254720776277',
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: 'https://maps.google.com/?q=Nairobi+Kenya',
  },
];

export const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/michael-sitawa' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/michaelsitawa' },
  { name: 'Github', icon: Github, url: 'https://github.com/msitawa' },
  { name: 'Email', icon: Mail, url: 'mailto:michael.sitawa@gmail.com' },
];