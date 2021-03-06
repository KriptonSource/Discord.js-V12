# #1 | Alapok

### Leírás 
---
Ebben a részben megismerkedünk az alapvető dolgokkal és létrehozzuk a botunkat. Amit a kósolás végén el is indítunk.

<br />

### Lépések

---

<details>
  <summary>Tartalomjegyzék</summary>
  <ol>
    <li>
      <a href="#1-discord-bot-létrehozása-lásd-a-videóban">Discord Bot létrehozása</a>
    </li>
    <li>
      <a href="#2-visual-studio-code-letöltése-lásd-a-videóban">Visual Studio Code letöltése</a>
    </li>
    <li>
      <a href="#3-nodejs-letöltése-lásd-a-videóban">Node.js letöltése</a>
    </li>
    <li>
      <a href="#4-npm-letöltése">Npm letöltése</a>
    </li>
    <li>
      <a href="#5-discordjs-letöltése">Discord.JS letöltése</a>
    </li>
    <li>
      <a href="#6-kódolás">Kódolás</a>
    </li>
    <li>
      <a href="#7-bot-indítása">Bot indítása</a>
    </li>
  </ol>
</details>

   
---

#### 1. Discord Bot létrehozása *(lásd a videóban)* 
#### 2. Visual Studio Code letöltése *(lásd a videóban)* 
#### 3. Node.js letöltése *(lásd a videóban)*
#### 4. Npm letöltése:

```sh
npm install -g npm 
```

#### 5. Discord.JS letöltése:

```sh
npm i discord.js@12.5.3
```

#### 6. Kódolás:
- Először meghatározzuk mi az a Discord:

```js
const Discord = require('discord.js')
```

- Majd meghatározzuk a botunkat:

```js
const kispista = new Discord.Client()
```

- Majd a tokenünket:

```js
const token = 'te tokened'
```

- Ezután létrehozunk egy feladatot a botnak:
*(ha online lett, írja ki: **Elindultam!**)*
```js
kispista.on('ready', () => {
   console.log('Elindultam!')
})
```

- Majd megmondjuk a botnak, hogy a bejelentkezéshez használja a tokent:
```js
kispista.login(token)
```

A teljes kódot [ide](https://github.com/KriptonSource/Discord.js-V12/blob/main/%231%20%7C%20Alapok/index.js) kattintva éred el.

#### 7. Bot indítása: 

```sh
node .
```


