module.exports.hello = async (event) => {
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  });
};
