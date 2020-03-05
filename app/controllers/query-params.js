import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";

export default class QueryParamsController extends Controller {
  queryParams = [{ param: "query_param" }, "another_param"];

  @tracked param = "default value";

  @tracked another_param = "default value";

  get getter() {
    return `Query params value = ${this.param} + ${this.another_param}`;
  }
}
