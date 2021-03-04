import React from 'react'
import M from 'materialize-css'
import './firstpage.css'

export const FirstPage = () => {
    M.AutoInit();
    
    return (
        <div>
        <div className="firstPage">
              <div className='container1-img' style={{ backgroundImage: `url("/book.jpeg")` }}></div>
            <div className="container1">
                <div className='container1-article'>
                    <h2 className='container1-title'>Online platform for online education</h2>
                    <h4 className='container1-text'>When educational center has more than hundred students , managing lesssons, schedules, and organizing meetups get more harder
                        Our educational platform can solve this kind of problems. EduCenter app gives users opportunities to develop management of education centers
                    </h4>
                </div>
              
            </div>
        </div>
        <div className="secondPage">
            <h2 className="secondPage-title container1-title">Comfortable and quick</h2>
            <div className="secondPage-container">
                <div className="secondPage-container-item1"></div>
                <div className="secondPage-container-item2">
                    <p>We have two kind of users. They are mentors and students. Mentor can modify schedule, create task or delate task, check job of student and  put mark for this job. Mentor can also organize video confirence and modify own data like username, location and other informations,</p>
                    <p>Student can show own results in mainpage and score table, show schedule of course and submit exact homework</p>
                </div>
                <div className="secondPage-container-item3" style={{ backgroundImage: `url("/min.jpg")` }}></div>
            </div>
        </div>
        <div className="featuresPage">
            <h2>Technical Features</h2>
            <div className="featuresPage-container">
                <p>For building EduCenter platform we used React.js, Node.js, MangoDb, Express.js, Redux and other benifical tools.</p>
                <div className="logos">
                    <div className='logo logo-react' style={{ backgroundImage: `url("react.svg")` }} />
                    <div className='logo logo-node' style={{ backgroundImage: `url("node.svg")` }} />
                    <div className='logo logo-mongo' style={{ backgroundImage: `url("mongo.svg")` }} />
                    <div className='logo logo-express' style={{ backgroundImage: `url("express.svg")` }} />
                </div>
            </div>
            <div className="featuresPage-container">
            <p>For deploying our website we used Heroku and Netlify.</p>
                <div className="logos2">
                    <div className='logo logo-heroku' style={{ backgroundImage: `url("heroku-1.svg")` }} />
                    <div className='logo logo-netlify' style={{ backgroundImage: `url("netlify-ar21.svg")` }} /> 
                </div>
            </div>
        </div>
        </div>
    )
}