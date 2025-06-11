import type { Meta, StoryObj } from "@storybook/react";
import BigHorizontalCard from "./bigHorizontalCard";

const meta: Meta<typeof BigHorizontalCard> = {
  title: "Components/BigHorizontalCard",
  component: BigHorizontalCard,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof BigHorizontalCard>;

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
