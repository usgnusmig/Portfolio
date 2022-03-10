import Seo from "./Seo";
import { FiUser, FiMail, FiHome, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
      <Seo title="Contact" />

      <div className="relative flex p-6">
        <div className=" border-2">
          <p className="text-5xl font-thin">Contact</p>
          <p className="text-5xl font-mideum pt-8">방문해 주셔서 감사합니다.</p>
          <ul className="pt-12">
            <li>
              <FiUser />
              김성수(Kim Sungsu)
            </li>
            <li>
              <FiMail />
              usgnusmig@gmail.com
            </li>
            <li>
              <FiHome />
              <a
                href="https://usgnuscodenote.tistory.com/"
                target="_blank"
                rel="noreferrer"
              >
                블로그
              </a>
            </li>
            <li>
              <FiGithub />
              <a
                href="https://github.com/usgnusmig"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}