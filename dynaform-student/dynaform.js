//write your JavaScript here
jQuery(document).ready(function() {
    jQuery("#continent").change(function(event) {
        var continent = jQuery(":selected").attr("value");
            var countries = jQuery("#country");
        console.log(continent);
        if (continent !== "clear") {
            var address = "http://www2.cs.hut.fi/~petri/countrydata/";
            address += continent + ".json?callback=?";
            console.log(address);
            countries.empty();
            countries.append("<option value=\"clear\">-- choose country --</option>");
            jQuery.getJSON(address, function(data) {
                // Ajax request successful
                console.log("Got:");
                console.log(data);
                var option;
                jQuery.each(data, function(val, content) {
                    option = jQuery("<option></option>");
                    option.attr("value", val);
                    option.append(content);
                    countries.append(option);
                });
            })
                .done(function() {
                    //done
                })
                .fail(function(jqxhr, textStatus, error) {
                    console.log("error:");
                    console.log(jqxhr);
                });
        }
        else {
            // choose selected, reset country list
            countries.empty();
            countries.append("<option value=\"clear\">-- choose continent --</option>");
        }
    });
});
