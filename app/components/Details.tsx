import { ReactNode } from "react";
import Card from "./Card";
import { WorkExperience } from "./WorkExperience";
import ContactForm from "./ContactForm";
import { MainHeading } from "./About";
import ResumeDownloadButton from "./ResumeDownloadButton";

const techIcons = [
  { name: "React Js", src: "/react-js-icon.svg", level: 1 },
  { name: "Angular", src: "/angular-icon.svg", level: 1 },
  { name: "Next Js", src: "/nextjs-icon.svg", level: 1 },
  { name: "Gatsby", src: "/gatsby-js-icon.svg", level: 1 },
  { name: "Node Js", src: "/node-js-icon.svg", level: 1 },
  { name: "Jest", src: "/jest-js-icon.svg", level: 1 },
  { name: "Python", src: "/python-icon.svg", level: 2 },
  { name: "Nuxt", src: "/nuxt-js-icon.svg", level: 2 },
  { name: "PHP", src: "/php-icon.svg", level: 2 },
  { name: "CodeIgniter", src: "/codeigniter-icon.svg", level: 2 },
  { name: "MySQl", src: "/mysql-icon.svg", level: 2 },
  { name: "Microsoft SQL Server", src: "/sql-server-icon.svg", level: 2 },
  { name: "Redux", src: "/redux-icon.svg", level: 2 },
  { name: "Wordpress", src: "/remix-icon.svg", level: 2 },
  { name: "Docker", src: "/docker-icon.svg", level: 3 },
  { name: "AWS", src: "/aws-icon.svg", level: 3 },
  { name: "Azure", src: "/azure-icon.svg", level: 3 },
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
              Results-driven and highly skilled software engineer with over 10+
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
                <img
                  src={icon.src}
                  alt={icon.name}
                  height={48}
                  width={48}
                  className="grayscale hover:grayscale-0 hover:ease-in-out transition cursor-pointer "
                />
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
            <a href="#" className="group">
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
                <div className="relative after:content-[''] after:absolute after:bg-gradient-to-r from-purple-300 via-blue-500 to-green-300 after:transition-opacity after:duration-500 after:rounded-xl after:opacity-20 duration-300 group-hover:after:opacity-0 after:w-full after:h-full after:top-0 after:left-0">
                  <img
                    src="/thumb1.jpg"
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl object-cover w-full"
                  />
                </div>
                <div className="rounded-bl-xl rounded-br-xl bg-white p-4 pt-2 dark:bg-gray-900">
                  <h4 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                    Article Builder is a app that helps you write articles
                    without any code.
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      ReactJs
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Redux
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Bootstrap
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Typescript
                    </span>
                  </div>
                </div>
              </article>
            </a>
            <a href="#" className="group">
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
                <div className="relative after:content-[''] after:absolute after:bg-gradient-to-r from-purple-300 via-blue-500 to-green-300 after:transition-opacity after:duration-500 after:rounded-xl after:opacity-20 duration-300 group-hover:after:opacity-0 after:w-full after:h-full after:top-0 after:left-0">
                  <img
                    src="/thumb2.jpg"
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl object-cover w-full"
                  />
                </div>
                <div className="rounded-bl-xl rounded-br-xl bg-white p-4 pt-2 dark:bg-gray-900">
                  <h4 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                    A social media app where you can create posts and react
                    using memes.
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Angular
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      MongodDB
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      NGINX
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      PHP
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Bootstrap
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Typescript
                    </span>
                  </div>
                </div>
              </article>
            </a>
            <a href="#" className="group">
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
                <div className="relative after:content-[''] after:absolute after:bg-gradient-to-r from-purple-300 via-blue-500 to-green-300 after:transition-opacity after:duration-500 after:rounded-xl after:opacity-20 duration-300 group-hover:after:opacity-0 after:w-full after:h-full after:top-0 after:left-0">
                  <img
                    src="/thumb3.jpg"
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl object-cover w-full"
                  />
                </div>
                <div className="rounded-bl-xl rounded-br-xl bg-white p-4 pt-2 dark:bg-gray-900">
                  <h4 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                    A responsive landing page with heavy animations and
                    optimized for speed.
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      HTML
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      SCSS
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Bootstrap
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Webpack
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Apache
                    </span>
                  </div>
                </div>
              </article>
            </a>
            <a href="#" className="group">
              <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
                <div className="relative after:content-[''] after:absolute after:bg-gradient-to-r from-purple-300 via-blue-500 to-green-300 after:transition-opacity after:duration-500 after:rounded-xl after:opacity-20 duration-300 group-hover:after:opacity-0 after:w-full after:h-full after:top-0 after:left-0">
                  <img
                    src="/thumb4.jpg"
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl object-cover w-full"
                  />
                </div>
                <div className="rounded-bl-xl rounded-br-xl bg-white p-4 pt-2 dark:bg-gray-900">
                  <h4 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                    A responsive landing page for GoHub.com which relied on
                    Lottie animations.
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      ReactJs
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Redux
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Bootstrap
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-500 dark:text-purple-100">
                      Typescript
                    </span>
                  </div>
                </div>
              </article>
            </a>
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
