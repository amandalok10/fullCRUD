import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', { path: '/posts/:id' });
  this.route('create', {path: '/posts/new'}); //changes URL
  this.route('edit', {path: '/posts/:id/edit'});
});

export default Router;
