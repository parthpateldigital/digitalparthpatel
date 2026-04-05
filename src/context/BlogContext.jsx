import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

const initialPosts = [
    {
        id: 'digital-transformation-2026',
        title: 'Digital Transformation 2026: A Strategic Roadmap',
        excerpt: 'How businesses are evolving beyond simple digitization to become truly AI-native organizations.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
        date: 'Apr 05, 2024',
        author: 'Parth Patel',
        category: 'Strategy',
        status: 'Published',
        content: `As we cross into the mid-2020s, Digital Transformation is no longer about moving processes to the cloud or adopting new software. It is about restructuring the very DNA of an organization to be AI-native and data-driven.

        1. The Shift to AI-Native Operations
        Being "AI-native" means that artificial intelligence is integrated into every workflow, from customer service to supply chain management. It's not just a tool; it's the engine that drives decision-making and innovation.

        2. Data Democratization and Sovereignty
        Data is the lifeblood of the modern enterprise. However, the focus has shifted from merely collecting data to ensuring its quality and accessibility. Businesses are now prioritizing data sovereignty—owning and controlling their data infrastructure rather than relying solely on third-party platforms.

        3. Personalized Customer Experiences at Scale
        With the help of LLMs and advanced analytics, brands can now offer hyper-personalized experiences to millions of customers simultaneously. This level of personalization creates deeper brand loyalty and significantly higher lifetime value.

        4. Reskilling for the Future
        The most successful companies in 2026 will be those that invest heavily in their people. Digital transformation is as much a cultural shift as it is a technical one. Training employees to work alongside AI is the most critical investment a business can make.

        The journey toward digital maturity is ongoing. Those who view transformation as a one-time project will be left behind, while those who embrace constant evolution will lead the market.`
    },
    {
        id: 'seo-trends-2026',
        title: 'Future of SEO: Top Trends to Watch in 2026',
        excerpt: 'Dive deep into AI-driven search, GEO optimization, and the rise of immersive 3D experiences in the coming year.',
        image: 'https://images.unsplash.com/photo-1664575602554-20d7ca1424b5?auto=format&fit=crop&q=80&w=1200',
        date: 'Mar 10, 2024',
        author: 'Parth Patel',
        category: 'SEO',
        status: 'Published',
        content: `Search Engine Optimization (SEO) is undergoing a seismic shift as we head towards 2026. The traditional methods of keyword stuffing and backlink building are being replaced by more sophisticated, AI-driven approaches and 3D immersive experiences. Understanding these trends is crucial for any business looking to maintain its search engine visibility.

        1. The Rise of Generative Engine Optimization (GEO)
        With the emergence of Search Generative Experiences (SGE) from Google and other AI-driven search engines, GEO is becoming the new frontier. Instead of just ranking for links, websites must now focus on providing high-quality, cited information that AI engines can synthesize into direct answers. This means structured data and clear, authoritative content are more important than ever.

        2. Immersive 3D Search & Spatial SEO
        As we approach 2026, search is moving beyond 2D results. Immersive 3D models and augmented reality (AR) are becoming ranking signals. Websites that provide interactive 3D product views and spatial data will have a distinct advantage in both mobile and AI-driven search results.

        3. Core Web Vitals and User Experience
        Speed and responsiveness remain critical. Google's focus on Core Web Vitals (LCP, FID, CLS) means that a site's technical performance directly impacts its ranking. A seamless, mobile-first experience is no longer optional; it is a requirement.

        4. Video and Voice Search Integration
        As more users utilize voice assistants and consume short-form video, SEO must adapt. Optimizing for conversational queries and utilizing video transcripts are key strategies for 2026.

        In conclusion, the future of SEO is about human-centric content supported by technical excellence and AI awareness. Businesses that adapt to these changes now will dominate the search results of tomorrow.`
    },
    {
        id: 'social-media-roi',
        title: 'Mastering Social Media ROI for Small Businesses',
        excerpt: 'Learn how to transition from vanity metrics to actual sales using strategic SMM and retargeting funnels.',
        image: '/images/social-media-roi-guide.jpg',
        date: 'Mar 08, 2024',
        author: 'Parth Patel',
        category: 'SMM',
        status: 'Published',
        content: `For many small business owners, social media feels like a black hole for time and money. Thousands of "likes" and "shares" may look good on paper, but if they don't translate into sales, they are nothing more than vanity metrics. To truly master Social Media Marketing (SMM), you must focus on Return on Investment (ROI).

        1. Defining Your Business Objectives
        Before posting a single reel, you must know what you want to achieve. Is it brand awareness, lead generation, or direct sales? Each objective requires a different set of Key Performance Indicators (KPIs) and content strategies.

        2. The Power of Retargeting Funnels
        Most users won't buy from you the first time they see your ad. A strategic retargeting funnel ensures that your brand stays top-of-mind. By showing different content to users based on their previous interactions, you can guide them through the buyer's journey from awareness to conversion.

        3. High-Conversion Content Creation
        Good content isn't just about pretty pictures; it's about solving problems. Educational content, customer testimonials, and behind-the-scenes looks build trust. Trust is the currency of the digital age.

        4. Data-Driven Decisions
        Utilize built-in analytics on platforms like Instagram and Meta to understand what works. Track click-through rates (CTR) and conversion costs. Stop spending money on what doesn't work and double down on what does.

        Mastering ROI is about being intentional with every post and every dollar. When you treat social media as a business tool rather than a playground, the results follow.`
    },
    {
        id: 'ppc-automation-secrets',
        title: 'PPC Automation: How to Lower CPC with AI Bidding',
        excerpt: 'Discover how machine learning algorithms can manage your ad spend more effectively than manual bidding.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        date: 'Mar 05, 2024',
        author: 'Parth Patel',
        category: 'Paid Ads',
        status: 'Published',
        content: `Paid Advertising is becoming increasingly complex. Between Google Ads, Meta Ads, and specialized platforms, managing PPC campaigns manually is becoming a full-time job. This is where automation and AI bidding come into play.

        1. Smart Bidding Strategies
        Google's Smart Bidding uses machine learning to optimize for conversions or conversion value in every single auction. Whether it's Target CPA (Cost Per Acquisition) or Target ROAS (Return on Ad Spend), AI can analyze millions of data points in real-time to decide how much to bid for a specific user.

        2. Eliminating Wasted Ad Spend
        Automation tools can help identify and eliminate low-performing keywords and placements. By setting up rules to pause ads with high spend and low conversion rates, you can ensure that your budget is always being used effectively.

        3. Dynamic Search Ads (DSA)
        DSA uses your website content to target searches automatically. It's an excellent way to capture traffic that you might miss with keyword-based targeting alone.

        4. The Human Element in Automation
        Automation is not a "set and forget" solution. It requires human oversight to set the right goals, provide the right creative inputs, and adjust strategies based on real-world business changes.

        Leveraging PPC automation allows you to focus on high-level strategy while the machines handle the technical heavy lifting, ultimately resulting in lower CPC and higher revenue.`
    },
    {
        id: 'local-seo-blueprint',
        title: 'The Ultimate Local SEO Blueprint for 2024',
        excerpt: 'Get your business on the map. Strategic tips for Google Business Profile and local citation dominance.',
        image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1200',
        date: 'Mar 02, 2024',
        author: 'Parth Patel',
        category: 'SEO',
        status: 'Published',
        content: `If you have a local business, your most important digital asset isn't your website—it's your Google Business Profile (GBP). Local SEO is what determines whether you appear when a potential customer searches for "near me" services.

        1. Optimizing Your Google Business Profile
        A fully optimized GBP can significantly increase your local search visibility. This includes accurate business hours, a detailed description, high-quality photos, and consistently responding to reviews. Reviews are particularly powerful for building local trust.

        2. Local Citations and Consistency
        Your business Name, Address, and Phone number (NAP) must be consistent across the web. Listing your business in local directories and industry-specific sites helps Google verify your location and authority.

        3. Local Link Building
        Unlike traditional SEO, local SEO benefits greatly from links from other local businesses, newspapers, and organizations. Sponsoring local events or being featured in local blogs can give you a massive boost in geo-targeted results.

        4. Creating Local Content
        Writing about local events, news, or issues on your website tells both users and search engines that you are deeply integrated into your community.

        Following this blueprint will ensure that your business stays at the top of the local map pack, driving consistent foot traffic and local leads.`
    },
    {
        id: 'content-marketing-authority',
        title: 'Building Brand Authority through Quality Content',
        excerpt: 'Why "Content is King" still holds true and how to create pillars that establish you as a market leader.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 28, 2024',
        author: 'Parth Patel',
        category: 'Marketing',
        status: 'Published',
        content: `In a world flooded with AI-generated noise, high-quality, human-led content is becoming more valuable than ever. To build brand authority, you must provide your audience with something truly unique and valuable.

        1. Identifying Your Pillar Content
        Pillar content is long-form, comprehensive content that covers a major topic in depth. By creating "ultimate guides" or deep-dive articles, you establish yourself as an expert in your field.

        2. Quality Over Quantity
        It's better to publish one incredible piece of content per month than four mediocre ones per week. Modern algorithms prioritize "Helpful Content" that provides a positive user experience and original insights.

        3. Multi-Channel Content Repurposing
        A single high-quality blog post can be turned into a series of social media posts, a video script, an infographic, and an email newsletter. This ensures that your message reaches its maximum potential audience.

        4. Direct Engagement and Community Building
        Authority isn't just about talking AT your audience; it's about talking WITH them. Encouraging comments and engaging in discussions helps build a community around your brand.

        Building authority takes time, but the trust it builds creates a moat around your business that competitors cannot easily cross.`
    },
    {
        id: 'email-marketing-resurgence',
        title: 'The Resurgence of Email Marketing in the Privacy Era',
        excerpt: 'How to build an owned audience that you can reach without relying on changing social algorithms.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 25, 2024',
        author: 'Parth Patel',
        category: 'Email',
        status: 'Published',
        content: `As social media platforms become increasingly pay-to-play and data privacy laws tighten, email marketing is experiencing a massive resurgence. It remains the only channel where you truly own the relationship with your audience.

        1. Building a Quality Email List
        Never buy an email list. Instead, use lead magnets—like free E-books, checklists, or webinars—to attract users who are genuinely interested in what you have to offer.

        2. Segmentation and Personalization
        Sending the same email to everyone on your list is a waste of time. By segmenting your audience based on their behaviors and interests, you can send highly relevant content that actually gets clicked.

        3. Automation and Lifecycle Emails
        Welcome sequences, abandoned cart reminders, and post-purchase follow-ups are automated emails that can drive significant revenue without any manual work.

        4. Overcoming Deliverability Challenges
        Ensuring your emails actually reach the inbox requires maintaining a healthy sender reputation and following technical best practices like SPF/DKIM records.

        Email is the ultimate high-ROI channel because it allows for direct, personal communication with your most valuable customers.`
    },
    {
        id: 'video-marketing-dominance',
        title: 'Short-Form Video: The Key to Viral Growth in 2024',
        excerpt: 'Reels, TikToks, and Shorts—how to leverage vertical video to capture attention in seconds.',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 22, 2024',
        author: 'Parth Patel',
        category: 'SMO',
        status: 'Published',
        content: `The way we consume content has changed. Vertical, short-form video is now the dominant format on almost every major social platform. If you aren't utilizing video, you are invisible to a massive segment of your target audience.

        1. Hooking the Viewer in 3 Seconds
        In the world of scrolling, you have very little time to stop someone. Your video must start with a powerful visual or verbal hook that immediately answers "What's in it for me?"

        2. Storytelling in 60 Seconds
        You don't need a massive budget to tell a story. Authentic, raw content often performs better than highly produced ads. Show the person behind the brand and provide quick, actionable value.

        3. Understanding the Algorithm
        Engagement is everything. High watch time and shares tell the algorithm that your content is worth showing to more people. Utilize trending audio and captions to make your videos more accessible.

        4. Cross-Platform Strategy
        A single piece of video content can be posted as a Reel, a TikTok, and a YouTube Short. This maximizes your reach and allows you to test what resonates with different audiences.

        Short-form video is the fastest way to gain massive organic reach in 2024 and beyond.`
    },
    {
        id: 'e-commerce-conversion-hacks',
        title: '7 E-commerce Hacks to Boost Your Conversion Rate',
        excerpt: 'Simple design and psychological changes that can lead to a 20%+ increase in online sales.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 19, 2024',
        author: 'Parth Patel',
        category: 'CRO',
        status: 'Published',
        content: `Getting traffic to your online store is only half the battle. If visitors arrive but don't buy, your marketing spend is being wasted. Conversion Rate Optimization (CRO) is the art and science of turning browsers into buyers.

        1. Streamlining the Checkout Process
        Every extra step in your checkout process is an opportunity for a customer to leave. Offer guest checkout and multiple payment options like Apple Pay and Google Pay to make it as easy as possible.

        2. Utilizing Social Proof
        Customer reviews, user-generated content, and trust badges are essential for building trust. Seeing that others have had a positive experience makes new customers feel confident in their purchase.

        3. Creating a Sense of Urgency
        Limited-time offers or low-stock alerts can trigger the psychological "fear of missing out" (FOMO) and encourage immediate action.

        4. Mobile Optimization is Paramount
        More people shop on their phones than ever before. If your site is slow or hard to navigate on mobile, you are losing money every single day.

        Implementing these small but powerful changes can lead to a significant boost in your bottom line without needing to increase your traffic.`
    },
    {
        id: 'ai-tools-for-marketers',
        title: 'Top 10 AI Tools Every Digital Marketer Needs',
        excerpt: 'From content generation to design and automation, these tools will save you 20+ hours a week.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 15, 2024',
        author: 'Parth Patel',
        category: 'Tech',
        status: 'Published',
        content: `The AI revolution is here, and it's transforming the way marketing is done. Marketers who embrace these tools are becoming 10x more efficient and more creative.

        1. Content Generation (Gemini, ChatGPT)
        AI can help brainstorm ideas, draft outlines, and even write entire first drafts of blog posts and social captions.

        2. Design and Visuals (Midjourney, Canva Magic)
        Creating stunning visuals for your brand is now possible with simple text prompts. AI tools can help generate unique images and graphic designs in seconds.

        3. Data Analysis and Insights
        AI can process massive datasets to identify trends and patterns that a human might miss. This allows for more personalized and effective marketing strategies.

        4. Workflow Automation
        Tools like Zapier and Make allow you to connect different marketing tools and automate repetitive tasks, freeing up your time for high-level creative work.

        The goal of AI in marketing isn't to replace humans; it's to augment human capabilities and allow us to focus on what we do best.`
    },
    {
        id: 'b2b-marketing-linkedin',
        title: 'Mastering B2B Lead Generation on LinkedIn',
        excerpt: 'A blueprint for connecting with high-value decision makers and closing enterprise deals.',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200',
        date: 'Feb 12, 2024',
        author: 'Parth Patel',
        category: 'LinkedIn',
        status: 'Published',
        content: `LinkedIn is no longer just a place to host your resume; it is the most powerful B2B marketing platform on the planet. For those in the enterprise space, LinkedIn is where the decision makers live.

        1. Optimizing Your Personal Brand
        People buy from people, not companies. Your LinkedIn profile should be a landing page that clearly states who you help and how you help them.

        2. Strategic Content Posting
        Sharing insightful, value-driven content regularly establishes you as a thought leader in your industry. This builds the trust necessary for high-value B2B deals.

        3. Utilizing Sales Navigator
        LinkedIn's premium tool allows for incredibly precise targeting. You can find leads based on seniority, company size, and specific job titles, allowing for a highly targeted outreach strategy.

        4. Genuine Outreach and Relationship Building
        B2B marketing is about building long-term relationships. Stop sending spammy messages and start having genuine conversations. Focus on providing value before asking for anything in return.

        Mastering LinkedIn will give you a direct line to the most influential people in your industry, leading to bigger deals and more sustainable growth.`
    }
];

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        try {
            const savedPosts = localStorage.getItem('digital_blog_posts_v3');
            if (savedPosts) {
                const parsed = JSON.parse(savedPosts);

                if (!Array.isArray(parsed)) return initialPosts;

                const savedIds = new Set(parsed.map(p => p.id));
                const missingInitial = initialPosts.filter(p => !savedIds.has(p.id));
                return [...parsed, ...missingInitial];
            }
        } catch (err) {
            console.error('Failed to initialize blog posts:', err);
        }
        return initialPosts;
    });

    useEffect(() => {
        try {
            localStorage.setItem('digital_blog_posts_v3', JSON.stringify(posts));
        } catch (e) {
            console.error('LocalStorage save failed:', e);
            if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                // If quota exceeded, try to save without images for user posts as a fallback
                const safePosts = posts.map(p => ({
                    ...p,
                    image: p.image?.startsWith('data:image') ? null : p.image
                }));
                try {
                    localStorage.setItem('digital_blog_posts_v3', JSON.stringify(safePosts));
                } catch (innerError) {
                    console.error('Fallback save also failed:', innerError);
                }
            }
        }
    }, [posts]);

    const addPost = (post) => {
        setPosts(prev => [post, ...prev]);
    };

    const updatePost = (updatedPost) => {
        setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
    };

    const deletePost = (id) => {
        setPosts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <BlogContext.Provider value={{ posts, setPosts, addPost, updatePost, deletePost }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};
