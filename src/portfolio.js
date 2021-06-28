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
    "Full Stack Software Developer 🚀 focused on creating Mobile/Web applications and the Software Development Lifecycle"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1otND4jWl-zIJixtA0wiwe6DgcYiiZOYc2OrjZLngJ8U/edit?usp=sharing",
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
  subTitle: "JAVASCRIPT BASED FULL STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Interactive Front end / User Interfaces using React"
    ),
    emoji("⚡ Efficient Back end Development with Node.js + Express"),
    emoji("⚡ Redux State Management"),
    emoji(
      "⚡ SQL and non-SQL Databases such as Firebase and MongoDB"
    ),
    emoji(
        "⚡ Agile/Scrum"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "sql database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongoDB",
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
        "MS Windows Server domain environment support",
        "MS Exchange/Office 365 email support",
        "Pantera VOIP phone system management",
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
        "MS Windows Server domain environment support",
        "Azure Cloud domain environment support",
        "MS Exchange/Office 365 email support",
        "VOIP phone support",
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
        "VOIP phone support"

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
      image: require("./assets/images/cookingVector.jpg"),
      projectName: "Forkify",
      projectDesc: "JavaScript/CSS/HTML recipe app that allows users to search, bookmark and add cooking recipes.",
      // projectBody: "Unity, C#",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/ryanyuri357/Forkify1.0"
        },
        //  you can add extra buttons here.
        {
          name: "Visit Demo",
          url: "https://forkifiedv1.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/amazon-icon.png"),
      projectName: "AmazonX",
      projectDesc: "Clone of Amazon shopping app using React front end with Firebase backend/Google authentication.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://yahoo.com"
        },
        {
          name: "Visit Demo",
          url: "https://yahoo.com"
        }
      ]
    },
    {
      image: require("./assets/images/sN9.jpg"),
      projectName: "The Social Network",
      projectDesc: "Mock social network built using React front end, Redux state management, Node.js + Express back end with MongoDB.",
      // projectBody: "Unity, C#",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "fa"
        },
        //  you can add extra buttons here.
        {
          name: "Coming Soon",
          url: "fa"
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
