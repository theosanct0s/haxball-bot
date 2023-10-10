<h1 align="center">⚽ HaxBall Bot ⚽</h1>

<p align="center">
  <b>A multilingual bot to organize your room 100% automatically</b></br>
  <sub>This project is from my room. I'm releasing to everyone 🙂<sub>
</p>

|Table of contents|
|-----------------|
|[What is included in the bot?](https://github.com/theosanct0s/haxball-bot#-What-is-included?)
|[It's coming](https://github.com/theosanct0s/haxball-bot#-It's-coming...) |
|[Getting Started](https://github.com/theosanct0s/haxball-bot#-Getting-Started)  |
|[Translations](https://github.com/theosanct0s/haxball-bot#current-translations) |

## ➤ What is included?

This advanced bot has several features some of them are:

<details>
<summary>📖 Table of Features (click here)</summary>
<br />

## ✨ Features

- ✅ Start of match notice
  - When the match starts, the bot notifies you in the chat.
- ✅ Goal announcements
  - Every goal (both teams) will be notified in the chat, with the author and the speed of the shot.
- ✅ End of game announcements
  - Notifies you when the match is over, with advanced statistics
- ✅ Uniforms to make you feel like a real player
- ✅ Reaction system with emojis, when the player scores a goal
- ✅ Admin system
- ✅ Ban system
  
and much more...
</details>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ [10/10/2023] • Changelog
- 🛠️ Bug's fixed
- ⚡ Final version released
- 🌟 New goal ranking system
- 🌟 New emoji system
  - When you score a goal or own goal, you will have an emoji on your avatar for a set amount of time.
- 🌟 Mocking messages when an own goal is scored
- 🌟 New phrases
  - for: goal, own goal and assists
- 🌟 Game overtime system
  - gives an extra minute if the teams are tied
- 🌟 New uniform commands
- 🌟 New README
  - Just a new README :)
- 🌟 The bot now supports new languages: Portuguese and English!
 
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents) 
  
## ➤ It's coming...
- ⏳ Betting system
- ⏳ MVP system for the best player on the field
- ⏳ Position system for players
- ⏳ Pause system for team captains
- ⏳ Adding localStorage
- ⏳ Register / login system
  - Being able to use MongoDB or not
- ⏳ Slots reserved for VIPs/Staff
   
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents) 
  
## ➤ Getting Started

If you are interested in using this bot, you need to know a few things!

- The room with the bot can be created from the following integration [Headless Host](https://github.com/haxball/haxball-issues/wiki/Headless-Host), just open a normal browser page at this link [Headless Host Site](https://html5.haxball.com/headless) and put the bot code in the console of that page.
 
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents) 
  
## ➤ Local machine • [Tutorial (SOON)](https://www.youtube.com)

1. Open the [Haxball Headless Page](https://www.haxball.com/headless)
2. Open devtools using F12 and select the console
3. Copy ALL your code from `haxbot-EN.js` or `haxbot-PTBR.js` and paste in console
4. For the room to finish opening, complete the captcha
5. The room is now open, copy or enter the link that the page gives you (You need to keep the website open for the room to stay open)
 
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ How to become an administrator in the room

> To log in as admin, you need to use the command "!loginadm (password)"

### Edit the admin command in the code

Both the password and the admin command are editable, use ctrl + f in your code editor and search for `!loginadm`

```js
else if (["!loginadm"].includes(message[0].toLowerCase())) {
  if (message[1] == adminPassword) {
      room.setPlayerAdmin(player.id, true);
      var stats;
      localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
      if (stats[Ss.RL] != "master") {
          stats[Ss.RL] = "master";
          room.sendAnnouncement(player.name + " logged in as Administrator!", null, 0xFF7900, 2);
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }
  }
}
```

### Edit admin password

Use ctrl + f in your code editor and search for `adminPassword`

```js
var adminPassword = 4002;
```
 
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents) 
  
Remembering that you can use and abuse this bot as you want, I'm posting it here especially for people who want a template like this, or people who don't know how to program and want to create a room. So enjoy! 🥰

If you enjoy the bot, consider giving it a star to show your appreciation ❤️

## Current translations
* English
* Português do Brasil

Want to help me add more translations to the bot? If yes, open a [discussion](https://github.com/theosanct0s/haxball-bot/discussions). I would be very grateful for your help <3

### 🗳️ Feedback
> If you find any bugs, please open an issue in this repository with the details about.
