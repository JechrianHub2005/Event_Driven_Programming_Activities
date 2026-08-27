// Gi-import nako ang handleUiEvent nga handler gikan sa events.ts
import { handleUiEvent } from "./events";

async function main() {
  try {

    // Gi-call nako ang handler para ma-process ang click event
    await handleUiEvent({
      type: "click",
      x: 100,
      y: 200,
    });

    // Gi-call nako ang handler para ma-process ang submit event
    await handleUiEvent({
      type: "submit",
      formId: "studentForm",
      values: {
        firstName: "Christian",
        lastName: "Jade",
      },
    });

    // Gi-call nako ang handler para ma-process ang error event
    await handleUiEvent({
      type: "error",
      message: "Something went wrong",
    });

  } catch (error) {

    // Gi-catch nako diri ang possible nga failure/error
    console.error(error);
  }
}

// Gi-run nako ang main function
main();