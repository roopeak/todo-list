import './styles.css'

import { loadUI } from './modules/loadUI';

export let tasks = [
	{
		title: 'Clean a house',
		dueDate: 'not set',
		priority: 'normal',
	},
	{
		title: 'Take out trash',
		dueDate: '1/Mar/2025',
		priority: 'low',
	},
	{
		title: 'Study for an exam',
		dueDate: '5/Mar/2025',
		priority: 'high',
	},
	{
		title: 'Pay invoices',
		dueDate: '25/Apr/2025',
		priority: 'high',
	},
	{
		title: 'Buy groceries',
		dueDate: '15/Mar/2025',
		priority: 'low',
	}
	
]

loadUI();
