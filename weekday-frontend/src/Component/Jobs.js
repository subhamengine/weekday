
import React, { useMemo } from "react";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setData } from "../features/jobs/jobSlice";

const Jobs = () => {

  const data = useSelector(state => state.data)
  const filteredObject = useSelector(state => state.filteredObject);
  const dispatch = useDispatch('');



  const [openModal,setOpenModal]=useState(null);
 



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
          dispatch(setData(responseData.jdList));
        }
        

      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  //filtering the items based on the filter options

  const items = useMemo(() => {
    return data.filter(item => (
      (filteredObject.role && filteredObject.role.length ? filteredObject.role.find(e => e.label.toLowerCase() === item.jobRole.toLowerCase()) : true) &&
      (filteredObject.experience && filteredObject.experience.length ? filteredObject.experience.find(e => e.label.toLowerCase() <= item.minExp) : true) &&
      (filteredObject.remote && filteredObject.remote.length ? filteredObject.remote.find(e => e.label.toLowerCase() === item.location.toLowerCase()) : true) &&
      (filteredObject.techStack && filteredObject.techStack.length ? filteredObject.techStack.find(e => e.label.toLowerCase() === item.techStack) : true) &&
      (filteredObject.baseSalary ? filteredObject.baseSalary.value <= item.minJdSalary : true) &&
      (filteredObject.companyName && filteredObject.companyName.length ? filteredObject.companyName.toLowerCase() === item.companyName.toLowerCase() : true)
    ));
  }, [data, filteredObject]);


  return (
    <div className="jobs">
      
      {items.map((item) => (<JobCard key={item.jdUid} item = {item} setOpenModal={setOpenModal} />))}
      {
        openModal !== null && <div class='modal'>
          <div class="mainModal"  >
            <h3>Job Description</h3>
            <h5>About Company</h5>
            <p>{openModal.jobDetailsFromCompany}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Jobs;
