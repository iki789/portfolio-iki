import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="mb-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] text-gray-900 dark:text-white hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
            <div className="bg-white p-4 rounded-xl dark:bg-gray-900">
              <div className="mb-4">
                <h4 className="font-semibold">Sr. Software Developer</h4>
                <h4>
                  Goals And Gambles LLC{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    &bull; Cedar Hill, Texas
                  </span>
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-400">
                  Sept 2020 - Present
                </div>
              </div>
              <div className="mb-4">
                Led and contributed to the development of robust, military-grade
                software, covering the full lifecycle from requirements
                gathering and design through implementation, testing, and
                deployment. Collaborated closely with cross-functional teams,
                including product managers, designers, and other stakeholders.
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Typescript
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  JavaScript
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  MongoDB
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Angular
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Redux
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  MSSQL
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  C# ASP .NET
                </span>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="mb-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] text-gray-900 dark:text-white hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
            <div className="bg-white p-4 rounded-xl dark:bg-gray-900">
              <div className="mb-4">
                <h4 className="font-semibold">Sr. Software Developer</h4>
                <h4>
                  DreamChasers{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    &bull; Chicago, Illinois
                  </span>
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-400">
                  Sept 2019 - Mar 2021
                </div>
              </div>
              <div className="mb-4">
                Developed and maintained complex CMS and JavaScript applications
                with a focus on high-quality code, scalability, and performance.
                Enhanced productivity through scripts and automation tools,
                optimized bundles to reduce page load times by ~60%, and
                integrated APIs for payment, CRM, and social media. Mentored
                junior engineers in web development, providing technical support
                and guidance on WordPress best practices to clients and
                end-users.
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  PHP
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Wordpress
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  JavaScript
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Web Scrapping
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  React/Redux
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  MySQL
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="mb-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] text-gray-900 dark:text-white hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
            <div className="bg-white p-4 rounded-xl dark:bg-gray-900">
              <div className="mb-4">
                <h4 className="font-semibold">Software Developer</h4>
                <h4>
                  E Kingdom Sites{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    &bull; Michigan, Illinois
                  </span>
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-400">
                  Sept 2019 - Mar 2021
                </div>
              </div>
              <div className="mb-4">
                Maintained and enhanced legacy website applications, customizing
                existing sites and plugins to align with client requirements by
                implementing custom functionality, styling, and layout
                adjustments. Diagnosed and resolved issues, identifying and
                fixing bugs or conflicts within the codebase.
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  PHP
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Wordpress
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  JavaScript
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  MySQL
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="mb-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] text-gray-900 dark:text-white hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
            <div className="bg-white p-4 rounded-xl dark:bg-gray-900">
              <div className="mb-4">
                <h4 className="font-semibold">Software Developer</h4>
                <h4>
                  Software Developer{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    &bull; Michigan, Illinois
                  </span>
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-400">
                  Jan 2015 - Mar 2019
                </div>
              </div>
              <div className="mb-4">
                Developed secure, well-documented applications and RESTful APIs,
                creating responsive, scalable solutions with a focus on
                security. Enhanced accessibility with WAI-ARIA for assistive
                technology users. Led website and mobile app development from
                concept to deployment, collaborating with product teams via
                Confluence and Jira to drive feature implementation. Managed
                time-sensitive updates, including content and database upgrades,
                and improved code quality through unit, integration, and E2E
                testing.
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  JavaScript
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  TypeScipt
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  React
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Angular
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  Redux
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
