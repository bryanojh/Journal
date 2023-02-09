$(document).ready(function() {
    //insert your own code
    $('#change').click(function() {
      $('#msg').text('Hello Interactive Developers');
    });
  });

$(document).ready(function() {
    $('.circle').click(function() {
      $(this).hide();
    });  
  });

let url = 'https://randomuser.me/api/';
fetch(url)
  .then(response => response.json())
  .then(function(data) {
    // console.log(data)
    let person = data.results[0];
    let p_name = person.name;
    let f_name = `${p_name.title} ${p_name.first} ${p_name.last}`;
    $('#fullname').text(f_name);
    $('#avatar').attr('src', person.picture.medium);
    $('#email').text(person.email);
    $('#city').text(person.location.city);
    console.log(person.name)
  });

$('#btn').click(function() {
  location.reload();
})

$(document).ready(function() {
    //@params settings           
    var params = {
      // //YYYY-MM-DD[T]HH:mm:ss (SGT) 
      "date_time": "2022-12-09T16:00:00",
      "date": "2022-12-09" //YYYY-MM-DD            
    };
  
    $.ajax({
      type: "GET",
      dataType: 'json',
      contentType: "text/plain",
      url: "https://api.data.gov.sg/v1/environment/psi",
      headers: {
  
      },
  
      data: params,
                 
      success: function(data) {
        console.log(data);
        console.log("API status: " + data.api_info.status);
        var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
        var content = "";
        $.each(reading_twenty_four, function(key, obj) {
          console.log(key + ": " + obj);
          content += key + ": " + obj + "<br/>";
        });
  
        $("#psi-twenty-four-hourly").html(content);
                   
        localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
  
        var reading_twenty_four_pm10 = data.items[0].readings.pm10_twenty_four_hourly;
        var content = "";
        $.each(reading_twenty_four_pm10, function(key, obj) {
          console.log(key + ": " + obj);
          content += key + ": " + obj + "<br/>";
        });
  
        $("#pm10-twenty-four-hourly").html(content);
                   
        localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
      }
    });
  });
  