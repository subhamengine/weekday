import React from "react";
import Select from "react-select";
import { setFilteredObject } from "../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {


  const dispatch = useDispatch();
  const filteredObject = useSelector(state => state.filteredObject)


  // options for roles
  const options = [
    { value: "frontend", label: "frontend" },
    { value: "ios", label: "ios" },
    { value: "backend", label: "Backend" },
    { value: "Full stack", label: "Full stack" },
    { value: "Flutter", label: "Flutter" },
    { value: "React Native", label: "React Native" },
    { value: "Android", label: "Android" },
    { value: "Web3", label: "Web3" },
  ];

    // options for experience

  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
  ];

    // options for remote

  const remoteOptions = [
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "In-Office", label: "In-Office" },
  ];

    // options for techstack

  const tectstackOptions = [
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Golang", label: "Golang" },
  ];

    // options for base pay

  const baseSalaryOptions = [
    { value: "0", label: "0k" },
    { value: "10", label: "10k" },
    { value: "20", label: "20k" },
  ];


  
  
  // Handle change when an option is selected
  const handleSelectedRoleChange = (selectedOption) => {
    dispatch(setFilteredObject({...filteredObject, role : selectedOption }))
  };


  const handleExperienceChange = (selectedOption) => {
    dispatch(setFilteredObject({...filteredObject, experience : selectedOption }))
  };


  const handleRemoteChange = (selectedOption) => {

    dispatch(setFilteredObject({...filteredObject, remote : selectedOption }))
  };



  const handleTechStackChange = (selectedOption) => {

    dispatch(setFilteredObject({...filteredObject, techStack : selectedOption }))
  };

  const handleBaseSalaryChange = (selectedOption) => {
    

    dispatch(setFilteredObject({...filteredObject, baseSalary : selectedOption }))
  };

  const handleCompanyNameChange = (selectedOption) => {

    dispatch(setFilteredObject({...filteredObject, companyName : selectedOption.target.value }))
  };


  
  return (
    <div className="filterMain">
      


      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <p style={{height:"5px"}}>
          {
            (filteredObject.role ) && <span>Roles</span>
          }
        </p>

        <Select
          isMulti
          value={filteredObject.role}
          onChange={handleSelectedRoleChange}
          options={options}
          placeholder="Roles"

        />
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <p style={{height:"5px"}}>
          {
            filteredObject.experience && <>Experience</>
          }
        </p>
        <Select
          isMulti
          value={filteredObject.experience}
          onChange={handleExperienceChange}
          options={experienceOptions}
          placeholder="Experience"
        />
      </div>


      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <p style={{height:"5px"}}>
          {
            filteredObject.remote && <>Remote</>
          }
        </p>
        <Select
          isMulti
          value={filteredObject.remote}
          onChange={handleRemoteChange}
          options={remoteOptions}
          placeholder="Remote"
        />
      </div>


      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <p style={{height:"5px"}}>
          {
            filteredObject.techStack && <>Tech Stack</>
          }
        </p>
        <Select
          isMulti
          value={filteredObject.techStack}
          onChange={handleTechStackChange}
          options={tectstackOptions}
          placeholder="Tech Stack"
        />
      </div>



      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
        <p style={{height:"5px"}}>
          {
            filteredObject.baseSalary && <>Minimum Base Salary</>
          }
        </p>
        <Select
         
          value={filteredObject.baseSalary}
          onChange={handleBaseSalaryChange}
          options={baseSalaryOptions}
          placeholder="Minimum Base Salary"
        />
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
        <p style={{height:"5px"}}>
          {
            filteredObject.companyName && <> Company Name</>
          }
        </p>
        <input
         className="input"
          value={filteredObject.companyName}
          onChange={handleCompanyNameChange}
          
          placeholder="Search Company Name"
        />
      </div>
    </div>
  );
};

export default Filter;
