let p = new Promise((resolve, reject) => {
    let a = 1 + 3;

    if(a == 2)
    {
        resolve("Success")
    }
    else
    {
        reject("Failed")
    }
})

// Run Promise

p.then(
    (message) => {
        console.log("This is the THEN() " + message)
    }
).catch(
    (message) =>
    {
        console.log("This is the catch() " + message)
    }
)

// Another Example

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise()
{
    return new Promise(
        (resolve, reject) =>
        {
            if(userLeft)
            {
                reject(
                    {
                        name : "User Left",
                        message : ":("
                    }
                )
            }
            else if(userWatchingCatMeme)
            {
                reject(
                    {
                        name : "User Watching Cat Meme",
                        message : "hmmm"
                    }
                )
            }
            else
            {
                resolve("Thumbs up and subscribe")
            }
        }
    )
}

watchTutorialPromise().then(
    (message) =>
    {
        console.log("Success : " + message)
    }
).catch(
    (err) =>
    {
        console.log(err.name + " : " + err.message)
    }
)