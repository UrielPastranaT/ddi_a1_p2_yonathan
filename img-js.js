const { Image } = require('image-js');

execute().catch(console.error);

async function execute() 
{
  let image = await Image.load('cat.jpg');
  let grey = image
    .grey() // convert the image to greyscale.
    .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    .rotate(30); // rotate the image clockwise by 30 degrees.
  return grey.save('catnew.png');
}

//Dentro de la carpeta del proyecto ya viene la imagen nomás ejecute el archivo y vea como modifica la imagen con los parametros de arriba