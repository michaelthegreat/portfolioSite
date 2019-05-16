import { WorkExperienceItem } from '../work-experience-item/work-experience-item';

export const WorkExperienceItems: WorkExperienceItem[] = [
    {
        companyName: 'Draper Laboratories'
        , position: 'Junior Java Developer'
        , description: 'Developed a Java Swing graphical user interface that allowed people to annotate images. Built for the Department of Defense. The project used an image processing tool call Processing  for the annotation and OpenCV to do simple analysis such as edge detection.'
        , image: '/assets/images/companyLogos/draper-laboratory-logo.png'
        , dateStarted: 'Mar 2015'
        , dateEnded: 'May 2015'
        , skills: ['Java', 'OpenCV', 'Processing' ]
    }
    , {
        companyName: 'Impulse Point'
        , position: 'Software Engineering Intern'
        , description: 'Worked on a network management console at Impulse Point. The company sells wifi infrastructure to Universities and organizations with large campuses. Gave the UI an extensive makeover with AngularJS. Called webservices on a backend that used Spring MVC and wrote some Spring MVC source code. Developed a web service to log UI activity.'
        , image: '/assets/images/companyLogos/impulse-point-logo.png'
        , dateStarted: 'Sep 2015'
        , dateEnded: 'Feb 2016'
        , skills: ['AngularJS', 'JQuery', 'JavaScript', 'HTML', 'Java', 'Spring MVC', 'MySQL', 'MariaDB']
    }
    , {
        companyName: 'Moffitt (Hays Consultant)'
        , position: 'Web Applications Developer'
        , description: 'Developed web applications for the Research IT department of Moffitt Cancer Center. Implemented front and back end features, deployed code and performed basic support for some applications. Built dynamic  pdf forms on the web browser. Created automatic deployment procedures and test scripts. Developed web services for teams outside of my department  to access some of our logic and data.'
        , image: '/assets/images/companyLogos/moffitt-cancer-center-logo.png'
        , dateStarted: 'Feb 2016'
        , dateEnded: 'Dec 2017'
        , skills: ['Django', 'HTML', 'CSS', 'Javascript', 'jQuery', 'ExtJS', 'Docker', 'Fabric', 'git', 'mercurial', 'Jenkins']
    }
    , {
        companyName: 'Progressive Insurance'
        , position: 'Applications Developer'
        , description: 'Developed internal facing web applications to help people automate business processes, manage data and collect reports. Collected requirements for applications. Communicated with users directly and provided application  support.'
        , image: '/assets/images/companyLogos/progressive-logo.png'
        , dateStarted: 'Jan 2018'
        , dateEnded: 'Jun 2018'
        , skills: ['Sails', 'Express', 'MicrosoftSQLServer', 'IIS server', 'Jenkins', 'node.JS', 'EmberJS', 'Javascript', 'HTML']
    }
    , {
        companyName: 'NBCUniversal Media LLC (Hays Consultant)'
        , position: 'Software Developer'
        , description: 'Solved failed webstore order errors for the Universal Orlando Resort  and wrote automated tests. Worked in an agile environment doing test driven development.'
        , image: '/assets/images/companyLogos/nbcu-logo.jpg'
        , dateStarted: 'Aug 2018'
        , dateEnded: 'Oct 2018'
        , skills: ['Node.JS', 'Express', 'GalaxyDB', 'noSQL', 'ElasticSearch', 'Mocha', 'Chai', 'Nock']
    }
];