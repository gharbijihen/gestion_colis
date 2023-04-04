import { View, Text } from 'react-native'
import React, { useEffect , useState} from 'react'
const options = {
    method: 'GET',
    url: 'https://timetable-lookup.p.rapidapi.com/airports/',
    headers: {
      'X-RapidAPI-Key': 'b9bfffe9c2msh70c20f4c427568bp174238jsn60e4dbbbd958',
      'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
    }
  };
export default function Api() {
    const [ApiAirplan,setApi]= useState("");
    useEffect(()=>{
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[])
  return (
    
    <View>
      <Text>Api</Text>
    </View>
    )
}