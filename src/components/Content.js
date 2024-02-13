import Card from './Card';
import { useEffect, useState } from "react";

function Content(props){
  const [arr,setArr]=useState([]);

  useEffect(()=>{
    if(props.search===""){
      setArr([]);
    }
    else if(props.search){
      let url=`http://universities.hipolabs.com/search?country=${props.search}`;
      let promise=fetch(url);
      promise.then((response)=>{
        return response.json();
      }).then((val)=>{
        console.log(val)
        setArr(val);
      }).catch((error)=>{
        console.log("Error Fetching Data ",error);
        });
    }
   },[props.search]);

  return(
    <div className="Content">
      <div className="intro">
        <h1 id='intro1'>University List</h1>
        <p id='intro2'>This website compiles an extensive directory featuring universities across a specific country, with their state or province, and includes their respective names and website links for easy access and exploration.</p>
        <div id='intro3'>
        <p>Total number of results is {arr.length}</p>
        </div>
      </div>
      <div className="info">
        {
         arr.map((t,index)=>{
          return <Card {...t} key={index} state={t['state-province']} web={t.web_pages[0]} ></Card>
         })
        }
      </div>
    </div>
  );
}
export default Content;