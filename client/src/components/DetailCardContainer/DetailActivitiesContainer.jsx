import React from 'react'
import DetailCard from '../DetailCard/DetailCard'
import style from "../../components/DetailCardContainer/DetailActivitiesContainer.module.css"

function DetailActivitiesContainer({myCountry}) {
  return (
    <div className={style.activitiesContainer}>
      {myCountry.activities?.map((act,index)=>{
        return (
          <DetailCard 
            key={index} 
            name={act.name} 
            difficulty={act.difficulty} 
            duration={act.duration} 
            season={act.season}
          />
        );
      })}
    </div>
  );
}

export default DetailActivitiesContainer