# ez-fetch-ajax
   
   
It is implemented as a Request object which is a 'proxy object' that returns a promise 
according to response's of the requests. You can easly make an asynchronous request by using any http verbs with my Request proxy object by just typing for instance Request.head(param1, param2) or Request.put(param1, param2) or any other http verbs.
Two parameters are optional, you can type any number of and any types of parameters according to your request needs. For general usage parameters refers to: param1 = url  ,  param2 = data.
   
By implementing this, It's aimed to provide a "generic" practical use of XMLHttpRequest and promises for developers. When it's typed  'Request.get(url)' or 'Request.post(url,data)' or any others, the API fetches/posts the related data asynchronously from/to given url and returns a resolved promise with the value of responded status and data if the process is successful. If not, the API returns a rejected promise whose value is the reason of the failure.

   Tests which are implemented by using JEST framework, stays in test/Request.test.js file. 
   
   It is an npm published API so to use this API you can download it just by typing:
   
    $ npm install ez-fetch-ajax --save-dev
    
    Example Usage:
    
    var Request = require("ez-fetch-ajax");
    
    Request.get("https://api.github.com/users/alisaitbilgi")
      .then(resultObject => {
        console.log(resultObject.status); // will print response status. ( 200 - 404 ect.)
        console.log(resultObject.response); // will print response of the server. (a JSON object ect.)
      });

