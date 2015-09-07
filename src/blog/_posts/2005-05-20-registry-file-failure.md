Registry file failure
===

Yesterday night, I mean, morning at about 1AM, I've experienced one of the frightening moments I've ever had.

Things happened pretty quickly as I close my Firefox, getting ready to shut down Windows and accidentally turn off the switch **before** Windows shut down completely! Oh no! I calmed myself down and expected that after rebooting, Windows will check the disk for errors automatically and all my viewed pages in my Firefox browser history cache will be gone, for sure. So, I boot the computer and let Windows spend some time to check for disk errors. It reported that no errors were found. Good. Then, I saw a blue screen, displaying:

<pre><samp>STOP: C0000218 (Registry File Failure)
The registry cannot load the hive (file):
\SystemRoot\System32\Config\SOFTWARE
or its log or alternate.
It is corrupt, absent, or not writable.</samp></pre>

Below this message showed that it began dumping memory chunks into disk with some numbers counting from 0 to 90. As the number reached 90, it rebooted. BIOS loaded and an error stating **hard disk detection failure** rendered on the screen! **Arrgghh!** Immediately, I press the power button to shut everything down. My heart beat vigorously. I couldn't breathe. It was late at night.

After few minutes, I try to control myself and boot up the computer. BIOS loaded and the error didn't appear anymore. **What a relief**. Unfortunately, the same blue screen appeared and rebooted automatically again. I tried booting to Safe Mode but to no avail. Since my machine is a tri-boot system, I tried booting to Windows 98 and it worked. From there, I could access the Windows XP partition, check out the files in the 'System32' folder, browse through the 'Config' sub-folder and found a file named 'SOFTWARE'. Instinctively, I find for the System Restore files located in the 'System Volume Information' folder, copy a file named '_REGISTRY_MACHINE_SOFTWARE', with the latest last modified date, to the 'Config' folder and replace the original 'SOFTWARE' file. Of course, I'm not that stupid to directly delete the original file but instead rename it to 'SOFTWARE.corrupt'.

System rebooted, the blue screen didn't appear and **my problem was fixed**! Wow! That was so easy! When I fire up Firefox, I discovered that my browser history log and cache were gone and my bookmarks got messed up. Thanks to the [Bookmark Backup](http://pikey.me.uk/mozilla/ "Pike's Mozilla Firefox Extensions") extension, I restored the last state of my bookmarks in just seconds. Cool.

I'm not very sure how this could happen but I feel much better and so relieved now. I hope this will not happen again, ever!