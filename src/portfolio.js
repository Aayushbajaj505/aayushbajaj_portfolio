/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Aayush Bajaj",
  title: "Hi all, I'm Aayush",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building cross platform Mobile applications with Flutter/ Dart and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EfCJxnchwqBctTTwyJwcqz7z7bj1IY6X/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aayushbajaj505",
  linkedin: "https://www.linkedin.com/in/aayush-bajaj-505/",
  gmail: "aayushbajaj505@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://aayushbajaj505.medium.com/",
  // instagram: "https://www.instagram.com/aayush_bajaj_/",
  twitter: "https://twitter.com/AayushBajaj18",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive and Robust Web and Mobile Applications "),
    emoji("⚡ Integration of third party services such as Firebase,Firestore.")
  ],

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/flutter.png"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/dart.png"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/python.png"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname:
        "https://img.icons8.com/ultraviolet/40/000000/database.png"
    },
    {
      skillName: "java",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
    },
    {
      skillName: "c++",
      fontAwesomeClassname:
        "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/azure-1.png"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "https://img.icons8.com/color/48/000000/git.png"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/Bennett.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "July 2019 - August 2023",
      desc: "Hold Various Position of responsibilities in college.",
      descBullets: [
        // "Game Coordinator: Organized various sports competitions and headed the university's Gaming team. ",
        "Volunteer: I've been contributing as a volunteer to help provide knowledge and education to underprivileged children.",
        "Organizing Committee: Orgnaized various tech events that saw huge participation! ",
        "Tech Lead: Headed the tehnical team for developing the house website.",
        "BR: I've been given the role of a Batch representative."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE Intern",
      company: "3Pillars Global",
      companylogo: require("./assets/images/3pillars.png"),
      date: "Feb 2022 – july 2020",
      desc: "Built a portfolio and leaderboard webpages using Javascript. \
      \nDeveloped MS-SQL queries and procedures to create custom reports, and modify ERP user forms to enhance organizational productivity"
    },
    {
      role: "Campus Ambassador",
      company: "TuteDude",
      companylogo: require("./assets/images/tutedude.jpg"),
      date: "October 2021 – November 2021",
      desc: "Promoted brand by providing students and faculty members with knowledge and insights of\
      the courses provided by the company through demo sessions and giveaways.\
      Successfully collected more than 100 leads for future outreach.\
      Increased sale of courses by 30% on our campus."
    },
    {
      role: "Application Developer Intern",
      company: "Beejas Technologies",
      companylogo: require("./assets/images/Beejas.png"),
      date: "June 2021 – August 2021",
      desc: "Developed the delivery and vendor partner applications for an alcohol delivery-based project.\
      Built a web-based admin dashboard for swift and easy deployment of the project.\
      Managed and lead the intern team"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I CREATED",
  projects: [
    {
      image: require("./assets/images/courthouse.png"),
      projectName: "CourtHouse",
      projectDesc: "An Online Video Conferencing App for Judicial Holdings",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://courthouse.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/encryteam.png"),
      projectName: "Encrypteam's Secured Services",
      projectDesc:
        " Encrypt messages in images and send highly sensitive messages encrypted with AES-128bit encryption.",
      footerLink: [
        {
          name: "Visit Youtube",
          url: "https://www.youtube.com/watch?v=tEiVR_FNPxw"
        }
      ]
    },
    {
      image: require("./assets/images/airpollution.jpg"),
      projectName: "Air Pollution Detector",
      projectDesc:
        "  Arduino-based device consisting of a sensorthat records the carbon dioxide in the air around it and gives a warnings",
      footerLink: [
        {
          name: "Visit Youtbe",
          url: "https://www.youtube.com/watch?v=MyHI9RshAkU"
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
      title: "Microsoft Azure AI Fundamentals",
      subtitle:
        "This certificate was awarded to me for demonstrating foundationalknowledge of machine learning (ML) and artificial intelligence (AI)concepts and related Microsoft Azure service",
      image: require("./assets/images/azure-ai.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ovP9WyS5EBrfi1Nj08A3SpExlAixYt9p/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "This certificate was awarded to me for demonstrating foundational level knowledge of cloud services and how those services are provided with Microsoft Azure",
      image: require("./assets/images/Azure.Fundamental.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zroblhnUdg5TnvFMYQsLTLs5b3rZjUTD/view?usp=sharing"
        }
      ]
    },

    {
      title: "Cisco: Introduction to Packet Tracer",
      subtitle:
        "This certificate was awarded to me for having the knowledge and skills to create digital models of IP Networks and IoT Systems using CiscoPacket Tracer",
      image: require("./assets/images/cisoco.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vqbA9lhaYRZnCN8brtU7ItStNXjv1fVe/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://aayushbajaj505.medium.com/using-forms-in-flutter-4acfdea73a4b",
      title: "Using Forms In Flutter",
      description:
        "Learn how to properly use forms in Flutter(Better than the documentation)"
    },
    {
      url: "https://aayushbajaj505.medium.com/masters-theorem-a-deeper-dive-into-algorithms-a15a3d0c8659",
      title: "Masters Theorem: A deeper dive into algorithms.",
      description: "Learn how to use Masters Theorems"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9781393566",
  email_address: "aayushbajaj505@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Aayushbajaj18", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
