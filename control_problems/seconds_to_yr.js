// >>>		Seconds to Years
var seconds = 3110400001000
console.log("Total Seconds",seconds)
var yearInSec = (12 * 30) * 24 * 60 * 60   //in seconds 31104000
var monthInSec = 30 * 24 * 60 * 60         //in seconds  2592000
var daysInSec = 24 * 60 * 60               //in seconds 86400
var hoursInSec = 60 * 60                  //in Seconds   3600
var minInSec = 60 


    var years = (seconds - (seconds % yearInSec)) / yearInSec
    var seconds = seconds % yearInSec
    console.log("Years", years)
    console.log("Sec Left", seconds)


    var months = (seconds - (seconds % monthInSec)) / monthInSec
    var seconds = seconds % monthInSec
    console.log("Months", months)
    console.log("Sec Left", seconds)

    var days = (seconds - (seconds % daysInSec)) / daysInSec
    var seconds = seconds % daysInSec
    console.log("Days", days)
    console.log("Sec Left", seconds)


    var hours = (seconds - (seconds % hoursInSec)) / hoursInSec
    var seconds = seconds % hoursInSec
    console.log("Hours", hours)
    console.log("Sec Left", seconds)

   var min = (seconds - (seconds % minInSec)) / minInSec
    var seconds = seconds % minInSec
    console.log("Minutes", min)
    console.log("Sec Left", seconds)


console.log(years,"Years",months,"Months",days,"Days",min,"Minutes")
