import React from "react";
import { useState } from "react";
import Select from "react-select";

const Filter = ({filteredObject,setFilteredObject}) => {
  const options = [
    { value: "frontend", label: "frontend" },
    { value: "ios", label: "ios" },
    { value: "orange", label: "Orange" },
  ];
  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "100", label: "100" },
  ];
  const remoteOptions = [
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "In-Office", label: "In-Office" },
  ];
  const tectstackOptions = [
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Golang", label: "Golang" },
  ];

  const baseSalaryOptions = [
    { value: "0L", label: "0L" },
    { value: "10L", label: "10L" },
    { value: "20L", label: "20L" },
  ];


  
  
  // Handle change when an option is selected
  const handleSelectedRoleChange = (selectedOption) => {
    

    setFilteredObject({...filteredObject, role : selectedOption })

    
  };


  const handleExperienceChange = (selectedOption) => {

    setFilteredObject({...filteredObject, experience : selectedOption })

    
  };


  const handleRemoteChange = (selectedOption) => {

    setFilteredObject({...filteredObject, remote : selectedOption })
  };



  const handleTechStackChange = (selectedOption) => {

    setFilteredObject({...filteredObject, techStack : selectedOption })
  };

  const handleBaseSalaryChange = (selectedOption) => {

    setFilteredObject({...filteredObject, baseSalary : selectedOption })
  };

  const handleCompanyNameChange = (selectedOption) => {

    setFilteredObject({...filteredObject, companyName : selectedOption.target.value })
  };


  
  return (
    <div className="filterMain">
      {
        console.log(filteredObject)
      }


      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <p style={{height:"5px"}}>
          {
            filteredObject.role && filteredObject.role.length && <>Roles</>
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
