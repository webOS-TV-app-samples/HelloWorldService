var pkgInfo = require("./package.json");
var Service = require("webos-service");
var service = new Service(pkgInfo.name);
var name = "World";

service.register("hello", function (message) {
  console.log("In hello callback");
  if (message.payload && message.payload.name) {
    name = message.payload.name;
  }
  message.respond({
    returnValue: true,
    data: "Hello, " + name + "!",
  });
});
