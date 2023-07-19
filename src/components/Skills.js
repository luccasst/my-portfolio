import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoDocker,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoPostgresql
} from "react-icons/bi";
import {SiNestjs, SiJest} from 'react-icons/si';
import {BsGit} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { DiReact, DiNodejsSmall, DiMongodb, DiCss3, DiMysql, DiNodejs } from "react-icons/di";
import "./skillStyle.css";

const Skills = () => {
  return (
    <section className="SkillsSection" id="skills">
      <h1 className="SkillsTitle">Skills</h1>
      <div className="container">
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <AiFillHtml5 style={{ color: "#e64211" }} />
          </div>
          <p>HTML</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiCss3 style={{ color: "#0e96d4" }}/>
          </div>
          <p>CSS</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <SiNestjs style={{ color: "#e31b6d" }}/>
          </div>
          <p>NestJs</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <BiLogoJavascript style={{ color: "#eccc12" }}/>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiReact style={{ color: "#1586e2" }}/>
          </div>
          <p>React</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiNodejsSmall style={{ color: "#5ed839" }}/>
          </div>
          <p>ExpressJS</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiNodejs style={{ color: "#378320" }}/>
          </div>
          <p>NodeJs</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiMongodb style={{ color: "#407c2e" }}/>
          </div>
          <p>MongoDB</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <BiLogoPostgresql style={{ color: "#2665ad" }}/>
          </div>
          <p>PostreSQL</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <DiMysql style={{ color: "#2665ad" }}/>
          </div>
          <p>MySQL</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <BiLogoDocker style={{ color: "#2665ad" }}/>
          </div>
          <p>Docker</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <BiLogoTypescript style={{ color: "#2665ad" }}/>
          </div>
          <p>TypeScript</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            <BiLogoRedux style={{ color: "#4939d8" }}/>
          </div>
          <p>Redux</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            < BsGit style={{ color: "#e64211" }}/>
          </div>
          <p>Git VCS</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            < AiFillGithub style={{ color: "#fdfdfd" }}/>
          </div>
          <p>GitHub</p>
        </div>
        <div className="SkillItem">
          <div className="SkillIconSquare">
            < SiJest style={{ color: "#793434" }}/>
          </div>
          <p>Jest</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
