import { mountSuspended } from '@nuxt/test-utils/runtime'
import { HomeContent } from '#components'
import { expect, it, vi } from 'vitest';

const mockResponse = {
  healthStatus: 'OK',
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  }),
);

it('can mount some component', async () => {
  const component = await mountSuspended(HomeContent)
  expect(component.text()).toMatchInlineSnapshot(
    '"Welcome to Our Minimal App!The backend says:"'
  )
})
