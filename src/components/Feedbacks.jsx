import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWraper from '../hoc/SectionWraper';
import { fadeIn,textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard=({index, testimonial,name,designation,company,image})=>(
<motion.div>


</motion.div>

)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black rounded-[12px]'>
      <div className={`${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what other says</p>
          <h2 className={styles.sectionHeadText}>testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial,index)=>(
            <FeedbackCard key={index} index={index} {...testimonial}/>
          ))}
      </div>
    </div>
  )
}

export default SectionWraper(Feedbacks,"")