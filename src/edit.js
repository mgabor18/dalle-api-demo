import { Configuration, OpenAIApi } from 'openai';
import { createReadStream, writeFileSync } from 'fs';
import * as dotenv from 'dotenv';
import { createSingleImageBuffer } from './helper/create-single-image-buffer.js';

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
const imgBuffer = await createSingleImageBuffer(creationResult);

// Save image
writeFileSync(`./results/computer-edited-${Date.now()}.png`, imgBuffer);
