//below we hide all the jobs opennings  description by default//

$('#job1').hide();
$('#job2').hide();
$('#job3').hide();
$('#job4').hide();


function showJobOpennings(id){
    $("#"+ id).toggle('slow');

}


// get your IP
$.getJSON('http://www.geoplugin.net/json.gp', function(data) {
console.log(JSON.stringify(data, null, 2));

// calling the API (http://api.ipstack.com/) to get the address
const promise = $.ajax({

  url:'http://api.ipstack.com/'+data.geoplugin_request+'?access_key=469ef383c3589ef796cc907a6dcac372',
  dataType:'Jsonp',
});

promise.then(
(data) => { //data=return from the IP that gives the address(http://api.ipstack.com/)


//below we are sending data to DOM 
document.getElementById('city').innerHTML=data.city;
document.getElementById('state').innerHTML=data.region_name;

},
(error) => {
 console.log('bad request: ', error);
}
);
});






    





