import { ReactNode } from "react";
import Image from "next/image";
import Card from "./Card";
import { WorkExperience } from "./WorkExperience";
import ContactForm from "./ContactForm";
import { MainHeading } from "./About";
import ResumeDownloadButton from "./ResumeDownloadButton";

const techIcons = [
  { name: "React.js", src: "/react-js-icon.svg", level: 1 },
  { name: "Angular", src: "/angular-icon.svg", level: 1 },
  { name: "Next.js", src: "/nextjs-icon.svg", level: 1 },
  { name: "Gatsby", src: "/gatsby-js-icon.svg", level: 1 },
  { name: "Node.js", src: "/node-js-icon.svg", level: 1 },
  { name: "Python", src: "/python-icon.svg", level: 2 },
  { name: "PHP", src: "/php-icon.svg", level: 2, class: "max-w-[72px]" },
  { name: "Laravel", src: "/laravel-icon.svg", level: 2 },
  { name: "MySQL", src: "/mysql-icon.svg", level: 2 },
  { name: "MSSQL", src: "/sql-server-icon.svg", level: 2 },
  { name: "Redux", src: "/redux-icon.svg", level: 2 },
  { name: "Remix.js", src: "/remix-icon.svg", level: 2 },
  { name: "Jest", src: "/jest-js-icon.svg", level: 1 },
  { name: "Docker", src: "/docker-icon.svg", level: 3 },
  { name: "AWS", src: "/aws-icon.svg", level: 3 },
  { name: "Azure", src: "/azure-icon.svg", level: 3 },
];

const portfolio = [
  {
    name: "Find It Now",
    description:
      "AI powered lost-and-found platform. Manage and find your lost items in an instant.",
    thumbnail: "/4.jpg",
    tags: [
      "NextJs",
      "Tailwind",
      "Postgres",
      "Prisma",
      "Supabase",
      "Firebase",
      "Gemini",
      "OpenAI",
    ],
    url: "#",
  },
  {
    name: "BML",
    description:
      "Fashion e-commerce platform. Seamless online shopping for modern apparel.",
    thumbnail: "/1.jpg",
    tags: [
      "HydrogenJs",
      "Shopify",
      "Graphql",
      "Remix",
      "Tailwind",
      "i18next",
      "Stripe",
    ],
    url: "#",
  },
  {
    name: "PdfJs",
    description:
      "Interactive PDF viewer. Highlight text and search documents instantly.",
    thumbnail: "/3.jpg",
    tags: [
      "ReactJs",
      "TypeScript",
      "Mozilla PdfJs",
      "Mark.js",
      "TypeScript",
      "Node.js",
    ],
    url: "#",
  },
  {
    name: "Patient Gateway",
    description:
      "Medical dashboard. Doctors can view and track patient data with ease.",
    thumbnail: "/2.jpg",
    tags: [
      "ReactJs",
      "Material UI",
      "Chart.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Node.js",
    ],
    url: "#",
  },
];

export const Details = (): ReactNode => {
  return (
    <section className="flex flex-col gap-8">
      <Card>
        <div className="hidden relative lg:flex lg:items-center lg:flex-wrap lg:justify-center lg:min-h-[680px]">
          <div className="flex-1">
            <MainHeading />
          </div>
          <div className="max-w-72 absolute bottom-4">
            <ResumeDownloadButton />
          </div>
        </div>
      </Card>
      <Card>
        <div className="" id="about-me">
          <h2 className="text-2xl font-semibold after:h-2 after:w-12 after:rounded after:content-[''] after:bg-red-600 after:block after:mt-2">
            About me
          </h2>
          <div className="mt-8">
            <p>
              Results-driven and highly skilled software engineer with over 7+
              years of professional experience. Equipped with a comprehensive
              understanding of modern web development technologies and
              frameworks, adept at delivering efficient, scalable, and
              user-friendly applications. Proven ability to analyze complex
              problems, devise innovative solutions, and collaborate effectively
              with cross-functional teams. Excellent communication skills, both
              verbal and written, facilitating clear articulation of technical
              concepts to non-technical stakeholders. Committed to staying
              up-to-date with emerging trends and continuously enhancing skills
              to drive business growth and optimize development processes.
            </p>
          </div>
          <div>
            <h3>My Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-10 items-center">
              {techIcons.map((icon) => (
                <figure
                  key={icon.name}
                  className="flex justify-center items-center flex-col grayscale hover:grayscale-0 hover:ease-in-out transition cursor-pointer"
                >
                  <div className={`h-[48px] mb-2 ${icon.class ?? icon.class}`}>
                    <img
                      src={icon.src}
                      alt={icon.name}
                      height="48px"
                      width={"100%"}
                      className="h-[48px]"
                    />
                  </div>
                  <figcaption className="text-sm">{icon.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="" id="projects">
          <h2 className="text-2xl font-semibold after:h-2 after:w-12 after:rounded after:content-[''] after:bg-red-600 after:block after:mt-2">
            Projects
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 ">
            {portfolio.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="group"
                target="_blank"
              >
                <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
                  <div className="relative after:content-[''] after:absolute after:bg-gradient-to-r from-purple-300 via-blue-500 to-green-300 after:transition-opacity after:duration-500 after:rounded-xl after:opacity-20 duration-300 group-hover:after:opacity-0 after:w-full after:h-full after:top-0 after:left-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      width={580}
                      height={280}
                      className="rounded-tl-xl rounded-tr-xl object-cover w-full"
                    />
                  </div>
                  <div className="rounded-bl-xl rounded-br-xl bg-white p-4 pt-2 dark:bg-gray-900">
                    <h4 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                      {item.description}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={`${tag}-${crypto.randomUUID()}`}
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </Card>
      <Card>
        <div className="" id="work-experience">
          <h2 className="text-2xl font-semibold after:h-2 after:w-12 after:rounded after:content-[''] after:bg-red-600 after:block after:mt-2">
            Work Experience
          </h2>
          <div className="mt-8">
            <WorkExperience />
          </div>
        </div>
      </Card>
      <Card>
        <div className="" id="contact">
          <h2 className="text-2xl font-semibold after:h-2 after:w-12 after:rounded after:content-[''] after:bg-red-600 after:block after:mt-2">
            Contact
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </Card>
    </section>
  );
};
