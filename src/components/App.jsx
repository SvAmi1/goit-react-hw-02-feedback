
import { Component } from "react"
// import { render } from "react-dom";
import { Layout } from "./Layout";
import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {};

  countPositiveFeedbackPercentage() {};

  render () {
   return (
    <Layout>
      <FeedbackTitle/>

    </Layout>
      
    
  );
};
}