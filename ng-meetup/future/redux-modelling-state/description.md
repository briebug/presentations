Two questions often arise when designing the Redux state object:

What data should go into the state?
How should the state object be organized?

Many applications deal with data that is nested and/or relational in nature, but reducers are easier to write, test, and maintain when the data is normalized. We will talk about guidelines for deciding when to move state into Redux and look at some of the strategies for modeling the data and transforming API responses.
