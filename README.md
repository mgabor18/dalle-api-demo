# OpenAI DALL-E API DEMO

This example repository demonstrates the basic functionalities of the OpenAI DALL-E API.

The documentation of the OpenAI DALL-E API can be found [here](https://beta.openai.com/docs/api-reference/images).

_NOTE: The OpenAI API is a 'pay to use' service, so after the free trial period, the usage of the API costs money._

## Prerequirements:

```
 NodeJS ^19.0.0
 OpenAI API Key is set in the .env file
```

## Install

```
 npm install
```

# Usage

The API can be used to do many different things.

Images can be [generated](#generate), [edited](#edit) or [variations](#variation) can be created from existing images.

## Generate

Basically any kind of image can be created.
The following command can be used to generate an image with the given prompt:

```
npm run generate
```

The prompt can be changed inside the [generate.js](./src/generate.js) file.

Example images:

![Cat image 1](./assets/generate_files/generated_cat_1.png 'Cat in front of door 1')
![Cat image 2](./assets/generate_files/generated_cat_2.png 'Cat in front of door 2')
![Cat image 3](./assets/generate_files/generated_cat_3.png 'Cat in front of door 3')

## Variation

Through the API, different versions of an image can be created.
The following command can be used to generate a different variation of an already existing image:

```
npm run variation
```

The source image can be changed inside the [variation.js](./src/variation.js) file.

Example images:

![Cat image v1](./assets/generate_files/generated_cat_1.png 'Cat in front of door v1')
![Cat image v2](./assets/variation_files/cat_variation_1.png 'Cat in front of door v2')
![Cat image v3](./assets/variation_files/cat_variation_2.png 'Cat in front of door v3')

## Edit

An edited or extended image can be created, given an original image and a prompt.
The following command can be used to edit an already existing image:

```
npm run edit
```

The source images and the prompt can be changed inside the [edit.js](./src/edit.js) file.

Example images:

![Guy with computer src](./assets/edit_files/computer_src.png 'Guy in front of computer')
![Guy with computer edited](./assets/edit_files/computer_edited.png 'Guy in front of computer drawing the mona lisa')
