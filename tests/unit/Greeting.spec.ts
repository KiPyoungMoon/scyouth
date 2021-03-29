import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("Greeting을 랜더링한다.", () => {
    const wrapper = shallowMount(Greeting);

    expect(wrapper.text()).equals("Hello World!");
  });
});
