import Component from "@glimmer/component";
import { action } from "@ember/object";
import { timeout } from "ember-concurrency";
import { task } from "ember-concurrency-decorators";
import { taskFor } from "ember-concurrency-ts";

export default class TypedTask extends Component {
  @task
  loadData = taskFor(async () => {
    await timeout(1000);
  });

  @action
  indirectInvocation() {
    this.loadData.perform();
  }
}
