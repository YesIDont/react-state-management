Stores current architecture

- multiple monolitic stores linked to one another.
- few small stores relatively easy to refactor
- components internal state made with useState or useReducer

What problems we could solve by using Jotai or Zustand?

- no issue with components requireing data from provider that is used within the same component
- less providers
- less boilerplate in general

Goals

- improve the codebase with ease to learn, modify and maitain code
- use as much of the current code if possible

Restrictions

- any refactor would have to be minimal with the smallest impact on tests

From the point of view of business is it vialable to refactor any of the AutoTrader stores to Jotai or Zustand?

- Jotai and reducers
- differences in approach
- tests

Should we start using Jotai or Zustand to create new stores?

- AutoTrader is not bound by package size as much as regular web page
-
- how to create new state with Jotai, should we use Redux with it?
- how to create new state with Zustand
- tests
