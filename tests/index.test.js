const readFile = require("./helpers/readFile");
const { readOutput } = require("../index");

function simulateMochitest(file) {
  const out = readOutput(readFile(file));
  // console.log(out.join("\n"));
  return out;
}

describe("mochi", () => {
  it("basic", () => {
    const out = simulateMochitest("basic.txt");
    expect(out).toMatchSnapshot();
  });

  it("full run", () => {
    const out = simulateMochitest("full.txt");
    expect(out).toMatchSnapshot();
  });

  it("error", () => {
    const out = simulateMochitest("error.txt");
    expect(out).toMatchSnapshot();
  });

  it("ufail", () => {
    const out = simulateMochitest("ufail.txt");
    expect(out).toMatchSnapshot();
  });

  it("mochi-fail", () => {
    const out = simulateMochitest("mochi-fail.txt");
    expect(out).toMatchSnapshot();
  });

  it("build-fail", () => {
    const out = simulateMochitest("build-fail.txt");
    expect(out).toMatchSnapshot();
  });

  it("console_error", () => {
    const out = simulateMochitest("console_error.txt");
    expect(out).toMatchSnapshot();
  });

  it("actions", () => {
    const out = simulateMochitest("actions.txt");
    expect(out).toMatchSnapshot();
  });

  it("frame", () => {
    const out = simulateMochitest("frame.txt");
    expect(out).toMatchSnapshot();
  });

  it("error2", () => {
    const out = simulateMochitest("error2.txt");
    expect(out).toMatchSnapshot();
  });

  it("unformatted stack", () => {
    const out = simulateMochitest("unformatted_stack.txt");
    expect(out).toMatchSnapshot();
  });
});
