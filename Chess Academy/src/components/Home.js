import React from 'react';
import Chessbg from '../assets/Chessbg.mp4';
import '../components/Home.css';

function Home() {
  return (
    <div className="home">
      <div className='top-container'>
        <video src={Chessbg} autoPlay  muted />
        <div className='content'>
          <h1>Elite Chess Academy</h1>
          <p>A game of intellect and strategy</p>
        </div>
      </div>

      <div className='middle-container'>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to the Chess Academy, where we are dedicated to nurturing 
            the next generation of chess champions. Our academy is founded by 
            passionate chess enthusiasts with years of experience in both playing 
            and teaching the game. We believe in creating a supportive and 
            challenging environment that helps students of all ages enhance their 
            skills and develop a love for chess.
          </p>
          <p>
            Our team of certified trainers uses innovative techniques to ensure 
            that every student, from beginners to advanced players, gets the 
            guidance and support they need to succeed. Join us to improve your 
            strategic thinking, problem-solving skills, and overall enjoyment of 
            the game.
          </p>
        </section>
        <section className="services">
          <h2>Services Provided</h2>
          <ul>
            <li>
              <h3>Individual Coaching</h3>
              <p>
                Tailored one-on-one sessions with our expert coaches to address 
                specific areas of improvement and help you reach your chess goals.
              </p>
            </li>
            <li>
              <h3>Group Classes</h3>
              <p>
                Engage in collaborative learning with peers in our group classes 
                designed for various skill levels. Perfect for social learning and 
                competition.
              </p>
            </li>
            <li>
              <h3>Online Courses</h3>
              <p>
                Access our comprehensive online chess courses and tutorials to 
                learn at your own pace from anywhere in the world.
              </p>
            </li>
            <li>
              <h3>Chess Tournaments</h3>
              <p>
                Participate in our regularly organized chess tournaments to test 
                your skills and compete against other players in a friendly 
                environment.
              </p>
            </li>
            <li>
              <h3>Chess Camps</h3>
              <p>
                Join our immersive chess camps during school breaks for an 
                intensive learning experience with fun activities and expert 
                guidance.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <div className='bottom-container'>
        <h2>Short Course Information</h2>
        <div className="course-info">
          <div className="course">
            <h3>Beginner Course</h3>
            <p>An introductory course for beginners to learn the basics of chess.</p>
          </div>
          <div className="course">
            <h3>Intermediate Course</h3>
            <p>An intermediate course to build on basic skills and learn advanced strategies.</p>
          </div>
          <div className="course">
            <h3>Advanced Course</h3>
            <p>An advanced course for experienced players to master high-level tactics and strategies.</p>
          </div>
        </div><br></br>
        <a href="/course" className="course-button">View All Courses</a>
      </div>
    </div>
  )
}

export default Home;
