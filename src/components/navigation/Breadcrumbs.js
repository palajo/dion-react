import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
    <div className="Breadcrumbs">
    </div>
));


export default Breadcrumbs;
