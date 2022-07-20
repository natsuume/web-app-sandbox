export const createHello = (text: string) => `Hello ${text}!`;

const outputHello = (text: string) => {
  console.log(createHello(text));
};

const textWorld: string = "World";
outputHello(textWorld);
