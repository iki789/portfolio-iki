import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const experiences = [
  {
    name: "Goals and Gambles",
    company: "Goals and Gambles",
    position: "Senior Software Developer",
    location: "Cedar Hill, Texas",
    startDate: "Sept 2020",
    endDate: "Present",
    descriptiom:
      "Led and contributed to the development of robust, institutional software, covering the full lifecycle from requirements gathering and design through implementation, testing, and deployment. Collaborated closely with cross-functional teams, including product managers, designers, and other stakeholders.",
    tags: [
      "Typescript",
      "JavaScript",
      "MongoDB",
      "Angular",
      "Redux",
      "MSSQL",
      "C# ASP .NET",
    ],
  },
  {
    name: "DreamChasers",
    company: "DreamChasers",
    position: "Full-Stack Developer",
    location: "Chicago, Illinois",
    startDate: "Sept 2019",
    endDate: "Mar 2021",
    descriptiom:
      "Developed and maintained complex CMS and JavaScript applications with a focus on high-quality code, scalability, and performance. Enhanced productivity through scripts and automation tools, optimized bundles to reduce page load times by ~60%, and integrated APIs for payment, CRM, and social media. Mentored junior engineers in web development, providing technical support and guidance on WordPress best practices to clients and end-users.",
    tags: [
      "PHP",
      "Wordpress",
      "MongoDB",
      "Angular",
      "Redux",
      "MSSQL",
      "C# ASP .NET",
    ],
  },
  {
    name: "E Kingdom Sites",
    company: "E Kingdom Sites",
    position: "Wordpress Developer",
    location: "Chicago, Illinois",
    startDate: "Sept 2019",
    endDate: "Mar 2021",
    descriptiom:
      "Maintained and enhanced legacy website applications, customizing existing sites and plugins to align with client requirements by implementing custom functionality, styling, and layout adjustments. Diagnosed and resolved issues, identifying and fixing bugs or conflicts within the codebase.",
    tags: [
      "PHP",
      "Wordpress",
      "MongoDB",
      "Angular",
      "Redux",
      "MSSQL",
      "C# ASP .NET",
    ],
  },
  {
    name: "Full-stack Developer",
    company: "Upwork",
    position: "Full-stack Developer",
    location: "Chicago, Illinois",
    startDate: "Jan 2015",
    endDate: "Mar 2019",
    descriptiom:
      "Developed secure, well-documented applications and RESTful APIs, creating responsive, scalable solutions with a focus on security. Enhanced accessibility with WAI-ARIA for assistive technology users. Led website and mobile app development from concept to deployment, collaborating with product teams via Confluence and Jira to drive feature implementation. Managed time-sensitive updates, including content and database upgrades, and improved code quality through unit, integration, and E2E testing.",
    tags: [
      "PHP",
      "Wordpress",
      "MongoDB",
      "Angular",
      "Redux",
      "MSSQL",
      "C# ASP .NET",
    ],
  },
];

export const WorkExperience = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {experiences.map((exp) => (
        <TimelineItem key={exp.name}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] text-gray-900 dark:text-white hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
              <div className="bg-white p-4 rounded-xl dark:bg-gray-900">
                <div className="mb-4">
                  <h4 className="font-semibold">{exp.position}</h4>
                  <h4>
                    {exp.company}{" "}
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      &bull; {exp.location}
                    </span>
                  </h4>
                  <div className="text-sm text-gray-700 dark:text-gray-400">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <div className="mb-4">{exp.descriptiom}</div>
                <div className="flex flex-wrap gap-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={`${tag} ${crypto.randomUUID()}`}
                      className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
