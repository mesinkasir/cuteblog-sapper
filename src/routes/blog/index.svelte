<script context="module">
	let title= "Cuteblog 🥳";
	let description= "SEO blog template with svelte sapper cuteblog free download sourcecode gratis";
	let cover= "https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?w=2000";
	let url= "https://cutesapper.axcora.my.id";
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>
<svelte:head><title>{title}</title><meta name="description" content="{description}"/><meta name="author" content="axcora"><meta content='{title}' property='og:title'/><meta content='website' property='og:type'/><meta content='{url}' property='og:url'/><meta content='{cover}' property='og:image'/><meta content="{description}" property='og:description'/><meta content='{title}' property='og:site_name'/><meta content='en_US' property='og:locale'/><meta content='summary_large_image' name='twitter:card'/><meta content='{title}' name='twitter:title'/><meta content='@hockeycorp' name='twitter:site'/><meta content='@hockeycorp' name='twitter:creator'/><meta content='{description}' name='twitter:description'/><meta content='{cover}' name='twitter:image'/><link rel="icon" type="image/x-icon" href="{cover}"/></svelte:head>
<h1><a href="/">{title}</a></h1><h2>{description}</h2><p>Documentation <a href="https://www.hockeycomputindo.com/2022/04/built-new-modern-website-with-cuteblog.html">bahasa indonesia disini →</a></p><p><a href="https://axcora.my.id/pico/cuteblog/project">Download Cuteblog for other technology →</a></p>
<div class="row">
		{#each posts as post}
	<div class="col-md-4 p-3">
	<a class="card p-1" rel="prefetch" href="blog/{post.slug}">
	<img class="img-fluid card" alt={post.title} src={post.cover}/>
	<div class="card-content p-3">
		<h3>{post.title} <span class="cute">✏️</span></h3>
		<p>📝 {post.description}</p>
	</div>
	</a>
</div>
	{/each}
</div>
