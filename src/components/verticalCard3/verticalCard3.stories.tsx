import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VerticalCard3 from "./verticalCard3";

const meta: Meta<typeof VerticalCard3> = {
  title: "Components/VerticalCard3",
  component: VerticalCard3,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalCard3>;

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
