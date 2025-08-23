const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Build Landing Page",
        description: "Design and develop a responsive landing page for product launch.",
        date: "2025-08-20",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve overlapping issue in mobile view.",
        date: "2025-08-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Set up React Router",
        description: "Implement routing in the new React SPA.",
        date: "2025-08-22",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create REST API for User Module",
        description: "Develop and document endpoints for user authentication.",
        date: "2025-08-19",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Schema Update",
        description: "Add indexing to improve query performance.",
        date: "2025-08-21",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "JWT Implementation",
        description: "Integrate JSON Web Token for secure API access.",
        date: "2025-08-20",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Failed Login Attempt Handler",
        description: "Add lockout mechanism after multiple failed logins.",
        date: "2025-08-17",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Refactor CSS to SCSS",
        description: "Convert existing styles to use SCSS and improve modularity.",
        date: "2025-08-19",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Lighthouse Performance",
        description: "Improve score by lazy loading images and minimizing JS.",
        date: "2025-08-22",
        category: "Optimization",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Unit Testing with Jest",
        description: "Write unit tests for utility functions.",
        date: "2025-08-18",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Dark Mode Toggle",
        description: "Implement dark mode switch using Tailwind CSS.",
        date: "2025-08-20",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Webpack Configuration",
        description: "Configure code splitting and optimization.",
        date: "2025-08-21",
        category: "Tooling",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Accessibility Audit",
        description: "Check and fix accessibility issues.",
        date: "2025-08-19",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Progressive Web App Setup",
        description: "Add service workers and offline support.",
        date: "2025-08-22",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Image Optimization",
        description: "Compress images and use next-gen formats.",
        date: "2025-08-20",
        category: "Optimization",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Broken Link Fixes",
        description: "Scan site and fix 404s.",
        date: "2025-08-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy to Vercel",
        description: "Prepare project for deployment on Vercel.",
        date: "2025-08-20",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Responsive Grid System",
        description: "Create reusable grid layout with CSS Grid.",
        date: "2025-08-21",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Add Contact Form Validation",
        description: "Implement real-time form validation using vanilla JS.",
        date: "2025-08-19",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123",
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}