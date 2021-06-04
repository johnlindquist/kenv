// Menu: Dad Joke
// Description: Speaks a Dad Joke from icanhazdadjoke.com
// Author: John Lindquist
// Twitter: @johnlindquist

let response = await get(`https://icanhazdadjoke.com/`, {
  headers: {
    Accept: "text/plain",
  },
})

setPlaceholder("Dad Joke")
setPanel(response.data)

say(response.data)
