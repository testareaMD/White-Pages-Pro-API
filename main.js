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
  nameZip.forEach(function(array){
      let firstName = array.firstName;
      let lastName = array.lastName;
      let zip = array.Zip;
      var i;
      let url_string = "https://proapi.whitepages.com/3.0/person?name=" + firstName + '+' + lastName + "&address.postalcode=" + zip + "&address.state.code=MD&api_key=APIKEY";
      console.log(url_string);
    });
