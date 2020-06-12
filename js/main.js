async function getJSON(){
    season = document.getElementsByName('season').value;
    round = document.getElementsByName('round').value;
    console.log(season)
    console.log(round)
//from class
    await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData =>{
            //top 7 drivers
            for(let i = 0; i<7; i++){
                let position =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
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