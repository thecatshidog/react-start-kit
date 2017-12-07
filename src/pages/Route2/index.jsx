import React, { Component } from 'react';
import { Redirect, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes/';

export default class Route2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('route2组件dom创建完成');
  }


  render() {
    return (
      <Switch>
        {
          this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
        <Redirect from="/route2" exact to="/route2/name1" />
      </Switch>
    );
  }
}

Route2.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    routes: PropTypes.any,
  })).isRequired,
};
