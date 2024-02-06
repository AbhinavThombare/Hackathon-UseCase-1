import * as React from 'react';
import Textarea from '@mui/joy/Textarea';

export default function TriggerFocusTextarea() {
  return (
    <Textarea
      placeholder="Enter some text"
      sx={{
        '--Textarea-focused': 1,
      }}
    />
  );
}