/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ryan Pinto",
  title: "Hi, I'm Ryan",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 focused on Web + Mobile Application Development and the Software Development Lifecycle"
  ),
  resumeLink:
    "https://www.dropbox.com/s/yl5f7g30l0sebbm/Ryan%20Pinto%20IT%20Software%20Engineer%20Dec%202021.pdf?dl=0",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ryanyuri357",
  linkedin: "https://www.linkedin.com/in/ryan2021/",
  gmail: "ryan.yuri357@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Object Oriented Programming with C# and JavaScript ",
  skills: [
    emoji("⚡ ASP.NET Core 6.0"),
    emoji("⚡ ES6 / ES7"),
    emoji("⚡ Node.js + Express"),
    emoji("⚡ React"),
    // emoji("⚡ Interactive Front end / User Interfaces using React"),
    emoji("⚡ Unit + Integration Testing, Test Driven Development"),
    emoji("⚡ MS SQL + noSQL Database Integration"),
    emoji("⚡ Agile/Scrum")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-contao"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "far fa-folder"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MS SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo2.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "December 2019",
      desc: "Senior Capstone: Inquiry Oriented Linear Algebra",
      descBullets: [
        "National Mathematics Foundation Grant",
        "Linear Algebra Skills Game",
        "Software Development: Agile/Scrum",
        "Platform: Unity"
      ]
    },
    // {
    //   schoolName: "Pima Community College",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systems Administrator",
      company: "Wolff Logics",
      companylogo: require("./assets/images/WL2.png"),
      date: "2019 – Present",
      desc:
        "IT Managed Services Provider",
      descBullets: [
        "Managing MS SQL Server and Cloud based Electronic Medical Records systems: eMDs, eClinicalWorks, AllScripts",
        "Managing MS SQL Server based Legal Firm systems: ProLaw, iManage",
        "MS Windows Server domain environment + MS Exchange/Office 365/ Azure IT support",
        "PanTerra VOIP phone system management",
        "Sophos firewall management"
      ]
    },
    {
      role: "Junior Systems Administrator",
      company: "OCC Austin",
      companylogo: require("./assets/images/occTry4.png"),
      date: "2018 - 2019",
      desc:
        "IT Managed Services Provider",
      descBullets: [
        "ePower Electronic Medical Records system support",
        "LabDaq Laboratory Information Systems server deployment",
        "MS Windows Server domain environment + MS Exchange/Office 365/ Azure IT support",
        "Azure Cloud domain environment support",
        "MS Exchange/Office 365 email support",
        "VOIP phone system support",
        "Fortinet Firewall management"
      ]

    },
    {
      role: "IT Engineer",
      company: "Pivot Networks",
      companylogo: require("./assets/images/pivotLogo2.jpg"),
      date: "2017 – 2018",
      desc:
        "IT Managed Services Provider",
      descBullets: [
        "MS Windows Server domain environment support",
        "MS Exchange/Office 365 email support",
        "VOIP phone system support"

      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ryanyuri357", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Coding Projects",
  subtitle: "GITHUB/DEMOs",
  projects: [
    {

      image: require("./assets/images/bookly6.jpg"),
      projectName: "BOOKLY.com - eCommerce web app",
      projectDesc: "C# ASP.NET Core 6.0. MVC design pattern, MS SQL. N-tier architecture, " +
          "Entity Framework Core, ASP.NET Core Identity. Product, user and order management/processing. " +
          "User checkout with Stripe.",
      footerLink: [
        {
          name: "GitHub/ReadMe",
          url: "https://github.com/ryanyuri357/Bookly"
        },
        {
          name: " Demo on Azure",
          url: "https://booklybooks.azurewebsites.net/"
        }
      ]
    },
    {
      image: require("./assets/images/actionvideo2.png"),
      projectName: "ACTION VIDEO - REST movie rental API",
      projectDesc: "JavaScript/ES6+, Node.js + Express, MongoDB. Manage movies, rentals, returns, users, customers " +
          "and genres. Authentication with JWT and user authorization. Unit + Integration testing " +
          "with Jest framework.",
      // projectBody: "Unity, C#",
      footerLink: [
        {
          name: "GitHub/ReadMe",
          url: "https://github.com/ryanyuri357/actionvideo"
        },
        //  you can add extra buttons here.
        {
          name: "API documentation",
          url: "https://www.dropbox.com/s/d98iwkx58tvl9qn/Action%20Video%20API%20Documentation.pdf?dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/forked123.png"),
      projectName: "FORKIFY - eCookbook web app",
      projectDesc: "Javascript/ES6+ SPA. MVC Design Pattern.  Search over 1 million recipes from public API. Adjust servings, bookmark recipes using " +
          "local storage and upload private recipes using API developer key.",
      // projectBody: "Unity, C#",
      footerLink: [
        {
          name: "GitHub/ReadMe",
          url: "https://github.com/ryanyuri357/Forkify1.0"
        },
        //  you can add extra buttons here.
        {
          name: "Demo on Netlify",
          url: "https://forkifiedv1.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "ryan.yuri357@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ryanyuri_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
