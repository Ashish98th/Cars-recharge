import Cars from './cars.json';

import './Cars.css';

function App() {
  return (
    <div>
   
   <div className='container'>

   {
      Cars.map(car=>{
        return(
         <div key={car.id} >
          
          <p>{car.bodyType}</p> <br/>
          <h2>{car.modelName}</h2> <p>{car.modelType}</p>
        
        <img src={car.imageUrl} alt="loading..."/>

        <br/>


         </div>
        )
      })
    }


   </div>
  
    </div>
  );
}

export default App;