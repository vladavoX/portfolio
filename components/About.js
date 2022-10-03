const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Node' },
  { name: 'Bootstrap' },
  { name: 'CSS' },
  { name: 'jQuery' },
  { name: 'React' },
  { name: 'Sass' },
  { name: 'Git' },
  { name: 'SQL' },
  { name: 'HTML' },
  { name: 'Angular' },
  { name: 'Figma' },
  { name: 'Tailwind' },
  { name: 'REST' },
  { name: 'python' },
  { name: 'Java' },
  { name: 'Spring Boot' },
  { name: 'GraphQL' },
  { name: 'React Native' }
]

const About = () => {
  return (
    <section className="h-screen flex justify-center items-center xl:px-[200px] md:px-14 px-8" id="about">
      <div className="flex flex-col lg:flex-row justify-between w-full font-semibold text-5xl text-white1 gap-20">
        <div>
          <h1>About me</h1>
          <div className="text-lg font-normal">
            <p className="mt-4 sm:mt-9">
              Hello, my name is Vladimir Aleksic. I&apos;m a <span className="text-neon-cyan">Frontend developer </span>
              located in Novi Sad, Serbia. Undergraduate <span className="text-neon-cyan">software engineer, freelancer</span>,
              ready to bring your <span className="text-neon-cyan">designs, ideas</span> and <span className="text-neon-cyan">creations </span>
              to the web.
            </p>
            <p className="mt-4 sm:mt-9">
              I&apos;m passionate
            </p>
            <p className="text-neon-cyan mt-4 sm:mt-9">
              Yaksd qwed aksd qqqy wasd wq daskd akwqsalsd jasd ga.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-neon-cyan">Skills</h1>
          <div className="text-base w-full mt-4 sm:mt-9">
            {skills && skills.map((skill) => <button className="mr-2 mb-2 md:mr-6 md:mb-6 bg-light-purple p-2 rounded-md cursor-default" key={skill.name}>{skill.name}</button>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;