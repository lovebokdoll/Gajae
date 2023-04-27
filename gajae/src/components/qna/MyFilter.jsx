import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


const MyFilter = ({types, type, id, title, handleType}) => {
  console.log(title);//qna_type
  console.log(id);
  const navigate = useNavigate();
  const location = useLocation()

 
  const setPath = (oldItem, newItem, key) => {
    console.log(location.pathname)
    console.log(oldItem)
    console.log(newItem)
    console.log(key)
    let path='?qna_type=' + newItem;
    return path;
  }
  
  return (
    <DropdownButton variant="" title={title} style={{border: '1px solid lightgray', marginBottom : '20px',borderRadius:'5px', height:'38px', width : '65px'}}>
      { 
        types.map((element, index)=>(
          <Dropdown.Item as="button" key={index} onClick={()=>{
            if(type){ 
              navigate(setPath(title,element,id)); 
            }
            handleType(element); 
          }}>
            {element}
          </Dropdown.Item>
        )) 
      }
    </DropdownButton>
  );
};

export default MyFilter;