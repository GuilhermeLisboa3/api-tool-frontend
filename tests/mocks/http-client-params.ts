import { type HttpMethod } from '@/domain/contracts/http'

import { faker } from '@faker-js/faker'

export const httpClientParams = {
  url: faker.internet.url(),
  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']) as HttpMethod,
  body: { any: faker.lorem.word() },
  headers: { any: faker.lorem.word() },
  statusCode: faker.helpers.arrayElement([200, 201, 204, 400, 401, 403, 500]),
  data: { any: faker.lorem.word() }
}
