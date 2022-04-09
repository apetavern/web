::: header

# Welcome to Ape Tavern

Our first blog has a welcome to our organization, and covers the s&box games we have started working on.

:::

::: post

### Ape Tavern
#### by [Trundler](/team)

Welcome to the first Ape Tavern developer update! I started this group a few months ago in anticipation of the release of s&box - I wanted to bring together quality, like-minded developers and artists who are passionate about games. Since our inception, we have grown to a [team of 8](/team). We made [Frost Fight](https://github.com/apetavern/sbox-frostfight) in 3 days for the Eagle One Christmas Game Jam, and now are working on multiple games for s&box, including [FortWars](https://github.com/apetavern/sbox-fortwars). While we work, we love to have regular playtests to bring the community together, and get feedback on the direction of our games. Feel free to join our [Discord](https://discord.gg/g4JczwdCcN) to join in, follow our development, or just chat about s&box and game development.

![apetavern-logo](/images/logo/white/full.svg)

While we are currently a small, tight knit group, we are always accepting applications for new members. We are looking for talented artists and animators in particular. If you want to apply, you can follow [this link](https://forms.gle/z8NaRN2NRNWLXuiTA). Currently, all our games are open source. Any member of Ape Tavern can propose a project and recruit developers to work on it with them, meaning you don't need to contribute to games you aren't interested in.

:::

::: post

### Shiny Website
#### by [Trundler](/team)

![apetavern-website](/images/blogs/welcome/website.png)

Alex and I put together this website as a welcome to Ape Tavern. Alex did most of the styling before he dropped on me the fact that he does not like Tailwind. After playing around with it, I have begun to realize that it doesn't make much sense for this type of website, so we may switch it out before long. I also created a low-maintenance blog, which you are currently reading. It uses markdown for the posts, making it easy to format, and adding a new post is as simple as committing a new markdown file. As someone who works with cloud technologies on a regular basis, I felt compelled to setup this app to be containerized, so deploying it will always be simple and quick. It is over-engineered for what is essentially a static website, but we may integrate this app with our games in the future, meaning it will be easy to expand.

:::

::: post

### Grubs
#### by [Trundler](/team)

When I pitched the idea of "Worms in s&box" to the original team, we thought it was a great project to start out with. We (or I) may have been overestimating our abilities at the time. I have nearly no experience in game development, and some of the features we wanted for Grubs were rather technically challenging, and our interests moved on as terrain was being worked on. We will revisit Grubs in the future, along with a complete re-write, but for the time being, Grubs is on hold while we pursue other game ideas.

![worms-menu](/images/blogs/welcome/worms.jpg)

Above is a part of a menu concept that I worked on for Grubs. ShadowBrain worked on the background scene (and created Grub Terry), and Alex helped with some touchups. A worms clone has been an idea I've wanted to create for a long time, so I look forward to revisting Grubs in the future when our team has matured.

:::

::: post

### Fortwars Improvements
#### by [Alex](/team)

This month I also worked on a load of changes and fixes for Fortwars, the most notable of these being gunplay & balance improvements as well as several nice new UI bits.

For gunplay, I was looking through the Fortwars weapon code when I'd noticed that spread was only being done on client - which meant that your shots weren't being predicted properly, often leading to a lot of player confusion (especially considering a lot of weapons, like the shotgun, have high spread values). I quickly fixed this and synced it up - now everything works perfectly, and guns feel so much better.

Here's what the guns did before:

@[youtube](https://youtu.be/HeSqsjzG1yU)

Here's what they do now:

@[youtube](https://youtu.be/JOQaQCSRqPw)

As for UI, I also took some of the Hover scoreboard and re-purposed it for Fortwars (both games are CTF-based, making it a pretty easy task). I made some tweaks and adjustments in order for it to better match our Fortwars UI style, as well as some functionality changes. Here's what it ended up looking like:

![Scoreboard screenshot](https://i.imgur.com/18znQ2p.png)

:::

::: post

### Fortwars Art Showcase
#### by [ShadowBrain](/team)

Here is a showcase of the art I have done for Fortwars.

@[youtube](https://youtu.be/r276UHWwi_Y)

Editors Note: Willow did the particles for Fortwars.

:::

::: post

### Eden
#### by [DevulTj](/team)

We’re starting on a new project, named Eden, in the attempt to make s&box’s first survival game. This is no small task, and it’s ambitious. Buckle in.

:::

::: post

### Eden Building
#### by [Alex](/team)

This month I worked on the initial building systems for Eden. It's based on snap points, which means we're not confined to a grid, but ideally (for gameplay and simplicity's sake) we'll have standardized sizes for each building piece. While there are some bugs, and things that might get changed further down the line, the building system is probably 90% of the way there and will hopefully be there when we get people testing our game.
Here's a video of me doing some building with an early version of the building system:

@[youtube](https://youtu.be/VRJlKGCrRnw)

:::

::: post

### Inventory, Containers
##### by [DevulTj](/team)

@[youtube](https://youtu.be/LonQ0k09_rQ)

I’ve been working on the core of Eden. The Inventory being a big part of it. We’ve got a pretty good set up now, with item types, ability to interact with items, and a lot of room for expansion. Anything you hold in your hand is an item and it’s all configured with s&box assets. Items also have durability, and it all just works! We also have world containers that you can interact and place items in.

@[youtube](https://youtu.be/ymBBB9ybMfY)

:::

::: post

### Crafting
##### by [DevulTj](/team)

![eden_crafting](/images/blogs/welcome/eden_crafting.png)

Eden is a survival game, so crafting is heavily encouraged and imperative to the gameplay loop. The UI is not final, but we have a pretty good foundation for crafting items and implementing them on top of the item system.

:::

::: post

### Resources
#### by [Matt944](/team)

I’ve been working on creating a base implementation for resources and various gatherable items using s&box assets for easy implementation of additional resources in the future.

![eden_resources](/images/blogs/welcome/e_res.png)
 
Resources needed to calculate their yield based on the current item you’re using to gather them - an axe for cutting wood should provide little to no yield if you’re trying to gather from a rock. I’ve also tied this nicely into DevulTj’s durability system and scaled the remaining durability deduction accordingly.
@[youtube](https://youtu.be/XwoJI2sEJrk)

We needed a way to convey the amount of each resource remaining within each node. We've decided to do this the same way as Rust - rocks for example should change shape as you’re gathering from them, all of this is specified within the s&box resource asset. We have plans to further enhance this with audio queues later down the line.
@[youtube](https://youtu.be/kjTAuxjbRuw)

:::

::: post

### Palm Trees
#### by [Pukes](/team)

![eden_palm_tree](/images/blogs/welcome/eden_palm_tree.png)

Got to work on the first basic palm tree for Eden, my organic sculpting isn’t my strongest area but I learned a lot from just this alone. I think over time I’ll end up replacing some of these models as we move forward and improve, but for now I think it's a good start :)

Some new models that will be coming out soon include some basic rocks/ores/vines and a fishing rod (because who doesn’t love a good fishing minigame).

:::

::: post

### Wrap-Up
#### by [Trundler](/team)

This was our first post, but we are excited to make more. We have ideas and amibitions, and are excited to see where s&box goes in the coming years. We hope to have more cool things to show off and play in the near future! Furthermore, we are hoping to create videos, including demos and tutorials, for s&box related content. Feel free to follow us on [Twitter](https://twitter.com/apetavern) or join our [Discord](https://discord.gg/g4JczwdCcN) to keep up to date with our work!

:::