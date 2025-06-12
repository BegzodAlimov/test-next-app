
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CardHorizontal from './cardHorizontal';

const meta: Meta<typeof CardHorizontal> = {
  title: 'Components/CardHorizontal',
  component: CardHorizontal,
  tags: ['autodocs'], // optional
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CardHorizontal>;

export const Primary: Story = {
  args: {
    text: 'Click me',
  }
};

export const LongText: Story = {
  args: {
    text: 'Click me please, I am a very long button',
  },
};
