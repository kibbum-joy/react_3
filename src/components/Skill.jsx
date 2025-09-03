import React from 'react'

const skillText = [
  {
    titie: "Lorem ipsum dolor sit amet.",
    desc: "--Lorem ipsum, dolor sit amet consectetur adipisicing elit. At velit fugiat ipsam, provident ut praesentium neque consectetur a corporis. Molestiae sint officia ut aliquam debitis consequatur autem? Magni, reiciendis cum!",
  },
  {
    titie: "-Lorem ipsum dolor sit amet.",
    desc: "Lorem --ipsum, dolor sit amet consectetur adipisicing elit. At velit fugiat ipsam, provident ut praesentium neque consectetur a corporis. Molestiae sint officia ut aliquam debitis consequatur autem? Magni, reiciendis cum!",
  },
  {
    titie: "Lorem -ipsum dolor sit amet.",
    desc: "Lorem ipsum, --dolor sit amet consectetur adipisicing elit. At velit fugiat ipsam, provident ut praesentium neque consectetur a corporis. Molestiae sint officia ut aliquam debitis consequatur autem? Magni, reiciendis cum!",
  },
  {
    titie: "Lorem ipsum -dolor sit amet.",
    desc: "Lorem ipsum, dolor --sit amet consectetur adipisicing elit. At velit fugiat ipsam, provident ut praesentium neque consectetur a corporis. Molestiae sint officia ut aliquam debitis consequatur autem? Magni, reiciendis cum!",
  },
]

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <h2 className='skill_title'>
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">

          {
            skillText.map((skill, key) => (
              <div key={key}>
                <span>{key + 1}.</span>
                <h3>{skill.titie}</h3>
                <p>{skill.desc}</p>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Skill