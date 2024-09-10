const PI = 3.1415;
const radius =5;
//radius of garden
const area= PI*(radius*radius);

//plants double every week

/*
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

*/ 


//25 square meters


// function gardenGrowth(radius,weeks,plantAmount){
// try {
  
//   const PI = 3.1415;
//   // radius = radius
//   // console.log(radius)
//   const area= Math.round(PI*(radius*radius));
//   // console.log(area)
//   const minPlantSpace = 0.8;
//   let numOfPlants =((plantAmount+plantAmount)*weeks);
//   let maxPlantArea = minPlantSpace*numOfPlants;
//   //console.log(maxPlantArea);
//   let percentageOfAreaUsed = Math.floor((maxPlantArea/area)*100);
//   //console.log(percentageOfAreaUsed);
//   if(plantAmount >=100){
//     weeks =10;
   
   
//     console.log(`sad`)
    
//   }else{

//     if(percentageOfAreaUsed <50){
//       console.log(`The amount of garden space planted is ${percentageOfAreaUsed}% after week-${weeks}, you can plant more`)
//       console.log(`Status:Planted`)
//     }else if(percentageOfAreaUsed >=50 && percentageOfAreaUsed <=80){
//        console.log(`The amount of garden space planted is ${percentageOfAreaUsed}% after week-${weeks}`)
//        console.log(`Status:Monitored`)
    
//     }else if(percentageOfAreaUsed >80 && percentageOfAreaUsed <100){
//       console.log(`The amount of garden space planted is ${percentageOfAreaUsed}% after week-${weeks}, IMMEDIATE action must be taken`)
//       console.log(`Status:Pruned`)
//     }else if(percentageOfAreaUsed >100){
//       console.log('Instructions unclear, Aliens Invaded')
//     }

//   }


// } catch (error) {
  
//   console.log(error)

// }
// }


// gardenGrowth(5,1,20)
// gardenGrowth(5,2,20)
// gardenGrowth(5,3,20)




function growth(weeks,plants){

  try {
    
    const PI = 3.1415;
    //const radius =5;
    const area= Math.floor(PI*(5*5));
    const plantMin =0.8;
    let plantArea = plantMin*plants;
   

    let num=0;
    let plantGrowth =0;
    while(num <weeks){
      plantGrowth = plantGrowth +plants;
      num++;
    }
    //console.log(plantGrowth)
    plantArea= plantGrowth*plantMin
    // console.log(plantArea,area)
    let percentageUsed = Math.floor((plantArea/area)*100);
    if(plants ===100 && weeks ===10){
     
      let num=0;
      let plantGrowth =0;
      while(num <weeks){
        plantGrowth = plantGrowth +plants;
        num++;
      }
      plantArea= plantGrowth*plantMin
      console.log(`You would need a minimum of ${plantArea} square feet after ten weeks, the new radius would be ${Math.round(Math.sqrt((plantArea/3.1515)))}m`)
    }else if(plants===100){
      throw "Err, god help us all"
    }else{
      if(plantGrowth <=50){
        console.log(`week-${weeks},the plant growth is at ${percentageUsed}% of gardens capacity Status:Planted`)
      }else if(plantGrowth >=50 && plantGrowth<=80){
        console.log(`week-${weeks}, the plant growth is at ${percentageUsed}% of gardens capacity, Status:Monitored`)
      }else if(plantGrowth >=80){
        console.log(`week-${weeks}, the plant growth is at ${percentageUsed}% of gardens capacity, Status:Pruned`)
      }else if(plantGrowth>100){
         console.log('Plant growth > area')
      }
    }
  } catch (error) {
      console.error(error)
  }

}
//part one
growth(1,20)
growth(2,20)
growth(3,20)

//part two
growth(10,100)
// growth(10,100)


//part 3
growth(1,100)