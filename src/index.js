// @ts-check

import { generateUser } from "./actions/generate-user.js";
import { renderTable } from "./components/user-table.js";
import { handleSubmit } from "./lib/utils.js";

const formNode = document.querySelector("form");
const imageNode = document.querySelector("img");
const tableNode = document.querySelector("table");

formNode?.addEventListener(
  "submit",
  handleSubmit(async (data) => {
    const submitButton = formNode.querySelector("#submit-btn");
    if (!(submitButton instanceof HTMLButtonElement)) return;

    try {
      submitButton.disabled = true;
      submitButton.textContent = "Loading...";

      const response = await generateUser({ ...data });
      formNode.reset();

      if (!imageNode) return;

      imageNode.src = response.results[0].picture.large;
      renderTable(response.results[0], tableNode);
    } catch (error) {
      console.error(error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Continue";
    }
  })
);
