// Gi-define nako ang UiEvent nga naay tulo ka possible nga event: click, submit, ug error
export type UiEvent =
  | { type: "click"; x: number; y: number }
  | { type: "submit"; formId: string; values: Record<string, string> }
  | { type: "error"; message: string };

// Gi-define nako ang generic Handler nga modawat og event ug mahimong mo-return og Promise
export type Handler<E> = (event: E) => void | Promise<void>;

// Gi-create nako ang async handler para ma-process ang different UiEvent types
export async function handleUiEvent(event: UiEvent): Promise<void> {
  // Gi-check nako ang type sa event para mahibaw-an unsa nga event ang i-process
  switch (event.type) {

    // Gi-process nako diri ang click event
    case "click":
      console.log(`click @ ${event.x},${event.y}`);
      break;

    // Gi-process nako diri ang submit event
    case "submit":

      // Gi-simulate nako ang asynchronous validation gamit ang Promise delay
      await new Promise((r) => setTimeout(r, 200));

      // Gi-check nako kung naay empty nga value
      if (!Object.values(event.values).every(Boolean)) {

        // Gi-throw nako ang error kung failed ang validation
        throw new Error("Validation failed");
      }

      // Gi-display nako ang form ID kung successful ang submit
      console.log("submitted", event.formId);
      break;

    // Gi-process nako diri ang error event
    case "error":
      console.error(event.message);
      break;
  }
}