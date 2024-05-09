import theme from '@config/theme';
import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';
import type { AdditionalRobotsProps } from 'next-seo/lib/types';

export const BaseUrl = 'https://wolfstar.rocks';
export const DefaultSeoProps: DefaultSeoPropsType = {
	titleTemplate: 'WolfStar | %s',
	title: 'Home',
	description: 'WolfStar is a multipurpose Discord bot designed to handle most tasks, helping users manage their servers easily.',
	canonical: BaseUrl,
	additionalMetaTags: [
		{ name: 'url', content: BaseUrl },
		{ name: 'identifier-URL', content: BaseUrl },
		{ name: 'shortlink', content: BaseUrl },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'keywords', content: 'discord, bot, wolfstar, moderation, automation, kyra, favna, kyranet, cyborg, pokemon' },
		{
			name: 'summary',
			content: 'WolfStar is a multipurpose Discord bot designed to handle most tasks, helping users manage their servers easily.'
		},
		{ name: 'subject', content: 'Dashboard for WolfStar, a multifunctional Discord bot.' },
		{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
		{ name: 'googlebot', content: 'index,follow' },
		{ name: 'author', content: `WolfStar Project, contact@wolfstar.rocks` },
		{ name: 'owner', content: `WolfStar Project, contact@wolfstar.rocks` },
		{ name: 'designer', content: `WolfStar Project, contact@wolfstar.rocks` },
		{ name: 'reply-to', content: 'contact@wolfstar.rocks' },
		{ name: 'target', content: 'all' },
		{ name: 'audience', content: 'all' },
		{ name: 'coverage', content: 'Worldwide' },
		{ name: 'distribution', content: 'Global' },
		{ name: 'rating', content: 'safe for kids' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		{ name: 'HandheldFriendly', content: 'True' },
		{ name: 'apple-mobile-web-app-title', content: 'WolfStar Dashboard' },
		{ name: 'application-name', content: 'WolfStar' },
		{ name: 'msapplication-TileColor', content: theme.palette.primary.main },
		{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
		{ name: 'msapplication-config', content: '/icons/browserconfig.xml' },
		{ name: 'theme-color', content: theme.palette.primary.main },
		{ name: 'revisit-after', content: '7 days' },
		{ property: 'og:email', content: 'contact@wolfstar.rocks' }
	],
	openGraph: {
		title: 'WolfStar Dashboard',
		url: BaseUrl,
		images: [
			{
				url: `${BaseUrl}/icons/opengraph.png`,
				alt: 'OpenGraphImage',
				width: 1024,
				height: 512
			}
		],
		type: 'website',
		locale: 'en_US',
		site_name: 'WolfStar'
	}
};
export const robotBlockingPageProps: AdditionalRobotsProps = {
	nosnippet: true,
	notranslate: true,
	noimageindex: true,
	noarchive: true,
	maxSnippet: -1,
	maxImagePreview: 'none',
	maxVideoPreview: -1
};

export default DefaultSeoProps;
