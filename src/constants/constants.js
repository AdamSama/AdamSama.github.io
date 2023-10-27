
const Raft = '/images/Raft.png';

const Cars = '/images/Cars.png';


const Fundme = '/images/Fundme.png';

const Wisdom = '/images/Wisdom.png'

export const projects = [
  {
    title: 'RaftDFS - A Distributed File Storage System Using Raft Consensus Algorithm with Go',
    description: "I implemented a distributed file storage system using the Raft consensus algorithm with Go. I successfully implemented key components such as Leader Election and Safety Properties, ensuring the acceptance of logs exclusively from the leader.",
      image: Raft,
      tags: ['Raft', 'Distributed System', 'Consensus', 'Golang'],
    visit: 'https://medium.com/@yuexianl/rafting-through-raftdfs-when-the-river-gets-tech-y-2f1a40ebbe34',
    id: 0,
  },
  {
    title: 'Cars Need Shopping Too - Data Marketplace on Blockchain',
    description:" I led the design of a decentralized data marketplace using Hyperledger Fabric on blockchain. My contributions ensured a seamless integration of UI, Chaincode, and Gateway, enhanced by a rigorous Certificate Authority-based identity management system.",
    image: Cars,
    tags: ['Blockchain', 'Hyperledger-Fabric', 'Javascript'],
    visit: 'https://medium.com/@yuexianl/cars-need-shopping-too-cruising-through-the-blockchain-aisle-with-hyperledger-fabric-1ac5c7e91bc1',
    id: 1,
  },
  {
    title: 'Wisdom Attain - Book Shopping Platform',
    description: "I implemented Amazon Cognito for robust user authentication and data storage, ensuring secure access and protecting sensitive user information. To manage user model schemas, I utilized GraphQL and implemented CRUD operations, enabling smooth data management and retrieval. Additionally, I devised a Pipeline Resolver using AWS Lambda functions to streamline order management,",
    image: Wisdom,
    tags: ['AWS', 'AWS Lambda'],
    visit: 'https://medium.com/@yuexianl/wisdomattain-from-virtual-shelves-to-reality-bookworms-digital-paradise-64b1bf6cf085',
    id: 2,
  },
  {
    title: 'Fundme',
    description: "I employed Solidity, a smart contract language, to automate contract execution, improving efficiency and ensuring trust and transparency in the crowdfunding process. For the backend, I built a robust and scalable application using Node.js with Express.js, ensuring efficient operations and seamless integration with PostgreSQL for data storage.",
    image: Fundme,
    tags: ['Web3.0', 'Smart Contract'],
    visit: 'https://medium.com/@yuexianl/fundme-3-0-where-crowdfunding-meets-the-future-abdf84620471',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const CMUPath = '/images/CMU.png';

export const NYUPath = '/images/NYU.png';

export const Orbbec = '/images/Orbbec.png';

export const Orka = '/images/Orka.png';

export const Docker = '/images/docker.svg';

export const GCP = '/images/gcp.svg';

export const Redis = '/images/redis.svg';

export const Hadoop = '/images/hadoop.svg';

export const Azure = '/images/azure.svg';

export const Django = '/images/django.svg';

export const Kubernetes = '/images/kubernetes.svg';

export const Java = '/images/java.svg';

export const GO = '/images/go.svg';

export const Apache = '/images/apache.svg';

export const Me = '/images/me.JPG';

export const Workout = '/images/work.jpg';

export const Rave = '/images/rave.jpg';
