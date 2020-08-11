
function makeRequest(location)
{
    return new Promise(
        (resolve, reject) =>
        {
            console.log(`Making Request to ${location}`)
            if(location === "google")
            {
                resolve("Google says hi")
            }
            else
            {
                reject("We Can Only Talk to google")
            }
        }
    )
}

function processRequest(response)
{
    return new Promise(
        (resolve, reject) =>
        {
            console.log("Processing Response")
            resolve(`Extra Information ${response}`)
        }
    )
}

makeRequest("google").then(response =>{
    console.log("Response Recieved")
    return processRequest(response)
}).then(processedResponse =>{
    console.log(processedResponse)
}).catch(err =>{
    console.log(err)
})

async function doWork()
{
    const response = await makeRequest("face")
    console.log("Response Recieved doWork()")
    const processedResponse = await processRequest(response)

}
// doWork()

