console.log(document.getElementsByTagName('h1')[0].className='color-change');

let button = document.createElement('button');
button.innerHTML="I am alive!";
document.body.append(button);

// function addText(text){
//     dummy_text = document.createElement('h2');
//     dummy_text.innerHTML = text;
//     document.body.append(dummy_text);
// }
button.addEventListener('click', function(){
    dummy_text = document.createElement('h2');
    dummy_text.innerHTML =" text";
    document.body.append(dummy_text);
});
// user_info = prompt('what is your favorite tv show?');

function displayUserInfo(user_info){
    element = document.getElementById('sampleText');
    element.innerHTML = user_info;
};

// sampleText = document.getElementById('sampleText');

// sampleText.addEventListener('click',function(){
//     sampleText.setAttribute('class','animation');
// });
// letter = document.getElementById('letter-changer').innerHTML
// letter_split = letter.split("")
// letter_split[0], letter_split[7] = letter_split[7], letter_split[0]
// test = letter_split.join('');
// console.log(test)


function submitForm(){
    console.log(document.getElementsByName('first-name')[0].value);
    console.log(document.getElementsByName('last-name')[0].value);
};

async function getJSON(){
    lap = document.getElementsByName('lap')[0].value
    console.log(lap)
    await fetch(`https://ergast.com/api/f1/2019/${lap}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData =>{
        // .then(rawData => {console.log(rawData.MRData.total)
            
            let racers= rawData.MRData.total;
            //let main_data =
            
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
            
        })

        .catch(error => {
            if (error) {
                console.log('an error has occured while getting the data');
            }
        })
}