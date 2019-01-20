//const { URL, URLSearchParams } = require('url');
const fetch = require("node-fetch");
baseUrl = "demo.stax.tlabs.cloud/projects/demo/contexts/IOTA_storage"
iotaStorage = "/storage"
myUrl = "demo.stax.tlabs.cloud/projects/demo/contexts/IOTA_storage/storage"
seed = "SMHEUUMLRLKARJ9QKRUEDQKAUOEPR9SKII9FGGLDZZNOEZTNISCEJAEGSPYNOSQXYBMOMSAMSJLWGRFZO"

const userAction = async () => {
    const response = await getStepHistory(seed);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    //console.log(myJson);

   // console.log(myJson);

   sum=0;
   for(i = 6; i<myJson.length;++i){
       //if(myJson[i].body.steps!=NaN){
        sum+=Number(myJson[i].body.steps);
       //}
   
   }
    console.log(sum);
}

const userAction2 = async () => {
    const response = await postNewSteps(seed, 900);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    //console.log(myJson);
    console.log(myJson);
}


const userActionGetSteps = async () => {
    const response = await getStepsFromGoogle();
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    //console.log(myJson);
    console.log(myJson.bucket[0].dataset);

    for (let index = 0; index < myJson.bucket.length; index++) {
        const element = myJson.bucket[index].dataset;
        
    }
}



function getStepHistory(p_Seed) {

    return fetch("https://demo.stax.tlabs.cloud/projects/demo/contexts/IOTA_storage/storage?fields=ref_id%2Cbody%2Cstatus", {
        headers: {
            Accept: "*/*",
            "Originator-Ref": p_Seed
        }
    })

}

//"{\"steps\":\"10\"}"


function postNewSteps(p_Seed, numSteps) {

    return fetch("https://demo.stax.tlabs.cloud/projects/demo/contexts/IOTA_storage/storage", {
       // body: "{\"steps\\\":\\\"10\\\"}",
       body: "{\"steps\":\""+numSteps+"\"}",

        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            "Originator-Ref": p_Seed
        },
        method: "POST"
    })
}
//myFetch();

//TODO
//userAction();
//userAction2();
userActionGetSteps();


/*

  function buildUrl(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs +=
                encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }

    return url;
}


fetch(
    buildUrl(myUrl), {
        key: value,
        anotherKey: anotherValue
    }),
    {
        method: "GET",
        headers: {
            Authorization: token
        }
    }
)

*/



//------------------------------

//etherDeplContrUrl=

function getStepsFromGoogle() {

return fetch("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate", {
    body: "{\r\n  \"aggregateBy\": [{\r\n    \"dataTypeName\": \"com.google.step_count.delta\",\r\n    \"dataSourceId\": \"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps\"\r\n  }],\r\n  \"bucketByTime\": { \"durationMillis\": 86400000 },\r\n  \"startTimeMillis\": 1547956800000,\r\n  \"endTimeMillis\": 1547969193530\r\n}",
    headers: {
      Authorization: "Bearer ya29.GluXBqoNTN8ziu84Hb8bHlsg7ZzlrLQTlc2o1f_F5x9iWbVd1QblkNqF_D7tnEzAUjmL7XpuTJw2oAULm8XWT_G0fA_ptydeZ6zky9BGsefrnGBhSDRlMs3XkF7M",
      "Content-Type": "application/json;encoding=utf-8"
    },
    method: "POST"
  })

}