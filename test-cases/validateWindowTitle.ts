import katalon from "@katalon-g5/engine-sideload";

export default katalon.testCase(
  "should open Chrome browser",
  async ({ web }) => {
    //should open browser with blank page
    await web.openBrowser("google.com");

    const windowTitle = await web.executeJavaScript(
      "return document.title;",
      []
    );
    if (windowTitle !== "Google") {
      throw new Error("Invalid window title");
    }

    await web.closeBrowser();
  }
);
