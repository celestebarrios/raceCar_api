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
                display_constructors.innerHTML = constructor_name;
                document.body.append(display_constructors)
            }

        .catch(error => {
            if (error) {
                console.log('an error has occured while getting the data');
            }
        })
}