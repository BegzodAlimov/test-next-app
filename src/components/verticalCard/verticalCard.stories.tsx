import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import VerticalCard1 from "./verticalCard";

const meta: Meta<typeof VerticalCard1> = {
  title: "Components/VerticalCard1",
  component: VerticalCard1,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalCard1>;

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
