import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildAiDocuments, pageFromHtml } from './generate.mjs';
import { canonicalUrl, markdownPathname } from './urls.mjs';
import { noindexPathnames } from '../noindex-routes.mjs';

const SITE = 'https://amoeba.design';

test('markdown paths follow the route, and the homepage is index.md', () => {
	assert.equal(markdownPathname('/'), '/index.md');
	assert.equal(markdownPathname('/work'), '/work.md');
	assert.equal(markdownPathname('/work/'), '/work.md');
	assert.equal(markdownPathname('/knowledge/shadcn-lint'), '/knowledge/shadcn-lint.md');
	assert.equal(canonicalUrl('/', SITE), 'https://amoeba.design/');
	assert.equal(canonicalUrl('/info', SITE), 'https://amoeba.design/info');
});

test('noindex pathnames include knowledge stubs and compare routes', () => {
	const paths = noindexPathnames();
	assert.equal(paths.size, 10);
	assert.ok(paths.has('/knowledge/shadcn-lint'));
	assert.ok(paths.has('/knowledge/fix-ai-slop-ui'));
	assert.ok(paths.has('/compare/rent-a-design-engineer-vs-hiring'));
	assert.equal(paths.has('/knowledge'), false);
	assert.equal(paths.has('/rent-a-design-engineer'), false);
	assert.equal(paths.has('/tools/ui-polish-checklist'), false);
});

test('indexable pages become llms.txt entries and coming-soon articles do not', () => {
	const noindex = new Set(['/knowledge/coming-soon', '/knowledge/shadcn-lint']);
	const { files, pages } = buildAiDocuments(
		[
			{
				pathname: '/',
				html: `<title>Home</title><meta name="description" content="Studio summary.">
					<h1>Amoeba is a design engineering studio for ambitious B2B software companies.</h1>
					<main>
						<h2>Rent a design engineer</h2>
						<p>Is your app rough around the edges? I’ll ship polished UI as PRs.</p>
						<p class="type-display price">$500 / week</p>
						<h3>Expertise</h3>
						<ul><li>Product Design</li><li>Design Systems</li></ul>
					</main>
					<footer><a href="https://github.com/amoebadesign">GitHub</a></footer>`,
			},
			{
				pathname: '/info',
				html: `<meta name="description" content="Run by Bryan King.">
					<main><h1>Amoeba is run by <a href="https://x.com/bryan_king">Bryan King</a> from Newport, Kentucky.</h1>
					<h3>Colophon</h3><p>Powered by <a href="https://astro.build">Astro</a>.</p></main>`,
			},
			{
				pathname: '/knowledge',
				html: `<meta name="description" content="Knowledge from Amoeba.">
					<main><h1>Knowledge</h1><ul>
						<li><h2><a href="/knowledge/shadcn-lint">How to use shadcn/lint</a></h2><p>Coming soon</p></li>
						<li><h2><a href="/knowledge/published">A real article</a></h2><p>Published description</p></li>
					</ul></main>`,
			},
			{
				pathname: '/knowledge/shadcn-lint',
				html: `<meta name="robots" content="noindex, follow"><meta name="description" content="Stub">
					<main><h1>How to use shadcn/lint</h1><p>Coming soon</p></main>`,
			},
			{
				pathname: '/knowledge/published',
				html: `<meta name="description" content="Published description">
					<main><h1>A real article</h1><p>The body is real.</p></main>`,
			},
			{
				pathname: '/404',
				html: `<main><h1>Not found</h1></main>`,
			},
		],
		{ site: SITE, noindexPathnames: noindex },
	);

	const llms = files.get('/llms.txt');
	assert.ok(llms);
	assert.match(llms, /^# Amoeba\n\n> Amoeba is a design engineering studio for ambitious B2B software companies, run by Bryan King from Newport, Kentucky\.\n/);
	assert.match(llms, /The published offer is Rent a design engineer: Is your app rough around the edges\?/);
	assert.match(llms, /\$500 \/ week/);
	assert.match(llms, /test pricing/);
	assert.match(llms, /Expertise named on the homepage: Product Design and Design Systems\./);
	assert.match(llms, /\[GitHub\]\(https:\/\/github\.com\/amoebadesign\)/);
	assert.match(llms, /\[Home\]\(https:\/\/amoeba\.design\/index\.md\)/);
	assert.match(llms, /\[Info\]\(https:\/\/amoeba\.design\/info\.md\)/);
	assert.match(llms, /\[Knowledge\]\(https:\/\/amoeba\.design\/knowledge\.md\)/);
	assert.match(llms, /\[A real article\]\(https:\/\/amoeba\.design\/knowledge\/published\.md\)/);
	assert.doesNotMatch(llms, /shadcn/);
	assert.doesNotMatch(llms, /Coming soon/);
	assert.doesNotMatch(llms, /\/404/);
	assert.equal(
		pages.map((page) => page.pathname).join(','),
		'/,/info,/knowledge,/knowledge/published',
	);

	const knowledge = files.get('/knowledge.md');
	assert.ok(knowledge);
	assert.match(knowledge, /\[A real article\]\(https:\/\/amoeba\.design\/knowledge\/published\.md\)/);
	assert.doesNotMatch(knowledge, /shadcn/);
	assert.doesNotMatch(knowledge, /Coming soon/);

	const article = files.get('/knowledge/published.md');
	assert.match(article, /^# A real article\n/);
	assert.match(article, /Canonical: https:\/\/amoeba\.design\/knowledge\/published\n/);
	assert.match(article, /The body is real\./);
	assert.equal(files.has('/knowledge/shadcn-lint.md'), false);
	assert.equal(files.has('/404.md'), false);

	const home = files.get('/index.md');
	assert.match(home, /\$500 \/ week/);
	assert.match(home, /That figure is test pricing, and the offer is not yet formalized\./);
	assert.match(home, /- Product Design\n- Design Systems\n/);
	assert.doesNotMatch(home, /5,000/);

	const info = files.get('/info.md');
	assert.match(info, /\]\(https:\/\/astro\.build\)/);
	assert.doesNotMatch(info, /astro\.build\//);
});

test('work screenshots keep alt text and drop the lightbox chrome', () => {
	const page = pageFromHtml(
		`<meta name="description" content="Product UI screenshots.">
		<main><h1 class="page-heading">Work</h1>
			<button aria-label="View larger: Product UI screenshot"><img alt="Product UI screenshot" src="/_astro/work-1.webp"></button>
			<dialog><button>Close</button><button>Previous</button><button>Next</button><img alt=""></dialog>
		</main>`,
		'/work',
		{ site: SITE, noindexPathnames: new Set() },
	);
	assert.match(page.markdown, /^- Product UI screenshot$/m);
	assert.doesNotMatch(page.markdown, /- Product UI screenshot\n\n-/);
	assert.doesNotMatch(page.markdown, /Close|Previous|Next/);
	assert.match(page.markdown, /Canonical: https:\/\/amoeba\.design\/work\n/);
});
