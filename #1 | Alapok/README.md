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
      <a href="#rólunk">👨 Rólunk</a>
      <ul>
        <li><a href="#kik-vagyunk-mi">Kik vagyunk mi?</a></li>
        <li><a href="#kapcsolat">Kapcsolat</a></li>
        <li><a href="#programnyelvek-és-eszközök">Programnyelvek és Eszközök</a></li>
      </ul>
    </li>
    <li>
      <a href="#-legutóbbi-youtube-videók">📺 Legutóbbi YouTube Videók</a>
    </li>
    <li>
      <a href="#%EF%B8%8F-youtube-videó-sourcecodes">🖥️ YouTube Videó SourceCodes</a>
    </li>
  </ol>
</details>

   
---

#### 1. Discord Bot létrehozása *(lásd a videóban)* 
#### 2. Node.js letöltése *(lásd a videóban)*
#### 3. Npm letöltése:

```sh
npm install -g npm 
```

#### 4. Discord.JS letöltése:

```sh
npm i discord.js@12.5.3
```

#### 5. Kódolás:
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

#### 6. Bot indítása: 

```sh
node .
```


