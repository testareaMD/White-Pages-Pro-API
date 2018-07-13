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
function paperSurvey(nameZip){
    let firstName = nameZip.firstName;
    let lastName = nameZip.lastName;
    let zip = nameZip.Zip;
    var i;
    for(i = 0; i < nameZip.length ; i ++){
      var url_string = "https://proapi.whitepages.com/3.0/person?name=" + firstName + '+' + lastName + "&address.postalcode=" + zip + "&address.state.code=MD&api_key=APIKEY";
      console.log(url_string);
    }
  }
  window.onlaod = paperSurvey;
  //;
