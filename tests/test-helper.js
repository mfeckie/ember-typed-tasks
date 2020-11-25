import Application from 'typed-tasks/app';
import config from 'typed-tasks/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
