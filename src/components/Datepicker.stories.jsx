import React from 'react';
import Datepicker from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
};

export const Default = () => <Datepicker />;

// Note: to show the calendar open you can control component state via wrapper
export const CalendarOpen = () => {
  // Render the datepicker and programmatically open via ref is not implemented,
  // so this story demonstrates the default control. Manual interaction is expected.
  return <Datepicker />;
};
