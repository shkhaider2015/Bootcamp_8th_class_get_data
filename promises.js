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

// One more Promise example

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded")
})
// if video 1 takes more time than others so others will wait
// until video 1 process complete 
Promise.all(
    [
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree
    ]
).then(
    (messages) =>
    {
        console.log("Promise.all() : " + messages)
    }
)

// if we want to runs promise as soon as complete
// when one promise complete it will return it instead of all
// we use promise.race() instead of promise.all()
Promise.race(
    [
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree
    ]
).then(
    (messages) =>
    {
        console.log("Promise.race() : " + messages)
    }
)