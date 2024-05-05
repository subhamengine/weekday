import React, { useState } from 'react'

const JobCard = ({item,setOpenModal}) => {

  return (
    
    <div class='jobcard'>
      
      <div class='posted'>
        <p>⏳ Posted 10 days ago</p>
      </div>
      <div class='jobheader'>
        <div class='jobImage'>
          <img src={item.logoUrl} style={{width:"2.5rem"}} alt="" />
        </div>
        <div class='jobName'>
          <span class='comapanyName'>{item.companyName}</span>
          <span class='jd'>{item.jobRole}</span>
          <span class='jobLoc'>{item.location}</span>
        </div>
      </div>
      <div class='salary'>
        Estimated Salary: {item.salaryCurrencyCode + " "}{item.minJdSalary ? item.minJdSalary : 0} - {item.maxJdSalary ? item.maxJdSalary : 0}k PA
      </div>
      <div class="about">
        <div class="aboutHeader">
          <span class="aboutHeader2">About Company : </span>
          <span>{item.jobDetailsFromCompany}</span>
          
        </div>
        <div class="fade-effect">
            <div class="fade-overlay">
              <button onClick={()=>setOpenModal(item)} onBlur={()=>setOpenModal(null)}>Show more</button>
            </div>
          </div>
      </div>
      <div class="experience">
        <span class="expText">Minimum Experience</span>
        <span>{item.maxExp ? item.maxExp : 0} yrs</span>
      </div>
      <div class="buttons">
        <button class='button1'> ⚡️ Easy Apply</button>
        <button class='button2'> Unlock referral asks</button>
      </div>
      
    </div>
  )
}

export default JobCard