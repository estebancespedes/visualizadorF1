const url_API = "http://ergast.com/api/f1/";
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status === 200){
        const datos=JSON.parse(this.response);
        console.log(datos)
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET',url_API+'driverStandings/1.json');
xhr.send();