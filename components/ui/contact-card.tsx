import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Get In Touch',
	description = 'Have questions about my services? Fill out the form and I\'ll get back to you within 24 hours.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-zinc-500" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-zinc-500" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-zinc-500" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-zinc-500" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-8">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tighter uppercase font-heading">
						{title}
					</h1>
					<p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg font-medium">
						{description}
					</p>
					<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-8">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-muted/40 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l border-white/5',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-3 py-3', className)} {...props}>
			<div className="bg-muted/40 rounded-lg p-3 border border-white/5 shrink-0">
				<Icon className="h-5 w-5 text-zinc-400" />
			</div>
			<div className="min-w-0">
				<p className="font-bold text-xs uppercase tracking-widest text-zinc-500">{label}</p>
				<p className="text-white font-medium break-all text-sm md:text-base">{value}</p>
			</div>
		</div>
	);
}
