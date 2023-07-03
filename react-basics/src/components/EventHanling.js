import React from 'react'

function EventHanling() {

    let date = new Date()
    let timeNow = date.getHours()


    let handleEvent = () => {
        if(timeNow > 0 && timeNow < 11){
            alert("Good Morning")
        }
        else if(timeNow > 11 && timeNow < 17){
            alert("Good Afternoon")
        }
        else{
            alert("Good Evening")
        }
        //alert(timeNow)
    }
  return (
    <div>
        <h3>Hey, from Event Hanling</h3>
        <button onClick={handleEvent}>See Greeting</button>
    </div>
  )
}

export default EventHanling