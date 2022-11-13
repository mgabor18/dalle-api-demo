/**
 * Creates buffer from the image that has been created by the openai dall-e api
 * @param result creation result of openai picture generation
 * @returns Buffer
 */
export async function createSingleImageBuffer(result) {
  const url = result.data.data[0].url;
  //fetch the iamge by the URL
  const imgResult = await fetch(url);
  //create blob
  const imgBlob = await imgResult.blob();
  //make a buffer from it
  const imgBuffer = Buffer.from(await imgBlob.arrayBuffer());
  return imgBuffer;
}
