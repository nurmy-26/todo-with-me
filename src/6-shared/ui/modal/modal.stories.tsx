import type { Meta, StoryObj } from '@storybook/react';
import { fn } from "@storybook/test";
import Modal from '.';

const meta = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: 'lightgrey' }}>
        <h2>Пример содержания модального окна</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris orci. Donec vehicula mauris non felis imperdiet efficitur id id purus. Maecenas turpis est, placerat ut porttitor non, lacinia in ipsum. Fusce tristique nulla et magna gravida feugiat. Quisque vel ex blandit, auctor massa dignissim, gravida tortor. In id dui purus. Nam rutrum congue nisl pharetra dictum. Vestibulum semper aliquam velit quis ultricies.</p>
      </div>
    ),
  },
};