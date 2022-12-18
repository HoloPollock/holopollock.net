# Holopollock.net

This is my link tree made with <https://github.com/HoloPollock/Simple-Linktree>

## A customizable linktree link site

To customize the site you only need to edit 2 Files `globalVars.ts` and `Links.astro`
global vars contains metadata for the site such as your name and pronouns, your socials, and the colours you want for the site.

### Photos

to have a photo on the site upload at least a jpg to the `/assets/img` folder but I support also having `avif`, `JPEG 2000`, and `webp` make sure they all have the same name then in globalVars set `MetaData.ImageName` to the name you gave it.

### Links

To add Links to your site edit `Links.astro` to Add a clickable Link use

```tsx
<Card link="YOUR LINK">TEXT TO SHOW</Card>
```

Then if you just want a divider between your links use

```tsx
<Divider>TEXT TO SHOW</DIVIDER>
```
