import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const WithText = () => {
  return (
    <Button>Hello Button</Button>
  );
};

export const WithEmoji = () => {
  return (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  );
};