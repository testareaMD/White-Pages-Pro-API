$(document).ready(function() {
  function paperSurvey(){
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
      let firstName = nameZip.firstName;
      let lastName = nameZip.lastName;
      let zip = nameZip.Zip;
      for(var i = 0; i < nameZip.length; i++){
        let results= "https://proapi.whitepages.com/3.0/person?name=" + firstName + '+' + lastName + "&address.postalcode=" + zip + "&address.state.code=MD&api_key=APIKEY";
        console.log(results);
      }
    }
    window.onlaod = paperSurvey;
  });
