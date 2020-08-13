console.log("fetch API")

async function getApi()
{
    const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log(api, "API")
    const json = await api.json()
    console.log(json, "JSON")
}

// getApi()

async function postAPI()
{
    var posrURL = "https://jsonplaceholder.typicode.com/posts"
    var data = {
        method : 'POST',
        body : JSON.stringify({
            title : 'bootcamp',
            body : 'javascript',
            userId : 1
        }),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    }
    const api = await fetch(posrURL, data)

    console.log(api, "API")
    const json = await api.json()
    console.log(json, "JSON")
}

// call to postApi function
postAPI()