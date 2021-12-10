const radio = {
    stations: [
        {
            name: 'jamn945',
            songs: [
                {
                    artist: 'Dominic Fike',
                    title: 'King of Everything'
                },
                {
                    artist: 'Tyler the Creator',
                    title: 'Answer'
                },
                {
                    artist: 'Slick Rick',
                    title: 'Sittin In My Car'
                },
                {
                    artist: 'Grand Puba',
                    title: 'I like it'
                },

            ],
        },
        {


name: 'power106',
songs: [
    {
        artist: 'King Krule',
        title: 'Border Line'
    },
    {
        artist: 'Brent Faiyaz',
        title: 'Gravity'
    },
    {
        artist: 'JAY-Z',
        title: 'Excuse Me Miss'
    },
    {
        artist: 'Steve Lacy',
        title: 'Dark Red'

    },
    ],
    },
],
    changeStation() {
    let stationIndex = Math.floor(Math.random() * 2)
    return (this.stations[stationIndex]);
    } 
}
// console.log(radio.changeStation())
let newStation = radio.changeStation()
let nextInd = Math.floor(Math.random()*(newStation.songs.length));
console.log(`Now playing: ${newStation.songs[nextInd].title} by ${newStation.songs[nextInd].artist}`);