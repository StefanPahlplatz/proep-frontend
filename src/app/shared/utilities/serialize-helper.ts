import { HttpParams } from "@angular/common/http";

export class SerializeHelper {
  public static serialize(obj: any): HttpParams {
    let params = new HttpParams();

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key]) {
        params = params.set(key, obj[key]);
      }
    }

    return params;
  }
}
