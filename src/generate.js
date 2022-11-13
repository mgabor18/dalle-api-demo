import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

const prompt = 'A pirate cat with a parrot on his shoulders, riding a bike';

const result = await openAI.createImage({
  prompt,
  n: 1,
  size: '256x256',
});

async function createImageBuffer(result) {
  const url = result.data.data[0].url;

  const imgResult = await fetch(url);
  const imgBlob = await imgResult.blob();
  const imgBuffer = Buffer.from(await imgBlob.arrayBuffer());
  return imgBuffer;
}

const imgBuffer = await createImageBuffer(result);

writeFileSync(`./results/${Date.now()}.png`, imgBuffer);
