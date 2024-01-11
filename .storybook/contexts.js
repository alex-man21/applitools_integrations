import React from 'react';

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [
      // an array of components that is going to be injected to wrap stories
      /* Styled-components ThemeProvider, */
      /* Material-ui ThemeProvider, */
      ThemesWrapper
    ],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'Light Theme', props: { theme: 'light' } },
      { name: 'Dark Theme', props: { theme: 'dark' }, default: true },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
  {
    icon: 'camera',
    title: 'Language',
    components: [
      LangWrapper
    ],
    params: [
      {name: 'Japanese', props: {lang: 'japanese'}},
      {name: 'English', props: {lang: 'english'}, default: true},
    ],
    options: {
      deep: true,
    }
  }
  /* ... */ // multiple contexts setups are supported
];

function ThemesWrapper(props) {
  if (props.theme === 'dark') {
    document.body.style.background = 'lightslategray'
    document.body.style.color = 'white'
  } else {
    document.body.style.background = 'gold'
    document.body.style.color = 'darkslategray'
  }
  return <>{props.children}</>
}

function LangWrapper(props) {
  return <>
    <h1>{props.lang === 'japanese' ? 'いらっしゃいませ' : 'Welcome!'}</h1>
    {props.children}
  </>
}