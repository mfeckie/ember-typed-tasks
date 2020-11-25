import Component from '@glimmer/component';
import { action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

export default class OriginalTask extends Component {
  @task
  *loadData() {
    yield timeout(1000);
  }

  @action
  indirectInvocation() {
    this.loadData.perform();
  }
}
