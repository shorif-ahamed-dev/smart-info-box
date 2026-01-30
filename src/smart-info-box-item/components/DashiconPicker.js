import { Button } from "@wordpress/components";
import "./dashicon-picker.scss";
import { DASHICONS } from "./dashicons";
import { lazy, Suspense } from 'react';
import * as icons from 'lucide-react';

export default function DashiconPicker({ value, onChange }) {
	const renderIcon = (iconName) => {
		const Icon = icons[iconName];
		return Icon ? <Icon size={24} strokeWidth={1.5} /> : null;
	};

	return (
		<div style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(32px, 1fr))',
			gap: '6px',
			paddingTop: "12px",
			overflowY: 'auto',
			borderRadius: '4px',
			backgroundColor: '#fff'
		}}>
			{DASHICONS.map((iconName) => (
				<button
					role="button"
					key={iconName}
					onClick={() => onChange(iconName)}
					style={{
						width: '32px',
						height: '32px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						border: value === iconName ? '1px solid #b48de8ff' : '1px solid #ddd',
						borderRadius: '4px',
						backgroundColor: value === iconName ? '#EFE6FB' : '#fff',
						cursor: 'pointer',
						padding: '4px',
						transition: 'all 0.2s ease',
						outline: 'none',
						color: '#1e1e1e'
					}}
					onMouseEnter={(e) => {
						if (value !== iconName) {
							e.currentTarget.style.backgroundColor = '#f6f7f7';
							e.currentTarget.style.borderColor = '#2271b1';
						}
					}}
					onMouseLeave={(e) => {
						if (value !== iconName) {
							e.currentTarget.style.backgroundColor = '#fff';
							e.currentTarget.style.borderColor = '#ddd';
						}
					}}
				>
					{renderIcon(iconName)}
				</button>
			))}
		</div>
	);
}