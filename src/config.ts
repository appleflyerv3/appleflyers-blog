import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	about: {
		path: "/about",
		title: "about",
	},
};

export const SITE = {
	// Your site's detail?
	name: "appleflyer's blog",
	title: "appleflyer's blog | astro-ink",
	description: "simple blog. made with astro-ink.",
	url: "https://appleflyers-blog.vercel.app/",
	githubUrl: "https://github.com/appleflyer",
	listDrafts: true,
	image:
		"https://static.vecteezy.com/system/resources/previews/011/614/725/original/apple-pixel-illustration-of-8-bit-game-assets-vector.jpg",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "appleflyer", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "appleflyerv2", // Example: FredKSchott
	// Author: Image external source
	authorImage: "https://static.vecteezy.com/system/resources/previews/011/614/725/original/apple-pixel-illustration-of-8-bit-game-assets-vector.jpg", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"flying apples for a living.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
