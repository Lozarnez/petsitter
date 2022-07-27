import app from './app.js';

async function main() {
  try {
    app.listen(3080);
    console.log("server on port", 3080);
  } catch (error) {
    console.log(error);
  }
}

main();