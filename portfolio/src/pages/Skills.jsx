const Skills = () => {
  return (
    <div className="skills">
      <h2 className="stack-title">What I Can Do</h2>
      <div className="doing">
        <div className="do">
          <p>Web Development</p>
          <img src="/images/webDev.png" alt="" />
        </div>
        <div className="do">
          <p>Mobile Development</p>
          <img src="/images/mobileDev.png" alt="" />
        </div>
        <div className="do">
          <p>Programming</p>
          <img src="/images/program.png" alt="" />
        </div>
      </div>

      <div className="stack-wrapper">
        <h2 className="stack-title">My Stack</h2>
        <div class="skill">
          <p>HTML5</p>
          <div class="skill-bar skill1">
            <span class="skill-count1">95%</span>
          </div>
        </div>
        <div class="skill">
          <p>CSS3</p>
          <div class="skill-bar skill2">
            <span class="skill-count2">95%</span>
          </div>
        </div>
        <div class="skill">
          <p>JS</p>
          <div class="skill-bar skill3">
            <span class="skill-count3">90%</span>
          </div>
        </div>
        <div class="skill">
          <p>C#</p>
          <div class="skill-bar skill4">
            <span class="skill-count4">85%</span>
          </div>
        </div>
      </div>
      <h2 className="stack-title">I also using</h2>
      <div className="stack">
        <div className="icon">
          <span>React</span>
          <i class="fa-brands fa-react"></i>
        </div>
        <div className="icon">
          <span>Node Js</span>
          <i class="fa-brands fa-node-js"></i>
        </div>
        <div className="icon">
          <span>MongoDB / SQL</span>
          <i class="fa-solid fa-database"></i>
        </div>
        <div className="icon">
          <span>Git</span>
          <i class="fa-brands fa-git-alt"></i>
        </div>
      </div>
    </div>
  );
};
export default Skills;
