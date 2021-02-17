require("dotenv").config();

const {
  getContainerName,
  uploadBlobToContainer,
  listAllBlobs,
} = require("./helpers");

async function main() {
  await getContainerName();
  await uploadBlobToContainer();
  await listAllBlobs();
}

main()
  .then(() => console.log("Done"))
  .catch((ex) => console.log(ex.message));
