//function converts standard time to military time and calculates time difference
export function handleHoursMin(starttime, endtime, justStart=false, justEnd=false) {
  let start = starttime.split(":");
  let end = endtime.split(":");

  if (
    start[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "pm" && start[0] < 12
  ) {
    start[0] = Number(start[0]) + 12;
    starttime = start.join(":");
    
  }

  if (
    end[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "pm" && end[0] < 12
  ) {
    end[0] = Number(end[0]) + 12;
    endtime = end.join(":");
    console.log(endtime, end[0]);
  }

  if (
    start[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "am" &&
    Number(start[0]) === 12
  ) {
    start[0] = Number(start[0]) - 12;
    starttime = start.join(":");
    console.log(starttime);
  }

  if (
    end[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "am" &&
    Number(end[0]) === 12
  ) {
    end[0] = Number(end[0]) - 12;
    endtime = end.join(":");
    console.log(endtime);
  }

  starttime = starttime.slice(starttime, -2).replace(" ", "");
  endtime = endtime.slice(endtime, -2).replace(" ", "");

  if(justStart){
      console.log(starttime)
    return starttime;
}

  let splitStart = starttime.split(":");
  let splitEnd = endtime.split(":");
  let minInHours = (splitEnd[0] - splitStart[0]) * 60;
  let startMin = isNaN(splitStart[1]) ? splitStart[1][1] : splitStart[1];
  let endMin = isNaN(splitEnd[1]) ? splitEnd[1][1] : splitEnd[1];
  let totalMin =
    (Number(minInHours) + (Number(endMin) - Number(startMin))) / 60;
  return totalMin;
}

//function to parse query parameters
//Adds all values to an array for consistent access
export function handleQueryString(query){
  query = query.replace(/%20/g, " ")
    let queryObj = {}
   query = query.split("?").map(q=>{
     let arr = q.split("=")
      if(queryObj[arr[0]]){
        queryObj[arr[0]] = queryObj[arr[0]].concat(arr[1])
      }
      else{
        queryObj[arr[0]] = [].concat(arr[1])
      }
      
   });
   

    return queryObj;
  };


  