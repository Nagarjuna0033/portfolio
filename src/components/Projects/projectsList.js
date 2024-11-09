import mifos from "../assets/mifos.jpg";
import coding from "../assets/laptop_asset.png";
const getProjectsList = () => {
  const projects = [
    {
      imgPath: mifos,
      isBlog: false,
      title: "Mobile-Wallet",
      description:
        "I contributed to the 'mobile-wallet' project by migrating its dependency injection framework from Dagger Hilt to Koin, streamlining the DI process for better modularity and simplicity. Additionally, I implemented UI refactors to enhance the app's visual coherence and user experience..",
      ghLink: "https://github.com/Nagarjuna0033/mobile-wallet",
    },
    // {
    //   imgPath: mifos,
    //   isBlog: false,
    //   title: "Mifos-Mobile",
    //   description:
    //     "Personal Chat Room or Workspace to share resources and hang out with friends. Built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and message reactions.",
    //   ghLink: "https://github.com/Nagarjuna0033/mifos-mobile",
    // },
    {
      imgPath: coding,
      isBlog: false,
      title: "Universtiy Club Website",
      description:
        "Written the frontend code to improve performance and ensure scalability. Enhanced UI design for better responsiveness and user experience across devices. Updated and optimized REST API calls, improving data handling between the frontend and backend. Added error handling to enhance reliability and user experience.",
      ghLink: "https://github.com/Nagarjuna0033/SRC-Website-Client",
    },
    {
      imgPath: coding,
      isBlog: false,
      title: "Finance Client",
      description:
        "Led the team in the development of the finance management web application, ensuring timely delivery of features. Coordinated code reviews and maintained high-quality standards across the codebase. Integrated frontend with backend services, improving data handling and UI functionality. Implemented best practices for project management, including task prioritization, bug fixes, and version control workflows.",
      ghLink: "https://github.com/Nagarjuna0033/Finance-Client",
    },
    {
      imgPath: coding,
      isBlog: false,
      title: "Finance API",
      description:
        "Led the team in the development of the finance management web application, ensuring timely delivery of features.  Created REST API and data visualization.",
      ghLink: "https://github.com/Nagarjuna0033/Finance-API",
    },
  ];

  return projects;
};

export default getProjectsList;
