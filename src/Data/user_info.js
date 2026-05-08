const UserInfo = {
    name: "Pola Venkatesh",
    role: "AI & ML Engineer",
    shortDescription: "Aspiring AI & ML Engineer passionate about building innovative solutions. Experienced in Application Development, Web Development, and Generative AI.",
    bio: "B.Tech 3rd-year Computer Science student specializing in Artificial Intelligence and Machine Learning, with hands-on experience in application and web development through workshops and self-driven projects. Interested in software development, testing, and cybersecurity, with strong problem-solving and leadership skills.",
    location: "Khammam, Telangana, India",
    email: "anonymous23636@gmail.com",
    phone: "9866342962",
    social: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/venkatesh-pola-8b5797238/",
        instagram: "https://instagram.com", // Placeholder
    },
    skills: [
        "Application Development",
        "Web Development",
        "FlutterFlow",
        "AI Fundamentals",
        "Generative AI",
        "Problem Solving",
        "Leadership",
        "Research Skills"
    ],
    projects: [
        {
            id: 1,
            Title: "Opportunity India",
            Description: "Opportunity India is a hyperlocal platform that helps students and job seekers discover opportunities in their city. It highlights jobs, hackathons, government notifications, free courses, and startup events through a clean and mobile-friendly web interface.",
            Link: "https://opportunity-india.netlify.app/",
            Img: "/opportunity_india.png",
            TechStack: ["React.js", "Tailwind CSS", "Vite", "JavaScript (ES6+)", "Responsive UI Design"],
            Features: [
                "City-focused search experience to quickly find nearby opportunities",
                "Dedicated sections for jobs, hackathons, and government updates",
                "Curated free courses and startup event listings for learners",
                "Modern hero section with clear call-to-action and easy navigation",
                "Fully responsive layout optimized for desktop and mobile devices",
                "Clean visual design built for readability and quick exploration"
            ]
        },
        {
            id: 2,
            Title: "College Website",
            Description: "A comprehensive and modern website prototype built for educational institutions. This project focuses on delivering a structured navigation experience, ensuring that students, faculty, and visitors can easily access information. It features a fully responsive layout and several dynamic components tailored for a campus environment.",
            Link: "https://scitr-enhanced-college-website.vercel.app/",
            Img: "/college_website_screenshot_v2.png",
            TechStack: ["React.js", "Tailwind CSS", "Vite", "AOS (Animate On Scroll)", "Lucide React Icons"],
            Features: [
                "Comprehensive academic department and course catalog",
                "Interactive campus map and facility directory",
                "Dynamic news and events announcement system",
                "Responsive design optimized for smartphones, tablets, and desktops",
                "Smooth scroll animations and professional aesthetics",
                "Integrated contact forms and social media links"
            ]
        },
        {
            id: 3,
            Title: "Bus Booking Site",
            Description: "An end-to-end bus reservation system prototype that demonstrates a complete user journey from seat selection to booking confirmation. This project highlights efficient state management and complex form handling, providing a realistic simulation of a high-traffic e-commerce platform.",
            Link: "https://rtcbooking.lovable.app",
            Img: "/bus_booking_site.png",
            TechStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "State Management (Context API)", "React Router"],
            Features: [
                "Interactive seat map with real-time availability updates",
                "Multi-step booking wizard with progress tracking",
                "Complex price calculation based on seat type and distance",
                "Form validation and secure data handling simulations",
                "Filter and search functionality for bus schedules",
                "Responsive mobile-first user interface"
            ]
        }
    ],
    certificates: [
        {
            id: 1,
            Img: "/1.png"
        },
        {
            id: 2,
            Img: "/2.png"
        },
        {
            id: 3,
            Img: "/google_introduction_certificate.png"
        },
        {
            id: 4,
            Img: "/4.jpg"
        },
        {
            id: 5,
            Img: "/5.png"
        },
        {
            id: 6,
            Img: "/6.png"
        }
    ]
};

export default UserInfo;
