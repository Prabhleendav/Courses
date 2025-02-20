import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {filterData , apiUrl} from './data';
import { useEffect } from "react";
import {toast} from "react-toastify";

const App = () => {
  const[courses , setCourses] = useState("");
  const[loading , setLoading] = useState(false);
  const [category , setCategory] = useState(filterData[0].title);
  useEffect( () => {
      async function fetchData() {
        setLoading(true);
        try{
          const resp = await fetch(apiUrl);
          const output =  await resp.json();
          console.log(output);
          setCourses(output.data);
        }
        catch(err){
          toast.err("Something went wrong");
        }
        setLoading(false);
      }

    fetchData();
  } , []);
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar/>
      <Filter
        filterData = {filterData}
        category = {category}
        setCategory = {setCategory}
      />

      {/* <Cards courses={courses}/> */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses}  
            category = {category}
          />)
        }
      </div>
    </div>
  );
};

export default App;