const Home = () => {
  return (
    <>
      <section className="welcome">
        <h2>👋 Hi, I'm Nir.</h2>
        <p>
          I'm a web developer and software engineer. In my spare time i enjoy
          gaming, football, coocking and build my own projects.
          <br />
          My preferrd tools are Js, React and Node.Js
          <br />
          <br />
          <br />
          I'm on{" "}
          <a href="https://github.com/NirIzhak" target="_blank">
            GitHub
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/nir-izhak/" target="_blank">
            Linkdein
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/nirizhak/" target="_blank">
            Instegram
          </a>
          .
        </p>
      </section>
      <div className="dev-img">
        <img src="./images/dev.png" alt="" />
      </div>
    </>
  );
};
export default Home;
