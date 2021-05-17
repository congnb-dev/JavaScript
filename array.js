var array = [1,3,6,8,2,4,5,7,10,87,95,81,65,45,12];
document.getElementById("xuat").innerHTML= array;

function sapxep() {
    array.sort(function (a, b) {
        return(b-a)        
    });

    document.getElementById("cuoi").innerHTML = array;

}

