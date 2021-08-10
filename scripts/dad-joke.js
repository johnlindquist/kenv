// Menu: Dad Joke
// Description: Speaks a Dad Joke from icanhazdadjoke.com
// Author: John Lindquist
// Twitter: @johnlindquist

let response = await get(`https://icanhazdadjoke.com/`, {
  headers: {
    Accept: "text/plain",
    "User-Agent": "axios 0.21.1", //required for icanhazdadjoke.com
  },
})

say(response.data)
await div(response.data, `p-6`)
