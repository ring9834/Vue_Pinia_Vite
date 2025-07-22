import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

// describe: Groups related tests into a suite, providing a way to organize tests (for example, for a specific component).
describe('HelloWorld', () => {
  // it: Defines a single test case with the description 'renders properly', which includes the logic to be tested and the expected outcome.
  it('renders properly', () => {
    // Uses mount to render the HelloWorld component in a test environment.
    // Passes an options object { props: { msg: 'Hello Vitest1' } }, which provides the msg prop to the component with the value 'Hello Vitest1'.
    // mount: Creates a wrapper around the component, allowing interaction and inspection of the rendered output.
    // props: Allows passing properties to the component, simulating how it would be used in a real application.
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest1' } })
    // expect: Provides assertion methods to verify expected outcomes (checking if a value matches an expectation).
    // wrapper.text(): Retrieves the text content of the rendered component (all text within its DOM tree).
    // toContain('Hello Vitest1'): Asserts that the component’s text includes the string 'Hello Vitest1'.
    expect(wrapper.text()).toContain('Hello Vitest1')
  })
})
