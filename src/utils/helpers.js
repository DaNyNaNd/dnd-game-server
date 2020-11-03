export const getPlayerInfo = () => {
const myHeaders = new Headers();
myHeaders.append("Cookie", "_pxhd=6806a8697f99ec2de3555bf4526d2e2d176f5b99c647c3313ce7e8599801dbb3:93879a61-7a88-11ea-8a63-fd5e7a8b4196; AWSELB=91B7AF47088C8EEF0700387ED7FBDD60BDAC14E1174809C26D8331B0CA9C82373876174A9C30D75CD28F19037E8481E733B74ACD388AC3A0C85DCD9176BF463681C3381C2C; AWSELBCORS=91B7AF47088C8EEF0700387ED7FBDD60BDAC14E1174809C26D8331B0CA9C82373876174A9C30D75CD28F19037E8481E733B74ACD388AC3A0C85DCD9176BF463681C3381C2C; Geo={%22region%22:%22TN%22%2C%22country%22:%22US%22%2C%22continent%22:%22NA%22}");

const requestOptions = {
  method: 'GET',
  mode: 'no-cors',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.dndbeyond.com/character/22698028/json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
