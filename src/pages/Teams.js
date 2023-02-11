
import react from 'react'
import { json } from 'react-router-dom';

export default function Teams () {
    const localStorageMap = () => {
        let localStorageArray = [];
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let value = JSON.parse(localStorage.getItem(key));
          localStorageArray.push([key, localStorage.getItem(key)]);
        }
        
        return localStorageArray.map(([key, value]) => (
            <div className='member' key={key}>
              <p><h4>Name</h4></p>
            <p>{JSON.parse(value).last_name + ', ' + JSON.parse(value).first_name}</p>
            <h4><p>Role</p></h4>
            <p>{JSON.parse(value).role} </p>
            <p><h4>Duties</h4></p>
            <p>{JSON.parse(value).duties} </p>
            {value.additional_thoughts === '' ? ('') : (<h4><p>Additional Thoughts</p></h4>)}
            <p>{JSON.parse(value).additional_thoughts}</p>
            </div>
        ));
      };
    

    return(
        <div id='teams'>
            {localStorage.length ? localStorageMap() : <h3>You Have No Teams</h3>}
        </div>
    )
}