import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/TextInput.vue";


const wrapper = shallowMount(TextInput);
describe("TextInput.vue", () => {
  
  it("input value: Pot spot ; ans: True", async () => {
    wrapper
      .find(".text-input")
      .setValue("Pot spot")
    const button = wrapper.find(".check-btn")
    await button.trigger("click")
    expect(wrapper.get(".ansArea").text()).toBe("True")  
  });

  it("input value: ABC ; ans: False", async () => {
    wrapper
      .find(".text-input")
      .setValue("ABC")
    const button = wrapper.find(".check-btn")
    await button.trigger("click")
    expect(wrapper.get(".ansArea").text()).toBe("False")  
  });

  it("input value: AAA ; ans: True", async () => {
    wrapper
      .find(".text-input")
      .setValue("AAA")
    const button = wrapper.find(".check-btn")
    await button.trigger("click")
    expect(wrapper.get(".ansArea").text()).toBe("True")  
  });

  it("input value: Ma dam ; ans: True", async () => {
    wrapper
      .find(".text-input")
      .setValue("Ma dam")
    const button = wrapper.find(".check-btn")
    await button.trigger("click")
    expect(wrapper.get(".ansArea").text()).toBe("True")  
  });

  it("input value: Charles; ans: False", async () => {
    wrapper
      .find(".text-input")
      .setValue("Charles")
    const button = wrapper.find(".check-btn")
    await button.trigger("click")
    expect(wrapper.get(".ansArea").text()).toBe("False")  
  });
});
