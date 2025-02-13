import type { Meta, StoryObj } from '@storybook/vue3'

import Pagination from './RPagination.vue'

const PaginationStory = {
  title: 'Components/Pagination',
  component: Pagination,
  setup: (args: typeof Pagination) => ({
    args,
  }),
  template: '<Pagination v-bind="args" />',
  args: {
    page: 1,
    total: 10,
    perPage: 10,
    totalItems: 100,
    infoText: 'Showing {from} to {to} of {total} entries',
  },
  argTypes: {
    'onUpdate:page': { action: 'update:page' },
  },
  tags: ['autodocs'],
} as Meta<typeof Pagination>

export default PaginationStory

type Story = StoryObj<typeof PaginationStory>

export const Overview: Story = {}
