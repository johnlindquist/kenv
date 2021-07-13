// Menu: Resize an Image
// Description: Select an image in Finder. Type option + i to resize it.
// Author: John Lindquist
// Twitter: @johnlindquist
// Shortcut: opt i

let sharp = await npm("sharp")

let imagePath = await getSelectedFile()

let width = Number(await arg("Enter width:"))

let metadata = await sharp(imagePath).metadata()

let newHeight = Math.floor(
  metadata.height * (width / metadata.width)
)

let lastDot = /.(?!.*\.)/
let resizedImageName = imagePath.replace(
  lastDot,
  `-${width}.`
)

await sharp(imagePath)
  .resize(width, newHeight)
  .toFile(resizedImageName)
