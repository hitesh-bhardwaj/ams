import Hero from '@/components/BlogDetail/Hero'
import Layout from '@/components/Layout'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'

const nurturingNursingSkills = () => {
    paraAnim();
    fadeUp();
  return (
    <>
    <Layout>
    <Hero img={"/assets/blogs/blog-2.png"} title={"Nurturing Nursing Skills Programs "} tagline={"Under the initiative of Advanced MedTech Academy"} width={"w-[60%]"}/>
    <section id="blog-content" className="w-screen h-full py-[5vw] mobile:py-[10vw]">
                <div className="container-lg mobile:px-[5vw]">
                <h2
                  data-para-anim
                  className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
                >
           Nurturing the Future of Healthcare: AMS’s Nursing Skills Program
                </h2>
                <div className="py-[1vw] mobile:py-[5vw] fadeUp">
                  <p className="content-p py-[1vw]  mobile:py-[3vw]">At Advanced MedTech Academy (AMA), we believe that nurses are the backbone of healthcare, and empowering them is essential for delivering exceptional patient care. With this vision, we proudly present the <span className='font-normal'>Nurturing Nursing Skills Program</span>—an initiative designed to enhance the expertise, confidence, and capabilities of emerging nurses.</p>
                </div>
    
    
                <div className="py-[1vw] mobile:py-[5vw] fadeUp">
                <h2
                 
                  className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
                >
              Elevating Nursing Excellence
                </h2>
                <p className="content-p py-[1vw]  mobile:py-[3vw]">Elevating Nursing Excellence</p>
                <ul  className='py-[1vw] list-decimal ml-[5vw] content-p '>
                    <li><span className='font-normal'>Enhance Leadership Skills</span>: Equip nurses with the tools to take charge, inspire teams, and lead with confidence in dynamic healthcare environments.</li>
                    <li><span className='font-normal'>Strengthen Soft Skills</span>: Focus on effective communication, empathy, teamwork, and adaptability—key attributes that define outstanding nursing care.</li>
                    <li><span className='font-normal'>Advance Technical Expertise</span>: Provide hands-on training to refine clinical techniques and ensure proficiency in delivering high-quality care.</li>
                </ul>
                </div>
                <div className="py-[1vw] mobile:py-[5vw] fadeUp">
                <h2
                 
                  className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
                >
             Learning from the Best
                </h2>
                <p className="content-p py-[1vw]  mobile:py-[3vw]">Participants in the program gain valuable insights from seasoned healthcare professionals who bring years of experience and a passion for teaching. These experts share practical knowledge, real-world scenarios, and strategies that empower nurses to excel in their roles.</p>
                </div>

                <div className="py-[1vw] mobile:py-[5vw] fadeUp">
                <h2
                 
                  className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
                >
               Fostering Growth and Excellence
                </h2>
                <p className="content-p py-[1vw]  mobile:py-[3vw]">Through interactive workshops, collaborative sessions, and skill-building exercises, the Nurturing Nursing Skills Program fosters an environment of continuous learning and professional development. The ultimate goal is to:</p>
                <ul className='py-[1vw] list-disc ml-[5vw] content-p '>
                 <li>Cultivate a new generation of confident and capable nursing professionals.</li>
                 <li>Elevate the standard of patient care through enhanced skills and knowledge.</li>
                 <li>Create a culture of excellence that permeates every aspect of healthcare delivery.</li>
               </ul>
                </div>

                <div className="py-[1vw] mobile:py-[5vw] fadeUp">
                <h2
                  className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
                >
             A Step Toward Improved Patient Care
                </h2>
                <p className="content-p py-[1vw]  mobile:py-[3vw]">At AMS, we recognize that empowered nurses lead to better patient outcomes. By investing in their growth, we are not only shaping the future of nursing but also contributing to a healthier, more compassionate world.</p>
                <p className="content-p py-[1vw]  mobile:py-[3vw]">Join us in celebrating the dedication and resilience of nurses who strive to make a difference every day. Together, we can nurture the future of healthcare and redefine patient care standards.</p>
                <p className="content-p py-[1vw]  mobile:py-[3vw]"> <span className='font-normal'>
                Advanced MedTech Academy—Empowering Professionals, Transforming Care.</span></p>
                </div>
                </div>
              </section>
    </Layout>
    </>
  )
}

export default nurturingNursingSkills