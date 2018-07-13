$(document).ready(
  const nameZip = [
    {
      "firstName": "Sarah",
      "lastName": "McDonald",
      "Zip": 20678,
      "StateVoterID": "NULL"
    },
    {
      "firstName": "Rick",
      "lastName": "Crabbe",
      "Zip": 21128,
      "StateVoterID": "NULL"
    }];
    nameZip.forEach(function(res){
      let firstName = res.firstName;
      let lastName = res.lastName;
      let zip = res.Zip;
      this.get_url = function(){
        $.getJSON("https://proapi.whitepages.com/3.0/person?name=" + firstName + '+' + lastName + "&address.postalcode=" + zip + "&address.state.code=MD&api_key=APIKEY", function(person){
          let street1 = person.found_at_address.street_line_1;
          let street2 = person.found_at_address.street_line_2;
          let city = person.found_at_address.city;
          let zip = person.found_at_address.zip4;
          let name = person.name;
          $('#results').append('<tr><td>' + name + '</td><td>' + street1 + '</td><td>' + street2 + '</td><td>' + city + '</td><td>' + zip + '</td></tr>');
        });
      }
    });
  });
