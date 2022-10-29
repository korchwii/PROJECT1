
$('#job1').hide();
$('#job2').hide();
$('#job3').hide();
$('#job4').hide();


function showJobOpennings(id){
    $("#"+ id).toggle('slow');

}

$.getJSON('http://www.geoplugin.net/json.gp', function(data) {
console.log(JSON.stringify(data,null, 2));


const promise = $.ajax({

  url:'http://api.ipstack.com/'+data.geoplugin_request+'?access_key=887d53672a701c4ec74d6c2fae20c42b',
  dataType:'Jsonp',
});

promise.then(
(data) => { 



document.getElementById('city').innerHTML=data.city;
document.getElementById('state').innerHTML=data.region_name;

},
(error) => {
 console.log('bad request: ', error);
}
);
});






    





