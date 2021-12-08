import { IPortfolioItem, IWorkExperienceItem } from "./home-page.interfaces";

export const WorkExperienceItems: IWorkExperienceItem[] = [
    {
        companyName: 'Draper Laboratories'
        , position: 'Junior Java Developer'
        , description: 'Developed a Java Swing graphical user interface that allowed people to annotate images. Built for the Department of Defense. The project used an image processing tool call Processing  for the annotation and OpenCV to do simple analysis such as edge detection.'
        , image: '/assets/img/companyLogos/draper-laboratory-logo.png'
        , dateStarted: 'Mar 2015'
        , dateEnded: 'May 2015'
        , skills: ['Java', 'OpenCV', 'Processing' ]
    }
    , {
        companyName: 'Impulse Point'
        , position: 'Software Engineering Intern'
        , description: 'Worked on a network management console at Impulse Point. The company sells wifi infrastructure to Universities and organizations with large campuses. Gave the UI an extensive makeover with AngularJS. Called webservices on a backend that used Spring MVC and wrote some Spring MVC source code. Developed a web service to log UI activity.'
        , image: '/assets/img/companyLogos/impulse-point-logo.png'
        , dateStarted: 'Sep 2015'
        , dateEnded: 'Feb 2016'
        , skills: ['AngularJS', 'JQuery', 'JavaScript', 'HTML', 'Java', 'Spring MVC', 'MySQL', 'MariaDB']
    }
    , {
        companyName: 'Moffitt (Hays Consultant)'
        , position: 'Web Applications Developer'
        , description: 'Developed web applications for the Research IT department of Moffitt Cancer Center. Implemented front and back end features, deployed code and performed basic support for some applications. Built dynamic  pdf forms on the web browser. Created automatic deployment procedures and test scripts. Developed web services for teams outside of my department  to access some of our logic and data.'
        , image: '/assets/img/companyLogos/moffitt-cancer-center-logo.png'
        , dateStarted: 'Feb 2016'
        , dateEnded: 'Dec 2017'
        , skills: ['Django', 'HTML', 'CSS', 'Javascript', 'jQuery', 'ExtJS', 'Docker', 'Fabric', 'git', 'mercurial', 'Jenkins']
    }
    , {
        companyName: 'Progressive Insurance'
        , position: 'Applications Developer'
        , description: 'Developed internal facing web applications to help people automate business processes, manage data and collect reports. Collected requirements for applications. Communicated with users directly and provided application  support.'
        , image: '/assets/img/companyLogos/progressive-logo.png'
        , dateStarted: 'Jan 2018'
        , dateEnded: 'Jun 2018'
        , skills: ['Sails', 'Express', 'MicrosoftSQLServer', 'IIS server', 'Jenkins', 'node.JS', 'EmberJS', 'Javascript', 'HTML']
    }
    , {
        companyName: 'NBCUniversal Media LLC (Hays Consultant)'
        , position: 'Software Developer'
        , description: 'Solved failed webstore order errors for the Universal Orlando Resort  and wrote automated tests. Worked in an agile environment doing test driven development.'
        , image: '/assets/img/companyLogos/nbcu-logo.jpg'
        , dateStarted: 'Aug 2018'
        , dateEnded: 'Oct 2018'
        , skills: ['Node.JS', 'Express', 'GalaxyDB', 'noSQL', 'ElasticSearch', 'Mocha', 'Chai', 'Nock']
    }
];

export const PortfolioItems: IPortfolioItem[] = [
    {
        title:'SkyMassage'
        ,description:'A website made for a Miami based massage company that allows customers to order a massage online. It sends a text to the masseuse and an email to the customer with the order details.'
        ,url:'http://skymassage.org'
        ,image:'/assets/img/skymassage.gif'
    }
    ,{
        title:'Baby Drum'
        ,description:'A very simple app for babies to play the drums on. It has no ads and no extra screens or configurations for babies to get lost in. '
        ,url:'https://play.google.com/store/apps/details?id=com.QuinteroLLC.babyDrum'
        ,image:'/assets/img/babyDrum.gif'
    } 
    ,{
        title:'Leadership Spectrum'
        ,description:'A web app made for a business management consulting firm. Customers pay the company for training and buy logins for their employees to use on the site. The site contains a psychological exam which is meant to help them evaluate their management mindset in a business. The results of the exam are customized to the participant\'s answers and returned to them in a beautifully formatted pdf.'
        ,url:'http://www.leadershipspectrum.com/'
        ,image:'/assets/img/leadershipspectrum.gif'
    }
    ,{
        title:'Lucky Fish'
        ,description:'A fun, challenging game involving a flying goldfish and rockets'
        ,url:'https://play.google.com/store/apps/details?id=com.people.ME'
        ,image:'/assets/img/luckyFish.gif'
    }
];