import React from "react";
import JobCard from "./JobCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setData } from "../features/jobs/jobSlice";

const Jobs = () => {

  const data = useSelector(state => state.data)
  const filteredObject = useSelector(state => state.filteredObject);
  const dispatch = useDispatch('');



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
          dispatch(setData(responseData.jdList));
        }
        

      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const items = data.filter((item)=>((filteredObject.role && filteredObject.role.length ? filteredObject.role.find((e)=>{
    return e.label.toLowerCase() === item.jobRole.toLowerCase();
  }) : true) && (filteredObject.experience && filteredObject.experience.length ? filteredObject.experience.find((e)=>{
    return e.label.toLowerCase() <= item.minExp;
  }):true) && (filteredObject.remote && filteredObject.remote.length ? filteredObject.remote.find((e)=>{
    return e.label.toLowerCase() === item.location.toLowerCase();
  }):true) && (filteredObject.techStack && filteredObject.techStack.length ? filteredObject.techStack.find((e)=>{
    return e.label.toLowerCase() === item.techStack;
  }):true) && (filteredObject.baseSalary  ? filteredObject.baseSalary.value <= item.minJdSalary:true) && (filteredObject.companyName && filteredObject.companyName.length ? filteredObject.companyName.toLowerCase() === item.companyName.toLowerCase():true)))


  return (
    <div className="jobs">
      
      {items.map((item) => (<JobCard key={item.jdUid} item = {item}/>))}
    </div>
  );
};

export default Jobs;
