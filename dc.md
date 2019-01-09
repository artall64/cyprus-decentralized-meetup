# Different Tastes of Ethereum Plasma 
### ARTEM VOROBEV

---
# About Me
- Developing Software for 12+ Years
 - Team Lead at BANKEX Foundation
- Blockchain developer

# Work On
- Ethereum Plasma
- BUTTON Wallet
---
# BANKEX Foundation 
- R&D Team, Plasma :microscope:
-  Web3Swift:iphone: 
-  Educational courses & Hackathons 
- Open Source :+1:

# BUTTON Wallet 
- Crypto <b>wallet</b> right <b>inside Telegram Chat</b>, private keys are stored in QR code on the client side, supports <b>BTC, LTC, BTH, ETH, ETC, Waves</b>
- :fire: Russians hackers startup from Silicon Valley :fire: that won 10 hackathons :trophy: last year including ETH 
- 80K Users, 500K USD Investment from VC
---

# 20$ for the best plasma related question

<p align="center">
  <img src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fbuttonwallet.com%2F&chs=180x180&choe=UTF-8&chld=L|2' rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a>
</p>
<p align="center">buttonwallet.com</p>
<p align="center">https://t.me/buttonwalletbot</p>
<p align="center">@buttonwalletbot</p>

---
# Let's go back to Ethereum Plasma
- Solves Ethereum scalability problem (~15 TPS)
- <b>Level 2</b> scaling solution
- <b>It's not a payment channel</b> like Lightning network or Raiden 
- <b>Side chain with centralized block production*</b>
- Whiteparer Joseph Poon & Vitalik Buterin https://plasma.io/plasma.pdf August 11, 2017

---

# Important to understand
- Plasma in general is a <b>protocol</b> i.e. concept that at research state right now
- All the ideas live at the ethreserch.ch research. The whitepaper is not enough to get a grasp on the plasma. Some places are obsolete
# R&D
- A lot of plasma implementation was released last year, and much more are coming
- A lot of R&D done by [plasma implementers group](https://www.youtube.com/watch?v=_DPftmg7zR8) and ethereum developers community

---

# Key components
- Plasma Smart Contract<br>`Bridge between main net and side-chain. Gives security guarantees for the users`<br>
- Plasma Operator <br>`Centralized block producer that assemble blocks side chain with a speed of lite and publish block headers to the Smart Contract.`
- Client app & Plasma Validator <br>`Deposits, transfers, exits and withdraw on plasma side-chain. As validator constantly stay online and monitor side chain blocks, ready to start exit if the operator makes a double spend, block withholding by any reason.`
<br/>

---
# What plasma can do
- Speedup Ethereum to the speed of light or at least 50 - 1000 times
- Tremendously reduce a transaction price ~0.0001$
- Support fungible ERC20 and non-fungible ERC721 deposits and exchange
- Potentially suites for any Blockchain with turning complete smart contracts
- Potentially support smart contracts inside of side-chain 
---

# With one clarification - it depends on plasma
- Speedup Ethereum to to speed of light or at least 50 - 1000 times <b style="color:red">*depends on plasma design*</b>
- Tremendously reduce a transaction price ~0.0001$ <b style="color:red">*depends on plasma design*</b>
- Support fungiable ERC20 and non-fungiable ERC721 deposits and exchange <b style="color:red">*depends on plasma  design*</b>
- Potentially suites for any Blockchaint with turing compleat smart contracts <b style="color:red">*depends on plasma  design*</b>

---
<p align="center"><img src='https://imgflip.com/s/meme/Jackie-Chan-WTF.jpg' rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a></p>

---
<p align="center">Plasma World Map</p>
<p align="center"><img src='https://cdn-images-1.medium.com/max/2600/1*U1QLxa3ltkYnd7B_BI2Tow.png' rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a></p>

###### *[https://medium.com/onther-tech/plasma-world-map-ba8810276bf2](https://medium.com/onther-tech/plasma-world-map-ba8810276bf2)*

---
<div style="display:flex">
<p align="left"><img src='https://imgflip.com/s/meme/Jackie-Chan-WTF.jpg' style="height: 300px;
  width: 350px;"rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a></p>
  <p align="center"><img src='https://imgflip.com/s/meme/Jackie-Chan-WTF.jpg' style="height: 300px;
  width: 350px;"rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a></p>
  <p align="right"><img src='https://imgflip.com/s/meme/Jackie-Chan-WTF.jpg' style="height: 300px;
  width: 350px;"rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a></p>
</div>

---
# UTXO vs Account Based

Note: `UTXO model - like bitcoin.`
Note: `Account based model - like ethereum. `
- UTXO based 
    - Merkle Trees 
    - Growing history problem
    - Someone needs to stay online and watch on what operator do
- Account based
    - Requires zero-knowledge proofs to change sate
    - Requires extensive computation on the operator
    - Requires trusted setup
    - Consume more space in the block on the main net

---
# UTXO based
- <b>Merkle Trees</b> `operator publish root hash on the main net`
- <b>Growing history problem</b> `Validator should keep full history, to win exit game. Since speed is high history growing tremendously. Can be solved by history  compression based on RSA accumulators or zkSNARK/zkSTARK.`
 - <b>Some one need to stay online</b> `and checks what operator publish, to trigger own exits and challenge exits of other participants`

---
# Account based, e.g. rollup
- <b>Requires zero-knowledge proofs to change sate</b> `Smart contract accepts only valid 'state transition' by checking proof that operator publish. The operator can't publish wrong blocks. Checking is cheap and can be done on smart contract`
- <b>Requires extensive computation on operator </b>`It's hard to generate zero-knowledge proof`
- <b>Requires trusted setup</b> `(only for zkSNARKS). Ethereum can provide required features.`
- <b>Consume more space in the block on the mainnet</b> `Operator also publishes transaction fingerprint.`
---

# Plasma state of the art:
- More Viable Plasma
- Plasma Cash
- Plasma Prime, e.g. Plasma Cashflow with history reduction on RSA accumulators
- Plasma Cashflow with history reduction on zkSNARKS
- Account based zkSNARKs Plasma
---

# Plasma state of the art:
- More Viable Plasma :no_entry_sign:
- Plasma Cash :no_entry_sign:
- Plasma Prime, e.g. Plasma Cashflow with history reduction on RSA accumulators :snowflake:
- Plasma Cashflow with history reduction on zkSNARKS :thumbsup:
- Account based zkSNARKs Plasma :thumbsup: :microscope:
---

### More Viable Plasma
- Fix minimal viable plasma vulnerabilities :thumbsup:
- 2 weeks time for an exit,  requires liquidity market to fix that :thumbsdown:
<br>
### :no_entry_sign: Showstopper:
History is growing to fast, in one year it's not possible to store it on the server
- It requires ~1 Kb per transaction.
- 100k transaction/second ~ 2 Petabyte per year

---
### Plasma Cash
- Easy to implement :thumbsup:
- Doesn't have minimal viable plasma vulnerability :thumbsup:
- Only non-fungible assets e.g ERC721 tokens :thumbsdown:
<br>
#### :no_entry_sign: Showstopper:
History is growing too fast; it's not possible to store the history on the light client, e.g. mobile client
- 2.5 Gb for a single coin - over the year [history reduction on ethresearch](https://ethresear.ch/t/rsa-accumulators-for-plasma-cash-history-reduction/3739)
- 20 Gb for the 8 coins


---
### Plasma Prime - Cashflow with history reduction using RSA Accumulators
- Slices instead of unique coins(plasma cash), similar to plasma debit
- End-user needs to observe only slices that he owns
- The introduced idea of history compression by generation proof of exclusion of slice to a range of blocks `1) Assign a prime number to slice 2) When ever slice modification assign a new prime number to slice and put it into the accumulator.`
- Proof of exclusion requires less space than full history
- Requires to expensive computations `After implementing a proof of concept, BANKEX Foundation research team find out that existing RSA Accumulator is a bottleneck that we can't pass at the moment.` :snowflake:

---
### Plasma Cashflow with history reduction using zkSNARKS
- The same idea as Plasma Prime, we fix a problem, by replacing RSA Accumulator with zkSNARK proof of exclusion
- Working solution that fixes the problem of extensively growing history. :thumbsup:
- The user should only store the compressed history of his own coins. About 1 - 10 Mb for the small amount of Ether. :thumbsup:
- Doesn't have known critical issues that previous designs had :thumbsup:
- All the components are known, key research has been completed [[1]((https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438)), [2](https://ethresear.ch/t/plasma-prime-design-proposal/4222/9), [3](https://ethresear.ch/t/question-for-cryptographers-snark-friendly-signature-protocol/4645)] :thumbsup:
  
Proof of concept designed on the ETH Singapore by BANKEX Foundation ([Github](https://github.com/BANKEX/plasma-research))

---

### Account based zkSNARKs Plasma e.g rollup
- Verifiable computation and account-based model can potentially bring features that other plasma can't, e.g. order book for the exchange :thumbsup:
- No need to stay online to validate blocks :thumbsup:
- Requires a lot of Gas to publish blocks :thumbsdown:
- About 20 TPS :fire: on a laptop ~300 - 1500 TPS on cluster :thumbsdown:

Proof of concept is implemented by barryWhiteHat ([Github](https://github.com/barryWhiteHat/roll_up))
6th of January 2019 alpha version of Ignis Wallet published on the testnet by [Matter.Inc](https://thematter.io/) ([Wallet on testnet](https://ignis.thematter.io/#/login))

---
# Thanks
<img src='https://imgflip.com//s/meme/Chuck-Norris-Approves.jpg' rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a>

Chuck likes Plasma, 
But he doesn't need it to speed up Ethereum

---
## Questions
BUTTON Wallet with 20$ in ETH for the best question. 
<img src='https://artall64.github.io/cyprus-decentralized-meetup/question-reward-qr.png' rel='nofollow' alt='qr code'><a href='http://www.qrcode-generator.de' border='0' style='cursor:default'  rel='nofollow'></a>
Take a picture of QR, than import it to @buttonwalletbot in telegram

---
<p align="center">That presentaion on the Github</p>
<p align="center"><img src='https://artall64.github.io/cyprus-decentralized-meetup/github-link.png' alt='qr code'></p>

<p align="center">Done with <a href="https://yhatt.github.io/marp/">Marp</a>, amazing markdown to presentation  writer</p>
