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
                        Our educational platform can solve this kind of problems. RS app gives users opportunities to develop management of education centers
                    </h4>
                </div>
              
            </div>
        </div>
        <div className="secondPage">
            
        </div>
        </>
    )
}