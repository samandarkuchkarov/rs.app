import React from 'react'
import M from 'materialize-css'
import './firstpage.css'

export const FirstPage = () => {
    M.AutoInit();
    
    return (<>
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
            <div className="secondPage-text">
                <h2>Comfortable and quick</h2>
                <p>We have two kind of users. They are mentors and students. Mentor can modify schedule, create task or delate task , check job of student and  put mark for this job.
                    Mentor can also organize video confirence and modify own data like username , location and other informations,</p>
                <p>Student can show own results in mainpage and score table ,show schedule of course and submit exact homework</p>
            </div>
            <div className="secondPage-img"></div>
        </div>
        <div>
            <div>Technical Features</div>
            <div>For building EduCenter platform we used React.js, Node.js, MangoDb, Express.js, Redux and other benifical tools. For deploying our website we used Heroku and Netlify </div>
        </div>
        </>
    )
}