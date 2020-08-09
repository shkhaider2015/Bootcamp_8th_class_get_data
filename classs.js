var url = "https://jsonplaceholder.typicode.com/posts/1";
        // fetch(url)
        // .then(function(response)
        // {
        //     var data = response.json()
        //     console.log("This is Then() ")
        //     console.log(response.json())
        //     console.log(data)
        // })
        // .catch(function()
        // {
        //     console.log("This is Catch() ")
        // });

        // fetch(url)
        // .then((response) => response.json)
        // .then((json) => console.log(json))

        // Googler ERxample
        fetch(url)
        .then(
            function(response)
            {
                if(response.status != 200)
                {
                    console.log("Looks like status is not ok Code : " + response.status)
                    return;
                }

                response.json().then(
                    function(data)
                    {
                        console.log(data)
                    }
                )
            }
        )
        .catch(
            function(err)
            {
                console.log("Error is : " + err)
            }
        )