import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VerticalCard2 from "./verticalCard2";

const meta: Meta<typeof VerticalCard2> = {
  title: "Components/VerticalCard2",
  component: VerticalCard2,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalCard2>;

export const Primary: Story = {
  args: {
    text: "Click me",
  },
};

export const LongText: Story = {
  args: {
    text: "Click me please, I am a very long button",
  },
};
