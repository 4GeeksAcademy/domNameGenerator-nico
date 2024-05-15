let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      let domain = pronoun[i] + adj[x] + noun[i] + ".com";
      domainNames.push(domain);
    }
  }
}
for (let f = 0; f < domainNames.length; f++) {
  console.log(domainNames[f]);
}
