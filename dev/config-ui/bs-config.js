// https://scotch.io/bar-talk/a-fast-and-convenient-development-server-with-lite-server

var allparameters;
var allcustomers;


var allparametersKey;
var allParametersValue;
var templateParameters = [];


function getCustomer(id) {
      for (customerIndex in allcustomers) {
            if (allcustomers[customerIndex].id == id) return allcustomers[customerIndex];
      }
}

function initMockData() {

      if (allparameters != null) return;
      console.log("initMockData");


      allparameters = {};
      templateParameters.push({
            "key": "0",
            "value": "parameter.para.meter"
            
      });

      templateParameters.push({
            "key": "0",
            "value": "test.test.test"
      });

      for (allparametersKey = 0; allparametersKey < 30; allparametersKey++) {
            let parameter;

            let templateIndex = allparametersKey % templateParameters.length;
            parameter = Object.assign({}, templateParameters[templateIndex]);


            parameter.key = allparametersKey + "";
            // parameter.value = "parameter" + allparametersKey;
            
            allparameters[allparametersKey+""] = parameter;
            // allparameters[allparametersValue] = parameter;


      }

}

function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                  break;
            }
      }
}


function mockGetRestMiddleware(req, res, next) {
      let parsed = require("url").parse(req.url, true);
      var querystring = require('querystring');

      let error = null;
      let code = null;
      if (req.headers["referer"] != null) {
            let parsedReferer = require("url").parse(req.headers["referer"], true);
            //let filterReferer = JSON.parse(parsedReferer.query.filter);
            if (parsedReferer.query.error != null) {
                  error = parsedReferer.query.error;
                  code = parsedReferer.query.code;
            }
      }


      if (parsed.pathname.indexOf("/OAPS/resources/") == 0) {
            //queryData = require("url").parse(req.url, true).query;
            //   queryData=parsed.query;
            //  method=parsed.method;
            console.log("received pathname:" + parsed.pathname + ", query:" + JSON.stringify(parsed.query) + ", method:" + req.method);
            initMockData();
            res.setHeader('Content-Type', 'application/json');





            if (parsed.pathname.indexOf("/OAPS/resources/customers/") == 0) {
                  let path = parsed.pathname.replace("/OAPS/resources/customers/", "");
                  if (req.method == "GET") {

                        switch (path) {
                              case "list":
                                    sleep(2000);
                                    if (error == "customerList")
                                          res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                    else
                                          res.end(JSON.stringify({ "status": "SUCCESS", "data": allcustomers }));

                                    break;

                              default:


                                    let customerId = parseInt(path.substr(path.lastIndexOf("/") + 1));
                                    let action = path.substr(0, path.lastIndexOf("/"));
                                    console.log("get action:" + action + " path:" + path + " customerId:" + customerId);
                                    let customer = getCustomer(customerId);
                                    sleep(500);

                                    if (action == "scenarios")
                                          res.end(JSON.stringify({ "status": "SUCCESS", "data": customer.scenarios }));
                                    break;
                        }

                        next();
                  }
            }

            if (parsed.pathname.indexOf("/OAPS/resources/parameters/") == 0) {
                  let path = parsed.pathname.replace("/OAPS/resources/parameters/refresh", "");
                  if (req.method == "POST") {
                        let result = [];
                        // switch (path) {
                        //       case "list":

                        // }
                  }
            }

            if (parsed.pathname.indexOf("/OAPS/resources/parameters/") == 0) {
                  let path = parsed.pathname.replace("/OAPS/resources/parameters/", "");
                  if (req.method == "GET") {

                         let result = [];
                        switch (path) {
                              case "list":
                                     result = [];
                                    // let filter = JSON.parse(parsed.query.filter);
                                    for (let id in allparameters) {
                                          let parameter = allparameters[id];
                                          result.push(parameter);
                                    }
                                    sleep(500);
                                    if (error == "parameterList")
                                          res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                    else
                                          res.end(JSON.stringify({ "status": "SUCCESS", "data": result }));
                                    break;

                              
                              default:
                                     result = [];
                                    let parameterValue = path;
                                    sleep(500);
                                    console.log("get path:" + path + " parameterValue:" + parameterValue);
                                    let parameter = allparameters[parameterValue];
                                    console.log("wangju"+parameter.key+":"+parameter.value);
                                    result.push(parameter);
                                    if (error == "parameterDetail")
                                          res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                    else
                                          res.end(JSON.stringify({ "status": "SUCCESS", "data": result }));
                                    break;
                        }

                        next();
                  }
                  //resume,pause,abort: {action}/{id}
                  //addparameter: ''
                  //addparameterTarget: {id}/targets/
                  if (req.method == "POST") {

                        var queryData = "";

                        req.on('data', function (data) {
                              queryData += data;
                        });

                        req.on('end', function () {
                              let action = path.substr(0, path.lastIndexOf("/"));
                              //add parameter
                              if (action == "create") {
                                    allparametersKey++;

                                    let newparameter = JSON.parse(queryData);
                                    let templateIndex = allparametersKey % templateParameters.length;
                                    let parameter = Object.assign({}, templateParameters[templateIndex]);
                                    parameter.key = allparametersKey+"";
                                    console.log(newparameter.value);
                                    parameter.value = newparameter.name;
                                    // parameter.key = allparametersKey;
                                    // if (typeof newparameter.targets === 'undefined' || newparameter.targets === null) {
                                    //       parameter.status = 0;
                                    // }
                                    // else {
                                    //       parameter.status = 2;
                                    // }
                                    sleep(1000);
                                    allparameters[allparametersKey] = parameter;
                                    console.log("create parameter:" + JSON.stringify(parameter));
                                    res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                              }
                              //resume,pause,abort: {action}/{id}
                              else {
                                    let parameterKey = parseInt(path.substr(path.lastIndexOf("/") + 1));
                                    let parameter = allparameters[parameterKey];
                                    console.log("path:" + path + ", action:" + action + ", parameterKey:" + parameterKey + ", parameter:" + parameter);
                                    switch (action) {

                                          case "pause":
                                                parameter.status = 1;
                                                sleep(2000);
                                                res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                                                break;

                                          case "resume":
                                                parameter.status = 2;
                                                sleep(1000);
                                                if (error == "resume")
                                                      res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                                else
                                                      res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                                                break;

                                          case "abort":
                                                parameter.status = 4;
                                                sleep(1000);
                                                res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                                                break;

                                          case "schedule":
                                                parameter.status = 2;
                                                sleep(200);
                                                res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                                                break;

                                          case "addTargets":
                                                let targets = JSON.parse(queryData);
                                                parameter.totalTargets += targets.length;
                                                sleep(500);
                                                if (error == "addTargets")
                                                      res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                                else
                                                      res.end(JSON.stringify({ "status": "SUCCESS", "data": parameter }));
                                                break;

                                          case "remove":
                                                sleep(500);
                                                allparameters[parameterKey].status = -1;
                                                res.end();
                                                break;
                                    }
                              }

                              next();
                        });

                  }
            }

      }else if(parsed.pathname.indexOf("/OAPS/parameters/search/") == 0){
            let result = [];
            console.log("search");
                                                
                                    result.push({"key":"myclient-dev.yml", "value":["config:", "  form:","    url: http://dev.gemalto.com"]});
                                    if (error == "parameterDetail")
                                          res.end(JSON.stringify({ "status": "FAILED", "reason": error, "code": code }));
                                    else
                                          res.end(JSON.stringify({ "status": "SUCCESS", "data": result }));
                                    
      }
      else {
            next();
      }
}


module.exports = function (bs) {
      return {
            //"files" : "./src/**/*.{js, html, css}",
            "port": 3000,
            "https": false,
            // "proxy":"admincare/",
            "server": {
                  routes: {
                        "/OAPS": "."
                  },
                  "middleware": {
                        2: mockGetRestMiddleware
                  }
            }
      };
};