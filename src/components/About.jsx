import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion'
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import SectionWraper from '../hoc/SectionWraper';

const ServiceCard=({index,title,icon})=>{
      return (
        <Tilt className="xs:w-[250px] w-full ">
            <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"       >
                <div 
                options={{
                  max:45,
                  scale:1,
                  speed:450
                }}
                className="flex bg-tertiary justify-evenly items-center rounded-[20px] py-5 px-12 min-h-[280px] flex-col"
                >
                <img src={icon} alt="icon" className='w-16 h-16 object-contain'/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

                </div>

            </motion.div>
        </Tilt>
      )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
            introdution
        </p>
        <h2 className={styles.sectionHeadText}>
            overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"  >
          Hi, I am Suhail, and i am a computer Science graduate student and i  done my (B.tech) degree from (KIET Group Of Institution)
          i am a javascript enthusiastic and i am a front end developer. i developed the interactive webpages by using reactjs react-three-fibre threejs.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(<ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    
    </>
  )
}

export default SectionWraper(About,'about')