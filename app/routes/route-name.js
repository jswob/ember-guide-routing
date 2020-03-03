import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { A } from "@ember/array";

export default class RouteNameRoute extends Route {
  templateName = "route-namee";
  model() {
    return RSVP.hash({
      songs: A([{ name: "Bury me low" }, { name: "Call my name" }]),
      albums: A([{ name: "Some nama" }, { name: "Some nama" }])
    });
  }
}
