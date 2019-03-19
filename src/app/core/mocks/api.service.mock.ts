export class MockApiService {
  MockObservable = {
    mergeMap: cb => {
      return cb({ id: 123 });
    },
    toPromise: () => {
      return new Promise((resolve, reject) => {
        resolve("resolved");
      });
    }
  };

  get(path: string) {
    return this.MockObservable;
  }
  post(path: string, body) {}
  put(path: string, body) {}
  anonGet(path: string) {
    return this.MockObservable;
  }
}
