import Image from "next/image";
import { ReactNode } from "react";
import { FiMapPin, FiMail, FiGithub } from "react-icons/fi";
import { RiStackOverflowLine } from "react-icons/ri";
import { SiCodementor } from "react-icons/si";
import Card from "./Card";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { WelcomeText } from "./WelcomeText";

export const MainHeading = () => {
  return (
    <div className="text-center">
      <span className="text-3xl md:text-6xl">Hello 👋, I'm a </span>
      <br />
      <WelcomeText />
    </div>
  );
};

export const About = (): ReactNode => {
  return (
    <section>
      <Card>
        <div className="lg:hidden">
          <MainHeading />
        </div>
        <div className="text-center mb-4">
          <Image
            src="/avatar.svg"
            alt="picture of me"
            width={120}
            height={120}
            className="rounded-full inline-block bg-slate-50 shadow-md w-[120px] h-[120px] dark:bg-slate-700"
          />
        </div>
        <div className="text-center">
          <div className="font-bold">
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-rose-600 bg-clip-text text-3xl text-transparent lg:text-3xl">
              Ikhlak
            </span>
            <br />
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-100">
              Shaikh
            </span>
          </div>
          <div className="border-l-4 border-l-purple-600 bg-slate-300 dark:bg-slate-600 p-5 rounded mt-6">
            <p>
              A passionate computer science enthusiast since childhood, I knew
              early on that this field was meant for me, it didn't feel like I
              chose this career; it chose me. The daily challenges and constant
              evolution of technology inspire me to continually refine my skills
              and push my limits.
            </p>
          </div>
          <div className="mt-8">
            <ul className="text-left">
              <li className="mb-4">
                <FiMapPin size={18} className="inline-grid mr-2" />
                Vancouver, BC
              </li>
              {/* <li className="mb-4">
                <FiPhone size={18} className="inline-grid mr-2" />{" "}
                <a href="tel:7788464431">(778) 846 4431</a>
              </li> */}
              <li className="mb-4">
                <FiMail size={18} className="inline-grid mr-2" />{" "}
                <a href="mailto:ikhlak789@gmail.com">ikhlak789@gmail.com</a>
              </li>
              <li className="mb-4">
                <FiGithub size={18} className="inline-grid mr-2" />{" "}
                <a href="https://github.com/iki789" target="_blank">
                  @iki789
                </a>
              </li>
              <li className="mb-4">
                <RiStackOverflowLine size={18} className="inline-grid mr-2" />{" "}
                <a
                  href="https://stackoverflow.com/users/3284463/ikhlak-s"
                  target="_blank"
                >
                  @iki789
                </a>
              </li>
              <li className="mb-4">
                <SiCodementor size={18} className="inline-grid mr-2" />{" "}
                <a href="https://www.codementor.io/@ikhlak789" target="_blank">
                  @ikhlak789
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <ResumeDownloadButton />
        </div>
      </Card>
    </section>
  );
};
