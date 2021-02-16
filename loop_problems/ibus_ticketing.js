var stations = [{ name: "MHOW",         dist: 0,    prev: "",          next: "VIKRANT",      time:0 },
                { name: "VIKRANT",      dist: 2,    prev: "MHOW",      next: "MITM",         time:3 },
                { name: "MITM",         dist: 4,    prev: "VIKRANT",   next: "RAU",          time:5 },
                { name: "RAU",          dist: 6,    prev: "MITM",      next: "SILICON",      time:8 },
                { name: "SILICON",      dist: 9,    prev: "RAU",       next: "IPS",          time:10 },
                { name: "IPS",          dist: 14,   prev: "SILICON",   next: "RAJIVGANDHI",  time:15 },
                { name: "RAJIVGANDHI",  dist: 16,   prev: "IPS",       next: "VISHNUPURI",   time:25 },
                { name: "VISHNUPURI",   dist: 16.5, prev: "RAJIVGANDHI",next: "BHANWARKUA",  time:28 },
                { name: "BHANWARKUA",   dist: 18,   prev: "VISHNUPURI", next: "HOLKAR",      time:30 },
                { name: "HOLKAR",       dist: 21,   prev: "BHANWARKUA", next:"INDIRAPRATIMA",time:43 },
                { name: "INDIRAPRATIMA",dist: 23,   prev: "HOLKAR",     next: "GEETABHAWAN", time:46 },
                { name: "GEETABHAWAN",  dist: 25,   prev: "INDIRAPRATIMA",next: "AICTSL",    time:48 },
                { name: "AICTSL",       dist: 29,   prev: "GEETABHAWAN", next: "PALASIA",    time:50 },
                { name: "PALASIA",      dist: 31,   prev: "AICTSL",    next: "INDUSTRYHOUSE",time:52 },
                { name: "INDUSTRYHOUSE",dist: 33,   prev: "PALASIA",     next: "LIG",        time:65 },
                { name: "LIG",          dist: 35,   prev: "INDUSTRYHOUSE",next: "MR9",       time:68 },
                { name: "MR9",          dist: 36,   prev: "LIG",         next: "RASOMA",     time:70 },
                { name: "RASOMA",       dist: 38,   prev: "MR9",         next: "MR10",       time:82 },
                { name: "MR10",         dist: 42,   prev: "RASOMA",      next: "DEWASNAKA",  time:95 },
                { name: "DEWASNAKA",    dist: 45,   prev: "MR10",        next: "",           time:99 },]


// Find th time duration required to travel between src and destination
function getTimeDuration(src,dest){
    var travel_time=0
    for(var i=0;i<stations.length;i++){
        if(stations[i]['name']==src){
            var src_time = stations[i]['time']  
        }
        if(stations[i]['name']==dest){
            var des_time = stations[i]['time']
        }
    }
    var travel_time=des_time-src_time
    return travel_time
}

// Calculate Fare according to Time Duration
// getTimeDuration Takes to reach the destination
// if(time<=20min) fare=1rs/min
// if(time<=30min) fare=3rs/min
// if(time<=50min) fare=5rs/min
// if(time<=60min) fare=7rs/min
// else fare=350rs/60min

function time_fare(src,dest){
    var extraTimeFare=0
    var travel_time=getTimeDuration(src,dest)

    if(travel_time<=20){
        extraTimeFare=travel_time*1
    }
    else if(travel_time<=40){
        extraTimeFare=travel_time*3
    }
    else if(travel_time<=60){
        extraTimeFare=travel_time*5
    }
    else if(travel_time<=60){
        extraTimeFare=travel_time*7
    }
    else{
        var fixTime=0
        fixTime=travel_time/60
        extraTimeFare=fixTime*350
    }
    return extraTimeFare
}

console.log(time_fare(src,dest))




// Is Stations are Consecutive or not
function isConsecutive(src, dest) {
    var consecutive = false
    for (var i = 0; i < stations.length; i++) {
        if (stations[i]['name'] == src) {
            if ((stations[i]['prev'] == dest) || (stations[i]['next'] == dest)) {
                consecutive = true
            }
        }
    }
    return consecutive
}

// get Distance Between both src and Destination
function getDistance(src, dest) {
    var distance = 0
    var sourceDistance = 0
    var destinationDistance = 0

    //Extracting Distance values from the givn data and asssign
    for (var i = 0; i < stations.length; i++) {
        if (stations[i]['name'] == src) {
            sourceDistance = stations[i]['dist']
        }
        if (stations[i]['name'] == dest) {
            destinationDistance = stations[i]['dist']
        }
    }

    //Calculate Distance between source and destination
    distance = destinationDistance - sourceDistance
    distance = distance < 0 ? -1 * distance : distance
    return distance
}


//Calculate fare
//if dist > 3km , rent=5rs
//if dist > 6km , rent=5+5rs
//else  add_distance=distance-6
//      fare=add_distance*1.5 +10

function getFare(src, dest) {
    var fare = 0
    var distance = getDistance(src, dest)
    if (isConsecutive(src, dest)) {
        fare = 5
    }
    if (distance <= 3) {
        fare = 5
    }
    if (distance <= 6) {
        fare = 5 + 5
    }
    else {
        var add_distance = distance - 6
        fare = (add_distance * 1.5) + 10
    }
    return fare
}

// Total=Fare for Ditance+Fare for time Duration
function getTotal(src,dest){
    
    var total=0
    total=getFare(src,dest)+time_fare(src,dest)
    return total
}

var src = "BHANWARKUA"
var dest = "DEWASNAKA"


console.log("Is the stations are consecutive:", isConsecutive(src, dest))
console.log("Distance Between Both Station: ", getDistance(src, dest), "Km")
console.log("Total fare from", src, "to", dest, ":", getFare(src, dest), "Rs")
console.log("Travel time from", src, "to", dest, ":", getTimeDuration(src, dest), "min")
console.log("ExtraTimeFare from", src, "to", dest, ":", time_fare(src, dest), "Rs")
console.log("TotalFare (distance+time) from", src, "to", dest, ":", getTotal(src, dest), "Rs")



// var timing = [
//     { time: 0 ,time_duration: 0},
//     { time: 2 ,time_duration: 2},
//     { time: 5 ,time_duration: 3},
//     { time: 10 ,time_duration: 5},
//     { time: 15 ,time_duration: 5},
//     { time: 18 ,time_duration: 3},
//     { time: 25 ,time_duration: 7},
//     { time: 30 ,time_duration: 5},
//     { time: 35 ,time_duration: 5},
//     { time: 40 ,time_duration: 5},
//     { time: 42 ,time_duration: 2},
//     { time: 45 ,time_duration: 3},
//     { time: 48 ,time_duration: 3},
//     { time: 50 ,time_duration: 2},
//     { time: 55 ,time_duration: 5},
//     { time: 58 ,time_duration: 3},
//     { time: 60 ,time_duration: 2},
//     { time: 62 ,time_duration: 2},
//     { time: 67 ,time_duration: 5},
//     { time: 68 ,time_duration: 1},
//     { time: 80 ,time_duration: 12},
// ]