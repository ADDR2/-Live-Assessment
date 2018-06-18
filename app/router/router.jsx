import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import CalendarList from "CalendarList";
import Form from "Form";

export default (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Form}/>
			<Route exact path="/calendar" component={CalendarList}/>
		</Switch>
	</HashRouter>
);