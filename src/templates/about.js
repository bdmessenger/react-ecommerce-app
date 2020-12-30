import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'

const About = () => (
    <>
        <Breadcrumbs>
            <Link to="/">Home</Link>
            About
        </Breadcrumbs>
        <section id="about" className="py-16">
            <div className="tw-container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                <img
                    style={{height: '450px'}}
                    alt="dining room"
                    className="object-cover rounded w-full bg-gray-100"
                    src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
                />
                <article>
                    <div>
                        <h2 className="font-bold">Our Story</h2>
                        <div className="w-24 h-1 mt-3 bg-blue-600"/>
                    </div>
                    <p className="mt-5 text-sm md:text-base lg:text-lg leading-loose">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Fugiat accusantium sapiente tempora sed dolore esse deserunt 
                        eaque excepturi, delectus error accusamus vel eligendi, omnis 
                        beatae. Quisquam, dicta. Eos quod quisquam esse recusandae 
                        vitae neque dolore, obcaecati incidunt sequi blanditiis est 
                        exercitationem molestiae delectus saepe odio eligendi modi 
                        porro eaque in libero minus unde sapiente consectetur 
                        architecto. Ullam rerum, nemo iste ex, eaque perspiciatis 
                        nisi, eum totam velit saepe sed quos similique amet. Ex, 
                        voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </article>
            </div>
        </section>
    </>
)

export default About