import React, { Component } from 'react'

import { 
	Layout,
	Card, CardHeader, CardSection,
	LinearProgress,
	List, ListItem, ListItemGraphic,
	Radio,
	Typography
} from "@codedojo/mdc-react";

import * as actions from '../store/actions.js';

import './index.css'

export default class App extends Component {
	render() {
		return (
			<Layout element='main'>
					<Card>
						<CardHeader 
							title='Наш перший тест на знання JavaScript'
							subtitle='Питання 1 з 6'
						/>

						<LinearProgress value='25'/>

						<CardSection primary>
							<Typography>Текст нашого питання</Typography>

							<List>
								<ListItem>
									<ListItemGraphic>
										<Radio />
									</ListItemGraphic>
								<Typography> Варіант відповіді</Typography>
								</ListItem>
							</List>

						</CardSection>
					</Card>					
			</Layout>
		)
	}
}
