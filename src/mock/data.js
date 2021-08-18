import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sonvu | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Son Vu',
  subtitle: 'I am a Full-stack Web Developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'avata.png',
  paragraphOne:
    'I’m a Full-stack Web Developer specializing in creating beautiful, unique website experiences that make users’ time more enjoyable. I’m looking forward to growing my techical skills to hopefully improve client experience.',
  paragraphTwo:
    'As a challenge lover, I always try myself with the new technics. My greatest strength is business awareness, which enables me to easily streamline projects and applications.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1o3bYxXxBQHQs6stdrWsGLF3_3lnQviqT/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sos.PNG',
    title: 'COVID19’S CHARITY HACKATHON',
    info: 'The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Every day, people are losing jobs and income, with no way of knowing when normality will return. My team decided to build a website where people can ask for help with the Covid19 situation in Vietnam',
    info2: 'Technical Used: React-Redux, NodeJs, ExpressJs, MongoDb',
    url: 'https://codevid-relief.netlify.app',
    repo: 'https://github.com/PrimeTimeTran/Hackathon-fe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'JUMPING BOX',
    info: ' Jumping Box is a game that will test your ability to measure distance. You need to gauge how powerful your jump should be.This absolutely is the mini-game for everyone to relax.',
    info2: 'Technical Used: HTML, CSS, Javascript',
    url: 'https://jumpingboxforfun.netlify.app/',
    repo: 'https://github.com/Davidvu91/Jumping_Box_Game.git', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to know more about me?',
  btn: '',
  email: 'sonvuhong177@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.facebook.com/hongson.vu.39',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vuhongson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Davidvu91',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
