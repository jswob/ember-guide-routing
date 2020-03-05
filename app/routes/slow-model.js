import Route from "@ember/routing/route";
import { action } from "@ember/object";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default class SlowModelRoute extends Route {
  async beforeModel() {
    await timeout(3000);

    return 0;
  }

  @action
  loading(transition, originRoute) {
    console.log(`Origin route object: ${originRoute}`);
    transition.promise.finally(function() {
      console.log("Now you have full page");
    });
    return true;
  }
}
