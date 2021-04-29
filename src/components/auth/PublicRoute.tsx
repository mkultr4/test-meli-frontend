import React from 'react';
// Route
import { Route, RouteProps } from 'react-router-dom';

export interface PublicRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}
const PublicRoute = ({ component, ...rest }: PublicRouteProps) => {
    return (
        <Route {...rest} component={component} />
    );
};

export default PublicRoute;