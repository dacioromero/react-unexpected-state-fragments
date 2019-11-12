# React Unexpected State with Fragments

## Update

Turns out this was an intentional decision by the React team. See [Dan Abromov's response](https://github.com/facebook/react/issues/17308#issuecomment-551926185) to the issue I opened about this.

## The Problem(?)

React ignores Fragments when determining if a component is the same instance.

I assume this is because React Fragments are never "called" leading to the call order for the components causing React to determine that it is the same component.

## [Example](https://dacioromero.github.io/react-unexpected-state-fragments/)

This switches back and forth from 2 counters. The notable thing is that the state for the first counter is preserved despite the JSX tree being different.
