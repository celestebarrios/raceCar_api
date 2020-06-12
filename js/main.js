async function getJSON(){
    lap = document.getElementsByName('lap').value
    console.log(lap)
    await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData =>{
   
            
            let year= rawData.MRData.year;
           
        
            
            for(let i = 0; i<3; i++){
                let constructor_name =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
                display_constructors = document.createElement('h1')
                display_constructors.innerHTML = constructor_name;
                document.body.append(display_constructors)
            }
            
            display_racers = document.createElement('h3');

            if (!racers){
                display_racers.innerHTML = "Loading..."
                document.body.append(display_racers)
            } else{
                display_racers.innerHTML = racers;
                document.body.append(display_racers);
            }
            console.log(year)
        })

        .catch(error => {
            if (error) {
                console.log('an error has occured while getting the data');
            }
        })
}