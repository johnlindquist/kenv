// Menu: Textarea Demo
// Description: For longer text entry
// Author: John Lindquist
// Twitter: @johnlindquist

let value = await textarea()
await writeFile(tmp("textarea-demo.txt"), value)
edit(tmp("textarea-demo.txt"))
