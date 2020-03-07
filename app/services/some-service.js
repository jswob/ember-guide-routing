import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class SomeServiceService extends Service {
  @tracked grettings = "Hello World from service!";
}
