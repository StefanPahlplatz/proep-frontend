import * as _ from 'lodash'

export class JsonFormatConvertor {
  public static objectKeysToCamelCase(object: any): any {
    const camelCaseObject = {}
    const camelCaseArray = []
    _.forEach(
      object,
      function(value: any, key: string) {
        if (_.isObject(value) || _.isArray(value)) {
          // checks that a value is a plain object, not an array or string etc
          value = this.objectKeysToCamelCase(value) // recursively update keys of any values that are also objects
        }
        if (_.isArray(object)) {
          camelCaseArray.push(value)
        } else {
          camelCaseObject[_.camelCase(key)] = value
        }
      }.bind(this)
    )
    if (_.isArray(object)) {
      return camelCaseArray
    } else {
      return camelCaseObject
    }
  }

  public static objectKeysToSnakeCase(object: any): any {
    const snakeCaseObject = {}
    const snakeCaseArray = []
    _.forEach(
      object,
      function(value: any, key: string) {
        if (_.isObject(value) || _.isArray(value)) {
          // checks that a value is a plain object, not an array or string etc
          value = this.objectKeysToSnakeCase(value) // recursively update keys of any values that are also objects
        }
        if (_.isArray(object)) {
          snakeCaseArray.push(value)
        } else {
          snakeCaseObject[_.snakeCase(key)] = value
        }
      }.bind(this)
    )
    if (_.isArray(object)) {
      return snakeCaseArray
    } else {
      return snakeCaseObject
    }
  }
}
