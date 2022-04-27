<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>
<script>
	export let post;
</script>
<svelte:head><title>{post.title}</title><meta name="description" content="{post.description}"/><meta name="author" content="axcora"><meta content='{post.title}' property='og:title'/><meta content='website' property='og:type'/><meta content='{post.url}' property='og:url'/><meta content='{post.cover}' property='og:image'/><meta content="{post.description}" property='og:description'/><meta content='{post.title}' property='og:site_name'/><meta content='en_US' property='og:locale'/><meta content='summary_large_image' name='twitter:card'/><meta content='{post.title}' name='twitter:title'/><meta content='@hockeycorp' name='twitter:site'/><meta content='@hockeycorp' name='twitter:creator'/><meta content='{post.description}' name='twitter:description'/><meta content='{post.cover}' name='twitter:image'/><link rel="icon" type="image/x-icon" href="{post.cover}"/></svelte:head>

<div class="col-12 p-3">
	<div class="card p-1">
  <img class="card-img-top" alt="{post.title}" 
  src="{post.cover}"/>
  <div class="card-content p-3 p-md-5">
  <h1><a href="blog/{post.slug}">{post.title}</a> <span class="cute">✏️</span></h1>
  <h3>📝 {post.description}</h3>
  <p class="dotted"/>
{@html post.html}
</div>
</div>
</div>
