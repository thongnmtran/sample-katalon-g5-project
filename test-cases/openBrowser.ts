import katalon from "@katalon-studio/test";

export default katalon.testCase(
  "should open Chrome browser",
  async ({ web }) => {
    //should open browser with blank page
    await web.openBrowser("google.com");

    await web.closeBrowser();
  }
);
