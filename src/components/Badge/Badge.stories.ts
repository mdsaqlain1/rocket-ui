import type { Meta, StoryObj } from '@storybook/vue3';
import Icon from '../Icon/RIcon.vue';
import Button from '../Button/RButton.vue';
import Badge from './RBadge.vue';

const DefaultArgs = {
  variant: 'primary',
  placement: 'right',
  overlap: false,
  hover: false,
  content: '',
  outside: false,
};
const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'success', 'error', 'warning', 'neutral'],
  },
  placement: {
    type: 'select',
    options: ['right', 'bottom', 'left'],
  },
  onClick: {
    action: 'click',
  },
};

const BadgeStory = {
  title: 'Components/Badge',
  render: (args: any) => ({
    components: { Badge, Icon },
    setup: () => {
      return { args };
    },
    template: `
    <Badge v-bind="args">
      <template v-slot:default>
        <Icon name="mdiEmail" size="24" />
      </template>
    </Badge>
    `,
    args: DefaultArgs,
    argTypes: DefaultArgTypes,
  }),
} as Meta<typeof Badge>;

export default BadgeStory;

type Story = StoryObj<typeof BadgeStory>;

export const Overview: Story = {
  args: {
    ...DefaultArgs,
    placement: 'right',
  },
};

export const Right: Story = {
  args: {
    ...DefaultArgs,
    placement: 'right',
  },
};

export const WithContent = {
  render: (args: any) => ({
    components: { Badge, Button },
    setup() {
      return { args };
    },
    template: `
    <Badge v-bind="args">
      <template v-slot:default>
        <Button icon="add" variant="primary">Hello World</Button>
      </template>
    </Badge>
    `,
  }),
  args: {
    ...DefaultArgs,
    content: '32',
  },
};

export const Hover: Story = {
  args: {
    ...DefaultArgs,
    hover: true,
  },
};

export const Bottom: Story = {
  args: {
    ...DefaultArgs,
    placement: 'bottom',
  },
};

export const Left: Story = {
  args: {
    ...DefaultArgs,
    placement: 'left',
  },
};
