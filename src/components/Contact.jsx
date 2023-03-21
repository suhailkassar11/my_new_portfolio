import React from 'react'
import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { fadeIn, slideIn } from '../utils/motion'
import SectionWraper from '../hoc/SectionWraper';

const Contact = () => {
    const formRef=useRef()
    const [form,setForm]=useState({
      name:'',
      email:'',
      message:''
    })
    const [loading,setLoading]=useState(false);

    const handleChange=(e)=>{
      
      const {name,value}=e.target
      setForm({...form,[name]:value})
    }


  const handleSubmit=(e)=>{

    e.preventDefault()

    // template_r6u0zac
// service_53p24un
// WM6ZUDfGlqVLKfA4s

    setLoading(true)
    emailjs.send(
    'service_53p24un',
    'template_r6u0zac',
    {
      from_name:form.name,
      to_name:'Suhail',
      from_email:form.email,
      to_email:'sk1181408@gmail.com',
      message:form.message,
    },
    'WM6ZUDfGlqVLKfA4s'
)
.then(()=>{
    setLoading(false)
    alert('thank you. i will get back to you as soon as possible')
    setForm({
      name:"",
      email:"",
      message:""
    })
},(error)=>{
  setLoading(false);
  console.log(error)
  alert("something went wrong.")
})
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween",0.2,1)} className="flex-[0.75] bg-black p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Contacts
        </h3>
        <form onSubmit={handleSubmit}
        
        >
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="what is your name" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="what is your Email" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="what do you want to say" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-3 text-xl hover:scale-110 duration-300'
          > {loading?"sending...":"send"}</button>
        </form>
      </motion.div>
      <motion.div 
      variants={slideIn('right,"tween",0.2,1')}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
      
    </div>
  )
}

export default SectionWraper(Contact,"contact")