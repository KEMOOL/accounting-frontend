import { createServer } from 'miragejs';
import appConfig from '@/configs/app.config';
import authFakeApi from '@/mock/fakeApi/authFakeApi';
import { signInUserData } from './data/authData';

const { apiPrefix } = appConfig;

export function mockServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({
        signInUserData,
      });
    },
    routes() {
      this.urlPrefix = '';
      this.namespace = '';
      this.passthrough((request) => {
        const isExternal = request.url.startsWith('http');
        const isResource = request.url.startsWith('data:text');
        return isExternal || isResource;
      });
      this.passthrough();
      authFakeApi(this, apiPrefix);
    },
  });
}
