import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { resolve } from 'rsvp';

export default class FooRoute extends Route {
  @service router;

  beforeModel() {
    return resolve().then(() => this.router.transitionTo('bar'));
  }
}
