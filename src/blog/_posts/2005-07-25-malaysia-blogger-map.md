Malaysia Blogger Map
===

Few weeks ago, I've launched the [Malaysia Blogger Map](http://malaysiabloggers.com/showthread.php?t=556) web site. It is one of my experiments to test a very cool Flash-based mapping application called [worldKit](http://brainoff.com/worldkit/). If you've never heard of it, don't worry, it's not too late for you to check it out.

![Malaysia Blogger Map web site, displaying some points, or locations of plotted weblogs, in Penang on the worldKit-powered Flash-based Malaysia map](/blog/images/screenshots/web/malaysia_blogger_map_worldkit_flash_points_penang.jpg)

The site shows the whole map of Malaysia. Once loaded on the browser, some points will appear on the map with tooltips that show a weblog's title and description. If you click on the points or tooltips, it will bring you to that weblog's page. As some points get too *crowded* on the map, you may *zoom in* and see the landscape clearly via a smaller scale. Those weblogs are plotted on the map, following the exact coordinates provided by respective authors. Sound interesting, doesn't it?

Well, the site might look kind of easy to set up, but believe me, the *most interesting* part is actually **behind the scenes**. WorldKit is quite a lightweight application that is easy to be installed on almost any computing platform. However, the hardest part is to find a *good* map. Okay, I know, there are *hundreds* of sites providing maps out there but the problem is I also need to know the **exact latitudes and longitudes** of the *bounding box* of the map. In other words, it means the latitudes of the top and bottom crop, and longitudes of the left and right crop of the base map image. Unfortunately, not many maps, either online or in books, have such information.

So, there are three ways to acquire them.

- Try to search for *any* online mapping sites that possibly provide the map *and* the bounding box information. It's rare to find one, you see. Even if you found it, the generated map would be too small or low in quality. There are also maps that are too *bloated* with geological structures, rivers, mountains, roads, highways, hotels, airports, restaurants, tourist destinations, towns, cities and complicated text labels overlapping on one another. Besides, some maps are *copyrighted* and cannot be reproduced on other sites.

- Find for map guides or map-related geographic books available from book stores. Get a map and scan it to the computer. But wait the minute, the quality of the map might deteriorate due to the nature of different mediums. Unit conversion between points and pixels might be incorrect. For maps, accuracy is *very* important. If it shifts few pixels off, all coordinates will be rendered wrong. For large maps, some parts may need to be scanned one by one, then stitched back into the original form on the computer. Yet, copyright issues might surface too.

- Instead of finding for a base map of a specific area, maybe try download the **whole world map**! Later crop it to a desired area and calculate the bounding box information *manually*. It's a lot of work though.

![Eastern hemisphere Earth map satellite image, showing the land surface, shallow water and shaded topography](/blog/images/figures/maps/eastern_hemisphere_earth_map_satellite_image_land_surface_shallow_water_shaded_topography.jpg)

After some thinking, I decided to use the third way. From the [worldKit documentation](http://brainoff.com/worldkit/doc/) pages, there is a link to NASA's spectacular [Blue Marble](http://earthobservatory.nasa.gov/Newsroom/BlueMarble/ "a true-color 1km image of the Earth") satellite images. It seems to be the *one and only* site to provide **highly detailed whole Earth images** produced from satellite data. Even the worldKit package includes *smaller* versions of them. Practically speaking, downloading a map image is easy, but viewing one is another story. The image file I wanted to download is the **400.7Mb** [Eastern hemisphere Earth map](http://visibleearth.nasa.gov/view_rec.php?vev1id=11656 "Blue Marble: Land Surface, Shallow Water, and Shaded Topography"). It measures a whooping **21600×21600px** in dimension, equivalent to **more than 400 monitors** worth of screen space!

Since my dial-up connection is *bandwidth-challenged*, I asked some of my *broadband-connected* friends to download it. The first person I asked is Ching Yonghan of [Jsxblog](http://jsxblog.uni.cc/). Actually, he told me that he wants to do this blogger map, but somehow I'm faster than him, in terms of planning. He managed to download it in about 2 hours, open it in Photoshop, crop it and send to me via e-mail. Things gone smoothly at first, but later I found out that the crop values he gave me are wrong. Could it be a mistake somewhere?

Then, I asked Nicole, one of the youngest bloggers ever known in Malaysia. She downloaded it, but couldn't open it due to lack of memory. Weird. Finally, I got fed up and asked for help from yet another friend of mine, Ming Shern, who is also a [blogger](http://mingshern.blogs.friendster.com/ "Mingshern's Blog"). I decided to do the whole thing with my own fingers and directly went to his house. Once the image is successfully downloaded, I try to open it with [XNview](http://xnview.com/). It cannot work. I try Photoshop. It cannot work too. It's the same *stupid* memory problem again!

At that time, I start to crack my geek brain and thought of a way. By launching Adobe Photoshop's 'Preferences' window, I fiddle with the 'Scratch Disks' settings and carefully increase the memory usage percentage. Restart Photoshop and within few minutes, the **image loads!** Yeah!

Now is the time to do some *serious* calculations. According to [worldKit documentation](http://brainoff.com/worldkit/doc/), the formulas below can be used to determine the N/S/E/W values in degrees, assuming that the origin is in the upper left hand corner:

- North = ( 180 × (Height - TopCrop) ÷ Height ) - 90
- South = ( 180 × (Height - BottomCrop) ÷ Height ) - 90
- East = 180 - ( 360 × (Width - RightCrop) ÷ Width )
- West = 180 - ( 360 × (Width - LeftCrop) ÷ Width )

Height and Width refer to the original whole Earth image, **not** the cropped image. Instead of cropping it first then determining the values of the bounding box, I did it in a reversed way. To display the whole Malaysia on the map, I've determined such values:

- North = **8ºN**
- South = **0º** (equator)
- East = **120ºE**
- West = **99ºE**

These are round numbers, which I think *should* reduce error percentage. Using them, I'll have to calculate how many pixels should be cropped on the base map image, therefore the above formulas are *re-arranged*:

- TopCrop = Height - ( (North + 90) × Height ÷ 180 )
- BottomCrop = Height - ( (South + 90) × Height ÷ 180 )
- RightCrop = Width - ( (180 - East) × Width ÷ 360 )
- LeftCrop = Width - ( (180 - West) × Width ÷ 360)

![Earh map satellite image, displaying Malaysia as the focused region with crop values of its bounding box](/blog/images/figures/maps/earth_map_satellite_image_malaysia_region_bounding_box_crop_values.jpg)

The width and height of the Eastern hemisphere map image is **21600×21600px**, but for the *whole Earth* image including the Western hemisphere, it's supposed to be **43200×21600px**. This means the RightCrop and LeftCrop values will have to be deducted by 21600 pixels. As a result, the calculator shows these values:

- TopCrop = **9840 pixels**
- BottomCrop = **10800 pixels**
- RightCrop = 36000 - 21600 = **14400 pixels**
- LeftCrop = 33480 - 21600 = **11880 pixels**
- Width of cropped region = RightCrop - LeftCrop = 14400 - 11800 = **2520 pixels**
- Height of cropped region = BottomCrop - TopCrop = 10800 - 9840 = **960 pixels**

Okay, no more Mathematics! It's Photoshop time again. Go to 'View' and click on 'New Guide...' to place four horizontal and vertical guides *around* the area, based on the values above. Use the 'Crop Tool' and drag near the area as it snaps to the guides. Commit the operation, save it as a new file and done!

![two Malaysia map satellite images, one is the default, the other is modified from its contrast, brightness and colours](/blog/images/figures/maps/malaysia_map_satellite_image_contrast_brightness_colours_modified.jpg)

The map base image is quite fine. The more I look at it, the more I feel that the colours are too *dark*, somehow. I also have to do some modification to make Malaysia *stands out better* from the crowd. A little colour fading, enhanced contrast, increased brightness, and changes to the sea colour make it look absolutely perfect.

After the map is ready, I start to draw my plans out and do some actions. I prepared a simple XHTML web page to display the Flash map, with instructions for people on how to add weblogs to it. To be honest, I'm not a Flash fan myself, because I support open standards such as SVG more than proprietary ones. If you are a Flash enthusiast, I bet you would know that embedding Flash into a web page will produce invalid markup due to the presence of the `embed` element followed by browser compatibility issues. Heck, **no more worries** now, especially with Ian Hickson's [Embedding Flash without <embed>](http://ln.hixie.ch/?start=1081798064&count=1) solution. It's valid, easy and works well in modern browsers. Cool!

![Malaysia Blogger Map logo, showing a smiley and Earth, recycled from the Malaysia Blogger Forums logo design candidate](/blog/images/artwork/logos/malaysia_blogger_map_smiley_earth.png)

Besides that, I also *recycle* my previous logo design candidate for [Malaysia Bloggers Forum](http://malaysiabloggers.com/) and tweak it a bit for this site. As for the required XML feed in worldKit, I did some quick PHP scripting that can let me add blogs from a form interface and generate an Atom feed file automatically. Since the map is too large to be displayed on normal screen resolutions, I resample it down to **756×288px** and run the large one through [Zoomifyer](http://zoomify.com/ "Zoomify") which *spits* out **56 zoom-and-pan images** under a new directory. The integration between worldKit and Zoomify will process images faster and save precious bandwidth.

To my surprise, the launch of Malaysia Blogger Map caught few attention. Currently more than 10 weblogs have been plotted, mostly on West Malaysia. I've learnt three *important* things from this:

- Some people actually don't know their exact coordinates. Most mapping sites on the web don't provide complete details of the Malaysian landscape, making it hard for them to find their spot. Even the ones I've listed on the page, such as [Multimap](http://multimap.com/), [Maporama](http://maporama.com/) and [Geocoder](http://brainoff.com/geocoder/), aren't very *user-friendly*, unfortunately.

- In certain cases, people might doubt *where* their blog should be plotted. Let's say a guy is born in Penang, but his hometown is in Johor and he's currently studying in Kuala Lumpur, so *which* coordinates should he use? And what if he's not in Malaysia right now?

- There are also a minority of people who don't understand geography, specifically how latitudes and longitudes work. If you see that the points are *overcrowded* in the map, it doesn't mean that they overlap on each other. The points are in fixed size. When you zoom in, you'll see clearly the points start to split apart, positioning itself based on their coordinates. So, if you want to plot your blog in Penang, don't say that your coordinates are the same as mine, okay?

Anyway, this is only an experiment, or yet another project like [UK Blogger Map](http://phiwilson.org/ukbloggermap/) and [Taiwan Blogger Map](http://sanwangx.brain-c.com/geo/). If you are a Malaysian blogger and would like to plot your weblog, just send me the details and I'll do the rest. No sweat.

**Malaysia <span lang="ms" title="can">boleh</span>!**