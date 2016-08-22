// libs
import React from 'react';
import {connect} from 'react-redux';
// actions
import {loadSubscriptionPage} from 'actions/Subscription';
// components
import EditForm from './Form';

class SubscriptionEdit extends React.Component {
  componentWillMount() {
    this.props.loadSubscriptionPage();
  }

  render() {
    return (<div>
      <EditForm key={this.props.subscription.id} subscription={this.props.subscription} />
    </div>);
  }
}

function select(state, ownProps) {
  const {id} = ownProps.params;
  const {subscriptions} = state.entities;
  const subscription = (id && subscriptions && subscriptions[id]) ? subscriptions[id] : {};

  return {
    subscription,
  };
}

export default connect(select, {
  loadSubscriptionPage,
})(SubscriptionEdit);