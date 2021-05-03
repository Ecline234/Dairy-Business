function totalDailyProduction(){
    var shadeA = parseInt(document.getElementById("litresA").value);
    var shadeB = parseInt(document.getElementById("litresB").value);
    var shadeC = parseInt(document.getElementById("litterC").value);
    var shadeD = parseInt(document.getElementById("litterD").value);

    if(!shadeA || !shadeB || !shadeC || !shadeD){
        alert("Please fill all the boxes");
        return;
    }
    
    totalDailyProduction.push({name:"Shade A",litres:shadeA},{name:"Shade B",litres:shadeB},{name:"Shade C",litres:shadeC}{name:"Shade D",litres:shadeD});
    return sum;
}

var leapYear = [
    {month:"January", days:31},
    {month:"February", days:29},
    {month:"March", days:31},
    {month:"April", days:30},
    {month:"May", days:31},
    {month:"June", days:30},
    {month:"July", days:31},
    {month:"August", days:31},
    {month:"September", days:30},
    {month:"October", days:31},
    {month:"November", days:30},
    {month:"December", days:31},
]