import type { Meta, StoryObj } from "@storybook/react";
import ExampleAnimatedButton from "./ExampleAnimatedButton";

const meta: Meta<typeof ExampleAnimatedButton> = {
  title: "AnimatedButton",
  component: ExampleAnimatedButton,
};

export default meta;
type Story = StoryObj<typeof ExampleAnimatedButton>;

export const Primary: Story = {
  args: {},
};
