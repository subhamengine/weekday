import React, { useState } from "react";
import JobCard from "./JobCard";
import { useEffect } from "react";

const Jobs = ({ filteredObject }) => {

  const [data,setData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const savedUserResponse = await fetch(
          `https://api.weekday.technology/adhoc/getSampleJdJSON`,

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              limit: 100,
              offset: 0,
            }),
          }
        );

        const responseData = await savedUserResponse.json();


        if(responseData){
          console.log(responseData);
          setData(responseData.jdList)
        }
        

      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const items = data.filter((item)=>((filteredObject.role && filteredObject.role.find((e)=>{
    return e.label.toLowerCase() === item.jobRole.toLowerCase();
  })) || (filteredObject.experience && filteredObject.experience.find((e)=>{
    return e.label.toLowerCase() <= item.minExp;
  }))))


  return (
    <div className="jobs">
      {console.log(items)}
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

export default Jobs;
