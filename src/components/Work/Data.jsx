import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import project1 from "../../assets/project1.jpg";
import project1_2 from "../../assets/project1.2.jpg";
import project1_3 from "../../assets/project1.3.jpg";
import project2 from "../../assets/project2.jpg";
import project2_2 from "../../assets/project2.2.jpg";
import project2_3 from "../../assets/project2.3.jpg";
import project3 from "../../assets/project3.jpg";
import project3_2 from "../../assets/project3.2.jpg";
import project3_3 from "../../assets/project3.3.jpg";
import project4 from "../../assets/project4.jpg";
import project4_2 from "../../assets/project4.2.jpg";
import project4_3 from "../../assets/project4.3.jpg";

export const projectData = [
    {
        id: 1,
        image: project1,
        title: "Dental Care",
        category: "fullstack",
        demo: "https://dental-care-5f1b3.web.app/",
        images: [project1, project1_2, project1_3],
        description:
            "Services about the clinical differential diagnosis of Oral Mucosal Lesions",
        overview: [
            "Users can see different types of dental services with details",
            "Users can add, delete and update their reviews ",
            "Verification with firebase auth, protected route, and JWT",
        ],

        tech: ["ReactJs", "ExpressJs", "MongoDB"],
    },
    {
        id: 2,
        image: project2,
        title: "Pre-owned",
        category: "fullstack",
        demo: "https://reseller-1b724.web.app/",
        description: "Buy and Sell any second-hand Laptops",
        images: [project2, project2_2, project2_3],
        overview: [
            "Admin can manipulate Buyers and Sellers ",
            "Sellers can add and sell products, Buyers can only see and buy products",
            "Verification with firebase auth, protected route, and JWT",
        ],
        tech: ["ReactJs", "ExpressJs", "MongoDB"],
    },
    {
        id: 3,
        image: project3,
        title: "Prodigy Tech",
        category: "fullstack",
        demo: "https://prodigy-tech.web.app/",
        description: "Online learning and teaching marketplace",
        images: [project3, project3_2, project3_3],
        overview: [
            "Students can explore different types of courses ",
            "Students can download course details as pdf",
            "Authentication with firebase",
        ],
        tech: ["ReactJs", "ExpressJs", "MongoDB"],
    },
    {
        id: 4,
        image: project4,
        title: "Test Yourself",
        category: "frontend",
        demo: "https://sensational-blini-2a4bdf.netlify.app/",
        description:
            "It will allow to assess your knowledge in CSS, JavaScript, React and Git.",
        images: [project4, project4_2, project4_3],
        overview: [
            "You can see frontend related a number of quiz",
            "You can see your answer is correct or wrong and can see the correct answer",
            "Number of quiz frequency in each topic represented with graph",
        ],
        tech: ["ReactJs", "CSS", "React Router"],
    },
    // {
    //     id: 5,
    //     image: Work3,
    //     title: "Brand design",
    //     category: "design",
    // },
    // {
    //     id: 6,
    //     image: Work4,
    //     title: "App movil",
    //     category: "app",
    // },
];

export const projectsNav = [
    { name: "all" },
    { name: "fullstack" },
    { name: "frontend" },
    // { name: "design" },
];
