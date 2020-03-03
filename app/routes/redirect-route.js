import Route from "@ember/routing/route";

export default class RedirectRouteRoute extends Route {
  redirect() {
    this.transitionTo("application");
  }
}
