import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <div >
                <img src="./images/bodyImage.png" alt="" className='bodyImage'/>
                <h3 className='title'>About Us</h3>
                <div className='text'>
                    <center className='l1'>We are an awesome team trying to make a change in 
                    the field of online fruits and vegetables business </center>
                    <p></p>
                    <center className='l2'>We are PhalSabji Sanjaal. We deliver fresh vegetables and fruits.
                        You can buy our products within a few minutes.
                        Browse a product, add to cart, fill your address, and proceed with your order.
                        We will deliver it within 2 hours. We aim to change the way of the traditional way of shopping.
                        You don't need to waste your time going to a local market, bargain with shopkeepers, and bring your bag.
                        We aim to shorten the time between the farm and your table. We deliver the local food, which is better, fresher and tastier.
                        Also, we aim to cut off the middleman cost, which makes the vegetable price higher.
                        You are a direct customer, and we are a producer means you will get mediators free pricing.
                    </center>

                </div>
            </div>
            <div className='ourMission'>
                <h3 className='title'>Our Mission</h3>
                <center className='body'>
                    To source a range of quality fruits from across the Nepal and deliver them fresh to customers across all.
                    To be the most trusted and preferred Nepalese fruits trading business. By enabling their fruits reach from
                    their farms to different regions. By ensuring they receive fruits fresh everyday, everytime.
                </center>
            </div>
        </>
    )
}

export default About
