import React from "react";
// Router
import { Route, Switch } from "react-router-dom";
import routes from "../routes/routes";
// React bootstrap
import Container from 'react-bootstrap/Container';
// Components
import Page from "../components/page/Page";
import Header from "../components/header/Header";



const PublicLayout = (props: any) => {
    const onSetTitle = (title: string) => {
        document.title = title;
    }
    const getRoutes = (routes: any) => {
        return routes.map((prop: any, key: any) => {
            return (
                <Route
                    path={prop.path}
                    key={key}
                    render={props => (
                        <Page {...props}
                            component={prop.component}
                            title={'Mercado Libre | ' + prop.title}
                            onSetTitle={onSetTitle}
                        />
                    )} />
            );
        });
    };
    return (
        <React.Fragment>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main>
                <Container>
                    <Switch>{getRoutes(routes)}</Switch>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default PublicLayout;
