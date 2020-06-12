async function getJSON(){
    season = document.getElementsByName('season').value;
    round = document.getElementsByName('round').value;
    console.log(season)
    console.log(round)
//from class//
    await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData =>{
            //top 7 drivers looping through DriverStandings
            for(let i = 0; i<7; i++){
                let Position =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
                document.getElementById(`Position${i.toString()}`).innerHTML = Position;
            }
            for(let i = 0; i<7; i++){
                let last_name =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].familyName;

                document.getElementById(`last_name${i.toString()}`).innerHTML = last_name;
            }
            for(let i = 0; i<7; i++){
                let Nationality =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
                document.getElementById(`Nationality${i.toString()}`).innerHTML = Nationality;
            }
            for(let i = 0; i<7; i++){
                let Sponsor =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
                document.getElementById(`Sponsor${i.toString()}`).innerHTML = Sponsor;
            }
            for(let i = 0; i<7; i++){
                let Points =  rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
                document.getElementById(`Points${i.toString()}`).innerHTML = Points;

            }
            
        }) 
        .catch(error => {
            if (error) {
                console.log('an error has occured while getting the data');
            }
        })
}

