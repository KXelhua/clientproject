/* global $ */
$(function() {
    
    $("#weather").click(function(){
        var zipCode = $("#zipCode").val();
        var countryCode = $("#countryCode").val();
        console.log(zipCode);
        console.log(countryCode);
        
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ","+ countryCode + "&APPID=24bed9e2c3af6fb1b50671e367281625",
                method: "GET",
                success: function(response) {
                // function runs if successful
                console.log(response);
                $("#main").append(response.weather[0].main);
                
                $("#description").append(response.weather[0].description);
            
                $("#humid").append(response.main.humidity);   
              },
            });
           
        });
});
