

BlockEvents.broken(event => {
  if (event.block.hasTag('c:crops')) {
    if (event.player.isPlayer()) {
      event.block.popExperience(Math.floor(Math.random() * 4) + 1);
    }
  }
});


PlayerEvents.respawned(event => {
    let xp = event.player.xpLevels;
    if(xp >= 5) {
      event.player.setExperienceLevels(Math.max(Math.floor(xp/2,5)));
    }  
})


//Tier 1 (Inferium): Basic tier, used to start the mod.
//Tier 2 (Prudentium): Upgraded from Inferium, used for faster growth and better gear.
//Tier 3 (Tertium/Intermedium): Middle-tier, offering higher yield.
//Tier 4 (Imperium): High-tier, used for more advanced resources.
//Tier 5 (Supremium): Highest tier, provides maximum benefits and powerful tools. 