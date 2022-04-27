const posts = [
	{
		title: 'Sapper',
		slug: 'cuteblog-sapper',
		description: 'Cuteblog for sapper svelte modern blog',
		cover: 'https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?w=2000',
		html: `
			<p>This is a cuteblog blogging template build with sapper svelte, versy simple and easy to use it. including auto seo so with this concept you can focusing on article content .</p>
			<p>This is project is develope and present by <a href="https://website.axcora.com">axcora technology</a>.</p>
			<p>Lest get started using cuteblog sapper</p>`
	},

	{
		title: 'Installation',
		slug: 'install',
		description: 'How to install cuteblog for sapper svelte ??',
		cover: 'https://img.freepik.com/free-vector/cute-cat-playing-hand-phone-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4231.jpg?w=2000',
		html: `
			<h3>Download</h3>
			<p>You need to download all requipment :</p>
			<ul>
			<li><a href="https://nodejs.org/en/download/">Node download →</a></li>
			<li><a href="https://github.com/mesinkasir/cuteblog-sapper">Cuteblog download →</a></li>
			</ul>
			<h3>Installation</h3>
			<p>Then you can install node on your devices, and open terminal , for check node version you can run <code>node -v</code></p>
			<p>Now we need to install sourcecode files, create new folder on desktop and name it with cuteblog , then we need visit this source code using terminal so run <code>cd C:\Users\pcname\Desktop\cuteblog</code> change pc name with your computer name, and now we can install cuteblog for sapper with run <code>npm install</code></p>
			<h3>Run Project</h3>
			<p>Oke after all installation success now we can run this source code project on your terminal, so you can run <code>npm run dev</code> then open localhost:3000</p>
			<h3>First Work</h3>
			<p>For write and change article you can visit on source code folder visit on blog then open and edit _posts.js using text editor. and save file for update data.</p>
		`
	},

	{
		title: 'Deploy',
		slug: 'delpoy',
		description: 'Deploy cuteblog on cloud hosting now ',
		cover: 'https://img.freepik.com/free-vector/cute-cat-with-fish-food-bowl-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3709.jpg?w=2000',
		html: `
			<p>Now you can deploy this cuteblog project on cloud hosting, so you can use integrate github and heroku or vercel , or you can easy deploy just run <code>npx sapper export</code> then you can push export folder to firebase or surge.</p>
			
		`
	},

	{
		title: 'Donuts',
		slug: 'donation',
		description: 'You can contribute to support us with buy me a donuts.',
		cover: 'https://i.pinimg.com/736x/9f/6f/8f/9f6f8f71f5a2206b51c1867f9dcf81ec.jpg',
		html: `
		<p>And yeah you can contribute to support us with buy me a donuts.</p>
		<p>br>
		with moneygram or western union
		   <br> BANK CENTRAL ASIA
		   <br> ACCOUNT NO : 0181884109
		   <br> ACCOUNT NAME : SUCI CHANIFAH
		   <br> IBAN/SWIFT CODE : CENAIDJA<br>
			 <a href="https://app.midtrans.com/payment-links/1647457988722" class="btn btn-info">Donate Now</a></p>
		`
	},

	{
		title: 'Contact',
		slug: 'contact-us',
		description: 'Need help or information ?? just contact us',
		cover: 'https://img.freepik.com/free-vector/cute-kawaii-smiling-cat-animal-pet-logo-vector-icon-illustration-flat-style_126068-94.jpg',
		html: `
			<p>So if you need help or information , or you need to build modern website project so you can use our website development services , contact us.</p>
			<p>Whatsapp : +6285646104747</p>
			<p>Email : axcora@gmail.com</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
