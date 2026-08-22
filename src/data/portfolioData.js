export const portfolioData = {
  personalInfo: {
    name: "Dhaneshwari Nerti",
    title: "AWS DevOps Engineer",
    tagline: "AWS DevOps Engineer focused on cloud infrastructure, Kubernetes, CI/CD, Infrastructure as Code, monitoring, and automation.",
    resumeUrl: "./assets/resume.pdf", 
    profilePhotoUrl: "./assets/profile.jpeg",
    socials: {
      github: "https://github.com/daneshwarinerti",
      linkedin: "https://www.linkedin.com/in/dhaneshwari-nerti",
      email: "mailto:daneshwarinerti0604@gmail.com",
      emailAddress: "daneshwarinerti0604@gmail.com",
      phone: "9741750604",
      phoneDial: "tel:9741750604"
    }
  },
  about: {
    educationBrief: "Graduated with a Bachelor of Engineering (B.E.) in Information Science and Engineering from Basaveshwara Engineering College, Bagalkot (Class of 2026).",
    passions: [
      "AWS Cloud & Core Infrastructure",
      "Kubernetes & Container Orchestration",
      "CI/CD Automation Pipelines",
      "Infrastructure as Code (IaC)",
      "Systems Monitoring & Configuration Management"
    ],
    philosophy: "I actively enjoy building real-world cloud projects to strengthen my practical skills. I am looking for opportunities as an AWS DevOps Engineer where I can contribute to production-grade automation, cloud operations, and reliability."
  },
  skills: [
    {
      category: "AWS",
      items: [
        "EC2", "VPC", "IAM", "S3", "EBS", "ECR", "EKS", 
        "ECS Fargate", "RDS", "ElastiCache", "ALB", "NLB", 
        "Lambda", "Route 53", "CloudWatch", "Auto Scaling", 
        "Security Groups", "CloudFormation", "AWS CLI"
      ]
    },
    {
      category: "Containers & Orchestration",
      items: [
        "Docker", "Docker Compose", "Kubernetes", "Helm", 
        "kubectl", "Kubernetes Ingress", "Kubernetes Services", "YAML"
      ]
    },
    {
      category: "CI/CD",
      items: [
        "Jenkins", "GitHub Actions", "AWS CodeCommit", 
        "AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline"
      ]
    },
    {
      category: "Infrastructure as Code",
      items: [
        "Terraform", "AWS CloudFormation"
      ]
    },
    {
      category: "Monitoring",
      items: [
        "Prometheus", "Grafana", "Alertmanager"
      ]
    },
    {
      category: "Configuration Management",
      items: [
        "Ansible"
      ]
    },
    {
      category: "GitOps",
      items: [
        "GitOps Fundamentals", "Argo CD — Basic Knowledge"
      ]
    },
    {
      category: "DevSecOps",
      items: [
        "DevSecOps Fundamentals", "Trivy", "Gitleaks", 
        "pip-audit", "Secrets Management", "IAM Least Privilege"
      ]
    },
    {
      category: "OS & Scripting",
      items: [
        "Linux", "Bash/Shell Scripting", "Python"
      ]
    },
    {
      category: "Version Control",
      items: [
        "Git", "GitHub"
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Microservice Health Monitoring System",
      description: "A production-oriented microservices deployment on Amazon EKS focused on container orchestration, Kubernetes networking, persistent storage, CI/CD automation, and monitoring.",
      features: [
        "Containerized and deployed a multi-service workload on Amazon EKS using Docker and Amazon ECR.",
        "Used Helm to deploy and manage Kubernetes monitoring components including Prometheus, Grafana, and Alertmanager.",
        "Configured AWS ALB Ingress and Kubernetes ClusterIP Services.",
        "Configured Amazon EBS-backed persistent storage.",
        "Automated container builds and EKS deployments using GitHub Actions."
      ],
      technologies: ["Amazon EKS", "Kubernetes", "Docker", "Helm", "Amazon ECR", "AWS ALB Ingress", "Amazon EBS", "Prometheus", "Grafana", "Alertmanager", "GitHub Actions"],
      imageUrl: "./assets/projects/image-pipeline.png",
      githubUrl: "https://github.com/daneshwarinerti/cloudformation-project",
      liveUrl: ""
    },
    {
      id: "project-2",
      title: "AWS Voting App",
      description: "A cloud infrastructure and CI/CD project demonstrating Infrastructure as Code, containerized workloads, AWS ECS deployment, managed database/cache services, secret management, and automated deployment.",
      features: [
        "Provisioned the AWS environment using Terraform.",
        "Deployed containerized services to ECS Fargate.",
        "Used Amazon ECR for container image management.",
        "Used RDS PostgreSQL and ElastiCache Redis as managed AWS services.",
        "Used AWS Secrets Manager for credential management.",
        "Automated image builds and deployment using GitHub Actions."
      ],
      technologies: ["Terraform", "Docker", "Docker Compose", "Amazon ECS Fargate", "Amazon ECR", "Amazon RDS PostgreSQL", "Amazon ElastiCache Redis", "AWS Secrets Manager", "GitHub Actions"],
      imageUrl: "./assets/projects/aws-automation.png",
      githubUrl: "https://github.com/daneshwarinerti/aws-image-processing",
      liveUrl: ""
    },
    {
      id: "project-3",
      title: "DevSecOps CI/CD Pipeline",
      description: "A security-focused CI/CD pipeline demonstrating shift-left security practices by integrating automated container, secret, and dependency scanning into the deployment workflow.",
      features: [
        "Built a GitHub Actions CI/CD pipeline.",
        "Automated Docker image builds and Amazon ECR pushes.",
        "Deployed the workload to ECS Fargate behind an ALB.",
        "Integrated Trivy for container vulnerability scanning.",
        "Integrated Gitleaks for secret detection.",
        "Integrated pip-audit for Python dependency auditing.",
        "Added security gates to prevent deployment when security checks fail."
      ],
      technologies: ["GitHub Actions", "Docker", "Amazon ECR", "ECS Fargate", "ALB", "Trivy", "Gitleaks", "pip-audit"],
      imageUrl: "./assets/projects/ecs-deployment.png",
      githubUrl: "https://github.com/daneshwarinerti/ecs-project",
      liveUrl: ""
    }
  ],
  experience: [
    {
      role: "Network & Cloud Engineering Intern",
      company: "Infobell IT Solutions Pvt. Ltd.",
      companyLogo: "./assets/infobell-logo.png",
      location: "Bengaluru, Karnataka, India",
      duration: "January 2026 – May 2026",
      description: "Worked as a Cloud & DevOps Intern, collaborating on real-world client tasks (Client: AMD) and implementing cloud operations best practices, Linux scripting, and container deployment workflows.",
      highlights: [
        "Provisioned and managed AWS infrastructure using Terraform, VPC, EC2, and Security Groups.",
        "Automated software integration and deployments using AWS CodeCommit, CodeBuild, and CodeDeploy.",
        "Built containerized microservices with Docker and deployed them to Kubernetes clusters.",
        "Used Ansible for automated configuration management and server provisioning.",
        "Wrote custom bash/shell scripts for system automation and Linux server administration."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Information Science and Engineering",
    college: "Basaveshwara Engineering College, Bagalkot",
    duration: "2022 – 2026",
    cgpa: "8.54 / 10.0" 
  },
  workshops: [
    {
      name: "AWS (Basic to Intermediate Level)",
      issuer: "Algo Tutor",
      duration: "12-Day Workshop",
      description: "Completed a 12-day hands-on AWS workshop covering core cloud concepts and practical implementation using AWS services."
    },
    {
      name: "Introduction to Python",
      issuer: "SoloLearn",
      duration: "Course Certification",
      description: "Completed fundamental training in Python programming structure and logic."
    }
  ]
};
