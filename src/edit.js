import { Configuration, OpenAIApi } from 'openai';
import { createReadStream, writeFileSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

// Create configuration for the OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

// The API returns with the result, the image can be reached by an URL inside this result
const creationResult = await openAI.createImageEdit(
  createReadStream('./assets/edit_files/computer_src.png'), // source picture
  createReadStream('./assets/edit_files/computer_mask.png'), // masked picture
  'drawing the mona lisa', // prompt
  1, // number of pictures to be created
  '512x512' // size of picture(s)
);

// Create a buffer from the image that can be found on the URL so it can be saved
const imgBuffer = await createImageBuffer(creationResult);

// Save image
writeFileSync(`./results/computer-edited-${Date.now()}.png`, imgBuffer);

/**
 * Creates buffer from the image that has been created by the openai dall-e api
 * @param result creation result of openai picture generation
 * @returns Buffer
 */
async function createImageBuffer(result) {
  const url = result.data.data[0].url;
  //fetch the iamge by the URL
  const imgResult = await fetch(url);
  //create blob
  const imgBlob = await imgResult.blob();
  //make a buffer from it
  const imgBuffer = Buffer.from(await imgBlob.arrayBuffer());
  return imgBuffer;
}