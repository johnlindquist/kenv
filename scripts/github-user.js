/**
 * Congratulations! You made a `github-user` script! 🎉
 *
 * 1. Follow the instructions in the comments below.
 * 2. Run `github-user` in the prompt after each step:
 */

//Find console.log messages in ~/.kenv/logs/console.log
console.log(`johnlindquist made a github-user script!`)

/**
 * Step 1: Accept an argument and show the result
 * 1. Uncomment the 2 lines "let user" and "show"
 * 2. Run `github-user` in your prompt again
 */

let user = await arg("Type your github username:")
// show(`<h1 class="p-2">You typed: ${user}</h1>`)

/**
 * Step 2: Fetch data from the github api
 * 1. Uncomment lines the 2 lines "let response" and "console.log"
 * 2. Run `github-user johnlindquist` (assuming this is your github username)
 */

let response = await get(
  `https://api.github.com/users/${user}`
)
// inspect(response.data)

/**
 * Step 3: Write your data to a template
 * 1. Uncomment the lines from "contentPath" to "edit"
 * 2. Run `github-user johnlindquist` again
 * Note: a prompt will ask you to select a directory for your file
 */

let contentPath = await env("TUTORIAL_CONTENT_PATH", {
  message:
    'Where should we store your file? e.g. "~/.kenv/tmp"',
})
let content = await compileTemplate("tutorial.md", {
  name: response.data.name,
})
let filePath = path.join(contentPath, `${user}.md`)
await writeFile(filePath, content)
await edit(filePath)
