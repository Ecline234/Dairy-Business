function totalDailyProduction(){
    var shadeA = parseInt(document.getElementById("litresA").value);
    var shadeB = parseInt(document.getElementById("litresB").value);
    var shadeC = parseInt(document.getElementById("litterC").value);
    var shadeD = parseInt(document.getElementById("litterD").value);

    if(!shadeA || !shadeB || !shadeC || !shadeD){
        alert("Please fill all the boxes");
        return;
    }    
    
}