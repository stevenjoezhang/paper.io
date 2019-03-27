# Paper.IO

This is a clone of the original Paper-IO released by Voodoo, except for one aspect. This will attempt to implement a multi-player aspect of the game (like a real IO game). Currently this has a playground at this [link](https://thekidofarcrania.github.io/BlocklyIO). It's a demo version of what to come. Hopefully by that time, the necessary server infrastructure could be obtained.

This is just a fun side-project for me. If you would want to use this code, it would be nice to let me know.

## Install

```bash
git clone https://github.com/stevenjoezhang/paper.io.git
cd paper.io
npm install
```

## Running

After cloning this repository, run the follow commands to install dependencies and set up server. Enjoy!

```bash
npm start
```

You can configure the game by editing `config.json`.

**WARNING: Remember to BUILD AGAIN after editing ANY FILE, INCLUDE `config.json`.**

## Build

```bash
npm run build
```

## Bots

Set `bots` in `config.json` to a non-zero value, or execute the command below:

```bash
node paper-io-bot.js ws://localhost:8080
#or
node bot.js ws://localhost:8080
```

## Roadmap & TODO List

- [x] 统一配置文件
- [x] 玩家观战模式
- [ ] 更多游戏玩法
- [ ] 多个游戏房间
- [ ] 加快渲染速度
- [ ] 优化胜负判定

## License

This is licensed under MIT. As such, please provide due credit and link back to this repository if possible.

Original Repo:

- Author: theKidOfArcrania
- Link: https://github.com/theKidOfArcrania/BlocklyIO
