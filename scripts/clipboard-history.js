// Shortcut: control option v
// Exclude: true

let { history } = await db(
  kitPath("db", "clipboard-history.json")
)

let { value, type } = await arg("What to paste?", () => {
  return history.map(
    ({ value, type, timestamp, secret }) => {
      return {
        type,
        name: secret
          ? value.slice(0, 4).padEnd(10, "*")
          : value,
        value: {
          value,
          type,
        },
        description: timestamp,
        preview:
          type === "image"
            ? md(`![timestamp](${value})`)
            : value.includes("\n")
            ? `<div class="font-mono text-xs">${value
                .split("\n")
                .map(line => `<p>${line}</p>`)
                .join("")}<div>`
            : null,
      }
    }
  )
})

if (type === "image") {
  await copyPathAsImage(value)
  await keystroke("command v")
}

if (type === "text") {
  await setSelectedText(value)
}
