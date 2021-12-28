let  MyHttp=new XMLHttpRequest();
let test=document.getElementById("test");
let result=``;
let city=prompt("pls Enter the city");
MyHttp.onreadystatechange=function(){
if (city==null || city==""){
    alert("Please write the city name");
    location.reload(true);
}else{
    
        if(MyHttp.readyState==4 && MyHttp.status==200){
            let data =JSON.parse(MyHttp.responseText);
        
            
            
             result+=`
             <div class="child">
             <h2>name of city :${data.location.name} <img src="${data.current.condition.icon}"></h2>
             <hr>
             <h2>country: ${data.location.country}</h2>
             <h2>temp_c: ${data.current.temp_c}</h2>
             <h2>temp_f: ${data.current.temp_f}</h2>
             <h2>last_updated: ${data.current.last_updated}</h2>
            </div>
             `;
            
            
        }
        test.innerHTML=result;

        if(MyHttp.status == 400){
            alert("wrong name");
            location.reload(true);
        }
    
    }

}


MyHttp.open("GET",`http://api.weatherapi.com/v1/current.json?key=d34dd4172e684cb39ef202816212612 &q=${city}&aqi=no`);
MyHttp.send();



