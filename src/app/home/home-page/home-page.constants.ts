import { IPortfolioItem, IWorkExperienceItem } from "./home-page.interfaces";
import { environment } from '@environment';

export const WorkExperienceItems: IWorkExperienceItem[] = [
  {
    companyName: "Jabil",
    position: "Programming Analyst",
    description: `Worked on the Digital Transformation Services team at Jabil, a contract manufacturing company. Developed for and supported
           supply chain applications with various functions such as the detection of excess and obsolete inventory, a procurement search
           platform to help supply chain managers identify part information and a quote negotiation application that would suggest
           opportunities for increased margins based on data. Worked as a full stack developer to work on supply chain and 
           also assist with some other projects such as a medical device, a chatbot, a light display and data reports. 
           Helped deliver the first application at the company with automatically enforced code test coverage. Also developed
           a way for users to save and personalize data grid views.
          `,
    image: `${environment.endpoints.imageHost}companyLogos/nbcu-logo.jpg`,
    dateStarted: "Feb 2019",
    dateEnded: "Present",
    skills: [
      "Angular",
      "Amazon Web Services (AWS)",
      "Postgres SQL",
      "NoSQL (dynamoDb)",
      "Ag grid",
      "Unit tests (jasmine, jest)",
      "Microsoft Azure Cloud",
      "Python",
      "signavio (SAP)",
    ],
  },
  {
    companyName: "NBCUniversal Media LLC (Hays Consultant)",
    position: "Software Developer",
    description:
      "Solved failed webstore order errors for the Universal Orlando Resort  and wrote automated tests. Worked in an agile environment doing test driven development.",
    image: `${environment.endpoints.imageHost}companyLogos/nbcu-logo.jpg`,
    dateStarted: "Aug 2018",
    dateEnded: "Oct 2018",
    skills: [
      "Node.JS",
      "Express",
      "GalaxyDB",
      "noSQL",
      "ElasticSearch",
      "Mocha",
      "Chai",
      "Nock",
    ],
  },
  {
    companyName: "Progressive Insurance",
    position: "Applications Developer",
    description:
      "Developed internal facing web applications to help people automate business processes, manage data and collect reports. Collected requirements for applications. Communicated with users directly and provided application  support.",
    image: `${environment.endpoints.imageHost}companyLogos/progressive-logo.png`,
    dateStarted: "Jan 2018",
    dateEnded: "Jun 2018",
    skills: [
      "Sails",
      "Express",
      "MicrosoftSQLServer",
      "IIS server",
      "Jenkins",
      "node.JS",
      "EmberJS",
      "Javascript",
      "HTML",
    ],
  },
  {
    companyName: "Moffitt (Hays Consultant)",
    position: "Web Applications Developer",
    description:
      "Developed web applications for the Research IT department of Moffitt Cancer Center. Implemented front and back end features, deployed code and performed basic support for some applications. Built dynamic  pdf forms on the web browser. Created automatic deployment procedures and test scripts. Developed web services for teams outside of my department  to access some of our logic and data.",
    image: `${environment.endpoints.imageHost}companyLogos/moffitt-cancer-center-logo.png`,
    dateStarted: "Feb 2016",
    dateEnded: "Dec 2017",
    skills: [
      "Django",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "ExtJS",
      "Docker",
      "Fabric",
      "git",
      "mercurial",
      "Jenkins",
    ],
  },
  {
    companyName: "Impulse Point",
    position: "Software Engineering Intern",
    description:
      "Worked on a network management console at Impulse Point. The company sells wifi infrastructure to Universities and organizations with large campuses. Gave the UI an extensive makeover with AngularJS. Called webservices on a backend that used Spring MVC and wrote some Spring MVC source code. Developed a web service to log UI activity.",
    image: `${environment.endpoints.imageHost}companyLogos/impulse-point-logo.png`,
    dateStarted: "Sep 2015",
    dateEnded: "Feb 2016",
    skills: [
      "AngularJS",
      "JQuery",
      "JavaScript",
      "HTML",
      "Java",
      "Spring MVC",
      "MySQL",
      "MariaDB",
    ],
  },
  {
    companyName: "Draper Laboratories",
    position: "Junior Java Developer",
    description:
      "Developed a Java Swing graphical user interface that allowed people to annotate images. Built for the Department of Defense. The project used an image processing tool call Processing  for the annotation and OpenCV to do simple analysis such as edge detection.",
    image: `${environment.endpoints.imageHost}companyLogos/draper-laboratory-logo.png`,
    dateStarted: "Mar 2015",
    dateEnded: "May 2015",
    skills: ["Java", "OpenCV", "Processing"],
  },
];

export const PortfolioItems: IPortfolioItem[] = [
  {
    title: "Personalized Views for data grids",
    description:
      "The recording shows personalized views for data grids and an export. I worked full stack on these features.",
    url: "https://www.jabil.com/capabilities/supply-chain/procurement-services.html",
    image: `${environment.endpoints.imageHost}QN2.gif`,
  },
  {
    title: "Searchable Data grid UI with column filters and export",
    description:
      "The recording shows a searchable data grid with column filters and an export.  This app supported data exports up to 1 million records (which is the maximum file size for CSV files)",
    url: "https://www.jabil.com/capabilities/supply-chain/procurement-services.html",
    image: `${environment.endpoints.imageHost}PIP.gif`,
  },
  {
    title: "SkyMassage",
    description:
      "A website made for a Miami based massage company that allows customers to order a massage online. It sends a text to the masseuse and an email to the customer with the order details.",
    url: "http://skymassage.org",
    image: `${environment.endpoints.imageHost}skymassage.gif`,
  },
  {
    title: "Baby Drum",
    description:
      "A very simple app for babies to play the drums on. It has no ads and no extra screens or configurations for babies to get lost in. ",
    url: "https://play.google.com/store/apps/details?id=com.QuinteroLLC.babyDrum",
    image: `${environment.endpoints.imageHost}babyDrum.gif`,
  },
  {
    title: "Leadership Spectrum",
    description:
      "A web app made for a business management consulting firm. Customers pay the company for training and buy logins for their employees to use on the site. The site contains a psychological exam which is meant to help them evaluate their management mindset in a business. The results of the exam are customized to the participant's answers and returned to them in a beautifully formatted pdf.",
    url: "http://www.leadershipspectrum.com/",
    image: `${environment.endpoints.imageHost}leadershipspectrum.gif`,
  },
  {
    title: "Lucky Fish",
    description:
      "A fun, challenging game involving a flying goldfish and rockets",
    url: "https://play.google.com/store/apps/details?id=com.people.ME",
    image: `${environment.endpoints.imageHost}luckyFish.gif`,
  },
]
