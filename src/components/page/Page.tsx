import React, { useEffect } from "react";
import { RouteProps } from "react-router";
// Props of page
export interface PageProps extends RouteProps {
    title: string,
    component: React.ComponentType<any>;
    onSetTitle: Function
}
// Component which serves the purpose of a "root route component". 
const Page = (props: PageProps) => {

    useEffect(() => {
        if (props.title) {
            props.onSetTitle(props.title);
        }
    })

    const PageComponent = props.component

    return (
        <PageComponent {...props} />
    )
}

export default Page;