import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';
import * as dotenv from 'dotenv';
import { createSingleImageBuffer } from './helper/create-single-image-buffer.js';

dotenv.config();

// Create configuration for the OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

// The image will be created based on this text
const prompt = 'A realistic orange cat in front of a door';

// The API returns with the result, the image can be reached by an URL inside this result
const creationResult = await openAI.createImage({
  prompt,
  n: 1, // number of pictures to be created
  size: '256x256', // size of the picture(s)
});

// Create a buffer from the image that can be found on the URL so it can be saved
const imgBuffer = await createSingleImageBuffer(creationResult);

// Save image
writeFileSync(`./results/generated-${Date.now()}.png`, imgBuffer);
