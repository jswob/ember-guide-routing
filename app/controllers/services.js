import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class ServicesController extends Controller {
  @service("some-service") service;
}
