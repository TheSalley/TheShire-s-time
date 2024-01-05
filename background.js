chrome.webRequest.onCompleted.addListener(
  async function (details) {
    if (details.method === "GET" && details.url.includes("rcmd")) {
      console.log("Request:", details);

      // const modifiedResponse = {
      //   responseBody: []
      // }
    }
  },
  { urls: ["<all_urls>"] },
  ["requestBody"]
);
