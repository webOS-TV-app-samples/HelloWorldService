function displayReponse() {
  var value = document.getElementById("input").value;
  webOS.service.request("luna://com.sample.helloworld.service/", {
    method: "hello",
    parameters: { name: value },
    onFailure: showFailure,
    onSuccess: showSuccess,
  });
}

function showSuccess(res) {
  document.getElementById("result1").innerHTML = "Service Responded!";
  document.getElementById("result2").innerHTML = res.data;
}

function showFailure(err) {
  document.getElementById("result1").innerHTML = "Failed!";
  document.getElementById("result2").innerHTML =
    "(" + err.errorCode + ") " + err.errorText;
  console.log(err);
}
