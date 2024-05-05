import React from 'react'

const JobCard = () => {
  return (
    <div class='jobcard'>
      <div class='posted'>
        <p>⏳ Posted 10 days ago</p>
      </div>
      <div class='jobheader'>
        <div class='jobImage'>image</div>
        <div class='jobName'>
          <span class='comapanyName'>Fampay</span>
          <span class='jd'>Customer Reliability Engineer - Infra (Hyderabad)</span>
          <span class='jobLoc'>Bangalore</span>
        </div>
      </div>
      <div class='salary'>
        Estimated Salary: ₹18 - 22 LPA
      </div>
      <div class="about">
        <div class="aboutHeader">
          <span class="aboutHeader2">About Company : </span>
          <span>"This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment. his is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."</span>
          
        </div>
        <div class="fade-effect">
            <div class="fade-overlay">
              <button>Show more</button>
            </div>
          </div>
      </div>
      <div class="experience">
        <span class="expText">Minimum Experience</span>
        <span>5 yrs</span>
      </div>
      <div class="buttons">
        <button class='button1'> ⚡️ Easy Apply</button>
        <button class='button2'> Unlock referral asks</button>
      </div>
    </div>
  )
}

export default JobCard